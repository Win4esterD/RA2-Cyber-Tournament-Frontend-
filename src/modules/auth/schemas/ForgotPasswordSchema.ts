import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useForgotPasswordSchema() {
  const t = useTranslations('errors');

  return z.object({
    email: z
      .string()
      .max(100)
      .trim()
      .toLowerCase()
      .pipe(z.email({ message: t('incorrectEmail') })),
  });
}

export type ForgotPasswordType = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
