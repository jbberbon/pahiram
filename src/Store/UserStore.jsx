import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null, // Initialize with no user

  // Action to add a user
  addUser: (user) => set({ user }),

  // Action to delete the user
  deleteUser: () => set({ user: null }),
}));

export default useUserStore;
