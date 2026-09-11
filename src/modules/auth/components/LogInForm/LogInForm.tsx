'use client';
import { FcGoogle } from 'react-icons/fc';
import { TfiEmail } from 'react-icons/tfi';
import { Input } from '@/modules/shared/ui/Input/Input';
import { RiLockPasswordLine } from 'react-icons/ri';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import { LogInSchema } from '@/modules/schemas/LogInSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LogInType } from '@/modules/schemas/LogInSchema';
import Link from 'next/link';

export function LogInForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LogInSchema),
  });

  const onSubmit = (data: LogInType) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
    >
      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer">
        <FcGoogle />
        <span className="text-white-text-primary">Log In via Google</span>
      </button>
      <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
        <span className="bg-[#0d1219] px-3 text-slate-600">or</span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Input
          label="Email"
          placeholder="commander@ra2.arena"
          Icon={TfiEmail}
          controllerProps={{ name: 'email', control }}
        />
        <Input
          label="Password"
          placeholder="••••••••"
          type="password"
          Icon={RiLockPasswordLine}
          controllerProps={{ name: 'password', control }}
        />
      </div>
      <LogInAndRegisterButton className="mt-5" type="submit">
        Log In
      </LogInAndRegisterButton>
      <Link
        href="/forgot-password"
        className="text-xs text-slate-500 hover:text-red-400 transition-colors hover:cursor-pointer inline-block mt-5"
      >
        Forgot password?
      </Link>
    </form>
  );
}
