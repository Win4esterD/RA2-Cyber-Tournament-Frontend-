import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useResetPasswordSchema() {
  const t = useTranslations('errors');

  return z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .pipe(z.email({ message: t('incorrectEmail') })),
  });
}

export type ResetPasswordType = z.infer<ReturnType<typeof useResetPasswordSchema>>;
