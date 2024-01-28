import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import PageTitle from "../../../../Components/Text/PageTitle";
import SearchUserField from "../../../../Components/InputFields/SearchUserField";
import MenuItem from "@mui/material/MenuItem";
import useSearchEndorser from "../../../../Hooks/SearchHooks/useSearchEndorser";
import ErrorSnackbar from "../../../../Components/Snackbars/ErrorSnackbar";
import { BORROW_PURPOSES } from "../../../../Utils/Constants/BackendConstants/BORROW_PURPOSES";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";

function EditTransactionForm({ control, setValue, transacData }) {
  const [userSearchInput, setUserSearchInput] = useState("");
  const isOfficeSelected = true; // Bandaid
  const { results, loading, error, setError } = useSearchEndorser(
    userSearchInput,
    isOfficeSelected
  );
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
          // marginTop: "16px",
        }}
      >
        <PageTitle fontSize="1rem">Edit Borrow Request</PageTitle>
      </Divider>
      <TextField
        id="outlined-required"
        label="Office"
        defaultValue={transacData?.department}
        variant="standard"
        disabled
      />
      <Controller
        name="request_data.endorsed_by"
        control={control}
        defaultValue={transacData?.endorsed_by?.apc_id || ""}
        rules={{
          maxLength: {
            value: 30,
            message: "Endorser Name should not exceed 30 characters",
          },
          pattern: {
            value: /^[a-zA-Z0-9\s-]+$/,
            message:
              "Invalid input. Only letters, numbers, and hyphens are allowed.",
          },
          required: transacData?.endorsed_by?.apc_id
            ? "You cannot remove existing endorser"
            : false,
        }}
        render={({ field, fieldState }) => (
          <SearchUserField
            field={field}
            fieldState={fieldState}
            disabled={true}
            setSearchInput={setUserSearchInput}
            label="Not allowed to change Endorser"
            options={results.length > 0 ? results : [transacData?.endorsed_by]}
            loading={loading}
            setValue={setValue}
            placeholder="Enter endorser name"
            defaultValue={transacData?.endorsed_by || ""}
          />
        )}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Controller
          name="request_data.purpose"
          control={control}
          defaultValue={transacData?.purpose}
          rules={{ required: "Purpose is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              required
              label="Change Purpose"
              variant="standard"
              select
              disabled={!isOfficeSelected}
              error={Boolean(fieldState?.error)}
              helperText={fieldState?.error?.message}
              sx={{ flex: "1 1 8rem" }}
            >
              {Object.entries(BORROW_PURPOSES).map(([key, purpose]) => (
                <MenuItem key={key} value={key}>
                  {purpose.purpose}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="request_data.user_defined_purpose"
          control={control}
          defaultValue={transacData?.user_defined_purpose}
          rules={{
            required: "Purpose is required",
            minLength: {
              value: 5,
              message: "Purpose should be at least 5 characters",
            },
            maxLength: {
              value: 30,
              message: "Purpose should not exceed 30 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9\s-]+$/,
              message:
                "Invalid input. Only letters, numbers, and hyphens are allowed.",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              required
              {...field}
              label="Specify Purpose"
              variant="standard"
              type="text"
              disabled={!isOfficeSelected}
              error={Boolean(fieldState?.error)}
              helperText={fieldState?.error?.message}
              sx={{ flex: "1 1 8rem" }}
            />
          )}
        />
      </div>
      <ErrorSnackbar error={error} setError={setError} />
    </div>
  );
}

EditTransactionForm.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  transacData: PropTypes.object.isRequired,
};

export default EditTransactionForm;
