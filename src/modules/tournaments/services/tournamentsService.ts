import { apiClient } from '@/global variables/apiClient';
import type {
  CreateTournamentParamsType,
  TournamentType,
} from '@/modules/tournaments/types/TournamentTypes';

export const tournamentService = {
  async createTournament(tournamentData: CreateTournamentParamsType) {
    const response = await apiClient.post<TournamentType>(
      '/tournaments/create',
      tournamentData,
    );
    return response.data;
  },
};
