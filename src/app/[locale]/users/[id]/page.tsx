import type { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';
import { userService } from '@/modules/profile/services/userService';
import { ProfilePageUI } from '@/modules/profile';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';

type UserPagePropsType = {
  params: Promise<{ id: string; locale: LocaleTypeEnum }>;
};

export default async function UserPage({ params }: UserPagePropsType) {
  const { id } = await params;
  const t = await getTranslations('common');
  const response = await userService.getUserById(id);
  if (!response) {
    return notFound();
  }

  return (
    <div>
      <BackButton text={t('back')} />
      <ProfilePageUI profileData={response} editable={false} />
    </div>
  );
}
