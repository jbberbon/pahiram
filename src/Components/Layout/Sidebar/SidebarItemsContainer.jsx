import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";
import SIDEBAR_ITEMS from "../../../Utils/Constants/SIDEBAR_ITEMS";
import USER_ROLES from "../../../Utils/Constants/USER_ROLES";
import useCurrentPathname from "../../../Utils/HelperFunctions/useCurrentPathname";

function SidebarItemsContainer() {
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;

  const { userData } = useUserStore();
  const currentPathname = useCurrentPathname();

  const activeColor = theme.palette.neutral.main.replace("1)", "0.1)");

  // if user role is included in the role list if not, set to null;
  const userRole = Object.values(USER_ROLES).includes(userData.role)
    ? userData.role
    : null;

  // Access sidebar items fit for the role
  const sidebarItems = SIDEBAR_ITEMS[userRole];

  //-------------------------------------------------------------------------
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Put background color on the menu first index upon initial load
  // and track changes to the URL to maintain proper background color
  useEffect(() => {
    // Check the current User URL Path
    const currentPath = currentPathname.replace("/", ""); // removes the slash

    // Get the index of the active menu item
    const activeIndex = sidebarItems.findIndex(
      (item) => item.link === currentPath
    );
    console.log(activeIndex);

    // Set index
    setSelectedIndex(activeIndex);
  }, [currentPathname, sidebarItems]);

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
          {/* Use the Link component for navigation */}
          <Link to={val.link}>
            <ListItemButton
              disableGutters={false}
              className="list-item-button"
              sx={{
                paddingLeft: "16px",
                paddingRight: "16px",
                height: 48,
                borderRadius: "8px",
                "&.Mui-selected": {
                  backgroundColor: activeColor,
                },
                "&[data-focus='true'], &:hover": {
                  backgroundColor: "neutral.light !important",
                }
                
              }}
              aria-label={val.aria}
              role="button"
              selected={selectedIndex === key}
              onClick={() => handleListItemClick(key)}
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
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarItemsContainer;
