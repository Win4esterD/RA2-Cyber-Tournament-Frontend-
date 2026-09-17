import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ErrorResponseType } from '../global_types/ErrorResponseType';

type ErrorStoreType = {
  error: ErrorResponseType | null;
  setError: (error: ErrorResponseType) => void;
};

export const useErrorStore = create<ErrorStoreType>()(
  devtools((set) => ({
    error: null,
    setError: (error: ErrorResponseType) => {
      set(() => ({ error }), false, 'error/setError');
    },
    clearError: () => {
      set(() => ({ error: null }), false, 'error/clearError');
    },
  })),
);
