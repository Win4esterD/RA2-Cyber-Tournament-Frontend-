import { useQuery } from '@tanstack/react-query';
import { authService } from '@/modules/auth/services/authService';
import { authQueryKeys } from '@/modules/auth/consts';
import { useSearchParams } from 'next/navigation';


export function useValidateResetPasswordTokenQuery() {
  const params = useSearchParams();

  const query = useQuery({
    queryKey: [authQueryKeys.user[3]],
    queryFn: async () => {
      const token = params.get('token');
      if (token) {
        const response = await authService.validateResetPasswordToken(token);
        return response;
      }
    },
  });

  return query;
}
