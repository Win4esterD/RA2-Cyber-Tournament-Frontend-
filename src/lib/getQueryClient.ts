import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          // Считаем данные свежими 60 сек после гидратации,
          // чтобы при маунте клиента не летел мгновенный дубль-запрос без нужды
          staleTime: 60 * 1000,
        },
      },
    }),
);
