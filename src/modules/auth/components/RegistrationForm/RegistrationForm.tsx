'use client';
import { FcGoogle } from 'react-icons/fc';
import { Input } from '@/modules/shared/ui/Input/Input';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationSchema } from '@/modules/auth/schemas/RegistrationSchema';
import type { RegistrationType } from '@/modules/auth/schemas/RegistrationSchema';
import { authService } from '../../services/authService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import { useTranslations } from 'next-intl';

export function RegistrationForm() {
  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: zodResolver(RegistrationSchema),
  });

  const t = useTranslations('Auth.register');

  const queryClient = useQueryClient();

  const setGlobalError = useErrorStore((state) => state.setError);

  const authMutation = useMutation({
    mutationFn: async ({ email, password }: Omit<RegistrationType, 'repeatPassword'>) => {
      const registrationResponse = await authService.register({ email, password });
      if (registrationResponse.status === 201) {
        const loginResponse = await authService.logIn({ email, password });
        return loginResponse.data;
      } else {
        throw registrationResponse;
      }
    },
    onSuccess(data) {
      const token = data?.access_token;
      if (token) {
        localStorage.setItem('Ra2Arena:token', token);
        queryClient.setQueryData(['auth', 'token'], token);
      }
    },
    onError(error: ErrorResponseType) {
      if (error.message === 'User exists') {
        setError('email', {
          type: 'server',
          message: error.message,
        });
      } else if (error.message === 'Password must be at least 8 characters long') {
        setError('password', {
          type: 'server',
          message: error.message,
        });
      } else {
        setGlobalError(error);
      }
    },
  });

  const onSubmit = async (data: RegistrationType) => {
    const { email, password } = data;
    authMutation.mutate({ email, password });
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
        <span className="bg-[#0d1219] px-3 text-slate-600">or</span>
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
        <Input
          label={t('repeatPassword')}
          placeholder="••••••••"
          type="password"
          Icon={RiLockPasswordLine}
          controllerProps={{ name: 'repeatPassword', control }}
        />
      </div>
      <LogInAndRegisterButton className="mt-5" type="submit">
        {t('register')}
      </LogInAndRegisterButton>
    </form>
  );
}
