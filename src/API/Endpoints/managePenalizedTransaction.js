export const getPenalizedTransacListEndpoint = "/penalized-transaction";

export const getSpecificPenalizedTransacEndpoint = (resourceId) =>
  `${getPenalizedTransacListEndpoint}/${resourceId}`;

export const patchPayPenaltyEndpoint = (resourceId) => {
  return `/penalized-transaction/${resourceId}/mark-as-paid`;
};
