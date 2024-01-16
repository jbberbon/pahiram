import { USER_ROLES } from "../../Constants/BackendConstants/USER_ROLES";

export const getAllRoles = () => USER_ROLES;

export const findRole = (role) => USER_ROLES[role];
