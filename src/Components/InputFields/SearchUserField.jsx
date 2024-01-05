import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import PropTypes from "prop-types";

const SearchUserField = ({
  field,
  fieldState,
  label,
  options,
  loading,
  setValue,
  placeholder,
  setSearchInput,
  disabled,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Autocomplete
      {...field}
      options={options && options.length > 0 ? options : []}
      getOptionLabel={(option) => (option && option.full_name) || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          error={Boolean(fieldState?.error?.message)}
          helperText={fieldState?.error?.message || ""}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      value={selectedOption || null}
      onChange={(e, value) => {
        setSelectedOption(value);
        setValue(field.name, value ? value.apc_id : "", {
          shouldDirty: true,
          shouldValidate: true,
        });
      }}
      onInputChange={(e) => {
        if (e && e.target) {
          setSearchInput(e.target.value);
        }
      }}
      renderOption={(props, option) => (
        <li {...props}>
          {loading ? <CircularProgress size={20} /> : option.full_name}
        </li>
      )}
    />
  );
};

SearchUserField.propTypes = {
  field: PropTypes.object.isRequired,
  fieldState: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SearchUserField;
