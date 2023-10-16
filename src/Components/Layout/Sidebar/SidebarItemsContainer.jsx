import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { SidebarItems } from "./SidebarItems";

import { useNavigate } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";

function SidebarItemsContainer() {
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;
  // const yellowHover = theme.palette.secondary.main.replace("1)", "0.1)");

  const userRole = useUserStore((state) => state.userData.role);
  console.log("User Role"+userRole)
  const sidebarItems = SidebarItems[userRole];

  const navigate = useNavigate();

  const handleMenuClick = (menuPath) => {
    navigate(`/${menuPath}`);
  };
  

  return (
    <List>
      {sidebarItems.map((val, key) => (
        <ListItem
          key={key}
          sx={{
            display: "block",
            paddingTop: "4px",
            paddingRight: "8px",
            paddingBottom: "4px",
            paddingLeft: "8px",
          }}
        >
          <ListItemButton
            disableGutters={false}
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              height: 48,
              borderRadius: "8px",
              // "&:hover, &.Mui-focusVisible": { backgroundColor: yellowHover }
            }}
            aria-label={val.aria}
            role="button"
            onClick={() => handleMenuClick(val.link)}
          >
            <ListItemIcon
              sx={{
                minWidth: "48px",
                color: mainTextColor,
              }}
            >
              {val.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography
                color={mainTextColor}
                noWrap={true}
                variant="h6"
                component={"h2"}
              >
                {val.title}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarItemsContainer;
