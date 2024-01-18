import { BORROW_PURPOSES } from "../../Constants/BackendConstants/BORROW_PURPOSES";

export const getAllPurpose = () => {
  return Object.values(BORROW_PURPOSES);
};

export const findPurpose = (purpose) => BORROW_PURPOSES[purpose];
