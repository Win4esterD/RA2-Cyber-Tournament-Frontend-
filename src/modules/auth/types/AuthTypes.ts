import type { UserType } from '@/modules/profile/types/UserTypes';

export type RegistrationAndLogInParamsType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  access_token: string;
  user: Omit<UserType, 'pasword'>;
};
