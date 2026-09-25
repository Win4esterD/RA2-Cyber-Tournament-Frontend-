export enum UserRoleTypeEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export type UserType = {
  id: number;
  email: string;
  name: string | null;
  role: UserRoleTypeEnum;
  createdAt: string;
};


export type RegistrationAndLogInParamsType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  access_token: string;
  user: UserType;
};
