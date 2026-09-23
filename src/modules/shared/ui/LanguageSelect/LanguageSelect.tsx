import { TbWorld } from 'react-icons/tb';
import { useState, useEffect, useCallback } from 'react';
import type { Locale } from '@/i18n/routing';

type LanguageSelectPropsType = {
  defaultLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function LanguageSelect({ defaultLocale, onLocaleChange }: LanguageSelectPropsType) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);

  const handleClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  const localeChangeHandler = (locale: Locale) => {
    setSelectedLocale(locale);
    onLocaleChange(locale);
    handleClose();
  };

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [handleClose]);

  return (
    <div className="relative w-fit" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-1.5 px-2 py-2 rounded-lg hover:bg-[#161d28] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
      >
        <TbWorld />
        {selectedLocale.toUpperCase()}
      </button>
      {isOpened && (
        <div className="absolute right-1 z-50 w-32 overflow-hidden rounded-md border p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-[#0d1219] border-[#1e2733] text-slate-200">
          <div
            onClick={() => localeChangeHandler('en')}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            English
          </div>
          <div
            onClick={() => localeChangeHandler('ru')}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            Русский
          </div>
          <div
            onClick={() => localeChangeHandler('es')}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            Español
          </div>
        </div>
      )}
    </div>
  );
}
