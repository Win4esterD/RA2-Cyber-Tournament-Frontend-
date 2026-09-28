import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthStoreType = {
  token: string | null;
  isAuth: boolean;
  setAuth: (token: string) => void;
  removeAuth: () => void;
};

export const useAuthStore = create<AuthStoreType>()(
  devtools((set) => ({
    token: null,
    isAuth: false,
    setAuth(token: string) {
      set(() => ({ token, isAuth: true }), false, 'auth/setAuth');
    },
    removeAuth() {
      set(() => ({ token: null, isAuth: false }), false, 'auth/removeAuth');
    },
  })),
);
