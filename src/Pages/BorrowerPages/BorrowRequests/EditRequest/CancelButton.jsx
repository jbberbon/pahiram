import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PropTypes from "prop-types";

const CancelButton = ({ checked, onChange, disabled }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        maxHeight: "45px",
      }}
    >
      <Checkbox
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        sx={{ width: "20px", padding: 0 }}
        icon={<DeleteOutlineRoundedIcon />}
        checkedIcon={<DeleteRoundedIcon sx={{ color: "#D54442" }} />}
      />
    </div>
  );
};

CancelButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CancelButton;
