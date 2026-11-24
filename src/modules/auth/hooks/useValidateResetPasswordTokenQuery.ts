import { useQuery } from '@tanstack/react-query';
import { authService } from '@/modules/auth/services/authService';
import { authQueryKeys } from '@/modules/auth/consts';

export function useValidateResetPasswordTokenQuery(token: string | null) {
  const query = useQuery({
    queryKey: authQueryKeys.validateResetToken(token),
    queryFn: async () => {
      if (token) {
        const response = await authService.validateResetPasswordToken(token);
        return response;
      }
      return null;
    },
    enabled: Boolean(token),
  });

  return query;
}
