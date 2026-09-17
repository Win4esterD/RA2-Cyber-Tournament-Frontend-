import type { UserRoleTypeEnum } from '@/global_types/UserTypes';

export type UserCreatedResponseType = {
  email: string;
  role: UserRoleTypeEnum;
};

export type RegistrationAndLogInParamsType = {
  email: string;
  password: string;
};

export type AccessTokenResponseType = {
  access_token: string;
};
