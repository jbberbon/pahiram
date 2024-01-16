import { useMode } from "../../Contexts/theme";

function ColorVariables() {
  const [theme] = useMode();
  const neutralBackground = theme.palette.neutral.background;
  const neutralMain = theme.palette.neutral.main;
  const neutralLight = theme.palette.neutral.light;
  const primaryMain = theme.palette.primary.main;

  return { neutralMain, neutralLight, primaryMain, neutralBackground };
}

export default ColorVariables;
