import { PahiramAxiosConfig } from "../PahiramAxiosConfig";
import { handleApiError } from "./handleApiError";

// ----------> Axios calls
export const getRequest = async (endpoint) => {
  try {
    const response = await PahiramAxiosConfig.get(endpoint);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const postRequest = async (endpoint, requestBody) => {
  try {
    const response = await PahiramAxiosConfig.post(endpoint, {
      ...requestBody,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    return handleApiError(error);
  }
};

export const patchRequest = async (endpoint, requestBody) => {
  try {
    const response = await PahiramAxiosConfig.patch(endpoint, {
      ...requestBody,
    });
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const cancelRequest = async (endpoint) => {
  try {
    const response = await PahiramAxiosConfig.patch(endpoint, {});
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
