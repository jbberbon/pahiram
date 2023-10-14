import { Route, Routes } from "react-router-dom";

// Theme
import { useMode } from "./Contexts/theme";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Pages
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login/Login";

function App() {
  const [theme] = useMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="home" element={<MainPage selectedMenu="home" />} />
        <Route
          path="dashboard"
          element={<MainPage selectedMenu="dashboard" />}
        />
        <Route path="faq" element={<MainPage selectedMenu="faq" />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
