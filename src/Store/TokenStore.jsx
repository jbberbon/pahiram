import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTokenStore = create(
  persist(
    (set) => ({
      token: null, // Initial color mode

      setToken: (token) => {
        set({ token });
      },
    }),
    {
      name: "token-storage", // A unique name for the storage
      storage: createJSONStorage(() => sessionStorage), // Choose where to store the data
    }
  )
);

export default useTokenStore;
