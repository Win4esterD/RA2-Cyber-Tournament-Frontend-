import * as z from 'zod';
import { useTranslations } from 'next-intl';

export function useLogInSchema() {
  const t = useTranslations('errors');

  const LogInSchema = z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .pipe(z.email({ message: t('incorrectEmail') })),

    password: z.string().min(8, { message: t('passwordTooShort', { min: 8 }) }),
  });

  return LogInSchema;
}

export type LogInType = z.infer<ReturnType<typeof useLogInSchema>>;
