import type { UserType } from '@/modules/auth';
import { NoAuthProfilePageView } from '@/modules/profile/components/NoAuthProfilePageView/NoAuthProfilePageView';
import { UserCard } from '@/modules/shared/ui/UserCard/UserCard';

type ProfilePageUIPropsType = {
  profileData?: UserType;
};

export function ProfilePageUI({ profileData }: ProfilePageUIPropsType) {
  if (!profileData) {
    return <NoAuthProfilePageView />;
  }

  return <UserCard profileData={profileData} />;
}
