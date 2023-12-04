import { useMediaQuery } from "@mui/material";

function BreakpointVariables() {
  //   const theme = useTheme();
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const isCustom420 = useMediaQuery((theme) =>
    theme.breakpoints.down("custom420")
  );
  return { isSm, isMd, isLg, isXl, isCustom420 };
}

export default BreakpointVariables;
