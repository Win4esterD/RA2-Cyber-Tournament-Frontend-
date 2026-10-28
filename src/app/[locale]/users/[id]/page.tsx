import type { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';
import { userService } from '@/modules/profile/services/userService';
import { ProfilePageUI } from '@/modules/profile';
import { notFound } from 'next/navigation';

type UserPagePropsType = {
  params: Promise<{ id: string; locale: LocaleTypeEnum }>;
};

export default async function UserPage({ params }: UserPagePropsType) {
  const { id } = await params;
  const response = await userService.getUserById(id);
  if (!response) {
    return notFound();
  }

  return <ProfilePageUI profileData={response} editable={false}/>;
}
