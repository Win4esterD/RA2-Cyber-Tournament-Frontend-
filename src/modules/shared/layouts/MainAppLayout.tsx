'use client';
import { Header } from '@/modules/shared/ui/Header/Header';
import { SideBar } from '@/modules/shared/ui/SideBar/SideBar';
import type { ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';
import { tokenName, useAuthStore, useAuthQuery } from '@/modules/auth';
import { useErrorStore } from '../stores/ErrorStore';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from '@/i18n/navigation';

const routesWithoutMainLayout = ['/login', '/registration', '/reset-password'];

type MainAppLayoutPropsType = {
  children: ReactNode;
};

export function MainAppLayout({ children }: MainAppLayoutPropsType) {
  const pathname = usePathname();
  const showMainLayout = !routesWithoutMainLayout.includes(pathname);
  const router = useRouter();
  const { locale } = useParams();
  const setAuth = useAuthStore((state) => state.setAuth);
  const setError = useErrorStore((state) => state.setError);
  const [isSidebarOpenedOnMobile, setIsSidebarOpenedOnMobile] = useState(false);

  const { data, error } = useAuthQuery();

  useEffect(() => {
    if (data?.access_token) {
      setAuth(data.access_token);
      return;
    }

    if (!error) return;

    Cookies.remove(tokenName);
    if (error.message !== 'Invalid or expired token') {
      setError(error);
    }
  }, [error, setError, setAuth, data]);

  return showMainLayout ? (
    <div className="flex min-h-screen">
      <SideBar isSidebarOpenedOnMobile={isSidebarOpenedOnMobile} user={data?.user} />
      {isSidebarOpenedOnMobile && (
        <div
          onClick={() => setIsSidebarOpenedOnMobile(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
        ></div>
      )}
      <div className="flex flex-1 flex-col">
        <Header
          locale={locale ? locale?.toString() : LocaleTypeEnum.EN}
          onLocaleChange={(newLocale) => router.push(pathname, { locale: newLocale })}
          sidebarHandler={() => setIsSidebarOpenedOnMobile(!isSidebarOpenedOnMobile)}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
