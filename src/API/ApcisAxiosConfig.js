import axios from "axios";
import { getApcisToken } from "../Utils/HelperFunctions/UserStore/GetToken";

const ApcisAxiosConfig = axios.create({
  baseURL: "http://167.172.74.157/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor for the ApcisAxiosConfig
ApcisAxiosConfig.interceptors.request.use(
  async (config) => {
    const bearerToken = await getApcisToken();
    if (bearerToken) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApcisAxiosConfig;
