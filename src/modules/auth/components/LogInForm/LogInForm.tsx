import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { Input } from "@/modules/shared/ui/Input/Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { LogInAndRegisterButton } from "@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton";

export function LogInForm() {
  return (
    <div className="w-md bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl">
      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer">
        <FcGoogle />
        <span className="text-white-text-primary">Log In via Google</span>
      </button>
      <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
        <span className="bg-[#0d1219] px-3 text-slate-600">or</span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Input placeholder="commander@ra2.arena" required Icon={TfiEmail} />
        <Input
          placeholder="password"
          required
          type="password"
          Icon={RiLockPasswordLine}
        />
      </div>
      <LogInAndRegisterButton className="mt-5">Register</LogInAndRegisterButton>
    </div>
  );
}
