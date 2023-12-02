import { useLocation, Navigate } from "react-router-dom";
import useUserStore from "../../Store/UserStore";
import PropTypes from "prop-types";
import Layout from "../../Components/Layout/Layout";

function RequireAuth({ allowedRoles }) {
  const location = useLocation();
  const { userData, isAuthenticated } = useUserStore();
  const userRole = userData.role;

  if (isAuthenticated && allowedRoles.includes(userRole)) {
    return <Layout />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  // requireAdmin: PropTypes.bool.isRequired,
};

export default RequireAuth;
