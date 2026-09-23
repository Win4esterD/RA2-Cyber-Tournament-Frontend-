import Link from 'next/link';
import { LuHouse, LuTable2, LuUser, LuPlus } from 'react-icons/lu';

export function NavBar() {
  return (
    <nav className="flex-1 p-4 space-y-1">
      <Link
        href="/"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all bg-red-600/15 text-red-400 border border-red-600/30"
      >
        <LuHouse className="w-4 h-4" />
        Tournaments
      </Link>
      <Link
        href="/tournaments"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all text-slate-400 hover:bg-[#161d28] hover:text-slate-200"
      >
        <LuTable2 className="w-4 h-4" />
        Tournaments
      </Link>
      <Link
        href="/profile"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all text-slate-400 hover:bg-[#161d28] hover:text-slate-200"
      >
        <LuUser className="w-4 h-4" />
        Profile
      </Link>
      <Link
        href="create-tournament"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all text-slate-400 hover:bg-[#161d28] hover:text-slate-200"
      >
        <LuPlus className="w-4 h-4" />
        Create Tournament
      </Link>
    </nav>
  );
}
