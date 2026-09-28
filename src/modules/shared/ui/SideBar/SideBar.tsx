import { IconBadge } from '../IconBadge/IconBadge';
import { GoTrophy } from 'react-icons/go';
import Link from 'next/link';
import { NavBar } from '../NavBar/NavBar';
import { LuLogOut } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { useAuthStore, tokenName, type UserType } from '@/modules/auth';
import { useRouter } from '@/i18n/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { CiUser } from 'react-icons/ci';

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

  const removeAuthHandler = () => {
    if (isAuth) {
      removeAuth();
      localStorage.removeItem(tokenName);
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
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-slate-600 to-slate-800 flex items-center justify-center text-sm font-bold">
            {!user && <CiUser className="2-6 h-6" />}
            {user?.name ? user.name[0].toUpperCase() : user?.email[0].toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium truncate">
              {!user ? 'Unregistered' : user.name ? user.name : user.email}
            </div>
            <div className="text-[10px] text-slate-500">Commander</div>
          </div>
        </div>
        <button
          onClick={removeAuthHandler}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-[#161d28] hover:text-red-400 transition-colors cursor-pointer"
        >
          <LuLogOut />
          {isAuth ? t('logOut') : authTranslator('login.logIn')}
        </button>
      </div>
    </aside>
  );
}
