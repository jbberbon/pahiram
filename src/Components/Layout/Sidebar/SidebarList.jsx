import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextColorVariables from "../../../Utils/Theming/ColorVariables";

import styles from "./SidebarList.module.css";

function SidebarList({ sidebarItems, selectedLink, handleListItemClick }) {
  const { neutralMain } = TextColorVariables();
  const selectedColor = neutralMain.replace("1)", "0.1)");

  return (
    <List component="div" disablePadding>
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
          {/* 
            * Use the Link component for navigation 
            */}
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
                  backgroundColor: selectedColor,
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
                  color: neutralMain,
                }}
              >
                {val.icon}
              </ListItemIcon>
              <h2
                className={styles.menuOptionsTitle}
                style={{ color: neutralMain }}
              >
                {val.title}
              </h2>
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
