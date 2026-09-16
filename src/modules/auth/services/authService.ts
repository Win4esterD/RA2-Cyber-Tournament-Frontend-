import { apiClient } from '@/global variables/apiClient';

export const authService = {
  async register({ email, password }: { email: string; password: string }) {
    const response = apiClient.post('/auth/signup', {
      email,
      password,
    });

    return response;
  },
};
