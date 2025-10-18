import axios, { type AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:9090/api",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default axiosInstance;
