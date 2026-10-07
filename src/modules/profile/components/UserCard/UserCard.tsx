import {
  backgroundColors,
  ringColors,
} from '@/modules/profile/components/UserCard/consts';
import { LuTrophy, LuCrown } from 'react-icons/lu';
import type { UserType } from '@/modules/profile/types/UserTypes';
import { useTranslations } from 'next-intl';
import { RankIcon } from '@/modules/shared/ui/RankIcon/RankIcon';
import { RANK_COLORS } from '@/global variables/RanksAndRankColors';

type UserCardPropsType = {
  profileData: UserType;
};

export function UserCard({ profileData }: UserCardPropsType) {
  const t = useTranslations('profile.card');
  const rankT = useTranslations('ranks');
  const {
    card_style,
    gamesPlayed,
    wins,
    loses,
    name,
    tournamentsWon,
    about_user,
    rank,
    id,
  } = profileData;

  const calculateWinrate = (wins: number, loses: number): number => {
    if (wins === 0) {
      return 0;
    }

    if (loses === 0) {
      return 100;
    }

    const sum = wins + loses;
    return Math.round((wins / sum) * 100);
  };

  return (
    <div
      className={`relative w-full max-w-sm rounded-2xl bg-linear-to-br ${backgroundColors[card_style]} p-1 shadow-2xl`}
    >
      <div className="rounded-xl bg-black/30 backdrop-blur p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
            Red Alert 2
          </div>
          <div className="text-[10px] uppercase tracking-widest text-gray-300">
            ID #{id}
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div
            className={`w-24 h-24 rounded-full ring-4 ${ringColors[card_style]} overflow-hidden mb-3 bg-black/40`}
          >
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white">
              {name ? name[0] : '?'}
            </div>
          </div>
          <div className="text-xl font-bold text-white">{name ? name : t('unnamed')}</div>
          <div className="text-xs uppercase tracking-widest text-gray-300 mt-1">
            {rank && (
              <span
                className={`mt-5 inline-flex items-center gap-2 bg-[#161d28] ${RANK_COLORS[rank]} text-sm font-semibold px-4 py-2 rounded-full border border-[#1e2733]`}
              >
                <RankIcon rank={rank} />
                {rankT(rank)}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 mt-6">
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">{wins}</div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">{t('wins')}</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">{loses}</div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">{t('loses')}</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {calculateWinrate(wins, loses)}%
            </div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">
              {t('winrate')}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-slate-300">
            <LuCrown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">{tournamentsWon}</span>
            <span className="text-[10px] text-slate-500">{t('tournaments')}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <LuTrophy className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold">{gamesPlayed}</span>
            <span className="text-[10px] text-slate-500">{t('played')}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-300 text-center italic">
          {about_user}{' '}
        </div>
      </div>
    </div>
  );
}
