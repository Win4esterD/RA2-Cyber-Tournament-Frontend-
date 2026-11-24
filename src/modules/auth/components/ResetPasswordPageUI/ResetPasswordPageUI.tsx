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
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import { RiLockPasswordLine } from 'react-icons/ri';
import { TfiCup } from 'react-icons/tfi';

export function ResetPasswordPageUI() {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const { data, isFetching, error } = useValidateResetPasswordTokenQuery();
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

  const isInvalidToken = !token || error || data?.is_valid === false;

  return (
    <div>
      {isFetching && <Loader />}

      {data?.is_valid && !isPasswordChanged && (
        <>
          <div className="flex flex-col justify-center items-center mb-8">
            <IconBadge Icon={<RiLockPasswordLine className="w-8 h-8" />} />
            <div className="text-red-400 flex">
              <TfiCup className="text-red-400 pr-1" />
              <h1 className="text-[11px] uppercase tracking-[0.3em] text-red-400 font-bold">
                RA2 Arena
              </h1>
            </div>
            <p className="text-2xl font-bold tracking-tight mt-1.5 max-xs:text-lg">
              {t('title')}
            </p>
            <p className="text-slate-500 text-sm mt-1.5">{t('subtitle')}</p>
          </div>
          <ResetPasswordForm submitHandler={mutate} />
        </>
      )}
      {isInvalidToken && (
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
