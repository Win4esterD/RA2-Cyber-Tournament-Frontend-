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
  args: {
    isSidebarOpenedOnMobile: false,
  },
  ...forPath('/'),
} satisfies Story;

export const TournamentsTableSelected = {
  args: {
    isSidebarOpenedOnMobile: false,
  },
  ...forPath('/tournaments-table'),
} satisfies Story;

export const ProfileSelected = {
  args: {
    isSidebarOpenedOnMobile: false,
  },
  ...forPath('/profile'),
} satisfies Story;

export const CreateTournamentSelected = {
  args: {
    isSidebarOpenedOnMobile: false,
  },
  ...forPath('/create-tournament'),
} satisfies Story;

export const WithUserData = {
  args: {
    isSidebarOpenedOnMobile: false,
    user: {
      name: 'Comandante',
      id: 1,
      email: 'comandante@mail.ru',
    },
  },
};

export const TooMuchData = {
  args: {
    user: {
      name: 'Tooo loooong naaamee heree aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      id: 1,
      email: 'comandante@mail.ru',
    },
  },
};

export const SideBarClosedOnMobile = {
  args: {
    ...WithUserData.args,
    isSidebarOpenedOnMobile: true,
  },
};
