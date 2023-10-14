import Dashboard from "./Dashboard";
import Faq from "./Faq";

import PropTypes from "prop-types";
import Home from "./Home";

import useSidebarStore from "../Store/SidebarStore";

function MainContent({ selectedMenu }) {
  const isOpen = useSidebarStore((state) => state.isOpen);
  
  return (
    <div>
      {selectedMenu === "dashboard" && <Dashboard isOpen={isOpen} />}
      {selectedMenu === "faq" && <Faq isOpen={isOpen} />}
      {selectedMenu === "home" && <Home isOpen={isOpen} />}
    </div>
  );
}

MainContent.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
};

export default MainContent;
