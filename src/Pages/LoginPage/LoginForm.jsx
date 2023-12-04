import { useEffect, useState } from "react";
// import { DevTool } from "@hookform/devtools";

import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import HelpDialog from "./HelpDialog";

import { useNavigate } from "react-router-dom";

// ZUSTAND IMPORTS
import useUserStore from "../../Store/UserStore";

import { useFormFields } from "./LoginFormFields";

// ICONS
// import HelpIcon from "/assets/icons/help-circle-outline.svg";

// CSS
import styles from "./LoginForm.module.css";

function LoginForm() {
  const navigate = useNavigate();
  const { handleLogin } = useUserStore();

  // Add "control" if youll use hook form devTool
  const { loginFormObject, handleSubmit, isSubmitSuccessful, reset } =
    useFormFields();

  // Remember me for 7 Days
  const [isRemembered, setIsRemembered] = useState(false);
  const handleIsRemembered = () => {
    setIsRemembered((prev) => !prev);
  };

  // No API
  const onSubmit = () => {
    handleLogin(navigate);
  };
  // WITH API
  // const onSubmit = (data) => {
  //   handleLogin(data, isRemembered, navigate);
  //   console.log("User Role: " + userRole);
  // };

  // Successful Login -> Clear login form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Box width={"100%"} padding={"0 8px"}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          noValidate
        >
          {loginFormObject.map((formField, key) => (
            <Box key={key} width={"100%"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <label htmlFor={formField.name}>
                  <Typography
                    fontWeight={"600"}
                    component={"span"}
                    color="neutral.main"
                  >
                    {formField.title}
                  </Typography>
                </label>
                <IconButton
                  className={styles.helpButton}
                  disableRipple
                  onClick={formField.dialog.onClick}
                  aria-label="Help button for login credentials"
                >
                  {/* <img
                    src={HelpIcon}
                    alt="Account Help Icon"
                    style={{
                      filter: "",
                      width: "20px",
                    }}
                  /> */}
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
                <HelpDialog
                  isOpen={formField.dialog.isOpen}
                  onClick={formField.dialog.onClick}
                  title={formField.dialog.title}
                  content={formField.dialog.content}
                />
              </Box>
              <TextField
                id={formField.id}
                name={formField.name}
                {...formField.hookForm}
                type={formField.type}
                variant="outlined"
                fullWidth={true}
                width="100%"
                color="secondary"
                aria-label={formField.ariaLabel}
              />
              <Typography color="error" paddingTop="4px">
                {formField.errors}
              </Typography>
            </Box>
          ))}

          {/* Login button && Remember for 7 Days ------------------- */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"16px"}
            marginTop={"8px"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"4px"}>
              <IconButton
                component="button"
                value="check"
                disableRipple
                size="small"
                onClick={handleIsRemembered}
                aria-label="Remember me for 7 days"
              >
                {isRemembered ? (
                  <CheckBoxRoundedIcon color="secondary" />
                ) : (
                  <CheckBoxOutlineBlankRoundedIcon
                    sx={{ color: "neutral.main" }}
                  />
                )}
              </IconButton>

              <Typography component={"p"} color="neutral.main" fontWeight={500}>
                Remember me for 7 days
              </Typography>
            </Box>
            <Button
              variant="contained"
              type="submit"
              size="large"
              className={styles.loginBtn}
              color="secondary"
              aria-label="Sign in"
            >
              <Typography variant="h6">Sign in</Typography>
            </Button>
          </Box>
        </form>
      </Box>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default LoginForm;
