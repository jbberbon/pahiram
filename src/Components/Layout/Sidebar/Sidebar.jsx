// MUI
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

// Pages
import ProfileCard from "./ProfileCard";

// Components
import SidebarItemsContainer from "./SidebarItemsContainer";

// isOpen Store
import useSidebarStore from "../../../Store/SidebarStore";

// import React from "react";

// const MemoizedSidebarItemsContainer = React.memo(SidebarItemsContainer);


function Sidebar() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isOpen = useSidebarStore((state) => state.isOpen);
  // const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const { isOpen, toggleSidebar } = useSidebarStore();


  console.log("SIDEBAR RERENDERED");

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      variant={isMd ? "temporary" : "persistent"}
      aria-label="Main Navigation"
      role="navigation"
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "280px",
          boxSizing: "border-box",
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
          color="primary"
          style={{
            border: "none",
            outline: "none",
          }}
          disableRipple={true}
          aria-label="navigate to home page"
        >
          <DashboardRoundedIcon sx={{ fontSize: "2.5rem" }} />
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
      <ProfileCard />
      <SidebarItemsContainer />
      {/* <MemoizedSidebarItemsContainer /> */}
    </Drawer>
  );
}

export default Sidebar;
