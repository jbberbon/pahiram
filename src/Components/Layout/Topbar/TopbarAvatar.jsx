import { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { Link } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";

function TopbarAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //Remove IconButton Uneeded Outline
  const removeOutline = {
    border: "none",
    outline: "none",
  };

  // Delete userData and token upon logout
  const { handleLogout } = useUserStore();

  return (
    <Box>
      <IconButton
        style={removeOutline}
        size="small"
        aria-label="profile"
        onClick={handleClick}
      >
        <Avatar sx={{ width: 32, height: 32 }} alt="Christian" src="" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // elevation={1}

        sx={{ minWidth: "100px" }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <PersonOutlineRoundedIcon sx={{ color: "neutral.dark" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "neutral.dark" }}>
                  Profile
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              {/* Link to login page */}
              <Link to="/">
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <LogoutRoundedIcon sx={{ color: "neutral.dark" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "neutral.dark" }}>
                    Logout
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Popover>
    </Box>
  );
}

export default TopbarAvatar;
