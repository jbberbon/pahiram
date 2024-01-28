import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import ColorVariables from "../../../Utils/Theming/ColorVariables";

const ItemFormTitle = ({ addFieldCount, isOfficeSelected }) => {
  const { neutralMain } = ColorVariables();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: "500",
          padding: "4px 0",
          margin: 0,
          color: neutralMain,
        }}
      >
        Choose Items
      </h2>
      <Button
        onClick={addFieldCount}
        variant="text"
        disabled={!isOfficeSelected}
        disableElevation
        disableRipple
        sx={{
          padding: "8px 8px",
          margin: 0,
          "&:focus": {
            outline: "none",
          },
        }}
      >
        <p style={{ margin: 0, fontWeight: "500" }}>Add fields</p>
      </Button>
    </div>
  );
};

ItemFormTitle.propTypes = {
  addFieldCount: PropTypes.func.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
};

export default ItemFormTitle;
