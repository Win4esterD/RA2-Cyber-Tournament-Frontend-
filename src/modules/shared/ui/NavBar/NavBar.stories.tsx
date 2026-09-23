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

export const Primary = {
  args: {
    currentLink: '/',
  },
} satisfies Story;

export const TournamentsSelected = {
  args: {
    currentLink: '/tournaments',
  },
} satisfies Story;

export const ProfileSelected = {
  args: {
    currentLink: '/profile',
  },
} satisfies Story;

export const CreateTournamentSelected = {
  args: {
    currentLink: '/create-tournament',
  },
} satisfies Story;
