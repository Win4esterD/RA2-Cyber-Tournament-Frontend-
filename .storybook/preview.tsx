import type { Preview } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import enMessages from '../src/messages/en.json';
import ruMessages from '../src/messages/ru.json';
import esMessages from '../src/messages/es.json';
import '../src/app/globals.css';

const queryClient = new QueryClient();

const messages = { en: enMessages, ru: ruMessages, es: esMessages };

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
          { value: 'es', title: 'Español' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: 'en',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#fff' },
        dark: { name: 'Dark', value: '#0a0a0a' },
      },
    },
    tags: ['autodocs'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    (Story, { globals }) => {
      const locale = (globals.locale as 'en' | 'ru' | 'es') ?? 'en';
      return (
        <QueryClientProvider client={queryClient}>
          <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            <Story />
          </NextIntlClientProvider>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
