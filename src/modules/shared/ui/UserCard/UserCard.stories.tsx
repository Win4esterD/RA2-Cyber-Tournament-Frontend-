import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCard } from '@/modules/shared/ui/UserCard/UserCard';
import { CardStyleTypeEnum, UserRoleTypeEnum, RankTypeEnum } from '@/modules/auth';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;

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
  rank: RankTypeEnum.PRIVATE,
  about_user: 'LEgendary champion',
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
