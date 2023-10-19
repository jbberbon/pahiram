import { create } from "zustand";

const useSelectedMenuStore = create((set) => ({
  index: 0, // Initialize with the default index 

  // Action to set menuIndex
  toggleSidebar: () => {
    set((index) => ({ menuIndex: index }));
  },
}));
export default useSelectedMenuStore;
