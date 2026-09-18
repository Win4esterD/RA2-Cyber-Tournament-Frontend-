import { apiClient } from '@/global variables/apiClient';
import type {
  UserCreatedResponseType,
  RegistrationAndLogInParamsType,
  AccessTokenResponseType,
} from '../types/AuthTypes';
import type { UserType } from '@/modules/shared/global_types/UserTypes';

export const authService = {
  async register({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<UserCreatedResponseType>('/auth/signup', {
      email,
      password,
    });

    return response;
  },

  async logIn({ email, password }: RegistrationAndLogInParamsType) {
    const response = await apiClient.post<AccessTokenResponseType>('/auth/login', {
      email,
      password,
    });

    return response;
  },

  async validateToken(token: string) {
    const response = await apiClient.post<UserType>('/auth/validate-token', { token });
    return response;
  },
};
