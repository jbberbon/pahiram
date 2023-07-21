import Box from "@mui/material/Box";


import PropTypes from "prop-types";

function Dashboard(props) {
  const sidebarWidth = props.isCollapsed ? 0 : 280;
  return (
    <Box flexGrow={1} ml={`${sidebarWidth}px`} pl={2}>
      Dashboard
    </Box>
  );
}


Dashboard.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Dashboard;
