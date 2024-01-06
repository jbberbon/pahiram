import TextField from "@mui/material/TextField";
import { Controller, useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";
import RemoveItemButton from "./RemoveItemButton";
import Divider from "@mui/material/Divider";
import useSearchItemModel from "../../../Hooks/useSearchItemModel";
import SearchItemModelField from "../../../Components/InputFields/SearchItemModelField";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
// import Button from "@mui/material/Button";

const ItemForm = ({
  control,
  fieldCount,
  subtractFieldCount,
  isOfficeSelected,
  setValue,
  selectedOffice,
  // items,
}) => {
  const { remove } = useFieldArray({
    control,
    name: "items",
  });

  const handleRemoveField = (index) => {
    remove(index);
    subtractFieldCount();
  };

  // !!!Custom hook for searching items
  const { results, loading, error, setError } = useSearchItemModel(
    selectedOffice,
    isOfficeSelected
  );

  return (
    isOfficeSelected && (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {[...Array(fieldCount).keys()].map((index) => (
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
                  message:
                    "Invalid input. Only letters, numbers, and hyphens are allowed.",
                },
              }}
              render={({ field, fieldState }) => (
                <SearchItemModelField
                  disabled={!isOfficeSelected}
                  field={field}
                  fieldState={fieldState}
                  label="Search Item"
                  options={results}
                  loading={loading}
                  setValue={setValue}
                  placeholder="Enter endorser name"
                />
              )}
            />
            <Controller
              name={`items[${index}].quantity`}
              control={control}
              defaultValue=""
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
                  sx={{ flex: "1 1 3rem" }}
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
                  sx={{ flex: "1 1 10rem" }}
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
                  sx={{ flex: "1 1 10rem" }}
                />
              )}
            />
            <RemoveItemButton
              handleRemoveField={() => handleRemoveField(index)}
            />
            <Divider sx={{ width: "100%", paddingTop: "16px" }} />
          </div>
        ))}
        <ErrorSnackbar error={error} setError={setError} />
        {/* <Button onClick={() => console.log(items)}>
          Reveal Endorser RHF Value
        </Button> */}
      </div>
    )
  );
};

ItemForm.propTypes = {
  control: PropTypes.object.isRequired,
  fieldCount: PropTypes.number.isRequired,
  subtractFieldCount: PropTypes.func.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  selectedOffice: PropTypes.number,
  items: PropTypes.array,
};

export default ItemForm;
