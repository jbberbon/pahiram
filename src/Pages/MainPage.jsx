import { useState } from "react";

// MUI
import { Box } from "@mui/material";

// Pages
import Topbar from "../Components/Layout/Topbar/Topbar";
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
import MainContent from "./MainContent";

function MainPage() {
  const [isOpen, setIsOpen] = useState(true);

  const onOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Box display={"flex"}>
      <Topbar onOpen={onOpen} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} onOpen={onOpen} />
      <MainContent isOpen={isOpen} />
    </Box>
  );
}

export default MainPage;
