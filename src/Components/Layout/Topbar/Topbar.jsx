import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TopbarAvatar from "./TopbarAvatar";

// MUI Theming and Media Query
import { useTheme, useMediaQuery } from "@mui/material";
// Zustand Stores
import useSidebarStore from "../../../Store/SidebarStore";
import useColorModeStore from "../../../Store/ColorModeStore";

function Topbar() {
  console.log("Topbar Rerendered");
  //Using colors from custom palette
  const theme = useTheme();
  const toggleColorMode = useColorModeStore((state) => state.toggleColorMode);

  // Icon Color
  const iconColor = theme.palette.neutral.main;

  //Remove MUI IconButton Outline When Clicked
  const removeOutline = {
    border: "none",
    outline: "none",
  };

  //Responsive SHT
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  //Transition Sht
  const drawerTransition = {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  };

  const mode = theme.palette.mode;

  // const isOpen = useSidebarStore((state) => state.isOpen);
  // const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <AppBar
      component="nav"
      color="transparent"
      elevation={0}
      style={{
        width: isOpen && !isMd ? `calc(100% - 280px)` : "100%",
      }}
      sx={drawerTransition}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="Toggle Side Bar For Navigation"
          role="button"
          style={removeOutline}
          sx={{ mr: 2, color: iconColor }}
          onClick={toggleSidebar}
        >
          <MenuIcon sx={{ color: iconColor }} />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton
          aria-label="dark mode"
          role="button"
          style={removeOutline}
          sx={{
            mr: 1,
            color: iconColor,
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
