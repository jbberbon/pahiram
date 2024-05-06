import PropTypes from "prop-types";
import ColorVariables from "../../Utils/Theming/ColorVariables";
import { IconButton, Popover, Typography } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { useState } from "react";

function PageTitle({ children, fontSize, popoverMessage }) {
  const { neutralMain } = ColorVariables();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <h2
        style={{
          padding: 0,
          margin: 0,
          fontSize: fontSize ? fontSize : "1.5rem",
          fontWeight: "600",
          whiteSpace: "nowrap",
          // width: "100%",
          color: neutralMain,
        }}
      >
        {children}
      </h2>
      {popoverMessage && (
        <>
          <IconButton id="" onClick={handleClick}>
            <TipsAndUpdatesOutlinedIcon fontSize="small" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>{popoverMessage}.</Typography>
          </Popover>
        </>
      )}
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  popoverMessage: PropTypes.string,
  // isSm: PropTypes.any.isRequired,
};

export default PageTitle;
