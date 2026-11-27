import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useCreateTournamentSchema } from '@/modules/tournaments/schemas/useCreateTournamentSchema';
import { BracketTypeEnum } from '@/modules/tournaments/types/TournamentTypes';
import { MainSubmitButton } from '@/modules/shared/ui/MainSubmitButton/MainSubmitButton';
import type { CreateTournamentSchemaType } from '@/modules/tournaments/schemas/useCreateTournamentSchema';
import { TextArea } from '@/modules/shared/ui/TextArea/TextArea';
import { LuTrophy } from 'react-icons/lu';

const { SINGLE_ELIMINATION, DOUBLE_ELIMINATION } = BracketTypeEnum;

type CreateTournamentFormProps = {
  submitHandler: (data: CreateTournamentSchemaType) => void;
  isPending: boolean;
};

export function CreateTournamentForm({
  submitHandler,
  isPending,
}: CreateTournamentFormProps) {
  const t = useTranslations('tournaments.createForm');
  const tournamentSchema = useCreateTournamentSchema();

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      title: '',
      description: '',
      rules: '',
      bracketsFormat: BracketTypeEnum.SINGLE_ELIMINATION,
      startDate: '',
      streamUrl: '',
    },
    resolver: zodResolver(tournamentSchema),
  });

  const onSubmit = (data: CreateTournamentSchemaType) => {
    submitHandler(data);
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('titleLabel')}
          controllerProps={{ name: 'title', control }}
          placeholder={t('titlePlaceholder')}
          required
        />
        <TextArea
          label={t('descriptionLabel')}
          placeholder={t('descriptionPlaceholder')}
          controllerProps={{ name: 'description', control }}
          rows={3}
          required
        />
        <TextArea
          label={t('rulesLabel')}
          placeholder={t('rulesPlaceholder')}
          controllerProps={{ name: 'rules', control }}
          rows={6}
        />
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('bracketsFormatLabel')}
          </label>
          <select
            {...register('bracketsFormat')}
            className="bg-[#0a0e14] border border-[#1e2733] rounded-lg px-4 py-2.5 text-sm focus:border-red-600/50 outline-none w-full"
          >
            <option value={SINGLE_ELIMINATION}>Single Elimination</option>
            <option value={DOUBLE_ELIMINATION}>Double Elimination</option>
          </select>
        </div>
        <Input
          label={t('startDateLabel')}
          controllerProps={{ name: 'startDate', control }}
          type="date"
          placeholder={t('startDatePlaceholder')}
          required
        />
        <Input
          label={t('streamUrlLabel')}
          controllerProps={{ name: 'streamUrl', control }}
          type="url"
          placeholder="https://twitch.tv/..."
        />
        <MainSubmitButton disabled={isPending}>
          <LuTrophy
            strokeWidth={2}
            className="w-4 h-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {t('submit')}
        </MainSubmitButton>
      </form>
    </div>
  );
}
