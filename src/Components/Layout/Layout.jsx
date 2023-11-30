import React, { Suspense } from "react";
const LazyTopbar = React.lazy(() => import("./Topbar/Topbar"));
const LazySidebar = React.lazy(() => import("./Sidebar/Sidebar"));
const LazyProfile = React.lazy(() => import("../../Pages/Profile"));

import { Outlet } from "react-router-dom";
import NO_SIDEBAR from "../../Utils/Constants/NO_SIDEBAR";
import useCurrentPathname from "../../Utils/HelperFunctions/useCurrentPathname";
// import Profile from "../../Pages/Profile"; 

const Layout = () => {
  const currentPathname = useCurrentPathname();

  const noSidebarTopbar = [""];
  const noSidebar = NO_SIDEBAR;

  if (noSidebar.includes(currentPathname)) {
    return (
      <Suspense fallback={<p>Loading ...</p>}>
        <LazyTopbar />
        <LazyProfile />
        <Outlet />
      </Suspense>
    );
  }
  if (noSidebarTopbar.includes(currentPathname)) {
    return (
      <>
        <LazyProfile />
        <Outlet />
      </>
    );
  }

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <LazyTopbar />
      <LazySidebar />
      <LazyProfile />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
