import { useQuery } from '@tanstack/react-query';
import type { AuthResponseType } from '@/modules/auth/types/AuthTypes';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { authQueryKeys } from '@/modules/auth/consts';
import { userService } from '@/modules/profile/services/userService';
import Cookies from 'js-cookie';
import { tokenName } from '@/modules/auth/consts';

export function useAuthQuery(refetchOnMount?: 'always') {
  const query = useQuery<AuthResponseType | null, ErrorResponseType>({
    queryKey: authQueryKeys.user,
    queryFn: async (): Promise<AuthResponseType | null> => {
      const token = Cookies.get(tokenName);
      if (!token) {
        return null;
      }

      const response = await userService.getProfileData();
      const user = response.data;
      return { access_token: token, user };
    },
    staleTime: Infinity,
    retry: false,
    refetchOnMount: refetchOnMount,
  });

  return query;
}
