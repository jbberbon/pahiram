import { Box, useMediaQuery, useTheme } from "@mui/material";
import useSidebarStore from "../Store/SidebarStore";

function PenaltyRecords() {
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
      pl={2}
      marginLeft={isOpen && !isMd ? "280px" : "0px"}
      sx={drawerTransition}
    >
      Penalty Records
    </Box>
  );
}

export default PenaltyRecords;
