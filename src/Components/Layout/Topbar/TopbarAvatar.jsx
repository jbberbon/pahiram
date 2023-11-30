import { useState } from "react";
import {
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

import useUserStore from "../../../Store/UserStore";
import useProfileStore from "../../../Store/ProfileStore";
import ProfileAvatar from "../../ProfileAvatar/ProfileAvatar";

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

  const { handleProfileOpen, isProfileOpen } = useProfileStore();
  const openProfileModal = () => {
    handleProfileOpen();
    console.log(isProfileOpen);
  };
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
        <ProfileAvatar size={40} />
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
              <ListItemButton onClick={openProfileModal}>
                <ListItemText sx={{ color: "neutral.main" }}>
                  Profile
                </ListItemText>
                <ListItemIcon sx={{ minWidth: "20px", marginLeft: "10px" }}>
                  <PersonOutlineRoundedIcon sx={{ color: "neutral.main" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              {/* Link to login page */}

              <ListItemButton
                onClick={() => {
                  handleLogout();
                }}
              >
                <ListItemText sx={{ color: "neutral.main" }}>
                  Logout
                </ListItemText>
                <ListItemIcon sx={{ minWidth: "20px", marginLeft: "10px" }}>
                  <LogoutRoundedIcon sx={{ color: "neutral.main" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Popover>
    </Box>
  );
}

export default TopbarAvatar;
