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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useErrorStore } from '../stores/ErrorStore';
import type { ErrorResponseType } from '../global_types/ErrorResponseType';
import { useEffect } from 'react';

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

  // handle authorization
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (token: string) => {
      const response = await authService.validateToken(token);
      if (response) {
        queryClient.setQueryData(['auth', 'user'], response.data);
        setAuth(token);
        return response;
      }
    },
    onError: (error: ErrorResponseType) => {
      setError(error);
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(tokenName);
    if (token) {
      mutation.mutate(token);
    }
  }, []);

  return showMainLayout ? (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header
          locale={locale ? locale?.toString() : LocaleTypeEnum.EN}
          onLocaleChange={(locale) => router.push(`${locale}/${pathname}`)}
        />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
