// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Применять middleware ко всем путям, кроме API, статики и т.д.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
