import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        office: null,
        role: null,
        isAdmin: null,
        apcisToken: null,
        pahiramToken: null,
      },
      isAuthenticated: false,

      setUserData: (response) => {
        set({
          userData: {
            firstName: response?.user?.first_name,
            lastName: response?.user?.last_name,
            email: response?.user?.email,
            office: response?.user?.department_code,
            role: response?.user?.role_code,
            isAdmin: response?.user?.is_admin,
            avatarName: "CC",
            apcisToken: response?.apcis_token,
            pahiramToken: response?.pahiram_token,
          },
          isAuthenticated: true,
        });
      },

      handleLogout: () =>
        set({
          userData: {
            firstName: null,
            lastName: null,
            email: null,
            office: null,
            role: null,
            isAdmin: null,
            avatarName: null,
            apcisToken: null,
            pahiramToken: null,
          },
          isAuthenticated: false,
        }),
    }),
    {
      name: "user-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);

export default useUserStore;
