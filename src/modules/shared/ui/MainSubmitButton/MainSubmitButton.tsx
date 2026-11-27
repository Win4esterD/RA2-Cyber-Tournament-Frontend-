import type { ReactNode, SyntheticEvent } from 'react';

type MainSubmitButtonPropsType = {
  children?: ReactNode;
  onClick?: (value: SyntheticEvent) => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

export function MainSubmitButton({
  children,
  onClick,
  className,
  type,
  disabled = false,
}: MainSubmitButtonPropsType) {
  return (
    <button
      className={`w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
