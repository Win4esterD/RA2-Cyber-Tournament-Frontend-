import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavBar } from './NavBar';

const meta = {
  component: NavBar,
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
