import { TournamentPageUI } from '@/modules/tournaments/TournamentPageUI/TournamentPageUI';
import type { LocaleTypeEnum } from '@/i18n/types/LocaleTypeEnum';
import { tournamentService } from '@/modules/tournaments/services/tournamentsService';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

type TournamentPageProps = {
  params: Promise<{
    locale: LocaleTypeEnum;
    tournamentId: string;
  }>;
};

export default async function TournamentPage({ params }: TournamentPageProps) {
  const { tournamentId } = await params;
  const tournamentIdNumber = parseInt(tournamentId);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [tournamentId],
    queryFn: () => tournamentService.getTournament(tournamentIdNumber),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TournamentPageUI tournamentId={tournamentIdNumber} />
    </HydrationBoundary>
  );
}
