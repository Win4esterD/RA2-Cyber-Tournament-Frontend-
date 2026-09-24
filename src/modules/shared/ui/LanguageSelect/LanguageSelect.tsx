import { TbWorld } from 'react-icons/tb';
import { useState, useEffect, useCallback, useRef } from 'react';
import type { Locale } from '@/i18n/routing';
import { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';

const { EN, ES, RU } = LocaleTypeEnum;

type LanguageSelectPropsType = {
  defaultLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function LanguageSelect({
  defaultLocale,
  onLocaleChange,
}: LanguageSelectPropsType) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpened(false);
  };

  const localeChangeHandler = (locale: Locale) => {
    setSelectedLocale(locale);
    onLocaleChange(locale);
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !event.composedPath().includes(rootRef.current)) {
        setIsOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [rootRef]);

  return (
    <div ref={rootRef} className="relative w-fit">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-1.5 px-2 py-2 rounded-lg hover:bg-[#161d28] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
      >
        <TbWorld />
        {selectedLocale.toUpperCase()}
      </button>
      {isOpened && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-1 z-50 w-32 overflow-hidden rounded-md border p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-[#0d1219] border-[#1e2733] text-slate-200"
        >
          <div
            onClick={() => localeChangeHandler(EN)}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            English
          </div>
          <div
            onClick={() => localeChangeHandler(RU)}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            Русский
          </div>
          <div
            onClick={() => localeChangeHandler(ES)}
            className="relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 flex items-center justify-between gap-6 cursor-pointer focus:bg-[#161d28] focus:text-slate-100"
          >
            Español
          </div>
        </div>
      )}
    </div>
  );
}
