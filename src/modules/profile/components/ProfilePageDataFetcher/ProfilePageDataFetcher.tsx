'use client';
import { useAuthQuery } from '@/modules/auth';
import { ProfilePageUI } from '@/modules/profile/components/ProfilePageUI/ProfilePageUI';
import { LuLoaderCircle } from 'react-icons/lu';

export function ProfilePageDataFetcher() {
  const { data, isPending } = useAuthQuery('always');
  if (isPending) {
    return (
      <div className='flex justify-center'>
        <LuLoaderCircle className="animate-spin h-8 w-8" />
      </div>
    );
  }

  return <ProfilePageUI profileData={data?.user} />;
}
