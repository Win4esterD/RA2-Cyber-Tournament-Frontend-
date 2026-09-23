import Link from 'next/link';
import { LuHouse, LuTable2, LuUser, LuPlus } from 'react-icons/lu';
import { useState } from 'react';

const notSelectedUtilityClassSet =
  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all text-slate-400 hover:bg-[#161d28] hover:text-slate-200';

const selectesUtilityClassSet =
  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all bg-red-600/15 text-red-400 border border-red-600/30';

type NavLinkType = '/' | '/tournaments' | '/profile' | '/create-tournament';

type NavBarProps = {
  currentLink: NavLinkType;
};

export function NavBar({ currentLink }: NavBarProps) {
  const [selectedLink, setSelectedLink] = useState(currentLink);

  const handleSetUtilityClassSet = (link: NavLinkType) => {
    return selectedLink === link ? selectesUtilityClassSet : notSelectedUtilityClassSet;
  };

  return (
    <nav className="flex-1 p-4 space-y-1">
      <Link
        href="/"
        onClick={() => setSelectedLink('/')}
        className={handleSetUtilityClassSet('/')}
      >
        <LuHouse className="w-4 h-4" />
        Tournaments
      </Link>
      <Link
        href="/tournaments"
        onClick={() => setSelectedLink('/tournaments')}
        className={handleSetUtilityClassSet('/tournaments')}
      >
        <LuTable2 className="w-4 h-4" />
        Tournaments
      </Link>
      <Link
        href="/profile"
        onClick={() => setSelectedLink('/profile')}
        className={handleSetUtilityClassSet('/profile')}
      >
        <LuUser className="w-4 h-4" />
        Profile
      </Link>
      <Link
        href="create-tournament"
        onClick={() => setSelectedLink('/create-tournament')}
        className={handleSetUtilityClassSet('/create-tournament')}
      >
        <LuPlus className="w-4 h-4" />
        Create Tournament
      </Link>
    </nav>
  );
}
