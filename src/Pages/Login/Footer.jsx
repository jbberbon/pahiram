import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Footer({ isMd }) {
  // Footer Styling
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: "4px",
    marginTop: `${isMd ? "32px" : "54px"}`,
  };
  return (
    <Box sx={footerStyle} color="neutral.main">
      <Typography fontWeight={"700"} component={"span"}>
        The Polarber Group
      </Typography>
      <Typography component={"span"}>&copy; 2023</Typography>
    </Box>
  );
}

Footer.propTypes = {
  isMd: PropTypes.bool.isRequired,
};
export default Footer;
