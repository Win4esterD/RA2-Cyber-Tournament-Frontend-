import type { IconType } from 'react-icons';
import type { UseControllerProps, FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

type InputPropsType<T extends FieldValues> = {
  Icon?: IconType;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  controllerProps: UseControllerProps<T>;
  labelUtilityClasses?: string;
};

export function Input<T extends FieldValues>({
  Icon,
  label,
  placeholder,
  required,
  type,
  controllerProps,
  labelUtilityClasses,
}: InputPropsType<T>) {
  const { field, fieldState } = useController(controllerProps);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          className={labelUtilityClasses || 'block text-sm font-medium text-slate-300'}
          htmlFor={field.name}
        >
          {label}
          {required && <span className="text-red-500">{` *`}</span>}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="absolute top-4 left-3 text-slate-300" />}
        <input
          {...field}
          placeholder={placeholder}
          className={`w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-red-600/50 focus:outline-none transition-colors`}
          type={type}
          id={field.name}
        />
      </div>
      {fieldState.error && (
        <span className="text-xs text-red-500">{fieldState.error.message}</span>
      )}
    </div>
  );
}
