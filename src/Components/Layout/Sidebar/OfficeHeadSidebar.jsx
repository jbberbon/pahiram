import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

import PropTypes from "prop-types";

function Sidebar(props) {
  const sidebarItems = [
    {
      title: "Borrow Equipment",
      icon: <HandshakeRoundedIcon />,
      link: "/borrow-equipment",
    },
    {
      title: "Track Equipment",
      icon: <AccessTimeRoundedIcon />,
      link: "/track-equipment",
    },
    {
      title: "History",
      icon: <ListAltRoundedIcon />,
      link: "/history",
    },
  ];
  const sidebarWidth = props.isCollapsed ? 50 : 250;

  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        height={64}
      >
        <IconButton color="primary">
          <DashboardRoundedIcon />
        </IconButton>
        <Typography variant="h5">Pahiram</Typography>
      </Box>

      <List>
        {sidebarItems.map((val, key) => (
          <ListItem key={key} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 38, paddingRight: 1 }}>{val.icon}</ListItemIcon>
                <ListItemText>
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {val.title}
                  </Typography>
                </ListItemText>
              </ListItem>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
