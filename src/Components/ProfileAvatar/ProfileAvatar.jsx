import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import useUserStore from "../../Store/UserStore";

function ProfileAvatar({ avatarSize, textSize }) {
  const { userData } = useUserStore();
  return (
    <Avatar alt="Profile Avatar" sx={{ width: avatarSize, height: avatarSize, bgcolor: "primary.main" }}>
      <p style={{fontSize: textSize}}>{userData.avatarName}</p>
    </Avatar>
  );
}

ProfileAvatar.propTypes = {
  avatarSize: PropTypes.number.isRequired,
  textSize: PropTypes.string.isRequired
};

export default ProfileAvatar;
