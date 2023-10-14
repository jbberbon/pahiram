import Dashboard from "./Dashboard";
import Faq from "./Faq";

import PropTypes from "prop-types";
import Home from "./Home";

function MainContent({ isOpen, selectedMenu }) {
  //return <Dashboard isOpen={props.isOpen} />;

  return (
    <div>
      {selectedMenu === "dashboard" && <Dashboard isOpen={isOpen} />}
      {selectedMenu === "faq" && <Faq isOpen={isOpen} />}
      {selectedMenu === "home" && <Home isOpen={isOpen} />}
    </div>
  );
}

MainContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedMenu: PropTypes.string.isRequired,
};

export default MainContent;
