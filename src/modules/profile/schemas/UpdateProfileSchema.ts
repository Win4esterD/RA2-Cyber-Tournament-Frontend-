import * as z from 'zod';
import { useTranslations } from 'next-intl';
import { CardStyleTypeEnum } from '@/modules/profile/types/UserTypes';

export function useUpdateProfileSchema() {
  const t = useTranslations('errors');

  const UpdateProfileSchema = z.object({
    card_style: z.enum(CardStyleTypeEnum, { message: t('invalidCardStyle') }).optional(),

    name: z
      .string({ message: t('mustBeString') })
      .min(3, { message: t('nameTooShort', { min: 3 }) })
      .max(20, { message: t('nameTooLong', { max: 20 }) })
      .optional(),

    about_user: z
      .string({ message: t('mustBeString') })
      .min(3, { message: t('aboutUserTooShort', { min: 3 }) })
      .max(100, { message: t('aboutUserTooLong', { max: 100 }) })
      .optional(),
  });

  return UpdateProfileSchema;
}

export type UpdateProfileSchemaType = z.infer<ReturnType<typeof useUpdateProfileSchema>>;
