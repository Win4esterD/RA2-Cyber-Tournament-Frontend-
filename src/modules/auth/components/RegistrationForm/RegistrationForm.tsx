import { FcGoogle } from "react-icons/fc";
import { Input } from "@/modules/shared/ui/Input/Input";
import { LogInAndRegisterButton } from "@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistrationSchema,
  RegistrationType,
} from "@/modules/schemas/RegistrationSchema";

export function RegistrationForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: zodResolver(RegistrationSchema),
  });

  const onSubmit = (data: RegistrationType) => console.log(data);

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-md max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl max-xs:w-full"
      >
        <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer">
          <FcGoogle />
          <span className="text-white-text-primary">Register via Google</span>
        </button>
        <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
          <span className="bg-[#0d1219] px-3 text-slate-600">or</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <Input
            label="Email"
            placeholder="commander@ra2.arena"
            Icon={TfiEmail}
            controllerProps={{ name: "email", control }}
          />
          <Input
            label="Password"
            placeholder="••••••••"
            type="password"
            Icon={RiLockPasswordLine}
            controllerProps={{ name: "password", control }}
          />
          <Input
            label="Repeat pasword"
            placeholder="••••••••"
            type="password"
            Icon={RiLockPasswordLine}
            controllerProps={{ name: "repeatPassword", control }}
          />
        </div>
        <LogInAndRegisterButton className="mt-5" type="submit">
          Register
        </LogInAndRegisterButton>
      </form>
  );
}
