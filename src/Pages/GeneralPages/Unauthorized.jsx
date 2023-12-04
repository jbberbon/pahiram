import { Box } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useUserStore from "../../Store/UserStore";
import userRoles from "../../Utils/Constants/USER_ROLES";

function Unauthorized() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogout } = useUserStore();

  const handleNavigateToLogin = () => {
    handleLogout();
    navigate("/login", { state: { from: location }, replace: true });
  };
  
  const { userData } = useUserStore();
  const borrower = userRoles.borrower;
  console.log(borrower)
  return (
    <Box flexGrow={1} pl={2}>
      Permission Denied
      <br />
      <Link to={userData.role === borrower ? "/borrow-items" : "/dashboard"}>Go back</Link>

      <br />
      <button onClick={handleNavigateToLogin}>Go back to login page</button>
    </Box>
  );
}

export default Unauthorized;
