import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import GenerateAvatarName from "../Utils/HelperFunctions/UserStore/GenerateAvatarName";

const useUserStore = create(
  persist(
    (set) => ({
      userData: {
        avatarName: "",
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        office: "",
        role: "",
        isAdmin: false,
      },
      authData: {
        isAuthenticated: false,
        apcisToken: null,
        pahiramToken: null,
      },
      setAuthDataAndUserData: (response) => {
        set({
          userData: {
            avatarName: GenerateAvatarName(
              response?.user?.first_name,
              response?.user?.last_name
            ),
            firstName: response?.user?.first_name,
            lastName: response?.user?.last_name,
            fullName: [response?.user?.first_name, response?.user?.last_name]
              .filter(Boolean)
              .join(" "),
            email: response?.user?.email,
            office: response?.user?.department_code,
            role: response?.user?.role,
            isAdmin: response?.user?.is_admin,
          },
          authData: {
            isAuthenticated: true,
            apcisToken: response?.apcis_token,
            pahiramToken: response?.pahiram_token,
          },
        });
      },

      handleLogout: () =>
        set({
          userData: {
            avatarName: "",
            firstName: "",
            lastName: "",
            email: "",
            office: "",
            role: "",
            isAdmin: "",
          },
          authData: {
            isAuthenticated: false,
            apcisToken: "",
            pahiramToken: "",
          },
        }),
    }),
    {
      name: "user-storage", // A unique name for the storage
      storage: createJSONStorage(() => localStorage), // Choose where to store the data
    }
  )
);

export default useUserStore;
