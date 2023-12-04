import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

import styles from "./CollapseSidebarMenu.module.css";
import TextColorVariables from "../../../Utils/Theming/ColorVariables";

function CollapseSidebarMenu({
  menuTitle,
  isOpen,
  setIsOpen,
  children,
}) {
  const { neutralMain } = TextColorVariables();
  const handleClick = () => {
    setIsOpen();
  };

  return (
    <List>
      <ListItemButton
        onClick={handleClick}
        disableRipple
        sx={{
          padding: "0px 16px",
          display: "flex",
          justifyContent: "space-between",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <p className={styles.menuTitle} style={{ color: neutralMain }}>
          {menuTitle}
        </p>
        {isOpen ? (
          <ExpandLess sx={{ color: "neutral.main" }} />
        ) : (
          <ExpandMore sx={{ color: "neutral.main" }} />
        )}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  );
}

CollapseSidebarMenu.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default CollapseSidebarMenu;
