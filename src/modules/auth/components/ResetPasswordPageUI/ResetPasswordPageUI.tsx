'use client';
import { useValidateResetPasswordTokenQuery } from '@/modules/auth/hooks/useValidateResetPasswordTokenQuery';
import { Loader } from '@/modules/shared/ui/Loader/Loader';
import { ResetPasswordForm } from '@/modules/auth/components/ResetPasswordForm/ResetPasswordForm';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useSearchParams } from 'next/navigation';
import { authService } from '@/modules/auth/services/authService';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function ResetPasswordPageUI() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const { data, isPending, error } = useValidateResetPasswordTokenQuery();
  const params = useSearchParams();
  const token = params.get('token');
  const setError = useErrorStore((state) => state.setError);
  const t = useTranslations('Auth.resetPassword');

  const { mutate } = useMutation({
    async mutationFn(newPassword: string) {
      if (token) {
        const response = await authService.resetPassword({ token, newPassword });
        return response;
      }
    },
    onSuccess() {
      setIsPasswordChanged(true);
    },
    onError(error: ErrorResponseType) {
      setError(error);
    },
  });

  return (
    <div>
      {isPending && <Loader />}
      {data?.is_valid && !isPasswordChanged && (
        <ResetPasswordForm submitHandler={mutate} />
      )}
      {error && (
        <div>
          <div className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full">
            <p>{t('linkInvalidOrExpired')}</p>
          </div>
          <div className="flex justify-center mt-10">
            <BackButton text={t('backToLogin')} link="/login" />
          </div>
        </div>
      )}
      {isPasswordChanged && (
        <div>
          <div className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full">
            <p>{t('passwordChangedSuccess')}</p>
          </div>
          <div className="flex justify-center mt-10">
            <BackButton text={t('backToLogin')} link="/login" />
          </div>
        </div>
      )}
    </div>
  );
}
