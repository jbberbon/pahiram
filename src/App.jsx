import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Theme
import { useMode } from "./Contexts/theme";
import { Button, CssBaseline, Modal, ThemeProvider } from "@mui/material";

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
  import("./Pages/BorrowerPages/PenalizedTransactions/PenaltyRecords")
);
const LazyBorrowRequests = React.lazy(() =>
  import("./Pages/BorrowerPages/BorrowRequests/BorrowRequests")
);
//Employees
const LazyDashboard = React.lazy(() =>
  import("./Pages/ManagementPages/Dashboard")
);
const LazyManageTransactions = React.lazy(() =>
  import("./Pages/ManagementPages/ManageTransactions/ManageTransactions")
);
const LazyLendingHistory = React.lazy(() =>
  import("./Pages/ManagementPages/LendingHistory")
);
const LazyManageInventory = React.lazy(() =>
  import("./Pages/ManagementPages/ManagePLOInventory/ManageInventory")
);
const LazyManagePenalties = React.lazy(() =>
  import("./Pages/ManagementPages/ManagePenalties")
);
const LazyManageAccounts = React.lazy(() =>
  import("./Pages/ManagementPages/ManageAccounts")
);
const LazyManageEndorsements = React.lazy(() =>
  import("./Pages/ManagementPages/ManageEndorsements/ManageEndorsements")
);

// Penalty Clearance
const LazyPenaltyClearance = React.lazy(() =>
  import("./Pages/ManagementPages/ManagePenalties/ManagePenalties")
);

// Loading Animations
const LazyLoadingLinear = lazy(() =>
  import("./Components/LoadingAnimation/LoadingLinear")
);
const LazyLoadingCircular = lazy(() =>
  import("./Components/LoadingAnimation/LoadingCircular")
);

import useUserStore from "./Store/UserStore";
import RequireAuth from "./Utils/HelperFunctions/RouteProtection/RequireAuth";
import RequireAdminPrivilege from "./Utils/HelperFunctions/RouteProtection/RequireAdminPrivilege";

import { USER_ROLES } from "./Utils/Constants/BackendConstants/USER_ROLES";
import ColorVariables from "./Utils/Theming/ColorVariables";
import BreakpointVariables from "./Utils/Theming/BreakpointVariables";
import useTermsAndConditionStore from "./Store/TermsAndConditionStore";

function App() {
  const [theme] = useMode();
  const { userData, authData } = useUserStore();
  const userRole = userData?.role;
  const isAdmin = userData?.isAdmin;
  const isAuthenticated = authData?.isAuthenticated;

  const allUserRoles = Object.keys(USER_ROLES);
  const PENALTY_MANAGER = "PENALTY_MANAGER";
  const redirect =
    isAdmin || userRole != "BORROWER" ? "/dashboard" : "/borrow-items";

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  // Handle closing the privacy modal
  const handleClosePrivacyModal = () => setShowPrivacyModal(false);
  const handleOpenPrivacyModal = () => setShowPrivacyModal(true);
  const { neutralBackground } = ColorVariables();

  const { isTermsModalOpen, handleCloseTermsModal } =
    useTermsAndConditionStore();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Unprotected Paths ------------------------------------------------ */}
          <Route
            path="/login"
            element={
              <Suspense fallback={<LazyLoadingCircular />}>
                {isAuthenticated ? (
                  // CHANGE LATERRR ->>> <Navigate to={redirect} replace />
                  <Navigate to={"/borrow-items"} replace />
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
          <Route element={<RequireAuth allowedRoles={allUserRoles} />}>
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
              path="/borrow-requests"
              element={
                <Suspense fallback={<LazyLoadingLinear />}>
                  <LazyBorrowRequests />
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
            <Route
              path="/manage-endorsements"
              element={
                <Suspense fallback={<LazyLoadingLinear />}>
                  <LazyManageEndorsements />
                </Suspense>
              }
            />
          </Route>

          {/* Finance Employees */}
          <Route element={<RequireAuth allowedRoles={PENALTY_MANAGER} />}>
            <Route
              path="/penalty-clearance"
              element={
                <Suspense fallback={<LazyLoadingLinear />}>
                  <LazyPenaltyClearance />
                </Suspense>
              }
            />
          </Route>

          {/* ------------------------------------------------------------------------
           * Requires Admin Privilege
           * EVEN IF ROLE IS BORROWER
           */}
          <Route
            element={<RequireAdminPrivilege allowedRoles={allUserRoles} />}
          >
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

        <Modal
          open={isTermsModalOpen}
          // onClose={handleClosePrivacyModal}
          aria-labelledby="privacy-modal-title"
          aria-describedby="privacy-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
              padding: "18px",
              backgroundColor: neutralBackground,
              maxWidth: "90%",
              borderRadius: "8px",
              overflowX: "auto",
              minHeight: "400px",
              maxHeight: "90%",
            }}
          >
            <h2 id="privacy-modal-title">Pahiram Terms and Conditions</h2>

            <h3 style={{ margin: 0, padding: 0 }}>Acceptance of Terms</h3>
            <p style={{ margin: 0, padding: "0 0 12px 0" }}>
              By using the Pahiram application, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these
              terms, you must not use the application.
            </p>

            <h3 style={{ margin: 0, padding: 0 }}>User Data Policy</h3>
            <p style={{ margin: 0, padding: "0 0 12px 0" }}>
              Pahiram collects and processes user data as outlined in the{" "}
              <a>User Data Policy</a>. By using the application, you consent to
              the collection, use, and sharing of your data as described in the{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenPrivacyModal();
                }}
              >
                User Data Policy
              </a>
              .
            </p>

            <h3 style={{ margin: 0, padding: 0 }}>Use of Services</h3>
            <p style={{ margin: 0, padding: "0 0 12px 0" }}>
              You agree to use the Pahiram application only for lawful purposes
              and in compliance with all applicable laws and regulations. You
              shall not use the application in any way that could damage,
              disable, overburden, or impair the service.
            </p>

            <h3 style={{ margin: 0, padding: 0 }}>Modification to Terms</h3>
            <p style={{ margin: 0, padding: "0 0 12px 0" }}>
              Pahiram reserves the right to update or modify these Terms and
              Conditions at any time without prior notice. Continued use of the
              application after any such changes shall constitute your consent
              to such changes.
            </p>

            <h3 style={{ margin: 0, padding: 0 }}>Contact Us</h3>
            <p style={{ margin: 0, padding: "0 0 12px 0" }}>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at{" "}
              <a href="mailto:jbberbon@student.apc.edu.ph">
                jbberbon@student.apc.edu.ph
              </a>
              .
            </p>

            <p style={{ margin: "16px 0 16px 0", padding: 0 }}>
              By using the Pahiram application, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions.
            </p>

            <Button variant="contained" onClick={handleCloseTermsModal}>
              I hereby agree to the Terms and Conditions
            </Button>
          </div>
        </Modal>

        <Modal
          open={showPrivacyModal}
          // onClose={handleClosePrivacyModal}
          aria-labelledby="data-privacy-title"
          aria-describedby="privacy-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
              padding: "18px",
              backgroundColor: neutralBackground,
              maxWidth: "90%",
              borderRadius: "8px",
              overflowX: "auto",
              minHeight: "300px",
              maxHeight: "90%",
            }}
          >
            <h2 id="data-privacy-title">User Data Policy</h2>
            <p>
              <strong>Data Collection.</strong> Pahiram collects user data
              including name, email address, course, and student ID.
            </p>
            <p>
              <strong>Purpose.</strong> Data is used for facilitating
              borrowing, providing personalized services, communication, and
              improving user experience.
            </p>
            <p>
              <strong>Storage.</strong> User data is securely stored with
              encryption and access controls.
            </p>
            <p>
              <strong>Sharing.</strong> Data will never be shared with third
              parties.
            </p>
            <p>
              <strong>Policy Updates.</strong> Pahiram may update the
              policy, with users notified of changes.
            </p>

            <Button variant="contained" onClick={handleClosePrivacyModal}>
              I have read the Data Policy
            </Button>
          </div>
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default App;
