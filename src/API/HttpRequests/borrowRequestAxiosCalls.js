import { PahiramAxiosConfig } from "../PahiramAxiosConfig";
import { handleApiError } from "./handleApiError";

const bearerToken = "36|bKErnBI2rz0PiVD0Z0WV89aceScY4oFdNMT7T0JO068b5812";

// ----------> Axios calls
export const getRequest = async (endpoint) => {
  try {
    const response = await PahiramAxiosConfig.get(endpoint, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const postRequest = async (endpoint, requestBody) => {
  try {
    const response = await PahiramAxiosConfig.post(
      endpoint,
      {
        ...requestBody,
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    return handleApiError(error);
  }
};

export const patchRequest = async (endpoint, requestBody) => {
  try {
    const response = await PahiramAxiosConfig.patch(
      endpoint,
      {
        ...requestBody,
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const cancelRequest = async (endpoint) => {
  try {
    const response = await PahiramAxiosConfig.patch(
      endpoint,
      {},
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
