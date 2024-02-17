import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import {
  findBorrowedItemStatus,
  getApprovedStatus,
  getInPossessionStatus,
  //   getCancelledStatus,
} from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import ReleaseSwitch from "./ReleaseSwitch";
import usePatch from "../../../../Hooks/usePatch";
import { patchItemReleaseEndpoint } from "../../../../API/Endpoints/manageBorrowTransaction";
import SuccessSnackbar from "../../../../Components/Snackbars/SuccessSnackbar";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import { useEffect } from "react";

const APPROVED_STATUS = getApprovedStatus();
const IN_POSSESSION = getInPossessionStatus();
const headers = [
  "ID",
  "Item",
  "Start Date",
  "End Date",
  "Status",
  // "Withheld",
  "Released",
];

const tableCellStyle = {
  padding: "12px 12px 12px 0",
  margin: 0,
  fontSize: "0.875rem",
  whiteSpace: "nowrap",
  //   color: neutralMain,
};

const ReleaseItemTable = ({ borrowedItems, transacId, setIsModalOpen }) => {
  const { neutralMain } = ColorVariables();
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const setBorrowedItemId = (index, id) =>
    setValue(`items[${index}].borrowed_item_id`, id, {
      shouldDirty: true,
    });

  const {
    isPatchSuccess,
    isPatchError,
    isPatchLoading,
    setIsPatchError,
    setIsPatchSuccess,
    handlePatch,
  } = usePatch();

  // HTTP Request
  const endpoint = (transacId) => patchItemReleaseEndpoint(transacId);
  const rawPatchBody = watch();

  const cleanedRequestBody = rawPatchBody?.items?.filter(
    (item) => item?.is_released && item?.borrowed_item_id
  );
  const formattedRequestBody = { items: cleanedRequestBody || [] };

  const submitReleaseForm = () => {
    if (formattedRequestBody?.items?.length > 0) {
      handlePatch(endpoint, transacId, formattedRequestBody);
      console.log("formatted body", formattedRequestBody);
      console.log("isPatchSuccess ", isPatchSuccess);
      // if (isPatchSuccess) {
      //   setIsModalOpen(false);
      // }
    } else {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isPatchSuccess) {
      // Delay for 2 seconds before closing the modal
      const delay = 2000; // 2 seconds in milliseconds
      const timerId = setTimeout(() => {
        setIsModalOpen(false);
        reset;
      }, delay);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [isPatchSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit(submitReleaseForm)}>
        <div style={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: "400px" }} aria-label="borrowed items table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={header}
                    style={{
                      padding: `0 ${
                        index === headers.length - 1 ? "0" : "12px"
                      } 12px 0`,
                      margin: 0,
                      fontSize: "0.875rem",
                      whiteSpace: "nowrap",
                      fontWeight: "700",
                      color: neutralMain,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {borrowedItems
                // Display only APPROVED_STATUS
                .filter(
                  (item) =>
                    item?.status === APPROVED_STATUS ||
                    item?.status === IN_POSSESSION
                )
                .map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ ...tableCellStyle, color: neutralMain }}
                    >
                      {item?.apc_item_id}
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      style={tableCellStyle}
                    >
                      {item?.model_name}
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      style={tableCellStyle}
                    >
                      {convertDateForHumanConsumption(item?.start_date)}
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      style={tableCellStyle}
                    >
                      {convertDateForHumanConsumption(item?.due_date)}
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      style={tableCellStyle}
                    >
                      {
                        <Chip
                          label={findBorrowedItemStatus(item?.status)?.status}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      }
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      style={tableCellStyle}
                    >
                      <Controller
                        name={`items[${index}].is_released`}
                        control={control}
                        defaultValue={item?.status === IN_POSSESSION}
                        render={({ field }) => (
                          <ReleaseSwitch
                            isDisabled={item?.status === IN_POSSESSION}
                            isChecked={field.value}
                            onChange={() => {
                              setBorrowedItemId(index, item?.id);
                              console.log(
                                "Before field.onChange:",
                                field.value
                              );
                              field.onChange(!field.value);
                              console.log("After field.onChange:", field.value);
                            }}
                          />
                        )}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <Button
            color="error"
            onClick={() => {
              setIsModalOpen(false);
              reset();
            }}
          >
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              Cancel
            </p>
          </Button>
          <Button disabled={isPatchLoading} type="submit" color="success">
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.875rem",
              }}
            >
              {isPatchLoading ? "Loading..." : "Release Items"}
            </p>
          </Button>
        </div>
      </form>
      <SuccessSnackbar
        isSuccess={isPatchSuccess}
        setIsSuccess={setIsPatchSuccess}
      />
      <ErrorSnackbar error={isPatchError} setError={setIsPatchError} />
    </>
  );
};
ReleaseItemTable.propTypes = {
  transacId: PropTypes.string.isRequired,
  borrowedItems: PropTypes.array.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
export default ReleaseItemTable;
