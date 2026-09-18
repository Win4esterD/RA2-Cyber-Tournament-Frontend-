import type { UserRoleTypeEnum } from '@/modules/shared/global_types/UserTypes';

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
