import { ResetPasswordForm } from '@/modules/auth';
import { IconBadge } from '@/modules/shared/ui/IconBadge/IconBadge';
import { CiMail } from 'react-icons/ci';
import { TfiCup } from 'react-icons/tfi';
import { useTranslations } from 'next-intl';

export default function ResetPasswordPage() {
  const t = useTranslations('Auth.resetPassword');
  return (
    <div className='className="w-screen h-screen flex justify-center items-center flex-col'>
      <IconBadge Icon={<CiMail className="w-8 h-8" />} />
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
        <ResetPasswordForm />
      </div>
    </div>
  );
}
