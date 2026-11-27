import { apiClient } from '@/global variables/apiClient';
import type {
  CreateTournamentParamsType,
  TournamentType,
} from '@/modules/tournaments/types/TournamentTypes';
import { BASE_URL } from '@/global variables/apiClient';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';

export const tournamentService = {
  async createTournament(tournamentData: CreateTournamentParamsType) {
    const response = await apiClient.post<TournamentType>(
      '/tournaments/create',
      tournamentData,
    );
    return response.data;
  },

  async getTournament(tournamentId: number): Promise<TournamentType> {
    const response = await fetch(`${BASE_URL}/tournaments/${tournamentId}`, {
      cache: 'force-cache',
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      const errorJson: ErrorResponseType = await response.json();
      throw errorJson;
    }

    return (await response.json()) as TournamentType;
  },
};
