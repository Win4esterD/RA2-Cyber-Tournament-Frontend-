// src/app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { TanStackProvider } from '@/providers/TansTackProvider';
import { ErrorLayout } from '@/modules/shared/layouts/ErrorLayout';

// Эта функция нужна для статической генерации страниц
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Если локаль невалидная, показываем 404
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Загружаем сообщения для текущей локали
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ErrorLayout>
        <TanStackProvider>{children}</TanStackProvider>
      </ErrorLayout>
    </NextIntlClientProvider>
  );
}
