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

const forPath = (pathname: string) => ({
  parameters: { nextjs: { navigation: { pathname } } },
});

export const Primary = {
  ...forPath('/'),
} satisfies Story;

export const TournamentsSelected = {
  ...forPath('/tournaments-table'),
} satisfies Story;

export const ProfileSelected = {
  ...forPath('/profile'),
} satisfies Story;

export const CreateTournamentSelected = {
  ...forPath('/create-tournament'),
} satisfies Story;
