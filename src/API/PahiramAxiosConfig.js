import axios from "axios";
// import useUserStore from "../Store/UserStore";

// const bearerToken = userData?.pahiramToken;
export const PahiramAxiosConfig = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer Token ${bearerToken}`
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
