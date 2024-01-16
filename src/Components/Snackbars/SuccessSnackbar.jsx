import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import PropTypes from "prop-types";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnackbar = ({
  isSuccess,
  setIsSuccess,
  // successMessage,
}) => {
  return (
    <Snackbar
      open={isSuccess !== null}
      autoHideDuration={6000}
      onClose={() => setIsSuccess(null)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      style={{ top: 70 }}
    >
      <Alert
        action={
          <IconButton
            color="inherit"
            size="small"
            onClick={() => setIsSuccess(null)}
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <CloseRoundedIcon color="inherit" />
          </IconButton>
        }
        onClose={() => setIsSuccess(null)}
        severity={"success"}
        sx={{
          width: "100%",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {isSuccess}
      </Alert>
    </Snackbar>
  );
};

SuccessSnackbar.propTypes = {
  isSuccess: PropTypes.any,
  setIsSuccess: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
};

export default SuccessSnackbar;
