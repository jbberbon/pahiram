import { TRANSAC_STATUSES } from "../../Constants/BackendConstants/TRANSAC_STATUSES";

export const getAllTransacStatus = () => TRANSAC_STATUSES;

export const findTransacStatus = (status) => TRANSAC_STATUSES[status];
