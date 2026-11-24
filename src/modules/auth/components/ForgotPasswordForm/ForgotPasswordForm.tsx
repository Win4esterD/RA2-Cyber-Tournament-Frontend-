'use client';
import { Input } from '@/modules/shared/ui/Input/Input';
import {
  useForgotPasswordSchema,
  type ForgotPasswordType,
} from '@/modules/auth/schemas/ForgotPasswordSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TfiEmail } from 'react-icons/tfi';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import { useTranslations } from 'next-intl';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/modules/auth/services/authService';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useState } from 'react';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';

export function ForgotPasswordForm() {
  const setError = useErrorStore((state) => state.setError);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { mutate, isPending } = useMutation({
    async mutationFn(email: string) {
      const response = await authService.forgotPassword(email);
      return response;
    },
    onError(data: ErrorResponseType) {
      setError(data);
    },
    onSuccess() {
      setIsEmailSent(true);
    },
  });

  const resetPasswordSchema = useForgotPasswordSchema();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordType) => {
    mutate(data.email);
  };

  const t = useTranslations('Auth.forgotPassword');
  return (
    <div>
      <form
        className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isEmailSent ? (
          <>
            <Input
              controllerProps={{ name: 'email', control }}
              label={t('email')}
              Icon={TfiEmail}
              placeholder="commander@ra2.arena"
            />
            <LogInAndRegisterButton type="submit" className="mt-4" disabled={isPending}>
              {t('sendResetLink')}
            </LogInAndRegisterButton>
          </>
        ) : (
          <div className="p-3 rounded-lg bg-green-600/10 border border-green-600/30 text-green-400 text-sm text-center">
            {t('emailSentSuccess')}
          </div>
        )}
      </form>
      <div className="flex justify-center mt-8">
        <BackButton text={t('backToLogin')} link="/login" />
      </div>
    </div>
  );
}
