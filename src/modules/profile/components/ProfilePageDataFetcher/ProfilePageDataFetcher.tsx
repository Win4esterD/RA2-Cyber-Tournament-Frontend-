'use client';
import { useAuthQuery } from '@/modules/auth';
import { ProfilePageUI } from '@/modules/profile/components/ProfilePageUI/ProfilePageUI';
import { Loader } from '@/modules/shared/ui/Loader/Loader';

export function ProfilePageDataFetcher() {
  const { data, isPending } = useAuthQuery('always');
  if (isPending) {
    return (
      <div className="flex justify-center">
        <Loader className="h-8 w-8" />
      </div>
    );
  }

  return <ProfilePageUI profileData={data?.user} />;
}
