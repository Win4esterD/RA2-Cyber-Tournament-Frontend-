import { IconBadge } from '../IconBadge/IconBadge';
import { GoTrophy } from 'react-icons/go';
import Link from 'next/link';
import { NavBar } from '../NavBar/NavBar';
import type { NavLinkType } from '../../global_types/NavLinkType';
import { LuLogOut } from 'react-icons/lu';

type SideBarPropsType = {
  link: NavLinkType;
};

export function SideBar({ link }: SideBarPropsType) {
  return (
    <aside className="fixed lg:static z-40 w-64 h-screen bg-[#0d1219] border-r border-[#1e2733] flex-col transition-transform duration-300 flex -translate-x-full lg:translate-x-0">
      <Link href="/">
        <div className="p-6 border-b border-[#1e2733] flex gap-2">
          <IconBadge
            Icon={<GoTrophy className="lucide lucide-trophy w-8 h-8 text-white" />}
          />
          <div className="pt-3">
            <p className="font-bold text-sm tracking-wid">RA2 ARENA</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              TOURNAMENT HUB
            </p>
          </div>
        </div>
      </Link>
      <NavBar currentLink={link} />
      <div className="p-4 border-t border-[#1e2733]">
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-slate-600 to-slate-800 flex items-center justify-center text-sm font-bold">
            W
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium truncate">Win4ester</div>
            <div className="text-[10px] text-slate-500">Commander</div>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-[#161d28] hover:text-red-400 transition-colors cursor-pointer">
          <LuLogOut />
          Exit
        </button>
      </div>
    </aside>
  );
}
