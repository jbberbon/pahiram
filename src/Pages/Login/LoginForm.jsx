import { useEffect, useState } from "react";
// import { DevTool } from "@hookform/devtools";

import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import HelpDialog from "./HelpDialog";

import styles from "./login.module.css";

import { useNavigate } from "react-router-dom";

// ZUSTAND IMPORTS
import useUserStore from "../../Store/UserStore";

import { useFormFields } from "./LoginFormFields";

function LoginForm() {
  // Destructure custom form field hook
  // Add "control" if youll use hook form devTool
  const { loginFormObject, handleSubmit, isSubmitSuccessful, reset } =
    useFormFields();

  // Remember me for 7 Days
  const [isRemembered, setIsRemembered] = useState(false);
  const handleIsRemembered = () => {
    setIsRemembered((prev) => !prev);
  };

  // Destructure user store
  const { userData, handleLogin } = useUserStore();

  // Successful Login -> Clear login form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const navigate = useNavigate();
  // Onsubmit
  const onSubmit = (data) => {
    handleLogin(data, isRemembered, navigate);
    console.log("User Role: " + userRole);
  };
  // TESTING
  const userRole = userData.role;

  // const { isAuthenticated } = useUserStore();

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
                <Typography
                  fontWeight={"600"}
                  component={"span"}
                  color="neutral.main"
                >
                  {formField.title}
                </Typography>
                <IconButton
                  className={styles.button}
                  disableRipple
                  onClick={formField.dialog.onClick}
                >
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
              >
                {isRemembered ? (
                  <CheckBoxRoundedIcon color="secondary" />
                ) : (
                  <CheckBoxOutlineBlankRoundedIcon
                    sx={{ color: "neutral.main" }}
                  />
                )}
              </IconButton>

              <Typography color="neutral.main" fontWeight={500}>
                Remember me for 7 days
              </Typography>
            </Box>
            <Button
              variant="contained"
              type="submit"
              size="large"
              className={styles.loginBtn}
              color="secondary"
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
