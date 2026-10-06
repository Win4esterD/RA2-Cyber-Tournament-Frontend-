import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCard } from '@/modules/profile/components/UserCard/UserCard';
import {
  CardStyleTypeEnum,
  UserRoleTypeEnum,
  RankTypeEnum,
} from '@/modules/profile/types/UserTypes';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;
const {
  PRIVATE,
  CORPORAL,
  SERGEANT,
  LIEUTENANT,
  MAJOR,
  COLONEL,
  BRIGADIER_GENERAL,
  GENERAL,
  FIVE_STAR_GENERAL,
  COMMANDER_IN_CHIEF,
} = RankTypeEnum;

const defaultProfileData = {
  id: 1,
  card_style: DEFAULT,
  role: UserRoleTypeEnum.USER,
  name: 'Pavel',
  email: 'any_email@mail.ru',
  createdAt: new Date(),
  tournamentsWon: 5,
  loses: 10,
  gamesPlayed: 35,
  wins: 25,
  rank: PRIVATE,
  about_user: 'Legendary champion',
};

export const Primary = {
  args: {
    profileData: defaultProfileData,
  },
} satisfies Story;

export const Soviet = {
  args: {
    profileData: {
      ...defaultProfileData,
      card_style: SOVIET,
    },
  },
};

export const Allied = {
  args: {
    profileData: {
      ...defaultProfileData,
      card_style: ALLIED,
    },
  },
};

export const Yuri = {
  args: {
    profileData: {
      ...defaultProfileData,
      card_style: YURI,
    },
  },
};

export const Golden = {
  args: {
    profileData: {
      ...defaultProfileData,
      card_style: GOLDEN,
    },
  },
};

export const Dark = {
  args: {
    profileData: {
      ...defaultProfileData,
      card_style: DARK,
    },
  },
};

export const RankPrivate = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: PRIVATE,
    },
  },
} satisfies Story;

export const RankCorporal = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: CORPORAL,
    },
  },
} satisfies Story;

export const RankSergeant = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: SERGEANT,
    },
  },
} satisfies Story;

export const RankLieutenant = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: LIEUTENANT,
    },
  },
} satisfies Story;

export const RankMajor = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: MAJOR,
    },
  },
} satisfies Story;

export const RankColonel = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: COLONEL,
    },
  },
} satisfies Story;

export const RankBrigadierGen = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: BRIGADIER_GENERAL,
    },
  },
} satisfies Story;

export const RankGeneral = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: GENERAL,
    },
  },
} satisfies Story;

export const RankFiveStarGen = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: FIVE_STAR_GENERAL,
    },
  },
} satisfies Story;

export const RankCommanderInChief = {
  args: {
    profileData: {
      ...defaultProfileData,
      rank: COMMANDER_IN_CHIEF,
    },
  },
} satisfies Story;
