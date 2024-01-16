import { ITEM_STATUSES } from "../../Constants/BackendConstants/ITEM_STATUSES";

export const getAllItemStatus = () => ITEM_STATUSES;

export const findItemStatus = (status) => ITEM_STATUSES[status];
