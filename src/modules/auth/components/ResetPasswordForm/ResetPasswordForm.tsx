import { Input } from '@/modules/shared/ui/Input/Input';
import { ResetPasswordSchema } from '../../schemas/ResetPasswordSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ResetPasswordType } from '../../schemas/ResetPasswordSchema';
import { TfiEmail } from 'react-icons/tfi';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';

export function ResetPasswordForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordType) => console.log(data);

  return (
    <form
      className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        controllerProps={{ name: 'email', control }}
        label="Email address"
        Icon={TfiEmail}
        placeholder="you.example.com"
      />
      <LogInAndRegisterButton type="submit" className="mt-4">
        Send reset link
      </LogInAndRegisterButton>
    </form>
  );
}
