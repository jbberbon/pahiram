import { PahiramAxiosConfigLogin } from "../PahiramAxiosConfig";

import { loginEndpoint } from "../Endpoints/authEndpoints";
import { handleApiError } from "./handleApiError";

export const loginRequest = async (requestBody) => {
  try {
    const response = await PahiramAxiosConfigLogin.post(loginEndpoint, requestBody);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
