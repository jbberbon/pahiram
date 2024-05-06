import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTermsAndConditionStore = create(
  persist(
    (set) => ({
      isTermsModalOpen: true,

      // Action to toggle the terms modal
      handleCloseTermsModal: () => {
        set({ isTermsModalOpen: false });
      },
      handleOpenTermsModal: () => {
        set({ isTermsModalOpen: true });
      },
    }),
    {
      name: "terms-and-conditions-storage", // Corrected store name
      storage: createJSONStorage(() => localStorage), // Corrected method to create JSON storage
    }
  )
);

export default useTermsAndConditionStore;
