import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import OFFICES from "../../../Utils/Constants/OFFICES";

const OfficeSelector = ({ control, items, reset }) => {
  const includedOfficeKeys = ["BMO", "ESLO", "ITRO"];

  return (
    <div style={{ width: "100%" }}>
      <Controller
        name="department_code"
        control={control}
        defaultValue={OFFICES.SELECT_OFFICE}
        rules={{
          required: "Select an office",
          validate: (value) =>
            value !== OFFICES.SELECT_OFFICE || "Select an office",
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
              if (items) {
                reset();
                console.log(items);
              }
            }}
          >
            <MenuItem disabled value={0}>
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
              <MenuItem key={OFFICES[officeKey]} value={OFFICES[officeKey]}>
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    padding: "4px 0",
                    margin: 0,
                  }}
                >
                  {officeKey}
                </h2>
                {/* <Typography variant="p" component={"p"} color={"neutral.main"}>
                  {officeKey}
                </Typography> */}
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
