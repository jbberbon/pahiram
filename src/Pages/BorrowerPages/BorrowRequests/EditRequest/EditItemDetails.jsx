import { Controller } from "react-hook-form";
import SearchItemModelField from "../../../../Components/InputFields/SearchItemModelField";
import PageTitle from "../../../../Components/Text/PageTitle";

import useSearchItemModel from "../../../../Hooks/SearchHooks/useSearchItemModel";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import TextField from "@mui/material/TextField";
import { getPendingBorrowedItemStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import CancelButton from "./CancelButton";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";

const EditItemDetails = ({ setValue, control, itemData, departmentCode }) => {
  const isOfficeSelected = true;
  const selectedOffice = departmentCode;

  const { results, loading, error, setError } = useSearchItemModel(
    selectedOffice,
    isOfficeSelected
  );

  const pendingApproval = getPendingBorrowedItemStatus();
  const filteredItems = itemData.filter(
    // Can edit all pending approval only
    (itemModel) => itemModel?.borrowed_item_status === pendingApproval
  );

  console.log(filteredItems);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Divider
        textAlign="left"
        sx={{
          "&:before": { width: 0 },
          "& .MuiDivider-wrapper": { padding: "0 16px 0 0" },
          marginTop: "16px",
        }}
      >
        <PageTitle fontSize="1rem">Edit Borrow Request</PageTitle>
      </Divider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {filteredItems.map((itemModel, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              paddingBottom: "16px",
              width: "100%"
            }}
          >
            <Controller
              name={`edit_existing_items[${index}].item_group_id`}
              control={control}
              defaultValue={itemModel?.item?.id}
              rules={{
                required: "Item is required",
                pattern: {
                  value: /^[a-zA-Z0-9\s-]+$/,
                  message:
                    "Invalid input. Only letters, numbers, and hyphens are allowed.",
                },
              }}
              render={({ field, fieldState }) => (
                <div style={{ flex: "1 1 8rem" }}>
                  <SearchItemModelField
                    disabled={true}
                    field={field}
                    fieldState={fieldState}
                    label="Search Item"
                    options={results}
                    loading={loading}
                    setValue={setValue}
                    placeholder="Enter item name"
                    defaultValue={itemModel?.item || ""}
                  />
                </div>
              )}
            />
            <Controller
              name={`edit_existing_items[${index}].quantity`}
              control={control}
              defaultValue={itemModel?.quantity}
              rules={{
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
                max: { value: 3, message: "Quantity cannot exceed 3" },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  required
                  {...field}
                  label="Quantity"
                  type="number"
                  variant="standard"
                  fullWidth
                  error={Boolean(fieldState?.error)}
                  helperText={fieldState?.error?.message}
                  sx={{ flex: "1 1 2rem" }}
                />
              )}
            />
            <Controller
              name={`edit_existing_items[${index}].start_date`}
              control={control}
              defaultValue={itemModel?.start_date}
              rules={{ required: "Start date is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  required
                  label="Change Item Start Date"
                  InputLabelProps={{ shrink: true }}
                  id="change-start-date"
                  type="datetime-local"
                  variant="standard"
                  error={Boolean(fieldState?.error)}
                  helperText={fieldState?.error?.message}
                  sx={{ flex: "1 1 10rem" }}
                />
              )}
            />
            <Controller
              name={`edit_existing_items[${index}].return_date`}
              control={control}
              defaultValue={itemModel?.due_date}
              rules={{ required: "Return date is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  required
                  label="Change Item Return Date"
                  InputLabelProps={{ shrink: true }}
                  id="change-return-date"
                  type="datetime-local"
                  variant="standard"
                  error={Boolean(fieldState?.error)}
                  helperText={fieldState?.error?.message}
                  sx={{ flex: "1 1 10rem" }}
                />
              )}
            />
            <Controller
              name={`edit_existing_items[${index}].is_cancelled`}
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <CancelButton
                  checked={field.value}
                  onChange={field.onChange}
                  disabled={filteredItems.length <= 1}
                />
              )}
            />
          </div>
        ))}
      </div>
      <ErrorSnackbar error={error} setError={setError} />
    </div>
  );
};

EditItemDetails.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  itemData: PropTypes.array.isRequired,
  departmentCode: PropTypes.string.isRequired,
};

export default EditItemDetails;
