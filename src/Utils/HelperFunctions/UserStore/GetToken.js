// userStoreHelper.js

import useUserStore from "../../../Store/UserStore";


export const getApcisToken = () => {
  const { authData } = useUserStore.getState(); // Note: use getState to get the current state
  return authData?.apcisToken || null;
};

export const getPahiramToken = () => {
  const { authData } = useUserStore.getState(); // Note: use getState to get the current state
  return authData?.pahiramToken || null;
};
