import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { OFFICES } from "../../../Utils/Constants/BackendConstants/OFFICES";

const OfficeSelector = ({ control, items, reset }) => {
  const includedOfficeKeys = ["BMO", "ESLO", "ITRO"];

  return (
    <div style={{ width: "100%" }}>
      <Controller
        name="department"
        control={control}
        defaultValue={"SELECT_OFFICE"}
        rules={{
          required: "Select an office",
          validate: (value) =>
            value !== OFFICES.SELECT_OFFICE.office || "Select Office",
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            select
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
            sx={{
              ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
              "& .MuiInputBase-input": {
                padding: "0",
              },
              "& .MuiFormHelperText-root": {
                margin: 0,
              },
              minWidth: "4rem",
              maxWidth: "12rem",
            }}
            onChange={(e) => {
              field.onChange(e);
              console.log(items)
              if (items || items !== undefined) {
                reset();
                console.log(items);
              }
            }}
            // disabled={items !== undefined || Object.keys(items).length !== 0}
          >
            <MenuItem disabled value={"SELECT_OFFICE"}>
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  padding: "4px 0",
                  margin: 0,
                }}
              >
                Select Office
              </h2>
            </MenuItem>
            {includedOfficeKeys.map((officeKey) => (
              <MenuItem
                key={OFFICES[officeKey].acronym}
                value={OFFICES[officeKey].acronym}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    padding: "4px 0",
                    margin: 0,
                  }}
                >
                  {OFFICES[officeKey].acronym}
                </h2>
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

OfficeSelector.propTypes = {
  control: PropTypes.object.isRequired,
  office: PropTypes.any,
  items: PropTypes.array,
  setValue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default OfficeSelector;
