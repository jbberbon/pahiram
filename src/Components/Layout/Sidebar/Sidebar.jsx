import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SidebarProfileCard from "./SidebarProfileCard";
import SidebarItemsContainer from "./SidebarItemsContainer";
import useSidebarStore from "../../../Store/SidebarStore";
import useColorModeStore from "../../../Store/ColorModeStore";

function Sidebar() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { mode } = useColorModeStore();

  const drawerColor = mode === "light" ? "white" : "black";

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
          backgroundColor: drawerColor,
        },
      }}
    >
      {/*
       * Sidebar Logo Title
       */}
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
      <SidebarProfileCard />
      <SidebarItemsContainer />
    </Drawer>
  );
}

export default Sidebar;
