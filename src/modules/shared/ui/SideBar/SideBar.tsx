import { IconBadge } from '../IconBadge/IconBadge';
import { GoTrophy } from 'react-icons/go';
import Link from 'next/link';
import { NavBar } from '../NavBar/NavBar';
import type { NavLinkType } from '../../global_types/NavLinkType';

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
    </aside>
  );
}
