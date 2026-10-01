'use client';
import { useAuthQuery } from '@/modules/auth';
import { ProfilePageUI } from '@/modules/profile/components/ProfilePageUI/ProfilePageUI';

export function ProfilePageDataFetcher() {
  const { data } = useAuthQuery('always');

  return <ProfilePageUI profileData={data?.user} />;
}
