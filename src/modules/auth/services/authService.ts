import { apiClient } from '@/global variables/apiClient';
import type {
  UserCreatedResponseType,
  RegistrationAndLogInParamsType,
  LogInResponseType,
} from '../types/AuthTypes';
import type { UserType } from '../types/AuthTypes';

export const authService = {
  async register({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<UserCreatedResponseType>('/auth/signup', {
      email,
      password,
    });

    return response;
  },

  async logIn({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<LogInResponseType>('/auth/login', {
      email,
      password,
    });

    return response;
  },

  async getUserDataByToken(token: string) {
    const response = await apiClient.post<UserType>('/auth/get-user-data-by-token', {
      token,
    });
    return response;
  },
};
