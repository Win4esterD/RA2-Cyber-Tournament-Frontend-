// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const localesList = ['ru', 'en', 'es'];

export const routing = defineRouting({
  // Список всех поддерживаемых локалей
  locales: localesList,

  // Локаль по умолчанию, если ни одна не подошла
  defaultLocale: 'en',

  // Всегда показывать префикс локали в URL (например, /ru/about)
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
