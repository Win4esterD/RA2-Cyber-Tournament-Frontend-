import { RegistrationForm } from '@/modules/auth/';
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import { FiUserPlus } from 'react-icons/fi';
import { TfiCup } from 'react-icons/tfi';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function RegistrationPage() {
  const t = useTranslations('Auth.register');
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <IconBadge Icon={<FiUserPlus className="w-8 h-8" />} />
      <div className="text-red-400 flex">
        <TfiCup className="text-red-400 pr-1" />
        <h1 className="text-[11px] uppercase tracking-[0.3em] text-red-400 font-bold">
          RA2 Arena
        </h1>
      </div>
      <p className="text-2xl font-bold tracking-tight mt-1.5 max-xs:text-lg">
        {t('title')}
      </p>
      <p className="text-slate-500 text-sm mt-1.5">{t('subtitle')}</p>
      <div className="mt-8">
        <RegistrationForm />
      </div>
      <p className="text-center text-sm text-slate-500 mt-6">
        {' '}
        {t('hasAccount')}{' '}
        <Link
          href="/login/"
          className="text-red-400 font-medium hover:text-red-300 hover:underline"
        >
          {t('loginLink')}
        </Link>
      </p>
    </div>
  );
}
