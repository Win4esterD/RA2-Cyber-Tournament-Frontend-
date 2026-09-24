import Link from 'next/link';
import { LuHouse, LuTable2, LuUser, LuPlus } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import type { NavLinkType } from '../../global_types/NavLinkType';
import { usePathname } from '@/i18n/navigation';

const notSelectedUtilityClassSet =
  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all text-slate-400 hover:bg-[#161d28] hover:text-slate-200';

const selectesUtilityClassSet =
  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all bg-red-600/15 text-red-400 border border-red-600/30';

export function NavBar() {
  const pathname = usePathname();
  const t = useTranslations('navBar');

  const handleSetUtilityClassSet = (link: NavLinkType) => {
    return pathname === link ? selectesUtilityClassSet : notSelectedUtilityClassSet;
  };

  return (
    <nav className="flex-1 p-4 space-y-1">
      <Link href="/" className={handleSetUtilityClassSet('/')}>
        <LuHouse className="w-4 h-4" />
        {t('tournaments')}
      </Link>
      <Link
        href="/tournaments-table"
        className={handleSetUtilityClassSet('/tournaments-table')}
      >
        <LuTable2 className="w-4 h-4" />
        {t('tournamentsTable')}
      </Link>
      <Link href="/profile" className={handleSetUtilityClassSet('/profile')}>
        <LuUser className="w-4 h-4" />
        {t('profile')}
      </Link>
      <Link
        href="create-tournament"
        className={handleSetUtilityClassSet('/create-tournament')}
      >
        <LuPlus className="w-4 h-4" />
        {t('createTournament')}
      </Link>
    </nav>
  );
}
