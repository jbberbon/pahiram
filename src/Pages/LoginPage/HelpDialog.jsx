import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from "@mui/material";
import styles from "./login.module.css";
import PropTypes from "prop-types";

function HelpDialog({ isOpen, onClick, title, content }) {
  return (
    <Dialog
      className={styles.dialog}
      fullWidth={true}
      maxWidth="sm"
      open={isOpen}
      onClose={onClick}
    >
      <DialogTitle>
        <Typography variant="h3" component={"span"}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          className={styles.button}
          color="secondary"
          onClick={onClick}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

HelpDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HelpDialog;
