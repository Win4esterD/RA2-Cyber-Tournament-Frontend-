import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SideBar } from './SideBar';

const meta = {
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const forPath = (pathname: string) => {
  return {
    parameters: { nextjs: { navigation: { pathname } } },
  };
};

export const Primary = {
  ...forPath('/'),
} satisfies Story;

export const TournamentsTableSelected = {
  ...forPath('/tournaments-table'),
} satisfies Story;

export const ProfileSelected = {
  ...forPath('/profile'),
} satisfies Story;

export const CreateTournamentSelected = {
  ...forPath('/create-tournament'),
} satisfies Story;
