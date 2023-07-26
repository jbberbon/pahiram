import { useContext } from "react";
import { ColorModeContext } from "../../../Contexts/theme";
import { useTheme, useMediaQuery } from "@mui/material";

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
  //Remove MUI IconButton Outline When Clicked
  const removeOutline = {
    border: "none",
    outline: "none",
  };

  //Responsive SHT
  //   const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  //   const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  const drawerTransition = {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  };

  return (
    <AppBar
      component="nav"
      color="transparent"
      elevation={0}
      style={{
        width: props.isOpen && !isMd ? `calc(100% - 280px)` : "100%",
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
          sx={{ mr: 2, color: mainTextColor }}
          onClick={props.onOpen}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton
          aria-label="dark mode"
          role="button"
          style={removeOutline}
          sx={{
            mr: 1,
            color: mainTextColor,
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton style={removeOutline} size="small" aria-label="profile">
          <Avatar sx={{ width: 32, height: 32 }} alt="Christian" src="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  onOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Topbar;
