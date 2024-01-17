import axios from "axios";
import { getPahiramToken } from "../Utils/HelperFunctions/UserStore/GetToken";
// import useUserStore from "../Store/UserStore";

const bearerToken = getPahiramToken();
export const PahiramAxiosConfig = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
  },
});

export const PahiramAxiosConfigLogin = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
