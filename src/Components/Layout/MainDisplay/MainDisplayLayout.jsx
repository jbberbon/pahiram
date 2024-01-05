import useSidebarStore from "../../../Store/SidebarStore";
import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";

import PropTypes from "prop-types";

function MainDisplayLayout({ children }) {
  const { isMd } = BreakpointVariables();
  const { isOpen } = useSidebarStore();

  const transitionDuration = "170ms";
  const transitionStyles = {
    transition: `margin ${transitionDuration} ease-out, width ${transitionDuration} ease-out`,
  };
  return (
    <div
      style={{
        padding: "80px 16px 16px 16px",
        width: isOpen && !isMd ? `calc(100% - 280px)` : "100%",
        height: "100%",
        marginLeft: isOpen && !isMd ? "280px" : "0px",
        ...transitionStyles,
      }}
    >
      {children}
    </div>
  );
}

MainDisplayLayout.propTypes = {
  children: PropTypes.node,
};

export default MainDisplayLayout;
