import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false, // Initialize with the user unauthenticated

      setIsAuthenticated: (value) => {
        set({ isAuthenticated: value });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useAuthStore;
