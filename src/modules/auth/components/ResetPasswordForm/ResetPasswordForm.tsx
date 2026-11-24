'use client';
import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { useResetPasswordSchema } from '@/modules/auth/schemas/ResetPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import type { ResetPasswordType } from '@/modules/auth/schemas/ResetPasswordSchema';

type ResetPasswordFormPropsType = {
  submitHandler: (newPassword: string) => void;
};

export function ResetPasswordForm({ submitHandler }: ResetPasswordFormPropsType) {
  const resetPasswordSchema = useResetPasswordSchema();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      newPassword: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordType) => {
    submitHandler(data.newPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          controllerProps={{ name: 'newPassword', control }}
          label="New password"
          type="password"
        />
        <LogInAndRegisterButton type="submit" className="mt-4">
          Change Password
        </LogInAndRegisterButton>
      </form>
    </div>
  );
}
