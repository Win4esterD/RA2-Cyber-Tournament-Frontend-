export enum UserRoleTypeEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum RankTypeEnum {
  PRIVATE = 'PRIVATE',
  CORPORAL = 'CORPORAL',
  SERGEANT = 'SERGEANT',
  LIEUTENANT = 'LIEUTENANT',
  MAJOR = 'MAJOR',
  COLONEL = 'COLONEL',
  BRIGADIER_GENERAL = 'BRIGADIER_GENERAL',
  GENERAL = 'GENERAL',
  FIVE_STAR_GENERAL = 'FIVE_STAR_GENERAL',
  COMMANDER_IN_CHIEF = 'COMMANDER_IN_CHIEF',
}

export enum CardStyleTypeEnum {
  DEFAULT = 'DEFAULT',
  SOVIET = 'SOVIET',
  ALLIED = 'ALLIED',
  YURI = 'YURI',
  GOLDEN = 'GOLDEN',
  DARK = 'DARK',
}

export type UserType = {
  name: string | null;
  id: number;
  email: string;
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

export type UpdateProfileDataType = {
  card_style: CardStyleTypeEnum;
  about_user: string | null;
  name: string | null;
};
