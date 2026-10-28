'use client';
import { LuArrowLeft } from 'react-icons/lu';
import { useRouter } from '@/i18n/navigation';

type BackButtonPropsType = {
  text?: string;
};

export function BackButton({ text }: BackButtonPropsType) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 mb-6 hover:cursor-pointer"
    >
      <LuArrowLeft className="w-4 h-4" />
      {text}
    </button>
  );
}
