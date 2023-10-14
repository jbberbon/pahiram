// MUI
import { Box } from "@mui/material";

// Pages
import Topbar from "../Components/Layout/Topbar/Topbar";
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
import MainContent from "./MainContent";

import PropTypes from "prop-types";


function MainPage({ selectedMenu }) {
  return (
    <Box display={"flex"}>
      <Topbar />
      <Sidebar />
      <MainContent selectedMenu={selectedMenu}/>
    </Box>
  );
}

MainPage.propTypes = {
  selectedMenu: PropTypes.string.isRequired
};

export default MainPage;
