export const getEndorsementList = "/user/endorsement";

export const getSpecificEndorsementEndpoint = (resourceId) =>
`/borrow-transaction/endorsed/${resourceId}`;


export const patchEndorsementApprovalEndpoint = (resourceId) => {
  return `/endorsement/${resourceId}/approval`;
};

// export const getBorrowResourceEndpoint = (resourceId) => {
//   const endpoint = `/user/borrow-request/${resourceId}`;
//   return endpoint;
// };

// export const getItemGroupBookedDates = (resourceId) => {
//   const endpoint = `/item-model/${resourceId}/booked-dates`;
//   return endpoint;
// };
// export const postBorrowRequestEndpoint = "/user/borrow-request/submit";

// export const cancelBorrowRequestEndpoint = (resourceId) => {
//   const endpoint = `/user/borrow-request/${resourceId}/cancel`;
//   return endpoint;
// };
