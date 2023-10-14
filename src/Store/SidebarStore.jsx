import { create } from "zustand";

const useSidebarStore = create((set) => ({
  isOpen: false, // Initialize with the sidebar closed

  // Action to toggle the sidebar
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStore;
