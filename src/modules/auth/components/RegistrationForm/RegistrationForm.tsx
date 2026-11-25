'use client';
import { Input } from '@/modules/shared/ui/Input/Input';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegistrationSchema } from '@/modules/auth/schemas/RegistrationSchema';
import type { RegistrationType } from '@/modules/auth/schemas/RegistrationSchema';
import { authService } from '@/modules/auth/services/authService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import { useTranslations } from 'next-intl';
import { tokenName, authQueryKeys, tokenStoragePeriod } from '@/modules/auth/consts';
import { useAuthStore } from '@/modules/auth/AuthStore';
import { useRouter } from '@/i18n/navigation';
import Cookies from 'js-cookie';
import { GoogleAuthButton } from '@/modules/shared/ui/GoogleAuthButton/GoogleAuthButton';
import { LuUser } from 'react-icons/lu';

export function RegistrationForm() {
  const registrationSchema = useRegistrationSchema();
  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      repeatPassword: '',
    },
    resolver: zodResolver(registrationSchema),
  });

  const setAuth = useAuthStore((state) => state.setAuth);

  const t = useTranslations('Auth.register');
  const errorDict = useTranslations('errors');

  const queryClient = useQueryClient();

  const setGlobalError = useErrorStore((state) => state.setError);

  const { push } = useRouter();

  const { mutate, isPending } = useMutation({
    async mutationFn({
      email,
      password,
      name,
    }: Omit<RegistrationType, 'repeatPassword'>) {
      const registrationResponse = await authService.register({ email, password, name });
      return registrationResponse;
    },
    onSuccess({ data }) {
      const token = data.access_token;
      Cookies.set(tokenName, token, {
        sameSite: 'lax',
        expires: tokenStoragePeriod,
        secure: process.env.NODE_ENV === 'production',
      });
      queryClient.setQueryData(authQueryKeys.user, data);
      setAuth(token);
      push('/');
    },
    onError(error: ErrorResponseType) {
      if (error.message === 'User exists') {
        setError('email', {
          type: 'server',
          message: errorDict('userExists'),
        });
      } else if (error.message === 'Password must be at least 8 characters long') {
        setError('password', {
          type: 'server',
          message: errorDict('passwordTooShort', { min: 8 }),
        });
      } else {
        setGlobalError(error);
      }
    },
  });

  const onSubmit = (data: RegistrationType) => {
    const { email, password, name } = data;
    mutate({ email, name, password });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
    >
      <GoogleAuthButton />
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
          label={t('nickname')}
          placeholder={t('yourNickName')}
          Icon={LuUser}
          controllerProps={{ name: 'name', control }}
        />
        <Input
          label={t('password')}
          placeholder="••••••••"
          type="password"
          Icon={RiLockPasswordLine}
          controllerProps={{ name: 'password', control }}
        />
        <Input
          label={t('repeatPassword')}
          placeholder="••••••••"
          type="password"
          Icon={RiLockPasswordLine}
          controllerProps={{ name: 'repeatPassword', control }}
        />
      </div>
      <LogInAndRegisterButton className="mt-5" type="submit" disabled={isPending}>
        {t('register')}
      </LogInAndRegisterButton>
    </form>
  );
}
