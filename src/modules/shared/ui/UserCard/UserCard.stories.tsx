import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCard } from '@/modules/shared/ui/UserCard/UserCard';
import { CardStyleTypeEnum, UserRoleTypeEnum, RankTypeEnum } from '@/modules/auth';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;

export const Primary = {
  args: {
    // background: DEFAULT,
    profileData: {
      id: 1,
      card_style: DEFAULT,
      role: UserRoleTypeEnum.USER,
      name: null,
      email: 'any_email@mail.ru',
      createdAt: new Date(),
      tournamentsWon: 0,
      loses: 0,
      gamesPlayed: 0,
      wins: 0,
      rank: RankTypeEnum.PRIVATE,
      about_user: '',
    },
  },
} satisfies Story;

export const Soviet = {
  args: {
    background: SOVIET,
  },
};

export const Allied = {
  args: {
    background: ALLIED,
  },
};

export const Yuri = {
  args: {
    background: YURI,
  },
};

export const Golden = {
  args: {
    background: GOLDEN,
  },
};

export const Dark = {
  args: {
    background: DARK,
  },
};
