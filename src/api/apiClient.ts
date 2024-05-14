import axios, { AxiosError, AxiosHeaders, AxiosInstance } from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const httpRequestInterceptor = (service: AxiosInstance) => {
  return service.interceptors.request.use(
    async (config) => {
      const info = JSON.parse(localStorage.info || '{}');
      console.log(localStorage.token);
      if (info) {
        config.headers = config.headers as AxiosHeaders;
        config.headers.set('Authorization', `Bearer ${localStorage.token?.replace(/"/g, '')}`);
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
};

httpRequestInterceptor(apiClient);
