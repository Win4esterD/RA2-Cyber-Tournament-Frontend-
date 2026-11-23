import { useQuery } from '@tanstack/react-query';
import type { AuthResponseType } from '@/modules/auth/types/AuthTypes';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { authQueryKeys, tokenName } from '@/modules/auth/consts';
import Cookies from 'js-cookie';
import { userService } from '@/modules/profile/services/userService';
import { parseGoogleToken } from '@/modules/auth/utils/parseGoogleToken';

export function useAuthQuery(refetchOnMount?: 'always') {
  const query = useQuery<AuthResponseType | null, ErrorResponseType>({
    queryKey: authQueryKeys.user,
    queryFn: async (): Promise<AuthResponseType | null> => {
      const token = Cookies.get(tokenName);
      const googleToken = parseGoogleToken();
      const authToken = token || googleToken;

      if (!authToken) return null;

      Cookies.set(tokenName, authToken);

      const response = await userService.getProfileData();
      const user = response.data;
      return { access_token: authToken, user };
    },
    staleTime: Infinity,
    retry: false,
    refetchOnMount: refetchOnMount,
  });

  return query;
}
