import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import HelpDialog from "./HelpDialog";

import styles from "./login.module.css";

import { useNavigate } from "react-router-dom";

// ZUSTAND IMPORTS
import useUserStore from "../../Store/UserStore";
// import useTokenStore from "../../Store/TokenStore";

// *** !!!!!! Uncomment if AUTH API is ready
// import axios from 'axios';

function LoginForm() {
  // Hook Form
  const { register, control, handleSubmit, formState, reset } = useForm();
  const { errors, isSubmitSuccessful } = formState;

  // Dialog Help States
  const [isEmailDialogOpen, setEmailDialog] = useState(false);
  const [isPasswordDialogOpen, setPasswordDialog] = useState(false);
  const handleOpenEmailDialog = () => {
    setEmailDialog((prev) => !prev);
  };
  const handleOpenPasswordDialog = () => {
    setPasswordDialog((prev) => !prev);
  };

  // Remember me for 7 Days
  const [isRemembered, setIsRemembered] = useState(false);
  const handleIsRemembered = () => {
    setIsRemembered((prev) => !prev);
  };

  // **** !!!! UNCOMMENT WHEN READY ZUSTAND STORES
  // const setUserData = useUserStore().setUserData;
  const setUserData = useUserStore((state) => state.setUserData);
  // const setToken = useTokenStore((state) => state.setToken);

  // TESTING
  const userRole = useUserStore((state) => state.userData.role);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    //   **** !!!!!!  Uncomment if AUTH API is ready
    // // Prepare the data to send to the API
    // const postData = {
    //   // Include the data you want to send to the API
    //   // For example, if you have form fields like "username" and "password":
    //   email: data.email,
    //   password: data.password,
    //   rememberUser: isRemembered,
    //   // Add other form fields as needed
    // };

    // // Make a POST request to your API endpoint
    // axios
    //   .post("your-api-endpoint", postData)
    //   .then((response) => {
    //     // Handle a successful response from the API
    //     const userData = response.data;
    //     console.log("API Response:", response.data);

    //     // Store user data inside UserStore
    //     setUserData({
    //       firstName: userData.firstName,
    //       lastName: userData.lastName,
    //       email: userData.email,
    //       role: userData.role,
    //     });

    //     // Store Token inside TokenStore
    //     setToken({
    //       token: userData.token,
    //     });

    //     // Redirect to the "/home" route after successful submission
    //     navigate("/home");
    //   })
    //   .catch((error) => {
    //     // Handle errors, e.g., display an error message to the user
    //     console.error("API Error:", error);
    //   });

    // MOCK ONLY :: Remove when AUTH API is active
    // Store user data inside UserStore
    setUserData({
      firstName: "John Christian",
      lastName: "Berbon",
      email: "jbberbon@student.apc.edu.ph",
      role: "BORROWER",
    });

    

    console.log("User Role: " + userRole);

    console.log("Login Data: " + JSON.stringify(data));
    navigate("/home");
  };

  // Successful Login -> Clear login form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const loginFormObject = [
    // Email Field -----------------------------------------------------------
    {
      title: "APC Email",
      id: "email",
      name: "email",
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
                "Enter your APC-Microsoft365 account"
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
        onClick: handleOpenEmailDialog,
      },
    },
    // Password Field --------------------------------------------------------
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
        onClick: handleOpenPasswordDialog,
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
      <DevTool control={control} />
    </>
  );
}

export default LoginForm;
