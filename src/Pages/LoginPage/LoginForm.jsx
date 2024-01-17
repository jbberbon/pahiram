import { useEffect, useState } from "react";
// import { DevTool } from "@hookform/devtools";

// import { Button, IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import HelpDialog from "./HelpDialog";
import useUserStore from "../../Store/UserStore";
import { useFormFields } from "./LoginFormFields";

// ICONS
// import HelpIcon from "/assets/icons/help-circle-outline.svg";

// CSS
import styles from "./LoginForm.module.css";
import useLogin from "../../Hooks/AuthHooks/useLogin";
import ErrorSnackbar from "../../Components/Snackbars/ErrorSnackbar";

function LoginForm() {
  // const navigate = useNavigate();
  const { setAuthDataAndUserData } = useUserStore();

  // Add "control" if youll use hook form devTool
  const { loginFormObject, handleSubmit, reset, getValues } = useFormFields();

  const {
    handleLogin,
    userData,
    isLoginLoading,
    // isLoginSuccess,
    isLoginError,
    // setLoginSuccess,
    setLoginError,
  } = useLogin();

  // Remember me for 7 Days
  const [isRemembered, setIsRemembered] = useState(false);
  const handleIsRemembered = () => {
    setIsRemembered((prev) => !prev);
  };

  const onSubmit = () => {
    const formValues = getValues();
    const finalFormValues = { ...formValues, remember_me: isRemembered };
    handleLogin(finalFormValues);
    console.log(formValues);
  };

  // Successful Login -> Clear login form
  useEffect(() => {
    if (userData) {
      setAuthDataAndUserData(userData);
      reset();
    }
  }, [setAuthDataAndUserData, userData, reset]);

  return (
    <>
      {/* <Box width={"100%"} padding={"0 8px"}> */}
      <div style={{ width: "100%", padding: "0 8px" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          noValidate
        >
          {loginFormObject.map((formField, key) => (
            <div key={key} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
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
              </div>
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
            </div>
          ))}

          {/* Login button && Remember for 7 Days ------------------- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
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
            </div>
            <Button
              variant="contained"
              type="submit"
              size="large"
              className={styles.loginBtn}
              color="secondary"
              aria-label="Sign in"
              disabled={isLoginLoading}
            >
              {isLoginLoading ? (
                <Typography variant="h6">Loading...</Typography>
              ) : (
                <Typography variant="h6">Sign in</Typography>
              )}
            </Button>
          </div>
        </form>
      </div>
      <ErrorSnackbar error={isLoginError} setError={setLoginError} />
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default LoginForm;
