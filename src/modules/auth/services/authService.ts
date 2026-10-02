import { apiClient } from '@/global variables/apiClient';
import type {
  RegistrationAndLogInParamsType,
  AuthResponseType,
} from '../types/AuthTypes';

export const authService = {
  async register({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<AuthResponseType>('/auth/signup', {
      email,
      password,
    });

    return response;
  },

  async logIn({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<AuthResponseType>('/auth/login', {
      email,
      password,
    });

    return response;
  },
};
