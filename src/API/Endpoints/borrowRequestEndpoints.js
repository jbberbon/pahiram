export const getBorrowListEndpoint = "/user/borrow-request";

export const getBorrowResourceEndpoint = (resourceId) => {
  const endpoint = `/user/borrow-request/${resourceId}`;
  return endpoint;
};

export const getItemGroupBookedDates = (resourceId) => {
  const endpoint = `/item-model/${resourceId}/booked-dates`;
  return endpoint;
};
export const postBorrowRequestEndpoint = "/user/borrow-request/submit";

export const patchBorrowRequestEndpoint = (resourceId) => {
  const endpoint = `/user/borrow-request/${resourceId}/edit`;
  return endpoint;
};

export const cancelBorrowRequestEndpoint = (resourceId) => {
  const endpoint = `/user/borrow-request/${resourceId}/cancel`;
  return endpoint;
};
