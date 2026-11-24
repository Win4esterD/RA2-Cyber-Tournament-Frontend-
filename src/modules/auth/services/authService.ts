import { apiClient } from '@/global variables/apiClient';
import type {
  RegistrationAndLogInParamsType,
  AuthResponseType,
  ResetPasswordParamsType,
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

  async forgotPassword(email: string) {
    const response = await apiClient.post<{ message: string }>('/auth/forgot-password', {
      email,
    });
    return response.data;
  },

  async validateResetPasswordToken(token: string) {
    const response = await apiClient.post<{ is_valid: boolean }>(
      '/auth/validate-reset-password-token',
      {
        token,
      },
    );
    return response.data;
  },

  async resetPassword({ token, newPassword }: ResetPasswordParamsType) {
    const response = await apiClient.post<{ success: true; message: string }>(
      '/auth/restore-password',
      {
        token,
        newPassword,
      },
    );
    return response.data;
  },
};
