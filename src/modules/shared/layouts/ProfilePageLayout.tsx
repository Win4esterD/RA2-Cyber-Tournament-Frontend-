'use client';
import { useAuthQuery } from '@/modules/auth';

export function ProfilePageLayout() {
  const { data } = useAuthQuery('always');

  return <div>Profile Page</div>;
}
