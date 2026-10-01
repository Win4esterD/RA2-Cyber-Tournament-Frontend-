import type { ReactNode } from 'react';

type IconBadgePropsType = {
  Icon?: ReactNode;
  className?: string;
};

const defaultUtilityStyles =
  'inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-yellow-500 mb-4 shadow-[0_0_24px_-4px_rgba(220,38,38,0.5)]';

export function IconBadge({ Icon, className }: IconBadgePropsType) {
  return (
    <div className={className ? className : defaultUtilityStyles}>{Icon && Icon}</div>
  );
}
