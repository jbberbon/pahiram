import { BORROWED_ITEM_STATUSES } from "../../Constants/BackendConstants/BORROWED_ITEM_STATUSES";

export const getAllBorrowedItemStatus = () => BORROWED_ITEM_STATUSES;

export const findBorrowedItemStatus = (status) =>
  BORROWED_ITEM_STATUSES[status];
