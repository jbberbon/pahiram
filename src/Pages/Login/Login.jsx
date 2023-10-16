// MUI
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

// Pages
import LoginForm from "./LoginForm";

// CSS Styles
import styles from "./login.module.css";
import Footer from "./Footer";

function Login() {
  const isCustom420 = useMediaQuery((theme) =>
    theme.breakpoints.down("custom420")
  );
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // Color theme
  const theme = useTheme();

  // Whole screen centering div
  const centerLoginPage = {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: `${theme.palette.secondary.login}`,
  };

  // Login Screen Styling
  const mainDivStyle = {
    display: "flex",
    flexDirection: `${isMd ? "column" : "row"}`,
    justifyContent: "center",
    alignItems: "center",

    maxWidth: `${isMd ? "480px" : "100%"}`,
    maxHeight: `${isCustom420 ? "100vh" : "640px"}`,
    height: "100%",
    bgcolor: `${isCustom420 ? "" : "background.login"}`,

    margin: `${isCustom420 ? "0" : "8%"}`,
    gap: `${isMd ? "16px" : "0"}`,
    borderRadius: `${isCustom420 ? "" : "16px"}`,
  };

  //Left Div Styling
  const imgDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: `${isMd ? "100%" : "50%"}`,
    height: "100%",

    borderRadius: `${isCustom420 ? "0 0 32px 32px" : "16px"}`,
    overflow: "hidden",
  };

  // Right Div Styling
  const rightDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: `${isMd ? "100%" : "50%"}`,
    maxHeight: "640px",
    padding: `${
      isMd && !isCustom420 //between 420px and 900px
        ? "0 8% 8% 8%"
        : isCustom420 //less than 420px
        ? "0 4% 8% 4%"
        : "32px"
    }`,
  };

  // Right - Second Layer Div Styling
  const rightSecondLayer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin: `${isMd ? "16px 0 16px 0" : "32px 0 32px 0"}`,
  };

  

  return (
    <div style={centerLoginPage}>
      <Box sx={mainDivStyle} className={styles.mainDiv} boxShadow={2}>
        {/* LEFT -------------------------- */}
        <Box sx={imgDiv}>
          <img src="./assets/login2.jpg" className={styles.loginImg} />
        </Box>

        {/* RIGHT ------------------------- */}
        <Box sx={rightDiv}>
          {/* Logo ----------- */}
          <Box sx={rightSecondLayer}>
            <Box display={"flex"} alignItems={"center"}>
              <span style={{ lineHeight: 1 }}>
                <DashboardRoundedIcon
                  style={{ fontSize: "2.5rem" }}
                  color="primary"
                />
              </span>
              <Typography
                variant="h1"
                component={"h1"}
                lineHeight={0.8}
                color="primary"
              >
                Pahiram
              </Typography>
            </Box>
            <Typography variant="h5" component={"span"} color="neutral.main">
              APC Equipment Lending System
            </Typography>
          </Box>

          {/* Form Section ---- */}
          <LoginForm />

          {/* Footer ---------- */}
          <Footer isMd={isMd} />
        </Box>
      </Box>
    </div>
  );
}

export default Login;
