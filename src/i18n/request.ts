// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Получаем локаль из запроса (например, 'es' из /es/registration)
  const requested = await requestLocale;

  // Проверяем, поддерживается ли она, иначе используем дефолтную

  const locale: Locale =
    requested && isLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    // Динамически импортируем соответствующий файл переводов
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
