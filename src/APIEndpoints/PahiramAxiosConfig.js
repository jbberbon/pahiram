import axios from "axios";

const PahiramAxiosConfig = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 5000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default PahiramAxiosConfig;
