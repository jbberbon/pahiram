import { useState } from "react";
import { ColorModeContext, useMode } from "./Contexts/theme";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Layout/Topbar/Topbar";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import BorrowerSidebarItems from "./Data/SidebarItems/BorrowerSidebarItems";

function App() {
  const [theme, colorMode] = useMode();
  const [isOpen, setIsOpen] = useState(true);
  const onOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  //Responsive sht, use ZustandStore Later
  // const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // const isMd = useMediaQuery(theme.breakpoints.down("md"));
  // const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display={"flex"}>
          <Topbar onOpen={onOpen} isOpen={isOpen} />
          <Sidebar isOpen={isOpen} onOpen={onOpen}>
            <BorrowerSidebarItems />
          </Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard isOpen={isOpen} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
