'use client';
import type { ReactNode } from 'react';
import { ErrorModal } from '../ui/ErrorModal/ErrorModal';
import { useErrorStore } from '../stores/ErrorStore';

type GlobalErrorHandlerProps = {
  children: ReactNode;
};

export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const error = useErrorStore((state) => state.error);
  const clearError = useErrorStore((state) => state.clearError);

  return (
    <>
      {error && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-100">
          <ErrorModal closeHandler={clearError} error={error} />
        </div>
      )}
      {children}
    </>
  );
}
