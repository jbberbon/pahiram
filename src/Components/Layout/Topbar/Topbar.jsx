import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TopbarAvatar from "./TopbarAvatar";

// MUI Theming and Media Query
import { useTheme } from "@mui/material";
// Zustand Stores
import useSidebarStore from "../../../Store/SidebarStore";
import useColorModeStore from "../../../Store/ColorModeStore";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../../Utils/Theming/ColorVariables";

function Topbar() {
  const { mode, toggleColorMode } = useColorModeStore();
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { isMd } = BreakpointVariables();
  console.log("Topbar Rerendered");
 
  // Icon Color
  const { neutralMain } = ColorVariables();

  //Remove MUI IconButton Outline When Clicked
  const removeOutline = {
    border: "none",
    outline: "none",
  };

  //Transition Sht
  const theme = useTheme();
  const drawerTransition = {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  };

  return (
    <AppBar
      component="nav"
      elevation={0}
      style={{
        marginLeft: isOpen && !isMd ? "280px" : "0",
        width: isOpen && !isMd ? `calc(100% - 280px)` : "100%",
      }}
      sx={{ ...drawerTransition, bgcolor: "neutral.light" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="Toggle Side Bar For Navigation"
          role="button"
          style={removeOutline}
          sx={{ mr: 2, color: neutralMain }}
          onClick={toggleSidebar}
        >
          <MenuIcon sx={{ color: neutralMain }} />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton
          aria-label="dark mode"
          role="button"
          style={removeOutline}
          sx={{
            mr: 1,
            color: neutralMain,
          }}
          onClick={toggleColorMode}
        >
          {mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <TopbarAvatar />
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
