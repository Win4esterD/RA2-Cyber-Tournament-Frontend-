import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useResetPasswordSchema() {
  const t = useTranslations('errors');
  return z.object({
    newPassword: z.string().min(8, { message: t('passwordTooShort', { min: 8 }) }),
  });
}

export type ResetPasswordType = z.infer<ReturnType<typeof useResetPasswordSchema>>;
