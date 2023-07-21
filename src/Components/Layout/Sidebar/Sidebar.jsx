import { Box, Drawer, IconButton, Typography } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

import PropTypes from "prop-types";

function Sidebar(props) {
  const sidebarWidth = props.isCollapsed ? 0 : 280;

//   const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
//   const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
//   const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  return (
    <Drawer
      sx={{
        // width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
      elevation={0}
      variant="permanent"
      anchor="left"
    >
      {/* Sidebar Logo Title */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        height={64}
      >
        <IconButton
          color={"secondary"}
          style={{
            border: "none",
            outline: "none",
          }}
          disableRipple={true}
          aria-label="navigate to home page"
        >
          <DashboardRoundedIcon fontSize="large" />
          <Typography
            variant="h2"
            component={"h1"}
            ml={1}
            sx={{
              fontWeight: 700,
              display: "block",
            }}
          >
            Pahiram
          </Typography>
        </IconButton>
      </Box>
      {props.children}
    </Drawer>
  );
}

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
