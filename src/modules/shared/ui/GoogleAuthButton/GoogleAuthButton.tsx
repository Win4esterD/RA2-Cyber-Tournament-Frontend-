import { useTranslations } from 'next-intl';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import { BASE_URL } from '@/global variables/apiClient';
import { FcGoogle } from 'react-icons/fc';

export function GoogleAuthButton() {
  const t = useTranslations('Auth.login');
  const setGlobalError = useErrorStore((state) => state.setError);

  const handleGoogleAuth = () => {
    if (!BASE_URL) {
      setGlobalError({ message: 'BASE_URL is not available', statusCode: 400 });
      return;
    }
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(`${BASE_URL}/auth/google`);
  };

  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="w-full flex items-center justify-center gap-2 bg-[#0a0e14] border border-[#1e2733] hover:border-slate-600 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-6 cursor-pointer"
    >
      <FcGoogle />
      <span className="text-white-text-primary">{t('googleButton')}</span>
    </button>
  );
}
