import axios from "axios";
import { getPahiramToken } from "../Utils/HelperFunctions/UserStore/GetToken";
// import useUserStore from "../Store/UserStore";

const PahiramAxiosConfig = axios.create({
  baseURL: "http://3.26.231.193/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

PahiramAxiosConfig.interceptors.request.use(
  async (config) => {
    const bearerToken = await getPahiramToken();
    if (bearerToken) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const PahiramAxiosConfigLogin = axios.create({
  baseURL: "http://3.26.231.193/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export {PahiramAxiosConfig, PahiramAxiosConfigLogin };