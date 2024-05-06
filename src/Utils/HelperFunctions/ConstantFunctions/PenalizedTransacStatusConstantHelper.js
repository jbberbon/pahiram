import { PENALIZED_TRANSAC_STATUSES } from "../../Constants/BackendConstants/PENALIZED_TRANSAC_STATUSES";

export const getAllPenalizedTransacStatus = () => PENALIZED_TRANSAC_STATUSES;

export const findPenalizedTransacStatus = (status) =>
  PENALIZED_TRANSAC_STATUSES[status];

export const getPendingPaymentStatus = () => {
  for (const key of Object.keys(PENALIZED_TRANSAC_STATUSES)) {
    if (key === "PENDING_PAYMENT") {
      return key;
    }
  }
  return null;
};

export const getPaidStatus = () => {
  for (const key of Object.keys(PENALIZED_TRANSAC_STATUSES)) {
    if (key === "PAID") {
      return key;
    }
  }
  return null;
};

export const getUnpaidStatus = () => {
  for (const key of Object.keys(PENALIZED_TRANSAC_STATUSES)) {
    if (key === "UNPAID") {
      return key;
    }
  }
  return null;
};

export const getSettledStatus = () => {
  for (const key of Object.keys(PENALIZED_TRANSAC_STATUSES)) {
    if (key === "SETTLED") {
      return key;
    }
  }
  return null;
};
