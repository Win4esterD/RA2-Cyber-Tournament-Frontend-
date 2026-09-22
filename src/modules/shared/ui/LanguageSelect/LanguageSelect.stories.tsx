import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { LanguageSelect } from './LanguageSelect';

const meta = {
  component: LanguageSelect,
} satisfies Meta<typeof LanguageSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    defaultLocale: 'en',
  },
} satisfies Story;
