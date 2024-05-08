import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
// import useUserStore from "../../Store/UserStore";
import styles from "./login.module.css";

function Login() {
  /*
   * Logic ---------------------------------------------------------------
   */
  // UNCOMMENT IF API IS READY
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const { userData } = useUserStore();
  // const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  // const token = userData.token;

  // !!! *** Uncomment if API is READY
  // useEffect(() => {
  //   // Make an API request to validate the token
  //   if (token) {
  //     fetch("/api/isAuthenticated", {
  //       method: "POST", // or 'GET' depending on your server's API
  //       headers: {
  //         "Content-Type": "application/json",
  //         // You may include an Authorization header for token-based authentication
  //         // 'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ token }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.isAuthenticated) {
  //           setIsAuthenticated(true);
  //         } else {
  //           setIsAuthenticated(false);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error validating token:", error);
  //         setIsAuthenticated(false);
  //       });
  //   }
  // }, [token]);

  // For now, if token is not null, set is authenticated to true
  // Delete later
  // if (token) {
  //   setIsAuthenticated(true);
  // }

  /*
   * THEMING && CSS --------------------------------------------------------
   */
  // MUI Breakpoints
  const isCustom420 = useMediaQuery((theme) =>
    theme.breakpoints.down("custom420")
  );
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // Color theme
  const theme = useTheme();

  // Whole screen centering div
  const backgroundColor = {
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
    <div style={backgroundColor} className={styles.centerLoginPage}>
      <Box sx={mainDivStyle} className={styles.mainDiv} boxShadow={2}>
        {/* LEFT -------------------------- */}
        <Box sx={imgDiv}>
          <img
            src="./public/assets/login2.jpg"
            className={styles.loginImg}
            alt="Cat taking a selfie"
          />
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
