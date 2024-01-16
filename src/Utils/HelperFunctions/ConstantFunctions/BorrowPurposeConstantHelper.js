import { BORROW_PURPOSES } from "../../Constants/BackendConstants/BORROW_PURPOSES";

export const getAllPurpose = () => BORROW_PURPOSES;

export const findPurpose = (purpose) => BORROW_PURPOSES[purpose];
