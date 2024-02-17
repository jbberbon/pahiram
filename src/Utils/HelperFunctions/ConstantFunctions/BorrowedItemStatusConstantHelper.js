import { BORROWED_ITEM_STATUSES } from "../../Constants/BackendConstants/BORROWED_ITEM_STATUSES";

export const getAllBorrowedItemStatus = () => BORROWED_ITEM_STATUSES;

export const findBorrowedItemStatus = (status) =>
  BORROWED_ITEM_STATUSES[status];

export const getPendingBorrowedItemStatus = () => {
  // Iterate over the keys of the BORROWED_ITEM_STATUSES object
  for (const key of Object.keys(BORROWED_ITEM_STATUSES)) {
    // Check if the current key is associated with "Pending Endorser Approval"
    if (key === "PENDING_APPROVAL") {
      return key;
    }
  }
  return null;
};

export const getCancelledStatus = () => {
  // Iterate over the keys of the BORROWED_ITEM_STATUSES object
  for (const key of Object.keys(BORROWED_ITEM_STATUSES)) {
    // Check if the current key is associated with "Pending Endorser Approval"
    if (key === "CANCELLED") {
      return key;
    }
  }
  return null;
};

export const getApprovedStatus = () => {
  // Iterate over the keys of the BORROWED_ITEM_STATUSES object
  for (const key of Object.keys(BORROWED_ITEM_STATUSES)) {
    // Check if the current key is associated with "Pending Endorser Approval"
    if (key === "APPROVED") {
      return key;
    }
  }
  return null;
};

export const getInPossessionStatus = () => {
  // Iterate over the keys of the BORROWED_ITEM_STATUSES object
  for (const key of Object.keys(BORROWED_ITEM_STATUSES)) {
    // Check if the current key is associated with "Pending Endorser Approval"
    if (key === "IN_POSSESSION") {
      return key;
    }
  }
  return null;
};

export const getReturnedBorrowedItemStatus = () => {
  // Iterate over the keys of the BORROWED_ITEM_STATUSES object
  for (const key of Object.keys(BORROWED_ITEM_STATUSES)) {
    // Check if the current key is associated with "Pending Endorser Approval"
    if (key === "RETURNED") {
      return key;
    }
  }
  return null;
};
