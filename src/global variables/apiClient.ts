import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const onSuccess = function (response: AxiosResponse) {
  return response;
};

const onError = function (error: AxiosError) {
  return Promise.reject(error.response?.data ?? error);
};

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.response.use(onSuccess, onError);

export const apiCLientNotSecured = axios.create({
  baseURL: BASE_URL,
});

apiCLientNotSecured.interceptors.response.use(onSuccess, onError);
