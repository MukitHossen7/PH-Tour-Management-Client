import config from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.base_url,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error.response);
    if (
      error.response.status === 500 &&
      error.response.data.message === "jwt expired"
    ) {
      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
);
