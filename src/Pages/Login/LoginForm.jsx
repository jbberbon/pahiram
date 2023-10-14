import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import HelpDialog from "./HelpDialog";

import styles from "./login.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  // Dialog Help Box States
  const [isEmailDialogOpen, setEmailDialog] = useState(false);
  const [isPasswordDialogOpen, setPasswordDialog] = useState(false);
  const onOpenEmailDialog = () => {
    setEmailDialog((prev) => !prev);
  };
  const onOpenPasswordDialog = () => {
    setPasswordDialog((prev) => !prev);
  };

  // Hook Form
  const { register, control, handleSubmit, formState, reset } = useForm();
  const { errors, isSubmitSuccessful } = formState;


  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    navigate('/home');
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const loginFormObject = [
    // Email Field
    {
      title: "APC Email",
      id: "email",
      type: "email",
      hookForm: {
        ...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Invalid email format",
          },
          validate: {
            APCEmail: (fieldValue) => {
              return (
                fieldValue.endsWith("apc.edu.ph") ||
                "Enter your Microsoft365 account"
              );
            },
          },
        }),
      },
      errors: errors.email?.message,
      dialog: {
        title: "Email Credential Help",
        content: "You can set my maximum width and whether to adapt or not.",
        isOpen: isEmailDialogOpen,
        onClick: onOpenEmailDialog,
      },
    },
    // Password Field
    {
      title: "Password",
      id: "password",
      name: "password",
      type: "password",
      hookForm: {
        ...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
          validate: {
            minCharacters: (fieldValue) => {
              return fieldValue.length > 8 || "Minimum of 8 characters";
            },
          },
        }),
      },
      errors: errors.password?.message,
      dialog: {
        title: "Password Credential Help",
        content: "You can set my maximum width and whether to adapt or not.",
        isOpen: isPasswordDialogOpen,
        onClick: onOpenPasswordDialog,
      },
    },
  ];

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
                  onClick={formField.onClick}
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
                onClick={props.onRemembered}
              >
                {props.isRemembered ? (
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
      <DevTool control={control} />
    </>
  );
}

LoginForm.propTypes = {
  onRemembered: PropTypes.func.isRequired,
  isRemembered: PropTypes.bool.isRequired,
};

export default LoginForm;
