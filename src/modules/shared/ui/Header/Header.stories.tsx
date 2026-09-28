import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './Header';
import type { Locale } from '@/i18n/routing';
import { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const { EN, RU, ES } = LocaleTypeEnum;

export const Primary = {
  args: {
    onLocaleChange: (locale: Locale) => console.log(`Redirect to locale ${locale}`),
    locale: EN,
    sidebarHandler: () => console.log('Burger menu clicked'),
  },
} satisfies Story;

export const RussLangSelected = {
  args: {
    onLocaleChange: (locale: Locale) => console.log(`Redirect to locale ${locale}`),
    locale: RU,
    sidebarHandler: () => console.log('Burger menu clicked'),
  },
} satisfies Story;

export const SpanishLangSelected = {
  args: {
    onLocaleChange: (locale: Locale) => console.log(`Redirect to locale ${locale}`),
    locale: ES,
    sidebarHandler: () => console.log('Burger menu clicked'),
  },
} satisfies Story;
