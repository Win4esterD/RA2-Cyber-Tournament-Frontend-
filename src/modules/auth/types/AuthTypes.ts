import type { UserType } from '@/modules/profile/types/UserTypes';

export type RegistrationParamsType = {
  email: string;
  name: string;
  password: string;
};

export type LogInParamsType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  access_token: string;
  user: UserType;
};

export type ResetPasswordParamsType = {
  token: string;
  newPassword: string;
};
