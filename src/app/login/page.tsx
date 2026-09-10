import { LogInForm } from "@/modules/auth/components/LogInForm/LogInForm";
import { CiLogin } from "react-icons/ci";
import { IconBadge } from "@/modules/shared/ui/IconBadge/IconBadge";
import { TfiCup } from "react-icons/tfi";

export default function LogIn() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <IconBadge Icon={<CiLogin className="w-8 h-8" />} />
      <div className="text-red-400 flex">
        <TfiCup className="text-red-400" />
        <h1 className="text-[11px] uppercase tracking-[0.3em] text-red-400 font-bold">
          RA2 Arena
        </h1>
      </div>
      <p className="text-2xl font-bold tracking-tight mt-1.5 max-xs:text-lg">
        Welcome back commander
      </p>
      <p className="text-slate-500 text-sm mt-1.5">Enter the command center</p>
      <div className="mt-8">
        <LogInForm />
      </div>
    </div>
  );
}
