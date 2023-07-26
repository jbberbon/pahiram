import { Avatar, Box, Typography, useTheme } from "@mui/material";

function ProfileCard() {
  const theme = useTheme();
  const backgroundColor = theme.palette.neutral.main.replace("1)", "0.1)");
  const darkerText = theme.palette.neutral.dark;
  const mainText = theme.palette.neutral.main;


  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      height={"72px"}
      gap={"16px"}
      margin={"16px 16px 16px 16px"}
      padding={"0 16px 0 16px"}
      backgroundColor={backgroundColor}
      borderRadius={"8px"}
    >
      <Avatar sx={{ width: "40px", height: "40px" }} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        <Typography
          variant="h6"
          component={"span"}
          fontWeight={700}
          noWrap={true}
          color={darkerText}
        >
          John Christian B.
        </Typography>
        <Typography variant="h6" component={"span"} color={mainText}>
          Executive Director
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileCard;
