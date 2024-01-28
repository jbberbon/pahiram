import TextField from "@mui/material/TextField";

import PageTitle from "../../../../Components/Text/PageTitle";
import { Controller } from "react-hook-form";
import SearchItemModelField from "../../../../Components/InputFields/SearchItemModelField";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import { useState } from "react";
import useSearchItemModel from "../../../../Hooks/SearchHooks/useSearchItemModel";

import PropTypes from "prop-types";
import { Button } from "@mui/material";
import RemoveItemButton from "../../BorrowItems/RemoveItemButton";

const AddNewItems = ({ selectedOffice, control, setValue, getValues }) => {
  const [fieldCount, setFieldCount] = useState(0);

  const addFieldCount = () => {
    if (fieldCount < 10) {
      setFieldCount(fieldCount + 1);
      console.log(fieldCount);
    } else {
      console.log("Max 10 fields");
    }
  };
  const subtractFieldCount = (indexToRemove) => {
    setFieldCount(fieldCount - 1);
    setValue(
      "add_new_items",
      getValues("add_new_items").filter(
        (item, index) => index !== indexToRemove
      )
    );
  };

  const isOfficeSelected = true;
  const { results, loading, error, setError } = useSearchItemModel(
    selectedOffice,
    isOfficeSelected
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PageTitle fontSize="1rem">Add New Items</PageTitle>
        </div>
        <hr
          style={{
            height: "1.5px",
            border: 0,
            width: "100%",
            background: "#2222",
            margin: "auto 16px auto 16px",
          }}
        />
        <Button
          onClick={addFieldCount}
          variant="text"
          disabled={!isOfficeSelected}
          disableElevation
          disableRipple
          sx={{
            padding: "8px 8px",
            margin: 0,
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <p style={{ margin: 0, fontWeight: "500", whiteSpace: "nowrap" }}>
            Add fields
          </p>
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {[...Array(fieldCount).keys()].map((index) => (
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
              name={`add_new_items[${index}].item_group_id`}
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
                <div style={{ flex: "1 1 8rem" }}>
                  <SearchItemModelField
                    disabled={false}
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
              name={`add_new_items[${index}].quantity`}
              control={control}
              defaultValue=""
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
              name={`add_new_items[${index}].start_date`}
              control={control}
              defaultValue=""
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
              name={`add_new_items[${index}].return_date`}
              control={control}
              defaultValue=""
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
            <RemoveItemButton
              handleRemoveField={() => subtractFieldCount(index)}
            />
          </div>
        ))}
      </div>
      <ErrorSnackbar error={error} setError={setError} />
    </div>
  );
};

AddNewItems.propTypes = {
  selectedOffice: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
};

export default AddNewItems;
