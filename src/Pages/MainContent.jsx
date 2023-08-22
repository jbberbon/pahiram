import Dashboard from "./Dashboard";

import PropTypes from "prop-types";

function MainContent(props) {
  return <Dashboard isOpen={props.isOpen} />;
}

MainContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MainContent;
