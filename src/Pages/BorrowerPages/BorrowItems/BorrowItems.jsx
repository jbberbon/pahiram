import { Box, Button } from "@mui/material";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";

// import PropTypes from "prop-types";

function BorrowItems() {
  const condition = false;
  const full = "100vh";
  const half = "50vh";
  return (
    <MainDisplayLayout>
      <Box
        sx={{ bgcolor: "neutral.background", height: condition ? full : half }}
        display="flex"
        flexDirection="column"
      >
        Hello world
        <Button onClick={() => console.log("button Clicked")}>Button</Button>
      </Box>
    </MainDisplayLayout>
  );
}

// Dashboard.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };s

export default BorrowItems;
