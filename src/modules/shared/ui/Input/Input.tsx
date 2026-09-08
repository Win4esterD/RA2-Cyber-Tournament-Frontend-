import { IconType } from "react-icons";

type InputProps = {
  Icon?: IconType;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
};

export function Input({ Icon, label, placeholder, value, required }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute top-4 left-3 text-slate-300" />}
        <input
          autoComplete="email"
          placeholder={placeholder}
          className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-red-600/50 focus:outline-none transition-colors"
          required={required}
          value={value}
        />
      </div>
    </div>
  );
}
