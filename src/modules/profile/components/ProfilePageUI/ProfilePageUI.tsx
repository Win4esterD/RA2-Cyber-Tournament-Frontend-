import type { UserType } from '@/modules/auth';
import { LuLock } from 'react-icons/lu';
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import Link from 'next/link';
import { LuLogIn } from 'react-icons/lu';

type ProfilePageUIPropsType = {
  profileData?: UserType;
};

export function ProfilePageUI({ profileData }: ProfilePageUIPropsType) {
  if (!profileData) {
    return (
      <div className="flex flex-col items-center justify-center py-28 px-6 text-center">
        <IconBadge
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-red-600 to-yellow-500 mb-6 shadow-[0_0_24px_-4px_rgba(220,38,38,0.5)]"
          Icon={<LuLock className="w-8 h-8" />}
        />
        <h2 className="text-2xl font-bold">You are not authorised</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md">
          Войдите, чтобы настраивать свою карточку командира и видеть историю турниров.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <LuLogIn className="w-4 h-4" />
          Войти в аккаунт
        </Link>
      </div>
    );
  }
}
