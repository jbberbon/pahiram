import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useProfileStore from "../Store/ProfileStore";

function Profile() {
  const { isProfileOpen, handleProfileClose } = useProfileStore();

  return (
    <Dialog
      onClose={handleProfileClose}
      open={isProfileOpen}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Modal title
      </DialogTitle>
    </Dialog>
  );
}

export default Profile;
