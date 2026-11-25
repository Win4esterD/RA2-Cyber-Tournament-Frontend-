import * as z from 'zod';
import { useTranslations } from 'next-intl';
import { BracketTypeEnum } from '@/modules/tournaments/types/TournamentTypes';

const isFutureDate = (val: string) => Date.parse(val) > Date.now();

export function useCreateTournamentSchema() {
  const t = useTranslations('errors');

  return z.object({
    title: z
      .string({ message: t('mustBeString') })
      .trim()
      .min(3, { message: t('tournamentTitleTooShort', { min: 3 }) })
      .max(120, { message: t('tournamentTitleTooLong', { max: 120 }) }),
    description: z
      .string({ message: t('mustBeString') })
      .trim()
      .min(10, { message: t('tournamentDescriptionTooShort', { min: 10 }) })
      .max(2000, { message: t('tournamentDescriptionTooLong', { max: 2000 }) }),

    rules: z
      .string({ message: t('mustBeString') })
      .trim()
      .max(5000, { message: t('tournamentRulesTooLong', { max: 5000 }) }),

    bracketsFormat: z.enum(BracketTypeEnum, {
      message: t('invalidBracketsFormat'),
    }),

    startDate: z
      .string({ message: t('mustBeString') })
      .trim()
      .min(1, { message: t('startDateRequired') })
      .refine((val) => !Number.isNaN(Date.parse(val)), {
        message: t('invalidStartDate'),
      })
      .refine(isFutureDate, {
        message: t('startDateInPast'),
      }),

    streamUrl: z
      .string({ message: t('mustBeString') })
      .trim()
      .refine((val) => val === '' || z.httpUrl().safeParse(val).success, {
        message: t('invalidStreamUrl'),
      })
      .optional(),
  });
}

export type CreateTournamentSchemaType = z.infer<
  ReturnType<typeof useCreateTournamentSchema>
>;
