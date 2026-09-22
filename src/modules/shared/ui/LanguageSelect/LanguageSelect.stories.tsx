import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { LanguageSelect } from './LanguageSelect';
import type { Locale } from '@/i18n/routing';

const meta = {
  component: LanguageSelect,
} satisfies Meta<typeof LanguageSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    defaultLocale: 'en',
    onLocaleChange: (locale: Locale) => console.log(`Redirect to locale ${locale}`),
  },
} satisfies Story;
