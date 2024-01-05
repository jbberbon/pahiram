import { Button } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import PropTypes from "prop-types";

const RemoveItemButton = ({ handleRemoveField }) => {
  return (
    <Button
      onClick={() => handleRemoveField()}
      variant="text"
      disableRipple
      sx={{
        padding: 0,
        margin: 0,
        color: "white",
        "&:focus": {
          outline: "none",
        },
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <DeleteOutlineRoundedIcon
        style={{ color: "#D54442", marginTop: "auto" }}
      />
    </Button>
  );
};

RemoveItemButton.propTypes = {
  handleRemoveField: PropTypes.func.isRequired,
};

export default RemoveItemButton;
