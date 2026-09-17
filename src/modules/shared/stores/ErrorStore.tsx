import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ErrorResponseType } from '../global_types/ErrorResponseType';

type ErrorStoreType = {
  error: ErrorResponseType | null;
  setError: (error: ErrorResponseType) => void;
};

export const useErrorStore = create<ErrorStoreType>()(
  devtools((set) => ({
    // bears: 0,
    // addBear: () =>
    //   set((state) => ({ bears: state.bears + 1 }), undefined, 'jungle/addBear'),
    // fishes: 0,
    // addFish: () =>
    //   set((state) => ({ fishes: state.fishes + 1 }), undefined, 'jungle/addFish'),
    error: null,
    setError: (error: ErrorResponseType) => {
      set(() => ({ error }), undefined, 'error/setError');
    },
  })),
);
