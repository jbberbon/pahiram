import { useState } from "react";

import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Layout/Topbar/Topbar";
import Sidebar from "./Components/Layout/Sidebar/OfficeHeadSidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CssBaseline>
      <Box display={"flex"}>
        <Sidebar isCollapsed={isCollapsed} />
        <main className="content">
          <Topbar onCollapsed={onCollapsed} isCollapsed={isCollapsed} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </Box>
    </CssBaseline>
  );
}

export default App;
