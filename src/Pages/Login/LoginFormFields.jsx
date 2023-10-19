import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFormFields = () => {
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

  // Your login form object
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

  return { loginFormObject, handleSubmit, errors, isSubmitSuccessful, reset, control };
};
