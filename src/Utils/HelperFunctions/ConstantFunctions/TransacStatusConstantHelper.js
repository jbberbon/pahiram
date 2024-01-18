import { TRANSAC_STATUSES } from "../../Constants/BackendConstants/TRANSAC_STATUSES";

export const getAllTransacStatus = () => TRANSAC_STATUSES;

// export const findTransacStatus = (status) => {
//   if (status) {
//     TRANSAC_STATUSES[status];
//   } else {
//     return null
//   }
// };

export const findTransacStatus = (status) => TRANSAC_STATUSES[status];
