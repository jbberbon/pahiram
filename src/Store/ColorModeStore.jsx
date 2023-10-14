import { create } from 'zustand';

const useColorModeStore = create((set) => ({
    mode: "light", // Initial color mode
  
    toggleColorMode: () => {
      set((state) => ({ mode: state.mode === "light" ? "dark" : "light" }));
    },
  }));
  

export default useColorModeStore;