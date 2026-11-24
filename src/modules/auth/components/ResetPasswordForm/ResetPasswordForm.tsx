'use client';
import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { useResetPasswordSchema } from '@/modules/auth/schemas/ResetPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import type { ResetPasswordType } from '@/modules/auth/schemas/ResetPasswordSchema';
import { useTranslations } from 'next-intl';
import { RiLockPasswordLine } from 'react-icons/ri';

type ResetPasswordFormPropsType = {
  submitHandler: (newPassword: string) => void;
  isPending: boolean;
};

export function ResetPasswordForm({
  submitHandler,
  isPending,
}: ResetPasswordFormPropsType) {
  const resetPasswordSchema = useResetPasswordSchema();
  const t = useTranslations('Auth.resetPassword');

  const { control, handleSubmit } = useForm({
    defaultValues: {
      newPassword: '',
      repeatPassword: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordType) => {
    submitHandler(data.newPassword);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
      >
        <div className="flex flex-col gap-5">
          <Input
            controllerProps={{ name: 'newPassword', control }}
            label={t('newPassword')}
            placeholder="••••••••"
            type="password"
            Icon={RiLockPasswordLine}
          />
          <Input
            controllerProps={{ name: 'repeatPassword', control }}
            label={t('repeatPassword')}
            placeholder="••••••••"
            type="password"
            Icon={RiLockPasswordLine}
          />
        </div>
        <LogInAndRegisterButton type="submit" className="mt-4" disabled={isPending}>
          {t('changePassword')}
        </LogInAndRegisterButton>
      </form>
    </div>
  );
}
