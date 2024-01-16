import { OFFICES } from "../../Constants/BackendConstants/OFFICE";

export const getAllOffice = () => OFFICES;

export const findOffice = (acronym) => OFFICES[acronym];
