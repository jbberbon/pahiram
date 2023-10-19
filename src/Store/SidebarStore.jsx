import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSidebarStore = create(
  persist(
    (set) => ({
      isOpen: false, // Initialize with the sidebar closed

      // Action to toggle the sidebar
      toggleSidebar: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },
    }),
    {
      name: "sidebar-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);
export default useSidebarStore;
