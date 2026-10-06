import type { RankTypeEnum } from '@/modules/profile';
import { RANK_ICONS, RANK_COLORS } from '../../../../global variables/RanksAndRankColors';

type RankIconPropsType = {
  rank: RankTypeEnum;
};

export function RankIcon({ rank }: RankIconPropsType) {
  const Icon = RANK_ICONS[rank];
  return <Icon className={`${RANK_COLORS[rank]} w-4 h-4`} />;
}
