'use client';
import { Header } from '@/modules/shared/ui/Header/Header';
import { SideBar } from '@/modules/shared/ui/SideBar/SideBar';
import type { ReactNode } from 'react';

type MainAppLayoutPropsType = {
  children: ReactNode;
};

export function MainAppLayout({ children }: MainAppLayoutPropsType) {
  return (
    <>
      {/* <Header onLocaleChange={() => console.log('Locale changed')} />
      <div className="flex">
        <SideBar link="/" />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div> */}

      <Header onLocaleChange={() => console.log('Locale changed')} />
      <SideBar link="/" />
    </>
  );
}
