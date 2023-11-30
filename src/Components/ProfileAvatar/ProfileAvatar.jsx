import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import useUserStore from "../../Store/UserStore";

function ProfileAvatar({ size }) {
  const { userData } = useUserStore();
  return (
    <Avatar alt="Profile Avatar" sx={{ width: size, height: size, bgcolor: "primary.main" }}>
      {userData.avatarName}
    </Avatar>
  );
}

ProfileAvatar.propTypes = {
  size: PropTypes.number.isRequired,
};

export default ProfileAvatar;
