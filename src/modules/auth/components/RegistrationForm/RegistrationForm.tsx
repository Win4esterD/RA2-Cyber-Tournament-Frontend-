import { FcGoogle } from "react-icons/fc";

export function RegistrationForm() {
  return (
    <div className="w-md h-124.25 bg-[#0d1219] rounded-2xl border border-[#1e2733] p-8 shadow-2xl">
      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6">
        <FcGoogle />
        <span className="text-white-text-primary">Registration via Google</span>
      </button>
    </div>
  );
}
