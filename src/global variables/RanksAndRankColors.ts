import {
  LuChevronUp,
  LuMinimize2,
  LuMaximize2,
  LuMinus,
  LuLeaf,
  LuBird,
  LuStar,
  LuAward,
  LuCrown,
} from 'react-icons/lu';
import { RankTypeEnum } from '@/modules/profile/types/UserTypes';

export const RANK_ICONS: Record<RankTypeEnum, React.ComponentType<{ className?: string }>> = {
  [RankTypeEnum.PRIVATE]: LuChevronUp,
  [RankTypeEnum.CORPORAL]: LuMinimize2, // 2 stacked chevrons
  [RankTypeEnum.SERGEANT]: LuMaximize2, // 3 stacked chevrons
  [RankTypeEnum.LIEUTENANT]: LuMinus, // single bar
  [RankTypeEnum.MAJOR]: LuLeaf, // oak leaf
  [RankTypeEnum.COLONEL]: LuBird, // eagle
  [RankTypeEnum.BRIGADIER_GENERAL]: LuStar, // 1 star
  [RankTypeEnum.GENERAL]: LuStar, // 2 stars (render twice)
  [RankTypeEnum.FIVE_STAR_GENERAL]: LuAward, // 5-star cluster
  [RankTypeEnum.COMMANDER_IN_CHIEF]: LuCrown, // supreme command
};

export const RANK_COLORS: Record<RankTypeEnum, string> = {
  [RankTypeEnum.PRIVATE]: 'text-slate-400',
  [RankTypeEnum.CORPORAL]: 'text-slate-300',
  [RankTypeEnum.SERGEANT]: 'text-zinc-200',
  [RankTypeEnum.LIEUTENANT]: 'text-amber-600',
  [RankTypeEnum.MAJOR]: 'text-amber-500',
  [RankTypeEnum.COLONEL]: 'text-cyan-400',
  [RankTypeEnum.BRIGADIER_GENERAL]: 'text-orange-500',
  [RankTypeEnum.GENERAL]: 'text-yellow-400',
  [RankTypeEnum.FIVE_STAR_GENERAL]: 'text-purple-500',
  [RankTypeEnum.COMMANDER_IN_CHIEF]: 'text-red-500',
};
