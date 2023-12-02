import { useLocation, Navigate } from "react-router-dom";
import useUserStore from "../../Store/UserStore";
import PropTypes from "prop-types";

function RequireAdminPrivilege({ children }) {
  const location = useLocation();
  const { userData } = useUserStore();
  const isAdmin = userData.isAdmin;

  // Check if the user is authenticated and is an admin
  if (isAdmin) {
    return children;
  }

  if (!isAdmin) {
    return <Navigate to="/unauthenticated" state={{ from: location }} replace />;
  }

  // Redirect or show an unauthorized page if the user is not authenticated or not an admin
  return <Navigate to="/" state={{ from: location }} replace />;
}

RequireAdminPrivilege.propTypes = {
  children: PropTypes.any,
};
export default RequireAdminPrivilege;
