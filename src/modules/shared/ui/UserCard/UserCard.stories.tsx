import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCard } from '@/modules/shared/ui/UserCard/UserCard';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    background: 'standard',
  },
} satisfies Story;

export const Soviet = {
  args: {
    background: 'soviet',
    
  },
};
