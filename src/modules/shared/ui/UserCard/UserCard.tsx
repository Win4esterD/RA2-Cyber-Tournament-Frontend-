import { backgroundColors, ringColors } from '@/modules/shared/ui/UserCard/consts';
import { LuCrown, LuTrophy } from 'react-icons/lu';

type UserCardPropsType = {
  background: 'standard' | 'soviet' | 'allied' | 'yuri' | 'gold' | 'dark';
};

export function UserCard({ background }: UserCardPropsType) {
  return (
    <div
      className={`relative w-full max-w-sm rounded-2xl bg-linear-to-br ${backgroundColors[background]} p-1 shadow-2xl`}
    >
      <div className="rounded-xl bg-black/30 backdrop-blur p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
            Red Alert 2
          </div>
          <div className="text-[10px] uppercase tracking-widest text-gray-300">ID #1</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div
            className={`w-24 h-24 rounded-full ring-4 ${ringColors[background]} overflow-hidden mb-3 bg-black/40`}
          >
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white">
              W
            </div>
          </div>
          <div className="text-xl font-bold text-white">Win4ester</div>
          <div className="text-xs uppercase tracking-widest text-gray-300 mt-1">
            General
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 mt-6">
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">2</div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">Wins</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">2</div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">Loses</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">50%</div>
            <div className="text-[10px] uppercase text-slate-400 mt-1">Winrate</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-slate-300">
            <LuCrown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">0</span>
            <span className="text-[10px] text-slate-500">Tournaments</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <LuTrophy className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold">0</span>
            <span className="text-[10px] text-slate-500">Played</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-300 text-center italic">
          Good player{' '}
        </div>
      </div>
    </div>
  );
}
