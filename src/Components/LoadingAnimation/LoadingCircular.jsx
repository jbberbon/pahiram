import CircularProgress from "@mui/material/CircularProgress";
import ColorVariables from "../../Utils/Theming/ColorVariables";
import BreakpointVariables from "../../Utils/Theming/BreakpointVariables";
function LoadingCircular() {
  const { neutralMain } = ColorVariables();
  const { isSm } = BreakpointVariables();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: !isSm ? "20px" : "16px",
          fontWeight: 400,
          color: neutralMain,
        }}
      >
        Loading Awesomeness
      </h2>
      <CircularProgress size="1.5rem"/>
    </div>
  );
}

export default LoadingCircular;
