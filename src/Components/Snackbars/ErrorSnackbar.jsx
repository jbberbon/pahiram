import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import PropTypes from "prop-types";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorSnackbar = ({ error, setError }) => {
  return (
    <Snackbar
      open={error ? true : false}
      autoHideDuration={6000}
      onClose={() => setError(null)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} 
      style={{ top: 70 }}
    >
      <Alert
        action={
          <IconButton
            color="inherit"
            size="small"
            onClick={() => setError(null)}
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <CloseRoundedIcon color="inherit" />
          </IconButton>
        }
        onClose={() => setError(null)}
        severity="error"
        sx={{
          width: "100%",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {error ? error : "Request failed. Try again later"}
      </Alert>
    </Snackbar>
  );
};

ErrorSnackbar.propTypes = {
  error: PropTypes.any,
  setError: PropTypes.func.isRequired,
};

export default ErrorSnackbar;
