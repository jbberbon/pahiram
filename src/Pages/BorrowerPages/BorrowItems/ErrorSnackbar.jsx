import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import PropTypes from "prop-types";

const ErrorSnackbar = ({ error, setError }) => {
  return (
    <Snackbar
      open={error ? true : false}
      autoHideDuration={6000}
      onClose={() => setError(null)}
      message={error ? error : "Request failed. Try again later"}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      style={{ top: 70 }}
      action={
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setError(null)}
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

ErrorSnackbar.propTypes = {
  error: PropTypes.any,
  setError: PropTypes.func.isRequired,
};

export default ErrorSnackbar;
