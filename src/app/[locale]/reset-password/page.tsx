import { Suspense } from 'react';
import { ResetPasswordPageUI } from '@/modules/auth/components/ResetPasswordPageUI/ResetPasswordPageUI';
import { Loader } from '@/modules/shared/ui/Loader/Loader';

export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Suspense fallback={<Loader className="w-8 h-8" />}>
        <ResetPasswordPageUI />
      </Suspense>
    </div>
  );
}
