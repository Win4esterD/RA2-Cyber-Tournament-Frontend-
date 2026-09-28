'use client';
import { Header } from '@/modules/shared/ui/Header/Header';
import { SideBar } from '@/modules/shared/ui/SideBar/SideBar';
import type { ReactNode } from 'react';
import { usePathname } from '@/i18n/navigation';
import { useRouter, useParams } from 'next/navigation';
import { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';
import { tokenName } from '@/modules/auth/consts';
import { useAuthStore } from '@/modules/auth';
import { authService } from '@/modules/auth/services/authService';
import { useMutation, useQueryClient, useQuery, skipToken } from '@tanstack/react-query';
import { useErrorStore } from '../stores/ErrorStore';
import type { ErrorResponseType } from '../global_types/ErrorResponseType';
import { useState, useEffect } from 'react';
import type { AuthResponseType } from '@/modules/auth/types/AuthTypes';

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

  // handle authorization
  const queryClient = useQueryClient();

  const { data } = useQuery<AuthResponseType>({
    queryKey: ['auth', 'user'],
    queryFn: skipToken,
  });

  const { mutate } = useMutation({
    mutationFn: async (token: string) => {
      const response = await authService.getUserDataByToken(token);
      setAuth(token);
      return { token, user: response.data };
    },
    onSuccess: ({ token, user }) => {
      queryClient.setQueryData(['auth', 'user'], { access_token: token, user });
    },
    onError: (error: ErrorResponseType) => {
      if (error.message !== 'Invalid or expired token') {
        setError(error);
      }
      localStorage.removeItem(tokenName);
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(tokenName);
    if (token) {
      mutate(token);
    }
  }, [mutate]);

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
          onLocaleChange={(locale) => router.push(`${locale}/${pathname}`)}
          sidebarHandler={() => setIsSidebarOpenedOnMobile(!isSidebarOpenedOnMobile)}
        />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
