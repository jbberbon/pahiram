// Theme
import { ColorModeContext, useMode } from "./Contexts/theme";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Pages
// import MainPage from "./Pages/MainPage"; 
import Login from "./Pages/Login/Login";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <MainPage /> */}
        <Login />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
