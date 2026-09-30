import { useQuery } from '@tanstack/react-query';
import type { AuthResponseType } from '@/modules/auth/types/AuthTypes';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { authQueryKeys, tokenName } from '@/modules/auth/consts';
import Cookies from 'js-cookie';
import { authService } from '@/modules/auth/services/authService';

export function useAuthQuery(refetchOnMount?: 'always') {
  const query = useQuery<AuthResponseType | null, ErrorResponseType>({
    queryKey: authQueryKeys.user,
    queryFn: async (): Promise<AuthResponseType | null> => {
      const token = Cookies.get(tokenName);
      if (!token) return null;

      const response = await authService.getUserDataByToken(token);
      const user = response.data;
      return { access_token: token, user };
    },
    staleTime: Infinity,
    retry: false,
    refetchOnMount: refetchOnMount,
  });

  return query;
}
