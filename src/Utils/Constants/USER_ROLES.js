const USER_ROLES = {
  borrower: 1010,
  inventoryManager: 2020,
  lendingManager: 3030,
  coSupervisor: 4040,
  supervisor: 5050,
  // Admin is an attribute in DB
  // This is just for the FRONT END Menu option
  admin: 6060,
};

const getRoleConstants = () => USER_ROLES;

export default getRoleConstants;
