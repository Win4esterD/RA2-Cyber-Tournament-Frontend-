import { IconBadge } from '../IconBadge/IconBadge';
import { GoTrophy } from 'react-icons/go';
import Link from 'next/link';
import { NavBar } from '../NavBar/NavBar';
import { LuLogOut, LuLogIn } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { useAuthStore, tokenName } from '@/modules/auth';
import type { UserType } from '@/modules/profile/types/UserTypes';
import { useRouter } from '@/i18n/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';

type SideBarPropsType = {
  isSidebarOpenedOnMobile: boolean;
  user?: UserType;
};

export function SideBar({ isSidebarOpenedOnMobile, user }: SideBarPropsType) {
  const t = useTranslations('sideBar');
  const authTranslator = useTranslations('Auth');
  const removeAuth = useAuthStore((state) => state.removeAuth);
  const isAuth = useAuthStore((state) => state.isAuth);
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const displayName = user?.name ?? user?.email;
  const initial = displayName?.[0]?.toUpperCase() || '';

  const removeAuthHandler = () => {
    if (isAuth) {
      removeAuth();
      Cookies.remove(tokenName);
      queryClient.clear();
      push('/login');
      return;
    }

    push('/login');
  };

  return (
    <aside
      className={`fixed lg:static z-40 w-64 h-screen bg-[#0d1219] border-r border-[#1e2733] flex-col transition-transform duration-300 flex lg:translate-x-0 ${!isSidebarOpenedOnMobile ? '-translate-x-full' : 'translate-x-0'}`}
    >
      <Link href="/">
        <div className="p-6 border-b border-[#1e2733] flex gap-2">
          <IconBadge
            Icon={<GoTrophy className="lucide lucide-trophy w-8 h-8 text-white" />}
          />
          <div className="pt-3">
            <p className="font-bold text-sm tracking-wid">RA2 ARENA</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              {t('tournamentHub')}
            </p>
          </div>
        </div>
      </Link>
      <NavBar />
      <div className="p-4 border-t border-[#1e2733]">
        {isAuth && (
          <div className="flex items-center gap-3 px-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-slate-600 to-slate-800 flex items-center justify-center text-sm font-bold">
              {initial}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{user?.name}</div>
              <div className="text-[10px] text-slate-500">Commander</div>
            </div>
          </div>
        )}
        {isAuth ? (
          <button
            onClick={removeAuthHandler}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-[#161d28] hover:text-red-400 transition-colors cursor-pointer"
          >
            <LuLogOut />
            {t('logOut')}
          </button>
        ) : (
          <Link
            href="/login"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm bg-red-600/15 text-red-400 hover:bg-red-600/25 transition-colors font-medium"
          >
            <LuLogIn />
            {authTranslator('login.logIn')}
          </Link>
        )}
      </div>
    </aside>
  );
}
