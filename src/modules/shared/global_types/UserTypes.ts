export enum UserRoleTypeEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export type UserType = {
  id: number;
  email: string;
  name: string | null;
  role: UserRoleTypeEnum;
  createdAt: string;
}