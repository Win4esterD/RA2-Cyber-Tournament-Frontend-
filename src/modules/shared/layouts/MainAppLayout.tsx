'use client';
import { Header } from '@/modules/shared/ui/Header/Header';
import { SideBar } from '@/modules/shared/ui/SideBar/SideBar';
import type { ReactNode } from 'react';
import { usePathname } from '@/i18n/navigation';

const routesWithoutMainLayout = ['/login', '/registration', '/reset-password'];

type MainAppLayoutPropsType = {
  children: ReactNode;
};

export function MainAppLayout({ children }: MainAppLayoutPropsType) {
  const pathname = usePathname();
  const showMainLayout = !routesWithoutMainLayout.includes(pathname);

  return showMainLayout ? (
    <div className="flex min-h-screen">
      <SideBar link="/" />
      <div className="flex flex-1 flex-col">
        <Header onLocaleChange={() => console.log('Locale changed')} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
