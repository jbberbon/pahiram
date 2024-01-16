// import IconButton from "@mui/material/IconButton";
// import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import PropTypes from "prop-types";
// import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";

function PageTitle({ children, fontSize }) {
  // const { isSm } = BreakpointVariables();
  return (
    <div
      style={{
        // textAlign: isSm ? "center" : "left",
        width: "100%",
      }}
    >
      <h2
        style={{
          padding: 0,
          margin: 0,
          fontSize: fontSize ? fontSize : "1.5rem",
          fontWeight: "600",
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
