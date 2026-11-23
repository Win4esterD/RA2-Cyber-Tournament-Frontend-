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

export function ForgotPasswordForm() {
  const resetPasswordSchema = useForgotPasswordSchema();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordType) => console.log(data);

  const t = useTranslations('Auth.resetPassword');
  return (
    <form
      className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        controllerProps={{ name: 'email', control }}
        label={t('email')}
        Icon={TfiEmail}
        placeholder="you.example.com"
      />
      <LogInAndRegisterButton type="submit" className="mt-4">
        {t('sendResetLink')}
      </LogInAndRegisterButton>
    </form>
  );
}
