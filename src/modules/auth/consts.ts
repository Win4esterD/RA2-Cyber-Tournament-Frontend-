export const tokenName = 'Ra2Arena-token';

// Key factory for React Query — single source of truth, no drift possible
export const authQueryKeys = {
  all: ['auth'],
  user: ['auth', 'user'],
};
