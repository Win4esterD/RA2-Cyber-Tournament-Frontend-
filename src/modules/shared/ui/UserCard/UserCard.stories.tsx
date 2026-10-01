import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCard } from '@/modules/shared/ui/UserCard/UserCard';
import { CardStyleTypeEnum } from '@/modules/auth';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;

export const Primary = {
  args: {
    background: DEFAULT,
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
