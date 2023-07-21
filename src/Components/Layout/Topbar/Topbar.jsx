import { useContext } from "react";
import { ColorModeContext } from "../../../Contexts/theme";
import { useTheme } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import PropTypes from "prop-types";

function Topbar(props) {
  //Using colors from custom palette
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  //Text Colors
  const mainTextColor = theme.palette.neutral.main;

  //Side Bar Open / Close Sizes
  const sidebarWidth = props.isCollapsed ? 0 : 280;

  //Remove MUI IconButton Outline When Clicked
  const removeOutline = {
    border: "none",
    outline: "none",
  };


  return (
    <AppBar
      component="nav"
      color="transparent"
      elevation={0}
      style={{
        width: `calc(100% - ${sidebarWidth}px)`,
        marginleft: `${sidebarWidth}px`,
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          style={{
            border: "none",
            outline: "none",
          }}
          sx={{ mr: 2, color: mainTextColor }}
          onClick={props.onCollapsed}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton
          aria-label="dark mode"
          style={removeOutline}
          sx={{
            mr: 1,
            color: mainTextColor
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton style={removeOutline} size="small">
          <Avatar sx={{ width: 32, height: 32  }} alt="Christian" src=""/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  onCollapsed: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default Topbar;
