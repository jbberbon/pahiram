import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SidebarList({ sidebarItems, selectedLink, handleListItemClick }) {
  // Themes
  const theme = useTheme();
  const mainTextColor = theme.palette.neutral.main;
  const activeColor = theme.palette.neutral.main.replace("1)", "0.1)");

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

SidebarList.propTypes = {
  sidebarItems: PropTypes.array.isRequired,
  selectedLink: PropTypes.string.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

export default SidebarList;
