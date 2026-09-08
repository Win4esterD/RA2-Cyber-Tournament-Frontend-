import { IconType } from "react-icons";

type InputProps = {
  Icon?: IconType;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  type?: string;
};

export function Input({
  Icon,
  label,
  placeholder,
  value,
  required,
  type,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="absolute top-4 left-3 text-slate-300" />}
        <input
          placeholder={placeholder}
          className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-red-600/50 focus:outline-none transition-colors"
          required={required}
          value={value}
          type={type}
        />
      </div>
    </div>
  );
}
