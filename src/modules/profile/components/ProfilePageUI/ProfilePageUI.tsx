import type { UserType } from '@/modules/auth';
import { NoAuthProfilePageView } from '@/modules/profile/components/NoAuthProfilePageView/NoAuthProfilePageView';
import { UserCard } from '@/modules/profile/components/UserCard/UserCard';

type ProfilePageUIPropsType = {
  profileData?: UserType;
};

export function ProfilePageUI({ profileData }: ProfilePageUIPropsType) {
  if (!profileData) {
    return <NoAuthProfilePageView />;
  }

  return <UserCard profileData={profileData} />;
}
