import { apiClient } from '@/global variables/apiClient';
import type { UserType } from '@/modules/profile/types/UserTypes';
import type { UpdateProfileDataType } from '@/modules/profile/types/UserTypes';

export const userService = {
  async getProfileData() {
    const response = await apiClient.get<UserType>('/users/me');
    return response;
  },

  async updateProfileData(userData: UpdateProfileDataType) {
    const response = await apiClient.patch<UserType>('/users/me', userData);
    return response;
  },
};
