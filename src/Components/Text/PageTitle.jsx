// import IconButton from "@mui/material/IconButton";
// import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import PropTypes from "prop-types";
import ColorVariables from "../../Utils/Theming/ColorVariables";
// import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";

function PageTitle({ children, fontSize }) {
  const { neutralMain } = ColorVariables();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          padding: 0,
          margin: 0,
          fontSize: fontSize ? fontSize : "1.5rem",
          fontWeight: "600",
          whiteSpace: "nowrap",
          width: "100%",
          color: neutralMain,
        }}
      >
        {children}
      </h2>
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  // isSm: PropTypes.any.isRequired,
};

export default PageTitle;
