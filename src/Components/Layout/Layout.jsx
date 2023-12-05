import { startTransition, lazy, Suspense } from "react";
const LazyTopbar = lazy(() => import("./Topbar/Topbar"));
const LazySidebar = lazy(() => import("./Sidebar/Sidebar"));
const LazyProfile = lazy(() => import("../../Pages/GeneralPages/Profile"));

import { Outlet } from "react-router-dom";
import NO_SIDEBAR from "../../Utils/Constants/SidebarConstants/NO_SIDEBAR";
import useCurrentPathname from "../../Utils/HelperFunctions/useCurrentPathname";
import ColorVariables from "../../Utils/Theming/ColorVariables";
import LoadingCircular from "../LoadingAnimation/LoadingCircular";

const Layout = () => {
  const currentPathname = useCurrentPathname();

  const noSidebarTopbar = [""];
  const noSidebar = NO_SIDEBAR;

  const { neutralLight } = ColorVariables();

  if (noSidebar.includes(currentPathname)) {
    return (
      <Suspense fallback={<LoadingCircular />}>
        <LazyTopbar />
        <LazyProfile />
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: neutralLight,
          }}
        >
          {startTransition(() => (
            <Outlet />
          ))}
        </div>
      </Suspense>
    );
  }
  if (noSidebarTopbar.includes(currentPathname)) {
    return (
      <Suspense fallback={<LoadingCircular />}>
        <LazyProfile />
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: neutralLight,
          }}
        >
          {startTransition(() => (
            <Outlet />
          ))}
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LoadingCircular />}>
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
