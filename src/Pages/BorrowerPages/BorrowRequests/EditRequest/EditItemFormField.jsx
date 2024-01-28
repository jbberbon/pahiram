import { Controller } from "react-hook-form";
import SearchItemModelField from "../../../../Components/InputFields/SearchItemModelField";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import EventNoteIcon from "@mui/icons-material/EventNote";
import CancelButton from "./CancelButton";
// import useSearchItemModel from "../../../../Hooks/SearchHooks/useSearchItemModel";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import PropTypes from "prop-types";
import { useState } from "react";
import DateSelectorModal from "../../BorrowItems/DateSelectorModal";
import useGetItemGroupBookedDates from "../../../../Hooks/BorrowRequestHooks/useGetItemGroupBookedDates";

const EditItemFormField = ({
  index,
  control,
  itemModel,
  setValue,
  filteredItems,
}) => {
  const { bookedDates, isLoading, isError, setIsError, getRequestList } =
    useGetItemGroupBookedDates();

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const handleCalendarModal = () => {
    setIsCalendarModalOpen((prev) => !prev);
  };

  const itemGroupId = itemModel?.item?.id;

  return (
    <div
      key={index}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        paddingBottom: "16px",
        width: "100%",
      }}
    >
      <Controller
        name={`edit_existing_items[${index}].item_group_id`}
        control={control}
        defaultValue={itemGroupId}
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
              options={[itemModel?.item]}
              loading={false}
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
            sx={{
              flex: "1 1 2rem",
            }}
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
            InputProps={{
              endAdornment: (
                <IconButton
                  disabled={itemGroupId ? false : true}
                  onClick={() => {
                    getRequestList(itemGroupId);
                    setTimeout(() => {
                      if (!isLoading) {
                        handleCalendarModal();
                      }
                    }, 500);
                  }}
                  disableRipple
                  sx={{ padding: 0 }}
                >
                  <EventNoteIcon />
                </IconButton>
              ),
            }}
            sx={{
              flex: "1 1 10rem",
              '& input[type="datetime-local"]::-webkit-calendar-picker-indicator':
                {
                  display: "none",
                },
            }}
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
            InputProps={{
              endAdornment: (
                <IconButton
                  disabled={itemGroupId ? false : true}
                  // disabled={false}
                  onClick={() => {
                    getRequestList(itemGroupId);
                    setTimeout(() => {
                      if (!isLoading) {
                        handleCalendarModal();
                      }
                    }, 500);
                  }}
                  disableRipple
                  sx={{ padding: 0 }}
                >
                  <EventNoteIcon />
                </IconButton>
              ),
            }}
            sx={{
              flex: "1 1 10rem",
              '& input[type="datetime-local"]::-webkit-calendar-picker-indicator':
                {
                  display: "none",
                },
            }}
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
      {itemGroupId && bookedDates?.dates && (
        <DateSelectorModal
          isModalOpen={isCalendarModalOpen}
          setModalOpen={handleCalendarModal}
          setStartDate={(newStartDate) => {
            console.log("NEW START DATE", newStartDate);
            setValue(`edit_existing_items[${index}].start_date`, newStartDate, {
              shouldDirty: true,
            });
          }}
          setEndDate={(newReturntDate) => {
            console.log("NEW RETURN DATE", newReturntDate);
            setValue(
              `edit_existing_items[${index}].return_date`,
              newReturntDate,
              { shouldDirty: true }
            );
          }}
          itemGroupId={itemGroupId}
          bookedDates={bookedDates?.dates}
          activeItemCount={bookedDates?.active_items}
          modelName={bookedDates?.item_model}
        />
      )}

      <ErrorSnackbar error={isError} setError={setIsError} />
    </div>
  );
};
EditItemFormField.propTypes = {
  index: PropTypes.number.isRequired,
  control: PropTypes.object.isRequired,
  itemModel: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  departmentCode: PropTypes.string.isRequired,
  filteredItems: PropTypes.array.isRequired,
};
export default EditItemFormField;
