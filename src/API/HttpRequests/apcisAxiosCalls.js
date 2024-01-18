import ApcisAxiosConfig from "../ApcisAxiosConfig";
import { handleApiError } from "./handleApiError"

export const getApcisRequest = async(endpoint) => {
    try {
        const response = await ApcisAxiosConfig.get(endpoint);
        return response?.data;
    } catch (error) {
        handleApiError(error);
    }
}