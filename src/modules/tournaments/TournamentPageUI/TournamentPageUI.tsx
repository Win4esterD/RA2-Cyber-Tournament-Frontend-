'use client';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';
import { useQuery } from '@tanstack/react-query';
import { tournamentService } from '@/modules/tournaments/services/tournamentsService';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import type { TournamentType } from '@/modules/tournaments/types/TournamentTypes';
import { LuPencil, LuUserPlus, LuPlay } from 'react-icons/lu';

type TournamentPageUIPropsType = {
  tournamentId: number;
};

export function TournamentPageUI({ tournamentId }: TournamentPageUIPropsType) {
  const { data: tournament, error } = useQuery<TournamentType, ErrorResponseType>({
    queryKey: ['tournament', tournamentId],
    queryFn: () => tournamentService.getTournament(tournamentId),
    staleTime: 60,
    refetchOnMount: 'always',
  });

  if (error) {
    return <div>Tournament not exist</div>;
  }

  return (
    <div>
      <BackButton text="All tournaments" link="/" />
      <div className="bg-[#0d1219] border border-[#1e2733] rounded-xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wide text-green-400 bg-green-600/15 border-green-600/30">
                Registration
              </span>
              <span className="text-[10px] px-2 py-1 rounded bg-[#161d28] text-slate-400 font-medium uppercase">
                {tournament?.bracketsFormat}
              </span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="border border-[#1e2733] hover:border-red-600/40 text-slate-300 hover:text-red-400 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <LuPencil className="w-4 h-4" />
              Edit
            </button>
            <button className="bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
              <LuUserPlus className="w-4 h-4" />
              Join
            </button>
            <button className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
              <LuPlay className="w-4 h-4" />
              Generate brackets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
