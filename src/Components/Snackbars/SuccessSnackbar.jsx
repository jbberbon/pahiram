// import IconButton from "@mui/material/IconButton";
// import Snackbar from "@mui/material/Snackbar";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// import PropTypes from "prop-types";

// const SuccessSnackbar = ({ isSuccess, setIsSuccess }) => {
//   return (
//     <Snackbar
//       open={isSuccess}
//       autoHideDuration={6000}
//       onClose={() => setIsSuccess(null)}
//       message={isSuccess ? "Successfully submitted request. :)" : "Failed to submit request. Try again later."}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       style={{ top: 70 }}
//       action={
//         <IconButton
//           size="small"
//           color="inherit"
//           onClick={() => setIsSuccess(null)}
//           sx={{
//             "&:focus": {
//               outline: "none",
//             },
//           }}
//         >
//           <CloseRoundedIcon fontSize="small" />
//         </IconButton>
//       }
//     />
//   );
// };

// SuccessSnackbar.propTypes = {
//   isSuccess: PropTypes.bool,
//   setIsSuccess: PropTypes.func.isRequired,
// };

// export default SuccessSnackbar;

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
  successMessage,
  errorMessage,
}) => {
  return (
    <Snackbar
      open={isSuccess}
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
        severity={isSuccess ? "sucess" : "error"}
        sx={{
          width: "100%",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {isSuccess ? successMessage : errorMessage + ". " + "Try again later"}
      </Alert>
    </Snackbar>
  );
};

SuccessSnackbar.propTypes = {
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default SuccessSnackbar; 
