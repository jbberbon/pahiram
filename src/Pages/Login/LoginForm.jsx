import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

import styles from "./login.module.css";
import PropTypes from "prop-types";

function LoginForm(props) {
  const [isEmailDialogOpen, setEmailDialog] = useState(false);
  const [isPasswordDialogOpen, setPasswordDialog] = useState(false);

  const onOpenEmailDialog = () => {
    setEmailDialog((prev) => !prev);
  };
  const onOpenPasswordDialog = () => {
    setPasswordDialog((prev) => !prev);
  };

  const loginFormObject = [
    // Email Field
    {
      title: "APC Email",
      id: "email",
      name: "email",
      type: "email",
      onClick: onOpenEmailDialog,
      dialog: {
        title: "Email Credential Help",
        content: "You can set my maximum width and whether to adapt or not.",
        isOpen: isEmailDialogOpen,
      },
    },
    // Password Field
    {
      title: "Password",
      id: "password",
      name: "password",
      type: "password",
      onClick: onOpenPasswordDialog,
      dialog: {
        title: "Password Credential Help",
        content: "You can set my maximum width and whether to adapt or not.",
        isOpen: isPasswordDialogOpen,
      },
    },
  ];

  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={"16px"}
      width={"100%"}
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
            <Dialog
              className={styles.dialog}
              fullWidth={true}
              maxWidth="sm"
              open={formField.dialog.isOpen}
              onClose={formField.onClick}
            >
              <DialogTitle>
                <Typography variant="h3" component={"span"}>
                  {formField.dialog.title}
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {formField.dialog.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="text"
                  className={styles.button}
                  color="secondary"
                  onClick={formField.onClick}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <TextField
            id={formField.id}
            name={formField.name}
            type={formField.type}
            variant="outlined"
            fullWidth={true}
            width="100%"
            color="secondary"
          />
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
              <CheckBoxOutlineBlankRoundedIcon color="neutral.main" />
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
    </Box>
  );
}

LoginForm.propTypes = {
  onRemembered: PropTypes.func.isRequired,
  isRemembered: PropTypes.bool.isRequired,
};

export default LoginForm;
