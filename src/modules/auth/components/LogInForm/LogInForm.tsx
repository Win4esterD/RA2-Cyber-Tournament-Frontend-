'use client';
import { FcGoogle } from 'react-icons/fc';
import { TfiEmail } from 'react-icons/tfi';
import { Input } from '@/modules/shared/ui/Input/Input';
import { RiLockPasswordLine } from 'react-icons/ri';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import { useLogInSchema } from '@/modules/auth/schemas/LogInSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LogInType } from '@/modules/auth/schemas/LogInSchema';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '../../AuthStore';
import { tokenName } from '../../consts';

export function LogInForm() {
  const LogInSchema = useLogInSchema();
  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LogInSchema),
  });

  const setAuth = useAuthStore((state) => state.setAuth);

  const t = useTranslations('Auth.login');
  const errorDict = useTranslations('errors');

  const router = useRouter();

  const setGlobalError = useErrorStore((state) => state.setError);

  const queryClient = useQueryClient();

  const logInMutation = useMutation({
    mutationFn: async (credentials: LogInType) => {
      const loginResponse = await authService.logIn(credentials);
      const token = loginResponse.data.access_token;

      const validateResponse = await authService.validateToken(token);
      if (!validateResponse.data.email) {
        throw validateResponse;
      }

      queryClient.setQueryData(['auth', 'user'], validateResponse.data);

      return { token };
    },
    onSuccess: ({ token }) => {
      localStorage.setItem(tokenName, token);
      setAuth(token);
      router.push('/');
    },
    onError: (error: ErrorResponseType) => {
      if (error.message === "The user wasn't found") {
        setError('email', {
          type: 'server',
          message: errorDict('userNotFound'),
        });
      } else if (error.message === 'Invalid password') {
        setError('password', {
          type: 'server',
          message: errorDict('invalidPassword'),
        });
      } else {
        setGlobalError(error);
      }
    },
  });

  const onSubmit = (data: LogInType) => {
    logInMutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
    >
      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer">
        <FcGoogle />
        <span className="text-white-text-primary">{t('googleButton')}</span>
      </button>
      <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
        <span className="bg-[#0d1219] px-3 text-slate-600">{t('or')}</span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Input
          label={t('email')}
          placeholder="commander@ra2.arena"
          Icon={TfiEmail}
          controllerProps={{ name: 'email', control }}
        />
        <Input
          label={t('password')}
          placeholder="••••••••"
          type="password"
          Icon={RiLockPasswordLine}
          controllerProps={{ name: 'password', control }}
        />
      </div>
      <LogInAndRegisterButton className="mt-5" type="submit">
        {t('logIn')}
      </LogInAndRegisterButton>
      <Link
        href="/reset-password"
        className="text-xs text-slate-500 hover:text-red-400 transition-colors hover:cursor-pointer inline-block mt-5"
      >
        {t('forgotPasswordLink')}
      </Link>
    </form>
  );
}
