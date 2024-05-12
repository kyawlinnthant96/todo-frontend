import axios, { AxiosError, AxiosHeaders, AxiosInstance } from 'axios';



export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const httpRequestInterceptor = (service: AxiosInstance) => {
  return service.interceptors.request.use(
    async (config) => {
      const info = JSON.parse(localStorage.info || "{}");

      if (info) {
        config.headers = config.headers as AxiosHeaders;
        config.headers.set("Authorization", `Bearer ${localStorage.token}`);
      }
      return config;
    },
    (error:AxiosError) => {
      return Promise.reject(error);
    },
  );
};

httpRequestInterceptor(apiClient);
