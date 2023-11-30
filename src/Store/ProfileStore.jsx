import { create } from "zustand";

const useProfileStore = create((set) => ({
  isProfileOpen: false, // Initialize with the dialog closed

  // Action to toggle the profile dialog
  handleProfileOpen: () => {
    set({ isProfileOpen: true });
  },
  handleProfileClose: () => {
    set({ isProfileOpen: false });
  },
}));
export default useProfileStore;
