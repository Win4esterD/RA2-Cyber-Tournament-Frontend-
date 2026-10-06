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

export const RANK_ICONS: Record<
  RankTypeEnum,
  React.ComponentType<{ className?: string }>
> = {
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
  [RankTypeEnum.PRIVATE]: 'text-rank-steel-dim',
  [RankTypeEnum.CORPORAL]: 'text-rank-steel',
  [RankTypeEnum.SERGEANT]: 'text-rank-steel-bright',
  [RankTypeEnum.LIEUTENANT]: 'text-rank-bronze',
  [RankTypeEnum.MAJOR]: 'text-rank-bronze-bright',
  [RankTypeEnum.COLONEL]: 'text-rank-silver',
  [RankTypeEnum.BRIGADIER_GEN]: 'text-rank-gold',
  [RankTypeEnum.GENERAL]: 'text-rank-gold-bright',
  [RankTypeEnum.FIVE_STAR_GEN]: 'text-rank-gold-radiant',
  [RankTypeEnum.COMMANDER_IN_CHIEF]: 'text-rank-commander',
};
