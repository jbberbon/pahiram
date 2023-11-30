import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Theme
import { useMode } from "./Contexts/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Unprotected Routes
const LazyNotFound = React.lazy(() => import("./Pages/NotFound"));
const LazyFaq = React.lazy(() => import("./Pages/Faq"));
const LazyUnauthorized = React.lazy(() => import("./Pages/Unauthorized"));

// Pages
// const LazyProfile = React.lazy(() => import("./Pages/Profile"));
const LazyLogin = React.lazy(() => import("./Pages/Login/Login"));
const LazyDashboard = React.lazy(() => import("./Pages/Dashboard"));
const LazyBorrowItems = React.lazy(() => import("./Pages/BorrowItems"));
const LazyOngoingTransactions = React.lazy(() =>
  import("./Pages/OngoingTransactions")
);
const LazyPenaltyRecords = React.lazy(() => import("./Pages/PenaltyRecords"));
const LazyBorrowingHistory = React.lazy(() =>
  import("./Pages/BorrowingHistory")
);

import useUserStore from "./Store/UserStore";
import RequireAuth from "./Utils/HelperFunctions/RequireAuth";
import USER_ROLES from "./Utils/Constants/USER_ROLES";

function App() {
  const [theme] = useMode();
  const { userData, isAuthenticated } = useUserStore();

  // destructured users
  const borrower = USER_ROLES.borrower;
  const inventoryManager = USER_ROLES.inventoryManager;
  const lendingManager = USER_ROLES.lendingManager;
  const supervisor = USER_ROLES.supervisor;
  const admin = USER_ROLES.admin;

  // User Classifications
  const allUsers = [
    borrower,
    inventoryManager,
    lendingManager,
    supervisor,
    admin,
  ];
  const employees = [inventoryManager, lendingManager, supervisor, admin];
  const redirect = userData.role === borrower ? "/borrow-items" : "/dashboard";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Unprotected Paths */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
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
            <Suspense fallback={<p>Loading ...</p>}>
              <LazyUnauthorized />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <LazyFaq />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <LazyNotFound />
            </Suspense>
          }
        />

        {/* Protected Routes */}
        {/* All Users */}
        <Route element={<RequireAuth allowedRoles={allUsers} />}>
          <Route
            path="/penalties"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyPenaltyRecords />
              </Suspense>
            }
          />
          <Route
            path="/borrow-items"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyBorrowItems />
              </Suspense>
            }
          />
          <Route
            path="/ongoing-transactions"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyOngoingTransactions />
              </Suspense>
            }
          />
          <Route
            path="/borrowing-history"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyBorrowingHistory />
              </Suspense>
            }
          />
        </Route>
        {/* Employees */}
        <Route element={<RequireAuth allowedRoles={employees} />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <LazyDashboard />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
