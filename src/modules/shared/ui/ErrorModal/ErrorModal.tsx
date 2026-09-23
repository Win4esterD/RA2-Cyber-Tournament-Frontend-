import type { ErrorResponseType } from '../../global_types/ErrorResponseType';
import { IoCloseSharp } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

type ErrorModalPropsType = {
  error: ErrorResponseType;
  closeHandler: () => void;
};

export function ErrorModal({ error, closeHandler }: ErrorModalPropsType) {
  const t = useTranslations('errorModal');

  return (
    <div className="w-lg h-2xl max-w-full bg-[#0d1219] rounded-2xl border border-[#1e2733]">
      <IoCloseSharp
        onClick={closeHandler}
        className="text-red-700 size-7 cursor-pointer absolute right-3 top-3"
      />
      <div className="p-8 shadow-2xl">
        <div>
          <p className="text-red-700 text-2xl font-bold text-center">
            {t('errorOccured')}
          </p>
          <div className="mt-2 flex gap-2 flex-wrap">
            <p className="text-red-700 text-xl font-bold">{t('message')}:</p>
            <p className="text-red-700 text-xl ">{error.message}</p>
          </div>
          {error.error && (
            <div className="mt-2 flex gap-2 flex-wrap">
              <p className="text-red-700 text-xl font-bold">{t('error')}:</p>
              <p className="text-red-700 text-xl ">{error.error}</p>
            </div>
          )}
          <div className="flex mt-2 gap-2 flex-wrap">
            <p className="text-red-700 text-xl font-bold">{t('code')}:</p>
            <p className="text-red-700 text-xl">{error.statusCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
