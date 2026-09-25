import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthStoreType = {
  token: string | null;
  isAuth: boolean | null;
};

export const useAuthStore = create<AuthStoreType>()(
  devtools((set) => ({
    token: null,
    isAuth: null,
    setAuth(token: string) {
      set(() => ({ token, isAuth: true }), false, 'auth/setAuth');
    },
    removeAuth() {
      set(() => ({ token: null, isAuth: null }));
    },
  })),
);
