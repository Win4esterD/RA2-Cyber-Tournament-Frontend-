export enum BracketTypeEnum {
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  DOUBLE_ELIMINATION = 'DOUBLE_ELIMINATION',
}

export enum TournamentStatusTypeEnum {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
}

export type CreateTournamentType = {
  title: string;
  description: string;
  startDate: Date;
  bracketsFormat: BracketTypeEnum;
  streamUrl?: string;
};

export type TournamentType = {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  status: TournamentStatusTypeEnum;
  bracketsFormat: BracketTypeEnum;
  streamUrl: null | string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  bracketsWereCreated: boolean;
  rules: null | string;
};
