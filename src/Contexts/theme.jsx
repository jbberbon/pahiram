import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color Design Tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        //Default text color when in dark mode #f7f7f7
        gray: {
          100: "#f7f7f7",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#637381",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1f2a40",
          500: "#141b2d",
          600: "#f2f0f0",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        yellowAccent: {
          100: "#ffeecc",
          200: "#ffdd99",
          300: "#ffcd66",
          400: "#ffbc33",
          500: "#ffab00",
          600: "#cc8900",
          700: "#996700",
          800: "#664400",
          900: "#332200",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        //Text main color #5a6976
        //Try to switch back to #637381 later
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#5a6976",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        yellowAccent: {
          100: "#332200",
          200: "#664400",
          300: "#996700",
          400: "#cc8900",
          500: "#ffab00",
          600: "#ffbc33",
          700: "#ffcd66",
          800: "#ffdd99",
          900: "#ffeecc",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

const breakpoints = {
  values: {
    xs: 0, // Extra small devices (portrait phones, less than 600px)
    sm: 600, // Small devices (landscape phones, 600px and up)
    md: 960, // Medium devices (tablets, 960px and up)
    lg: 1280, // Large devices (desktops, 1280px and up)
    xl: 1920, // Extra large devices (large desktops, 1920px and up)
    // Add more breakpoints as needed
  },
}

// MUI Theme Settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // MUI Palette for Dark Mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[100],
              // light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // MUI Palette for Light Mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.5rem",
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
        color: tokens(mode).gray[500],
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
  const [mode, setMode] = useState("dark");

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
