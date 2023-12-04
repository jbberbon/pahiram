import LinearProgress from "@mui/material/LinearProgress";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import useSidebarStore from "../../Store/SidebarStore";

function LoadingLinear() {
  const theme = useTheme();
  const drawerTransition = {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  };

  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { isOpen } = useSidebarStore();
  return (
    <Box
      flexGrow={1}
      marginLeft={isOpen && !isMd ? "280px" : "0px"}
      width={isOpen && !isMd ? `calc(100% - 280px)` : "100%"}
      sx={{
        ...drawerTransition,
        paddingTop: "64px",
        height: "100vh",
        // backgroundColor: "transparent",

        display: "flex",
        flexDirection: "column",
      }}
    >
      <LinearProgress color="secondary" />
    </Box>
  );
}

export default LoadingLinear;
