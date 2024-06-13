import router from "@/router";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // @ts-ignore
      if (error?.response?.status === 401) {
        localStorage.clear();
        router.push({ name: "signin" });
      }
      return Promise.reject(error);
    }
);

export default api;
