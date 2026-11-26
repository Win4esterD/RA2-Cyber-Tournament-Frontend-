import { apiClient } from '@/global variables/apiClient';
import type {
  CreateTournamentType,
  TournamentType,
} from '@/modules/tournaments/types/TournamentTypes';

export const tournamentService = {
  async createTournament(tournamentData: CreateTournamentType) {
    const response = await apiClient.post<TournamentType>(
      '/tournaments/create',
      tournamentData,
    );
    return response.data;
  },
};
