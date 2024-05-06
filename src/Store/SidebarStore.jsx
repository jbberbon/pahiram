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

      isOpenAdminMenu: false,
      toggleAdminMenu: () => {
        set((state) => ({ isOpenAdminMenu: !state.isOpenAdminMenu }));
      },

      isOpenEndorserMenu: false,
      toggleEndorserMenu: () => {
        set((state) => ({ isOpenEndorserMenu: !state.isOpenEndorserMenu }));
      },

      isOpenManagementMenu: true,
      toggleManagementMenu: () => {
        set((state) => ({ isOpenManagementMenu: !state.isOpenManagementMenu }));
      },
      isOpenFinanceMenu: true,
      toggleFinanceMenu: () => {
        set((state) => ({ isOpenFinanceMenu: !state.isOpenFinanceMenu }));
      },
    }),
    {
      name: "sidebar-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);
export default useSidebarStore;
