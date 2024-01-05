import Typography from "@mui/material/Typography";
import { useMode } from "../../../Contexts/theme";

import PropTypes from "prop-types";


const BorrowFormTitle = ({ isMd }) => {
  const [theme] = useMode();
  const secondaryMain = theme.palette.secondary.main;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: isMd ? "center" : "flex-start",
        width: "100%",
        backgroundColor: secondaryMain,
        padding: "16px",
      }}
    >
      <Typography
        component={"h1"}
        variant="h4"
        color={"white"}
        fontWeight={700}
      >
        Borrower`s Form
      </Typography>
    </div>
  );
};

BorrowFormTitle.propTypes = {
  isMd: PropTypes.any.isRequired,
};

export default BorrowFormTitle;
