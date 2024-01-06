import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ChooseFormSubtitle = ({ addFieldCount, isOfficeSelected }) => {
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

ChooseFormSubtitle.propTypes = {
  addFieldCount: PropTypes.func.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
};

export default ChooseFormSubtitle;
