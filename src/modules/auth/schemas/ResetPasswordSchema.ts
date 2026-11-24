import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useResetPasswordSchema() {
  const t = useTranslations('errors');
  return z
    .object({
      newPassword: z.string().min(8, { message: t('passwordTooShort', { min: 8 }) }),
      repeatPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.repeatPassword, {
      message: t('passwordsDontMatch'),
      path: ['repeatPassword'],
    });
}

export type ResetPasswordType = z.infer<ReturnType<typeof useResetPasswordSchema>>;
