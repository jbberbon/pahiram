import { create } from 'zustand';

const useUserStore = create((set) => ({
  firstName: null,
  lastName: null,
  email: null,
  addFirstName: (firstName) => set(() => ({ firstName: firstName })),
  addLastName: (lastName) => set(() => ({ lastName: lastName })),
  addEmail: (email) => set(() => ({email: email})),
  clearUserFields: () => set({ firstName: null, lastName: null, email: null}),
}));

export default useUserStore;