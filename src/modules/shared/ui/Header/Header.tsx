import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import type { Locale } from '@/i18n/routing';

type HeaderPropsType = {
  onLocaleChange: (locale: Locale) => void;
  locale: Locale;
};

export function Header({ locale, onLocaleChange }: HeaderPropsType) {
  return (
    <header
      onClick={(e) => e.stopPropagation()}
      className="h-16 border-b border-slate-700 bg-slate-900/80 backdrop-blur flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20"
    >
      <div className="hidden lg:block text-sm text-slate-500 ">
        Red Alert 2 · Tournaments planform
      </div>
      <LanguageSelect defaultLocale={locale} onLocaleChange={onLocaleChange} />
    </header>
  );
}
