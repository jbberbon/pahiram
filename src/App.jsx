import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Theme
import { useMode } from "./Contexts/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Unprotected Routes
const LazyLogin = React.lazy(() => import("./Pages/LoginPage/Login"));
const LazyNotFound = React.lazy(() => import("./Pages/GeneralPages/NotFound"));
const LazyFaq = React.lazy(() => import("./Pages/GeneralPages/FAQ"));
const LazyUnauthorized = React.lazy(() =>
  import("./Pages/GeneralPages/Unauthorized")
);

// Pages
// Borrowers
const LazyBorrowItems = React.lazy(() =>
  import("./Pages/BorrowerPages/BorrowItems/BorrowItems")
);
const LazyBorrowingStatus = React.lazy(() =>
  import("./Pages/BorrowerPages/BorrowingStatus")
);
const LazyPenaltyRecords = React.lazy(() =>
  import("./Pages/BorrowerPages/PenaltyRecords")
);
const LazyBorrowingHistory = React.lazy(() =>
  import("./Pages/BorrowerPages/BorrowingHistory")
);
//Employees
const LazyDashboard = React.lazy(() =>
  import("./Pages/ManagementPages/Dashboard")
);
const LazyManageTransactions = React.lazy(() =>
  import("./Pages/ManagementPages/ManageTransactions")
);
const LazyLendingHistory = React.lazy(() =>
  import("./Pages/ManagementPages/LendingHistory")
);
const LazyManageInventory = React.lazy(() =>
  import("./Pages/ManagementPages/ManageInventory")
);
const LazyManagePenalties = React.lazy(() =>
  import("./Pages/ManagementPages/ManagePenalties")
);
const LazyManageAccounts = React.lazy(() =>
  import("./Pages/ManagementPages/ManageAccounts")
);
// Loading Animations
const LazyLoadingLinear = lazy(() => import('./Components/LoadingAnimation/LoadingLinear'));
const LazyLoadingCircular = lazy(() => import('./Components/LoadingAnimation/LoadingCircular'));


import useUserStore from "./Store/UserStore";
import RequireAuth from "./Utils/HelperFunctions/RouteProtection/RequireAuth";
import RequireAdminPrivilege from "./Utils/HelperFunctions/RouteProtection/RequireAdminPrivilege";

import getRoleConstants from "./Utils/Constants/USER_ROLES";


function App() {
  const [theme] = useMode();
  const { userData, isAuthenticated } = useUserStore();
  const userRole = userData.role;
  const isAdmin = userData.isAdmin;

  // destructured users
  // const borrower = USER_ROLES.borrower;
  // const inventoryManager = USER_ROLES.inventoryManager;
  // const lendingManager = USER_ROLES.lendingManager;
  // const supervisor = USER_ROLES.supervisor;
  const {borrower, inventoryManager, lendingManager, coSupervisor, supervisor,} = getRoleConstants();

  // User Classifications
  const allUsers = [borrower, inventoryManager, lendingManager, coSupervisor, supervisor];
  const redirect =
    isAdmin || userRole != borrower ? "/dashboard" : "/borrow-items";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Unprotected Paths */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<LazyLoadingCircular />}>
              {isAuthenticated ? (
                <Navigate to={redirect} replace />
              ) : (
                <LazyLogin />
              )}
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/unauthorized"
          element={
            <Suspense fallback={<LazyLoadingCircular />}>
              <LazyUnauthorized />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<LazyLoadingCircular />}>
              <LazyFaq />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LazyLoadingCircular />}>
              <LazyNotFound />
            </Suspense>
          }
        />

        {/* Protected Routes ----------------------------------------------------------*/}
        {/* All Users without Admin Privilege */}
        <Route element={<RequireAuth allowedRoles={allUsers} />}>
          <Route
            path="/borrow-items"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyBorrowItems />
              </Suspense>
            }
          />
          <Route
            path="/borrowing-status"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyBorrowingStatus />
              </Suspense>
            }
          />
          <Route
            path="/borrowing-history"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyBorrowingHistory />
              </Suspense>
            }
          />
          <Route
            path="/penalties"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyPenaltyRecords />
              </Suspense>
            }
          />
        </Route>
        {/* ------------------------------------------------------------------------
         * Requires Admin Privilege
         * EVEN IF ROLE IS BORROWER
         */}
        <Route element={<RequireAdminPrivilege allowedRoles={allUsers} />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyDashboard />
              </Suspense>
            }
          />
          <Route
            path="/manage-transactions"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyManageTransactions />
              </Suspense>
            }
          />
          <Route
            path="/manage-inventory"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyManageInventory />
              </Suspense>
            }
          />
          <Route
            path="/lending-history"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyLendingHistory />
              </Suspense>
            }
          />
          <Route
            path="/manage-penalty"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyManagePenalties />
              </Suspense>
            }
          />
          <Route
            path="/manage-accounts"
            element={
              <Suspense fallback={<LazyLoadingLinear />}>
                <LazyManageAccounts />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
