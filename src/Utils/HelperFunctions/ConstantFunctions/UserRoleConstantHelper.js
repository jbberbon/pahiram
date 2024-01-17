import { USER_ROLES } from "../../Constants/BackendConstants/USER_ROLES";

export const getAllRoles = () => USER_ROLES;

export const findRole = (role) => USER_ROLES[role];

export const getBorrowerKey = () => {
  const borrowerKey = Object.keys(USER_ROLES).find(
    (key) => USER_ROLES[key].role.toUpperCase() === "BORROWER"
  );

  return borrowerKey || null;
};
