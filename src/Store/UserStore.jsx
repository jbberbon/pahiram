import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import axios from "axios";

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

      handleLogin: async (data, isRemembered, navigate) => {
        try {
          // !!!!!**** Uncomment when API is ready
          // const postData = {
          //   email: data.email,
          //   password: data.password,
          //   rememberUser: isRemembered,
          // };
          // const response = await axios.post("your-api-endpoint", postData);
          // const userData = response.data;
          // console.log("API Response:", response.data);

          // set(() => ({
          //   userData: {
          //     firstName: userData.firstName,
          //     lastName: userData.lastName,
          //     email: userData.email,
          //     role: userData.role,
          //     token: userData.token,
          //   },
          //   isAuthenticated: true,
          // }));

          // Comment when API is Ready
          set(() => ({
            userData: {
              firstName: "Christian",
              lastName: "Berbon",
              email: "jbberbon@student.apc.edu.ph",
              role: "BORROWER",
              token: "TEST_TOKEN",
            },
            isAuthenticated: true,
          }));
          navigate("/dashboard");
        } catch (error) {
          console.error("API Error:", error);
        }
      },

      setIsAuthenticated: async (token) => {
        try {
          // Uncomment when API is ready
          // const postData = { token };
          // const response = await axios.post("your-api-endpoint", postData);
          // const data = response.data;
          // console.log("API Response:", response.data);

          // set({
          //   isAuthenticated: data.isAuthenticated,
          // });

          if (token) {
            set({
              isAuthenticated: true,
            });
          }
        } catch (error) {
          console.error("API Error:", error);
        }
      },

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
