'use client';
import { CreateTournamentForm } from '@/modules/tournaments/CreateTournamentForm/CreateTournamentForm';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import { LuTrophy } from 'react-icons/lu';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import type { CreateTournamentSchemaType } from '@/modules/tournaments/schemas/useCreateTournamentSchema';
import { tournamentService } from '@/modules/tournaments/services/tournamentsService';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';

export function CreateTournamentPageUI() {
  const t = useTranslations('tournaments.createPage');
  const commonT = useTranslations('common');
  const setError = useErrorStore((state) => state.setError);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: CreateTournamentSchemaType) => {
      const serverData = {
        ...data,
        startDate: new Date(data.startDate),
        streamUrl: data.streamUrl !== '' ? data.streamUrl : null,
      };
      const response = await tournamentService.createTournament(serverData);
      return response;
    },
    onError(error: ErrorResponseType) {
      setError(error);
    },
    onSuccess() {
      // TODO ADD redirection to the page of created tournament
    },
  });

  return (
    <div className="p-6 lg:p-10 max-w-2xl mx-auto">
      <BackButton text={commonT('back')} />
      <div className="flex gap-3 mb-1">
        <IconBadge Icon={<LuTrophy className="w-6 h-6" strokeWidth={2} />} />
        <div>
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <p className="text-sm text-slate-500">{t('subtitle')}</p>
        </div>
      </div>
      <CreateTournamentForm submitHandler={mutate} isPending={isPending} />
    </div>
  );
}
