import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useColorModeStore = create(
  persist(
    (set) => ({
      mode: "light", // Initial color mode

      toggleColorMode: () => {
        set((state) => ({ mode: state.mode === "light" ? "dark" : "light" }));
      },
    }),
    {
      name: "color-mode-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);

export default useColorModeStore;
