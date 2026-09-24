import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { TanStackProvider } from '@/providers/TansTackProvider';
import { GlobalErrorHandler } from '@/modules/shared/layouts/GlobalErrorHandler';
import { MainAppLayout } from '@/modules/shared/layouts/MainAppLayout';

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
      <GlobalErrorHandler>
        <TanStackProvider>
          <MainAppLayout>{children}</MainAppLayout>
        </TanStackProvider>
      </GlobalErrorHandler>
    </NextIntlClientProvider>
  );
}
