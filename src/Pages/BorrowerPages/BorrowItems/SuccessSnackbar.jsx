import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import PropTypes from "prop-types";

const SuccessSnackbar = ({ isSuccess, setIsSuccess }) => {
  return (
    <Snackbar
      open={isSuccess}
      autoHideDuration={6000}
      onClose={() => setIsSuccess(null)}
      message={isSuccess ? "Successfully submitted request. :)" : "Failed to submit request. Try again later."}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      style={{ top: 70 }}
      action={
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setIsSuccess(null)}
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

SuccessSnackbar.propTypes = {
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func.isRequired,
};

export default SuccessSnackbar;
