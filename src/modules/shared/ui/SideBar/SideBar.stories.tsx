import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SideBar } from './SideBar';

const meta = {
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    link: '/',
  },
} satisfies Story;

export const TournamentsTableSelected = {
  args: {
    link: '/tournaments-table',
  },
} satisfies Story;

export const ProfileSelected = {
  args: {
    link: '/profile',
  },
} satisfies Story;

export const CreateTournamentSelected = {
  args: {
    link: '/create-tournament',
  },
} satisfies Story;
