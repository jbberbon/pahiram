import { create } from 'zustand';

const useColorModeStore = create((set) => ({
  isDarkMode: false, // Default to light mode

  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useColorModeStore;