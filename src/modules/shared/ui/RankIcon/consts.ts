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
  [RankTypeEnum.BRIGADIER_GEN]: LuStar, // 1 star
  [RankTypeEnum.GENERAL]: LuStar, // 2 stars (render twice)
  [RankTypeEnum.FIVE_STAR_GEN]: LuAward, // 5-star cluster
  [RankTypeEnum.COMMANDER_IN_CHIEF]: LuCrown, // supreme command
};

export const RANK_COLORS: Record<RankTypeEnum, string> = {
  [RankTypeEnum.PRIVATE]: 'text-slate-400',
  [RankTypeEnum.CORPORAL]: 'text-slate-300',
  [RankTypeEnum.SERGEANT]: 'text-slate-200',
  [RankTypeEnum.LIEUTENANT]: 'text-gold-400', // gold bar
  [RankTypeEnum.MAJOR]: 'text-gold-500', // gold leaf
  [RankTypeEnum.COLONEL]: 'text-slate-100', // silver eagle
  [RankTypeEnum.BRIGADIER_GEN]: 'text-amber-400', // 1 star
  [RankTypeEnum.GENERAL]: 'text-amber-300', // 2 stars
  [RankTypeEnum.FIVE_STAR_GEN]: 'text-amber-200', // 5 stars
  [RankTypeEnum.COMMANDER_IN_CHIEF]: 'text-yellow-200', // crown
};