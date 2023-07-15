import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import PropTypes from "prop-types";

function Topbar(props) {
  const sidebarWidth = props.isCollapsed ? 50 : 250;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        elevation={0}
        sx={{ width: `calc(100% - ${sidebarWidth}px)`, ml: `${sidebarWidth}` }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{
              border: "none",
              outline: "none",
            }}
            sx={{ mr: 2 }}
            onClick={props.onCollapsed}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} />
          <IconButton>
            <LightModeOutlinedIcon />
          </IconButton>
          <Button
            style={{
              border: "none",
              outline: "none",
            }}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Topbar.propTypes = {
  onCollapsed: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default Topbar;
