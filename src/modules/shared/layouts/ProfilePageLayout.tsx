'use client';
import { useQuery, skipToken } from '@tanstack/react-query';
import { authQueryKeys, tokenName } from '@/modules/auth';
import { authService } from '@/modules/auth/services/authService';
import Cookie from 'js-cookie';

export function ProfilePageLayout() {
  const query = useQuery({
    queryKey: authQueryKeys.user,
    queryFn: skipToken,
    // queryFn: async () => {
    //   const token = Cookie.get(tokenName);

    //   if (token) {
    //     const response = await authService.getUserDataByToken(token);
    //     return response;
    //   }

    //   return null;
    // },
    // refetchOnReconnect: true,
  });
  return <div>Profile Page</div>;
}
