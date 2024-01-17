import axios from "axios";
import { getApcisToken } from "../Utils/HelperFunctions/UserStore/GetToken";

const bearerToken = getApcisToken();
const ApcisAxiosConfig = axios.create({
  // baseURL: process.env.REACT_APP_APCIS,
  baseURL: "http://167.172.74.157/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
  },
});

export default ApcisAxiosConfig;
