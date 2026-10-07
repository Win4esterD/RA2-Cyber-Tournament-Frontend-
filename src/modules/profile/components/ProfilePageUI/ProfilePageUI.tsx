import type { UserType } from '@/modules/profile/types/UserTypes';
import { NoAuthProfilePageView } from '@/modules/profile/components/NoAuthProfilePageView/NoAuthProfilePageView';
import { UserCard } from '@/modules/profile/components/UserCard/UserCard';
import { UserCardCustomizationForm } from '@/modules/profile/components/UserCardCustomizationForm/UserCardCustomizationForm';
import { useTranslations } from 'next-intl';

type ProfilePageUIPropsType = {
  profileData?: UserType;
};

export function ProfilePageUI({ profileData }: ProfilePageUIPropsType) {
  const t = useTranslations('profile');

  if (!profileData) {
    return <NoAuthProfilePageView />;
  }

  const { about_user, card_style, name } = profileData;

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <UserCard profileData={profileData} />
        </div>
        <UserCardCustomizationForm
          about_user={about_user}
          card_style={card_style}
          name={name}
        />
      </div>
    </div>
  );
}
