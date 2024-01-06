import { Box, Typography, useTheme } from "@mui/material";
import useUserStore from "../../../Store/UserStore";
import ProfileAvatar from "../../ProfileAvatar/ProfileAvatar";
import useProfileStore from "../../../Store/ProfileStore";

function ProfileCard() {
  const theme = useTheme();
  // const cardColor = theme.palette.primary.main.replace("1)", "0.5)");
  // const cardColor = theme.palette.neutral.main.replace("1)", "0.1)");

  const cardColor = theme.palette.neutral.main.replace("1)", "0.1)");
  const hoverCardColor = theme.palette.primary.main.replace("1)", "0.2)");
  const darkerText = theme.palette.neutral.main;

  const { userData } = useUserStore();
  const userFullname = userData.firstName + " " + userData.lastName;
  const position = userData.email;

  const { handleProfileOpen } = useProfileStore();

  const openProfileModal = () => {
    handleProfileOpen();
  };

  return (
    <Box
      onClick={openProfileModal}
      display={"flex"}
      alignItems={"center"}
      // height={"72px"}
      gap={"16px"}
      margin={"16px 16px 16px 16px"}
      padding={"0 24px 0 16px"}
      backgroundColor={cardColor}
      borderRadius={"8px"}
      sx={{
        "&:hover": {
          "&:hover": {
            bgcolor: hoverCardColor,
          },
        },
      }}
    >
      <Box padding="16px 0 16px 0">
        <ProfileAvatar avatarSize={40} textSize="18px" />
      </Box>
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
          {userFullname}
        </Typography>
        <Typography
          variant="h6"
          noWrap={true}
          component={"span"}
          fontWeight={500}
          color={darkerText}
        >
          {position}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileCard;
