import React, { lazy, Suspense } from "react";
const LazyTopbar = React.lazy(() => import("./Topbar/Topbar"));
const LazySidebar = React.lazy(() => import("./Sidebar/Sidebar"));
const LazyProfile = React.lazy(() =>
  import("../../Pages/GeneralPages/Profile")
);
const LazyLoadingCircular = lazy(() => import('../LoadingAnimation/LoadingCircular'));

import { Outlet } from "react-router-dom";
import NO_SIDEBAR from "../../Utils/Constants/SidebarConstants/NO_SIDEBAR";
import useCurrentPathname from "../../Utils/HelperFunctions/useCurrentPathname";
import TextColorVariables from "../../Utils/Theming/ColorVariables";

const Layout = () => {
  const currentPathname = useCurrentPathname();

  const noSidebarTopbar = [""];
  const noSidebar = NO_SIDEBAR;

  const { neutralLight } = TextColorVariables();

  if (noSidebar.includes(currentPathname)) {
    return (
      <Suspense fallback={<LazyLoadingCircular />}>
        <LazyTopbar />
        <LazyProfile />
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: neutralLight,
          }}
        >
          <Outlet />
        </div>
      </Suspense>
    );
  }
  if (noSidebarTopbar.includes(currentPathname)) {
    return (
      <Suspense fallback={<LazyLoadingCircular />}>
        <LazyProfile />
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: neutralLight,
          }}
        >
          <Outlet />
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LazyLoadingCircular />}>
      <LazyTopbar />
      <LazySidebar />
      <LazyProfile />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: neutralLight,
        }}
      >
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Layout;
