import { Controller, useFieldArray, useWatch } from "react-hook-form";
import SearchItemModelField from "../../../Components/InputFields/SearchItemModelField";
import {
  CircularProgress,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DateSelectorModal from "./DateSelectorModal";
import RemoveItemButton from "./RemoveItemButton";
import { useState } from "react";

import PropTypes from "prop-types";
import useGetItemGroupBookedDates from "../../../Hooks/BorrowRequestHooks/useGetItemGroupBookedDates";
import ColorVariables from "../../../Utils/Theming/ColorVariables";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";

const useWatchField = (control, fieldName) => {
  return useWatch({
    control,
    name: fieldName,
  });
};

const ItemFormField = ({
  control,
  index,
  isOfficeSelected,
  results,
  loading,
  setValue,
  subtractFieldCount,
}) => {
  const { neutralMain } = ColorVariables();
  const { bookedDates, isLoading, isError, setIsError, getRequestList } =
    useGetItemGroupBookedDates();

  const itemGroupId = useWatchField(control, `items[${index}].item_group_id`);

  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const handleCalendarModal = () => {
    setIsCalendarModalOpen((prev) => !prev);
  };

  const { remove } = useFieldArray({
    control,
    name: "items",
  });

  const handleRemoveField = (index) => {
    remove(index);
    subtractFieldCount();
  };

  return (
    <div
      key={index}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Controller
        name={`items[${index}].item_group_id`}
        control={control}
        defaultValue=""
        rules={{
          required: "Item is required",
          pattern: {
            value: /^[a-zA-Z0-9\s-]+$/,
            message: "Only letters, numbers, and hyphens are allowed.",
          },
        }}
        render={({ field, fieldState }) => (
          <div style={{ flex: "1 1 15rem" }}>
            <SearchItemModelField
              disabled={!isOfficeSelected}
              field={field}
              fieldState={fieldState}
              label="Search Item"
              options={results}
              loading={loading}
              setValue={setValue}
              placeholder="Enter item name"
            />
          </div>
        )}
      />
      <Controller
        name={`items[${index}].quantity`}
        control={control}
        defaultValue={1}
        rules={{
          required: "Quantity is required",
          min: { value: 1, message: "Quantity must be at least 1" },
          max: { value: 3, message: "Quantity cannot exceed 3" },
        }}
        render={({ field, fieldState }) => (
          <TextField
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
        name={`items[${index}].start_date`}
        control={control}
        defaultValue=""
        rules={{ required: "Start date is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Select Item Start Date"
            InputLabelProps={{ shrink: true }}
            id="select-return-date"
            type="datetime-local"
            variant="standard"
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
            inputProps={{
              readOnly: true, // Add the readOnly attribute to disable date selection
            }}
            disabled={itemGroupId ? false : true}
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
                  sx={{ padding: 0 }}
                  disableRipple
                >
                  {isLoading ? (
                    <CircularProgress size={"1rem"} />
                  ) : (
                    <EventNoteIcon sx={{ color: neutralMain }} />
                  )}
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
        name={`items[${index}].return_date`}
        control={control}
        defaultValue=""
        rules={{ required: "Return date is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Select Item Return Date"
            InputLabelProps={{ shrink: true }}
            id="select-return-date"
            type="datetime-local"
            variant="standard"
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
            inputProps={{
              readOnly: true, // Add the readOnly attribute to disable date selection
            }}
            disabled={itemGroupId ? false : true}
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
                  sx={{ padding: 0 }}
                  disableRipple
                >
                  {isLoading ? (
                    <CircularProgress size={"1rem"} />
                  ) : (
                    <EventNoteIcon sx={{ color: neutralMain }} />
                  )}
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
      {itemGroupId && bookedDates?.dates && (
        <DateSelectorModal
          isModalOpen={isCalendarModalOpen}
          setModalOpen={handleCalendarModal}
          setStartDate={(newStartDate) => {
            console.log("NEW START DATE", newStartDate);
            setValue(`items[${index}].start_date`, newStartDate);
          }}
          setEndDate={(newReturntDate) => {
            console.log("NEW RETURN DATE", newReturntDate);
            setValue(`items[${index}].return_date`, newReturntDate);
          }}
          itemGroupId={itemGroupId}
          bookedDates={bookedDates?.dates}
          activeItemCount={bookedDates?.active_items}
          modelName={bookedDates?.item_model}
        />
      )}

      <RemoveItemButton handleRemoveField={() => handleRemoveField(index)} />
      <Divider sx={{ width: "100%", paddingTop: "16px" }} />
      <ErrorSnackbar error={isError} setError={setIsError} />
    </div>
  );
};

ItemFormField.propTypes = {
  control: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  subtractFieldCount: PropTypes.func.isRequired,
};

export default ItemFormField;
