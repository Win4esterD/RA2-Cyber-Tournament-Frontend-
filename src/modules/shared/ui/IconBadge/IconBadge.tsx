import type { ReactNode } from 'react';

type IconBadgeProps = {
  Icon?: ReactNode;
};

export function IconBadge({ Icon }: IconBadgeProps) {
  return (
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-yellow-500 mb-4 shadow-[0_0_24px_-4px_rgba(220,38,38,0.5)]">
      {Icon && Icon}
    </div>
  );
}
