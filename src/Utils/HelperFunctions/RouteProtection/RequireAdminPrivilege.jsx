import { useLocation, Navigate } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";
import PropTypes from "prop-types";
import RequireAuth from "./RequireAuth";
import USER_ROLES from "../../Constants/USER_ROLES";

function RequireAdminPrivilege({ allowedRoles }) {
  const location = useLocation();
  const { userData } = useUserStore();
  const userRole = userData.role;
  const isAdmin = userData.isAdmin;
  const borrower = USER_ROLES.borrower;

  // Check if the user is authenticated and is an admin
  if (isAdmin || userRole != borrower) {
    return <RequireAuth allowedRoles={allowedRoles}/>;
  }

  if (!isAdmin || userRole === borrower) {
    return (
      <Navigate to="/unathorized" state={{ from: location }} replace />
    );
  }

  // Redirect or show an unauthorized page if the user is not authenticated or not an admin
  return <Navigate to="/" state={{ from: location }} replace />;
}

RequireAdminPrivilege.propTypes = {
  allowedRoles: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
};
export default RequireAdminPrivilege;
