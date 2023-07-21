import { useState } from "react";
import { ColorModeContext, useMode } from "./Contexts/theme";

import { Box, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Layout/Topbar/Topbar";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import BorrowerSidebarItems from "./Data/SidebarItems/BorrowerSidebarItems";

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onCollapsed = () => {
    setIsCollapsed(!isCollapsed);
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
          <Topbar onCollapsed={onCollapsed} isCollapsed={isCollapsed} />
          <Sidebar isCollapsed={isCollapsed}>
            <BorrowerSidebarItems />
          </Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard isCollapsed={isCollapsed} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
