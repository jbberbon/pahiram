import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: {
    firstName: null,
    lastName: null,
    email: null,
    role: null,
  },
  setUserData: (data) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...data,
      },
    }),
  ),
  clearUserFields: () =>
    set({ userData: { firstName: null, lastName: null, email: null, role: null } }),
}));

export default useUserStore;
