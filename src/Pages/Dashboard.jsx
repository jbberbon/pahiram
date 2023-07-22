import { Box, useMediaQuery, useTheme } from "@mui/material";

import PropTypes from "prop-types";

function Dashboard(props) {
  const theme = useTheme();
  const drawerTransition = {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  };

  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      flexGrow={1}
      pl={2}
      marginLeft={props.isOpen && !isMd ? "280px" : "0px"}
      sx={drawerTransition}
    >
      Dashboard
    </Box>
  );
}

Dashboard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Dashboard;
