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
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const isOptionEqualToValue = (option, value) => option?.id === value?.id;

  return (
    <Autocomplete
      {...field}
      options={options && options.length > 0 ? options : []}
      getOptionLabel={(option) => (option && option.model_name) || ""}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          required
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
      isOptionEqualToValue={isOptionEqualToValue}
      // sx={{ flex: "1 1 15rem" }}
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
  defaultValue: PropTypes.object,
};

export default SearchItemModelField;
