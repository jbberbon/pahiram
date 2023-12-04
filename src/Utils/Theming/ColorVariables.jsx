import { useTheme } from "@emotion/react";

function ColorVariables() {
  const theme = useTheme();
  const neutralMain = theme.palette.neutral.main;
  const neutralLight = theme.palette.neutral.light;
  const primaryMain = theme.palette.primary.main;

  return { neutralMain, neutralLight, primaryMain };
}

export default ColorVariables;
