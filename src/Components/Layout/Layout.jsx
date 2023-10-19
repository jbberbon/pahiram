// import { useState, useEffect } from "react";

// Pages
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
// import MainContent from "./MainContent";

import PropTypes from "prop-types";

// CSS
import styles from "./Layout.module.css";

import useUserStore from "../../Store/UserStore";

function Layout({ children }) {
  const { isAuthenticated } = useUserStore();

  return (
    // If user is authenticated, show top and sidebar
    <div className={styles.layout}>
      {isAuthenticated && (
        <>
          <Topbar />
          <Sidebar />
        </>
      )}
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
