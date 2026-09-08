import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";

export function RegistrationForm() {
  return (
    <div className="w-md h-124.25 bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl">
      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer">
        <FcGoogle />
        <span className="text-white-text-primary">Registration via Google</span>
      </button>
      <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
        <span className="bg-[#0d1219] px-3 text-slate-600">or</span>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300"
        >
          Email
        </label>
        <div className="relative">
          <TfiEmail className="absolute top-4 left-3" />
          <input
            id="email"
            autoComplete="email"
            placeholder="commander@ra2.arena"
            className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-red-600/50 focus:outline-none transition-colors"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-300"
        >
          Password
        </label>
        <input
          id="password"
          autoComplete="password"
          className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-red-600/50 focus:outline-none transition-colors"
          required
        />
      </div>
    </div>
  );
}
