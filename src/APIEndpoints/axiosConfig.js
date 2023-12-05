import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_PAHIRAM_BACKEND,
  timeout: 5000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
