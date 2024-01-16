import axios from "axios";

const bearerToken = "";
const ApcisAxiosConfig = axios.create({
  // baseURL: process.env.REACT_APP_APCIS,
  baseURL: "http://167.172.74.157/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer Token ${bearerToken}`,
  },
});

export default ApcisAxiosConfig;
