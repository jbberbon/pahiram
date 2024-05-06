import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import useTermsAndConditionStore from "../../Store/TermsAndConditionStore";

function Footer({ isMd }) {
  // Footer Styling
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    gap: "4px",
    marginTop: `${isMd ? "32px" : "54px"}`,
  };

  const { handleOpenTermsModal } = useTermsAndConditionStore();
  return (
    <Box sx={footerStyle} color="neutral.main">
      <Typography fontWeight={"700"} component={"span"}>
        The Polarber Group &copy; 2023
      </Typography>
      <Typography
        onClick={handleOpenTermsModal}
        sx={{
          cursor: "pointer",
        }}
      >
        Terms and Conditions
      </Typography>
    </Box>
  );
}

Footer.propTypes = {
  isMd: PropTypes.bool.isRequired,
};
export default Footer;
