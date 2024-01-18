import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import PropTypes from "prop-types";

const SearchItemModelField = ({
  field,
  fieldState,
  label,
  options,
  loading,
  setValue,
  placeholder,
  // setSearchInput,
  disabled,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Autocomplete
      {...field}
      options={options && options.length > 0 ? options : []}
      getOptionLabel={(option) => (option && option.model_name) || ""}
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
        setValue(field.name, value ? value.id : "", {
          shouldDirty: true,
          shouldValidate: true,
        });
      }}
      renderOption={(props, option) => (
        <li {...props}>
          {loading ? <CircularProgress size={20} /> : option.model_name}
        </li>
      )}
      sx={{ flex: "1 1 15rem" }}
    />
  );
};

SearchItemModelField.propTypes = {
  field: PropTypes.object.isRequired,
  fieldState: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SearchItemModelField;
