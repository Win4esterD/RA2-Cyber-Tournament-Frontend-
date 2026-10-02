import { apiClient } from '@/global variables/apiClient';
import type { UserType } from '@/modules/auth/types/AuthTypes';

export const userService = {
  async getUser() {
    const response = await apiClient.get<Omit<UserType, 'password'>>('/users/me');
    return response;
  },
};
