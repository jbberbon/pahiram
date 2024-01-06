import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
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
      elevation={0}
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      variant={isMd ? "temporary" : "persistent"}
      aria-label="Main Navigation"
      role="navigation"
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          overflowY: "auto",
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
          <DashboardRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography
            component={"h1"}
            padding="5px 0 5px 0"
            ml={1}
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              display: "block",
              marginLeft: "0"
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
