import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import USER_ROLES from "../Utils/Constants/USER_ROLES";
// import GenerateAvatarName from "../Utils/HelperFunctions/GenerateAvatarName";
// import axios from "axios";

const borrower = USER_ROLES.borrower;
const useUserStore = create(
  persist(
    (set) => ({
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        token: null,
      },
      isAuthenticated: false,

      // TESTING with no API
      handleLogin: (navigate) => {
        set({
          userData: {
            firstName: "John Christian",
            lastName: "Berbon",
            email: "jbberbon@student.apc.edu.ph",
            role: 1010,
            avatarName: "JC",
            token: null,
          },
          isAuthenticated: true,
        });

        const userRole = 1010;
        const navigateTo =
          userRole === borrower ? "/borrow-items" : "/dashboard";
        navigate(navigateTo);
      },

      // For TESTING with API
      // handleLogin: async (data, isRemembered, navigate) => {
      //   try {
      //     // !!!!!**** Uncomment when API is ready
      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     };

      //     const postData = {
      //       email: data.email,
      //       password: data.password,
      //       remember_me: isRemembered,
      //     };

      //     // console.log(postData);
      //     const response = await axios.post(
      //       "http://pahiram/api/login",
      //       JSON.stringify(postData),
      //       config
      //     );
      //     const responseData = response.data.data;
      //     set(() => ({
      //       userData: {
      //         firstName: responseData.user.firstName,
      //         lastName: responseData.user.lastName,
      //         email: responseData.user.email,
      //         role: responseData.user.user_role_id,
      //         avatarName: GenerateAvatarName(responseData.user.firstName, responseData.user.lastName)
      //         token: responseData.token.token,
      //       },
      //       isAuthenticated: true,
      //     }));
      //     console.log(response.data);
      //
      //     const userRole = responseData.role;
      //     const navigateTo =  userRole === borrower ? "/borrow-items" : "/dashboard";
      //     navigate(navigateTo);
      //   } catch (error) {
      //     console.log(error.response.data);
      //   }
      // },

      handleLogout: () =>
        set({
          userData: {
            firstName: null,
            lastName: null,
            email: null,
            role: null,
            token: null,
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
