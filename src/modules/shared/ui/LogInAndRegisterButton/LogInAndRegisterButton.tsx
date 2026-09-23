import type { ReactNode, SyntheticEvent } from 'react';

type LogInAndRegisterButtonPropsType = {
  children?: ReactNode;
  onClick?: (value: SyntheticEvent) => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
};

export function LogInAndRegisterButton({
  children,
  onClick,
  className,
  type,
}: LogInAndRegisterButtonPropsType) {
  return (
    <button
      className={`w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
