import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSidebarStore = create(
  persist(
    (set) => ({
      isOpen: true, // Initialize with the sidebar closed
      toggleSidebar: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      isOpenBorrowerMenu: false,
      toggleBorrowerMenu: () => {
        set((state) => ({ isOpenBorrowerMenu: !state.isOpenBorrowerMenu }));
      },

      isOpenManagementMenu: true,
      toggleManagementMenu: () => {
        set((state) => ({ isOpenManagementMenu: !state.isOpenManagementMenu }));
      },
    }),
    {
      name: "sidebar-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);
export default useSidebarStore;
