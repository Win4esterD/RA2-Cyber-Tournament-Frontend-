export enum UserRoleTypeEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum RankTypeEnum {
  PRIVATE = 'Private',
  CORPORAL = 'Corporal',
  SERGEANT = 'Sergeant',
  LIEUTENANT = 'Lieutenant',
  MAJOR = 'Major',
  COLONEL = 'Colonel',
  BRIGADIER_GEN = 'Brigadier General',
  GENERAL = 'General',
  FIVE_STAR_GEN = 'Five_Star_General',
  COMMANDER_IN_CHIEF = 'Commander_in_chief',
}

export enum CardStyleTypeEnum {
  DEFAULT = 'default',
  SOVIET = 'soviet',
  ALLIED = 'allied',
  YURI = 'yuri',
  GOLDEN = 'golden',
  DARK = 'dark',
}

export type UserType = {
  name: string | null;
  id: number;
  email: string;
  password: string;
  role: UserRoleTypeEnum;
  createdAt: Date;
  wins: number;
  loses: number;
  gamesPlayed: number;
  tournamentsWon: number;
  rank: RankTypeEnum;
  about_user: string | null;
  card_style: CardStyleTypeEnum;
};

export type RegistrationAndLogInParamsType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  access_token: string;
  user: UserType;
};
