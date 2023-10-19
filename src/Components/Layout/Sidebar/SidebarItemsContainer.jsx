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
import { Link, useLocation } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";
import { SidebarItems } from "./SidebarItems";
// import styles from './SidebarItemsContainer.module.css';


function SidebarItemsContainer() {
  // MUI Theming
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;

  // Zustand Destructuring
  const { userData } = useUserStore();
  const userRole = userData.role;

  // Check Rerenders
  console.log("Sidebar Child Rerendered");

  // Access sidebar items fit for the role
  const sidebarItems = SidebarItems[userRole];

  // Access MenuIndex Store
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const location = useLocation();
  // Put background color on the menu aside to the first index upon initial load
  useEffect(() => {
    // Check the current User URL Path
    const currentPath = location.pathname.replace("/", ""); // remove the slash

    // Get the index of the active menu item
    const activeIndex = sidebarItems.findIndex(
      (item) => item.link === currentPath
    );

    // Set index
    setSelectedIndex(activeIndex);
  }, []);

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
              }}
              aria-label={val.aria}
              role="button"
              selected={selectedIndex == key}
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
