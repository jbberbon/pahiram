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
import USER_ROLES from "../../../Utils/Constants/USER_ROLES";
import useCurrentPathname from "../../../Utils/HelperFunctions/useCurrentPathname";
import SidebarList from "./SidebarList";
import ChooseSidebarList from "../../../Utils/HelperFunctions/ChooseSidebarList";

function SidebarItemsContainer() {
  // Themes
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;
  const activeColor = theme.palette.neutral.main.replace("1)", "0.1)");

  const currentPathname = useCurrentPathname();

  const { userData } = useUserStore();
  const isAdmin = userData.isAdmin;
  // if user role is included in the role list if not, set to null;
  const userRole = Object.values(USER_ROLES).includes(userData.role)
    ? userData.role
    : null;

  // Access sidebar items fit for the role
  const sidebarItems = ChooseSidebarList();

  console.log(sidebarItems);

  //-------------------------------------------------------------------------
  const initialLink = userData.role === 1010 ? "borrow-items" : "dashboard";
  const [selectedLink, setSelectedLink] = useState(initialLink);
  const handleListItemClick = (index) => {
    setSelectedLink(index);
  };

  // Track changes to the URL to maintain bg-color for active menu
  useEffect(() => {
    // Check the current User URL Path
    const currentPath = currentPathname.replace("/", ""); // removes the slash

    // Find the link in sidebarItems that matches the current path
    const activeLink = sidebarItems.reduce((foundLink, item) => {
      return foundLink || (item.link === currentPath ? item.link : null);
    }, null);
    console.log(activeLink);

    setSelectedLink(activeLink);
  }, [currentPathname, sidebarItems]);


  // if(userRole && userRole != borrower && isAdmin) {

  // }



  const borrower = USER_ROLES.borrower;
  // For Borrowers only
  if (userRole === borrower && !isAdmin) {
    return (
      <SidebarList
        sidebarItems={sidebarItems}
        selectedLink={selectedLink}
        handleListItemClick={handleListItemClick}
      />
    );
  }

  return (
    // Admin

    // Emp
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
                },
              }}
              aria-label={val.aria}
              role="button"
              selected={selectedLink === val.link}
              onClick={() => handleListItemClick(val.link)}
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
