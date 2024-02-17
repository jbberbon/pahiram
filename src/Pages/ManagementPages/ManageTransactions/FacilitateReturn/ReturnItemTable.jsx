import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import {
  findBorrowedItemStatus,
  getApprovedStatus,
  getInPossessionStatus,
  // getReturnedBorrowedItemStatus,
  //   getCancelledStatus,
} from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import usePatch from "../../../../Hooks/usePatch";
import {
  patchItemReleaseEndpoint,
  patchItemReturnEndpoint,
} from "../../../../API/Endpoints/manageBorrowTransaction";
import SuccessSnackbar from "../../../../Components/Snackbars/SuccessSnackbar";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import { useEffect } from "react";
import { FACILITATE_RETURN_STATUSES } from "../../../../Utils/Constants/BackendConstants/FACILITATE_RETURN_STATUSES";

const APPROVED_STATUS = getApprovedStatus();
const IN_POSSESSION = getInPossessionStatus();
// const RETURNED = getReturnedBorrowedItemStatus();
const PENDING_RETURN = "Pending Return";

const headers = [
  "ID",
  "Item",
  "Start Date",
  "End Date",
  "Status",
  "Penalty",
  "Remarks",
];

let tableCellStyle = {
  padding: "12px 12px 12px 0",
  margin: 0,
  fontSize: "0.875rem",
  whiteSpace: "nowrap",
};

const ReturnItemTable = ({ borrowedItems, transacId, setIsModalOpen }) => {
  const { neutralMain } = ColorVariables();
  tableCellStyle = { ...tableCellStyle, color: neutralMain };
  const inputProps = {
    component: "th",
    scope: "row",
    style: tableCellStyle,
  };

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
  const endpoint = (transacId) => patchItemReturnEndpoint(transacId);
  const rawPatchBody = watch();

  const cleanedRequestBody = rawPatchBody?.items
    ?.filter(
      (item) => item?.item_status !== PENDING_RETURN && item?.borrowed_item_id
    )
    .map((item) => {
      // Create a new object and filter out falsy, undefined, null, and empty string properties
      const cleanedItem = {};
      for (const [key, value] of Object.entries(item || {})) {
        if (
          value !== undefined &&
          value !== null &&
          value !== 0 &&
          value !== ""
        ) {
          cleanedItem[key] = value;
        }
      }
      return cleanedItem;
    });
  const formattedRequestBody = { items: cleanedRequestBody || [] };

  const submitReleaseForm = () => {
    if (formattedRequestBody?.items?.length > 0) {
      console.log("formatted body", formattedRequestBody);
      handlePatch(endpoint, transacId, formattedRequestBody);
    } else {
      setIsModalOpen(false);
      console.log(rawPatchBody);
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
                    <TableCell {...inputProps}>{item?.apc_item_id}</TableCell>

                    <TableCell {...inputProps}>{item?.model_name}</TableCell>

                    <TableCell {...inputProps}>
                      {convertDateForHumanConsumption(item?.start_date)}
                    </TableCell>

                    <TableCell {...inputProps}>
                      {convertDateForHumanConsumption(item?.due_date)}
                    </TableCell>

                    <TableCell {...inputProps}>
                      <Controller
                        name={`items[${index}].item_status`}
                        defaultValue={PENDING_RETURN}
                        control={control}
                        render={({ field }) => (
                          <Select
                            labelId=""
                            id=""
                            value={field.value || PENDING_RETURN}
                            onChange={(e) => {
                              field.onChange(e);
                              setBorrowedItemId(index, item?.id);
                            }}
                            variant="standard"
                            // disabled
                            fullWidth
                          >
                            {FACILITATE_RETURN_STATUSES.map((status) => (
                              <MenuItem key={status} value={status}>
                                {findBorrowedItemStatus(status)?.status ||
                                  status}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      />
                    </TableCell>

                    <TableCell {...inputProps}>
                      <Controller
                        name={`items[${index}].item_penalty`}
                        defaultValue={""}
                        control={control}
                        rules={{
                          min: {
                            value: 0,
                            message: "Input positive number",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            type="number"
                            variant="standard"
                            error={Boolean(fieldState?.error)}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                              style: { fontSize: 14 }, // Set the font size to 14
                              startAdornment: (
                                <InputAdornment position="start">
                                  ₱
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              width: "70px",
                              "& input": {
                                padding: 0, // Remove the input base padding
                              },
                            }}
                          />
                        )}
                      />
                    </TableCell>

                    <TableCell {...inputProps}>
                      <Controller
                        name={`items[${index}].item_remarks`}
                        defaultValue={""}
                        control={control}
                        rules={{
                          minLength: {
                            value: 5,
                            message: "Purpose should be at least 5 characters",
                          },
                          maxLength: {
                            value: 100,
                            message: "Purpose should not exceed 100 characters",
                          },
                          pattern: {
                            value: /^[a-zA-Z0-9\s-]+$/,
                            message:
                              "Only letters, numbers, and hyphens are allowed.",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            variant="standard"
                            type="string"
                            error={Boolean(fieldState?.error)}
                            helperText={fieldState?.error?.message}
                            inputProps={{
                              style: { fontSize: 14 }, // Set the font size to 14
                            }}
                            sx={{
                              width: "150px",
                              "& input": {
                                padding: 0, // Remove the input base padding
                              },
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
              console.log(rawPatchBody);
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
              {isPatchLoading ? "Loading..." : "Return Items"}
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
ReturnItemTable.propTypes = {
  transacId: PropTypes.string.isRequired,
  borrowedItems: PropTypes.array.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
export default ReturnItemTable;
