import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import useUserStore from "../../Store/UserStore";
import userRoles from "../../Utils/Constants/USER_ROLES";

function Faq() {
  const { userData } = useUserStore();
  const borrower = userRoles.borrower; 
  return (
    <Box
      flexGrow={1}
      pl={2}
    >
      FAQS
      <br />
      <Link to={userData.role === borrower ? "/borrow-items" : "/dashboard"}>Go back</Link>

    </Box>
  );
}

export default Faq;
