import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useRegistrationSchema() {
  const t = useTranslations('errors');
  return z
    .object({
      email: z
        .string()
        .trim()
        .toLowerCase()
        .pipe(z.string().email({ message: t('incorrectEmail') })),
      name: z
        .string({ message: t('mustBeString') })
        .min(3, { message: t('nameTooShort', { min: 3 }) })
        .max(20, { message: t('nameTooLong', { max: 20 }) }),

      password: z.string().min(8, { message: t('passwordTooShort', { min: 8 }) }),

      repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: t('passwordsDontMatch'),
      path: ['repeatPassword'],
    });
}

export type RegistrationType = z.infer<ReturnType<typeof useRegistrationSchema>>;
