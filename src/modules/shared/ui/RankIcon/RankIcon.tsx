import type { RankTypeEnum } from '@/modules/profile';
import { RANK_ICONS, RANK_COLORS } from './consts';

type RankIconPropsType = {
  rank: RankTypeEnum;
};

export function RankIcon({ rank }: RankIconPropsType) {
  const Icon = RANK_ICONS[rank];
  return <Icon className={RANK_COLORS[rank]} />;
}
