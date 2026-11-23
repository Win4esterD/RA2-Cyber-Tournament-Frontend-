'use client';
import { LuArrowLeft } from 'react-icons/lu';
import { useRouter } from '@/i18n/navigation';

type BackButtonPropsType = {
  text?: string;
  link?: string;
};

export function BackButton({ text, link }: BackButtonPropsType) {
  const router = useRouter();
  return (
    <button
      onClick={() => (!link ? router.back() : router.push(link))}
      type="button"
      className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 mb-6 hover:cursor-pointer"
    >
      <LuArrowLeft className="w-4 h-4" />
      {text}
    </button>
  );
}
