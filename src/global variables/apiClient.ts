import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { tokenName } from '@/modules/auth/consts';

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

// Attach the auth token from cookie to every secured request
apiClient.interceptors.request.use((config) => {
  const token = Cookies.get(tokenName);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(onSuccess, onError);

export const apiCLientNotSecured = axios.create({
  baseURL: BASE_URL,
});

apiCLientNotSecured.interceptors.response.use(onSuccess, onError);
