import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './Header';
import type { Locale } from '@/i18n/routing';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    onLocaleChange: (locale: Locale) => console.log(`Redirect to locale ${locale}`),
  },
} satisfies Story;
