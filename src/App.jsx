// import { useEffect } from "react";

import { Route, Routes, Navigate } from "react-router-dom";

// Theme
import { useMode } from "./Contexts/theme";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Pages
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Faq from "./Pages/Faq";
import History from "./Pages/History";
import useUserStore from "./Store/UserStore";

function App() {
  const [theme] = useMode();
  const { isAuthenticated } = useUserStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
