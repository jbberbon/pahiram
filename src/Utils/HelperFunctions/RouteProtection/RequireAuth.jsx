import { useLocation, Navigate } from "react-router-dom";
import useUserStore from "../../../Store/UserStore";
import PropTypes from "prop-types";
import Layout from "../../../Components/Layout/Layout";

function RequireAuth({ allowedRoles }) {
  const location = useLocation();
  const { userData, authData } = useUserStore();
  const isAuthenticated = authData?.isAuthenticated;

  if (isAuthenticated && allowedRoles.includes(userData?.role)) {
    return <Layout />;
  }
  if (isAuthenticated) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  // requireAdmin: PropTypes.bool.isRequired,
};

export default RequireAuth;
