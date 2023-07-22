import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

import PropTypes from "prop-types";

function Sidebar(props) {
    const theme = useTheme();
    const drawerColor = theme.palette.background;
  //   const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  //   const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      onClose={props.onOpen}
      variant={isMd ? "temporary" : "persistent"}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "280px",
          boxSizing: "border-box",
          backgroundColor: drawerColor
        },
      }}
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
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sidebar;
