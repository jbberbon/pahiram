export const getOfficeTransactionListEndpoint = "/office/borrow-transaction";

export const getSpecificTransactionEndpoint = (resourceId) =>
  `/office/borrow-transaction/${resourceId}`;

export const patchTransactionApprovalEndpoint = (resourceId) => {
  return `/office/borrow-transaction/${resourceId}/borrow-approval`;
};

export const patchItemReleaseEndpoint = (resourceId) => {
  return `/office/borrow-transaction/${resourceId}/release-item`;
};

export const patchItemReturnEndpoint = (resourceId) => {
  return `/office/borrow-transaction/${resourceId}/facilitate-item-return`;
};
