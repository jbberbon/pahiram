import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color Design Tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // Dark Mode
        // Shade: Light to Dark
        //Text main color #F3F4F6 or rgba(243,244,246,1)
        // Yellow Color 500: "#E7B426" or rgba(231,180,38)
        neutral: {
          100: "rgba(243,244,246,1)",
          200: "#D6D9E1",
          300: "#C5C9D3",
          400: "#ADB3C2",
          500: "rgba(102,112,137,1)",
          600: "#51586C",
          700: "#363C49",
          800: "#", // Placeholder
          900: "#21242C",
        },
        primaryYellow: {
          100: "#FFF8E5",
          200: "#FCE7AE",
          300: "#F9DB8A",
          400: "#F6D064",
          500: "rgba(231,180,38,1)",
          600: "#C39105",
          700: "#A47903",
          800: "#6D5101",
          900: "#4D3A08",
        },
        primaryBlue: {
          100: "#EBEDFA",
          200: "#C6CDF1",
          300: "#ADB7EB",
          400: "#8593E0",
          500: "#3047C0",
          600: "#24358F",
          700: "#1A2666",
          800: "#0F173D",
          900: "#050814",
        },
        success: {
          100: "#F6FEFA",
          200: "#CBF7D9",
          300: "#90F3AC",
          400: "#73E88F",
          500: "#21CF66",
          600: "#4EA659",
          700: "#36783E",
          800: "#1D4623",
          900: "#0D2612",
        },
        warning: {
          100: "#FEF4E7",
          200: "#F5E0C1",
          300: "#EEC995",
          400: "#E9B772",
          500: "#DE9630",
          600: "#B0721C",
          700: "#845615",
          800: "#58390E",
          900: "#2C1D07",
        },
        error: {
          100: "#F9E2E1",
          200: "#F4CDCC",
          300: "#EDABAB",
          400: "#E68989",
          500: "#CF2C2B",
          600: "#A92423",
          700: "#7F1B1A",
          800: "#541212",
          900: "#2A0909",
        },
        message: {
          100: "#EAEFFB",
          200: "#CCDAF4",
          300: "#ABC1ED",
          400: "#89A8E6",
          500: "#2B62CF",
          600: "#214CA0",
          700: "#1A3C7F",
          800: "#122854",
          900: "#09142A",
        },
      }
    : {
        // LIGHT MODE
        // Shade: Dark to Light
        // Text main color #667089 or rgba(102,112,137)
        // Yellow Color 500: "#E7B426" or rgba(231,180,38)
        neutral: {
          100: "#21242C",
          200: "", //Placeholder
          300: "#363C49",
          400: "#51586C",
          500: "rgba(102,112,137,1)",
          600: "#ADB3C2",
          700: "#C5C9D3",
          800: "#D6D9E1",
          900: "#F3F4F6",
        },
        primaryYellow: {
          100: "#4D3A08",
          200: "#6D5101",
          300: "#A47903",
          400: "#C39105",
          500: "rgba(231,180,38,1)",
          600: "#F6D064",
          700: "#F9DB8A",
          800: "#FCE7AE",
          900: "#FFF8E5",
        },
        primaryBlue: {
          100: "#050814",
          200: "#0F173D", //Placeholder
          300: "#1A2666",
          400: "#24358F",
          500: "#3047C0",
          600: "#8593E0",
          700: "#ADB7EB",
          800: "#C6CDF1",
          900: "#EBEDFA",
        },
        success: {
          100: "#0D2612",
          200: "#1D4623",
          300: "#36783E",
          400: "#4EA659",
          500: "#21CF66",
          600: "#73E88F",
          700: "#90F3AC",
          800: "#CBF7D9",
          900: "#F6FEFA",
        },
        warning: {
          100: "#2C1D07",
          200: "#58390E",
          300: "#845615",
          400: "#B0721C",
          500: "#DE9630",
          600: "#E9B772",
          700: "#EEC995",
          800: "#F5E0C1",
          900: "#FEF4E7",
        },
        error: {
          100: "#2A0909",
          200: "#541212",
          300: "#7F1B1A",
          400: "#A92423",
          500: "#CF2C2B",
          600: "#E68989",
          700: "#EDABAB",
          800: "#F4CDCC",
          900: "#F9E2E1",
        },
        message: {
          100: "#09142A",
          200: "#122854",
          300: "#1A3C7F",
          400: "#214CA0",
          500: "#2B62CF",
          600: "#89A8E6",
          700: "#ABC1ED",
          800: "#CCDAF4",
          900: "#EAEFFB",
        },
      }),
});

const breakpoints = {
  values: {
    xs: 0, // Extra small devices (portrait phones, less than 600px)
    custom420: 420, // Custom 400 width
    sm: 600, // Small devices (landscape phones, 600px and up)
    md: 960, // Medium devices (tablets, 960px and up)
    lg: 1280, // Large devices (desktops, 1280px and up)
    xl: 1920, // Extra large devices (large desktops, 1920px and up)
    // Add more breakpoints as needed
  },
};

// MUI Theme Settings
const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // MUI Palette for Dark Mode
            primary: {
              main: colors.primaryYellow[500],
              light: colors.primaryYellow[100],
            },
            secondary: {
              main: colors.primaryBlue[500],
              login: colors.primaryBlue[900],
            },
            neutral: {
              dark: colors.neutral[100],
              main: colors.neutral[100],
              light: colors.neutral[900],
            },
            background: {
              default: colors.neutral[900],
              login: colors.neutral[900],
            },
          }
        : {
            // MUI Palette for Light Mode
            primary: {
              main: colors.primaryYellow[500],
              light: colors.primaryYellow[100],
            },
            secondary: {
              main: colors.primaryBlue[500],
              login: "#F9F9FB",
            },
            success: {
              light: colors.success[100],
              main: colors.success[500],
              dark: colors.success[900],
            },
            warning: {
              light: colors.warning[100],
              main: colors.warning[500],
              dark: colors.warning[900],
            },
            error: {
              light: colors.error[100],
              main: colors.error[500],
              dark: colors.error[900],
            },
            neutral: {
              dark: colors.neutral[400],
              main: colors.neutral[500],
              light: colors.neutral[900],
            },
            background: {
              default: colors.neutral[900],
              login: "white",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      button: { textTransform: "none" },
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.5rem",
        fontWeight: "700",
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2rem",
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.5rem",
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.25rem",
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1rem",
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "0.875rem",
      },
    },
    breakpoints: breakpoints,
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      //For the dark mode slider / button
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
