import type { UseControllerProps, FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

type TextAreaPropsType<T extends FieldValues> = {
  label?: string;
  placeholder?: string;
  text?: string;
  controllerProps: UseControllerProps<T>;
  rows?: number;
  required?: boolean;
};

export function TextArea<T extends FieldValues>({
  label,
  placeholder,
  text,
  controllerProps,
  rows = 2,
  required = false,
}: TextAreaPropsType<T>) {
  const { field, fieldState } = useController(controllerProps);
  return (
    <div>
      <label htmlFor={field.name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500">{` *`}</span>}
      </label>
      <textarea
        {...field}
        rows={rows}
        placeholder={placeholder}
        className="bg-[#0a0e14] border border-[#1e2733] rounded-lg px-4 py-2.5 text-sm focus:border-red-600/50 outline-none w-full"
        id={field.name}
      >
        {text}
      </textarea>
      {fieldState.error && (
        <span className="text-xs text-red-500">{fieldState.error.message}</span>
      )}
    </div>
  );
}
