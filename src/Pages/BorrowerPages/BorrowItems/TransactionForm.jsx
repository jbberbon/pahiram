import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import PURPOSES from "../../../Utils/Constants/PURPOSES";

import PropTypes from "prop-types";
// import Button from "@mui/material/Button";

import ErrorSnackbar from "./ErrorSnackbar";
import { useState } from "react";
import SearchUserField from "../../../Components/InputFields/SearchUserField";
import useSearchEndorser from "../../../Hooks/useSearchEndorser";

const TransactionForm = ({ control, isOfficeSelected, setValue }) => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const { results, loading, error, setError } = useSearchEndorser(
    userSearchInput,
    isOfficeSelected
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      <Controller
        name="endorsed_by"
        control={control}
        defaultValue=""
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
        }}
        render={({ field, fieldState }) => (
          <SearchUserField
            disabled={!isOfficeSelected}
            field={field}
            fieldState={fieldState}
            setSearchInput={setUserSearchInput}
            label="Search Endorser"
            options={results}
            loading={loading}
            setValue={setValue}
            placeholder="Enter endorser name"
          />
        )}
      />
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Controller
          name="purpose_code"
          control={control}
          defaultValue=""
          rules={{ required: "Purpose is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Select Purpose"
              variant="standard"
              select
              disabled={!isOfficeSelected}
              error={Boolean(fieldState?.error)}
              helperText={fieldState?.error?.message}
              sx={{ flex: "1 1 15rem" }}
            >
              {PURPOSES.map((purpose) => (
                <MenuItem key={purpose.code} value={purpose.code}>
                  {purpose.generalPurpose}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="user_defined_purpose"
          control={control}
          defaultValue=""
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
              {...field}
              label="Specify Purpose"
              variant="standard"
              type="text"
              disabled={!isOfficeSelected}
              error={Boolean(fieldState?.error)}
              helperText={fieldState?.error?.message}
              sx={{ flex: "1 1 15rem" }}
            />
          )}
        />
      </div>
      {/* <Button onClick={() => console.log(error)}>Reveal error Value</Button> */}
      {/* <Button onClick={() => console.log(endorser)}>
        Reveal Endorser RHF Value
      </Button> */}

      <ErrorSnackbar error={error} setError={setError} />
    </div>
  );
};

TransactionForm.propTypes = {
  control: PropTypes.object.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
  endorser: PropTypes.any,
  setValue: PropTypes.func.isRequired,
};

export default TransactionForm;
