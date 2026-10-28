import { apiClient } from '@/global variables/apiClient';
import type { UserType } from '@/modules/profile/types/UserTypes';
import type { UpdateProfileDataType } from '@/modules/profile/types/UserTypes';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { BASE_URL } from '@/global variables/apiClient';

export const userService = {
  async getProfileData() {
    const response = await apiClient.get<UserType>('/users/me');
    return response;
  },

  async updateProfileData(userData: UpdateProfileDataType) {
    const response = await apiClient.patch<UserType>('/users/me', userData);
    return response;
  },

  async getUserById(id: string): Promise<UserType | null> {
      if (!BASE_URL) {
        throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
      }

      const response = await fetch(`${BASE_URL}/users/${id}`, {
        cache: 'no-store',
      });

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        const error = (await response.json().catch(() => null)) as Partial<ErrorResponseType> | null;
        throw new Error(
          error?.message ?? `Failed to load user "${id}" (HTTP ${response.status})`
        );
      }

      const user = await response.json();

      return user;
    },
};
