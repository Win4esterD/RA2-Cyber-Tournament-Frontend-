import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateTournamentSchema } from '@/modules/tournaments/schemas/useCreateTournamentSchema';
import { BracketTypeEnum } from '@/modules/tournaments/types/TournamentTypes';
import { LogInAndRegisterButton } from '@/modules/shared/ui/LogInAndRegisterButton/LogInAndRegisterButton';
import type { CreateTournamentSchemaType } from '@/modules/tournaments/schemas/useCreateTournamentSchema';
import { TextArea } from '@/modules/shared/ui/TextArea/TextArea';

const { SINGLE_ELIMINATION, DOUBLE_ELIMINATION } = BracketTypeEnum;

type CreateTournamentFormProps = {
  submitHandler: (data: CreateTournamentSchemaType) => void;
};

export function CreateTournamentForm({ submitHandler }: CreateTournamentFormProps) {
  const tournamentSchema = useCreateTournamentSchema();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      description: '',
      rules: '',
      bracketsFormat: BracketTypeEnum.SINGLE_ELIMINATION,
      startDate: '',
      streamUrl: '',
    },
    resolver: zodResolver(tournamentSchema),
  });

  const onSubmit = (data: CreateTournamentSchemaType) => {
    submitHandler(data);
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Tournament name"
          controllerProps={{ name: 'title', control }}
          placeholder="Red Alert 2 tournament"
          required
        />
        <TextArea
          label="Description"
          placeholder="Tournament description"
          controllerProps={{ name: 'description', control }}
          rows={3}
          required
        />
        <TextArea
          label="Rules"
          placeholder="Tournament rules, maps, match format...s"
          controllerProps={{ name: 'rules', control }}
          rows={6}
        />
        <div>
          <label className="block text-sm font-medium mb-2">Brackets format</label>
          <select className="bg-[#0a0e14] border border-[#1e2733] rounded-lg px-4 py-2.5 text-sm focus:border-red-600/50 outline-none w-full">
            <option value={SINGLE_ELIMINATION}>Single Elimination</option>
            <option value={DOUBLE_ELIMINATION}>Double Elimination</option>
          </select>
        </div>
        <Input
          label="Start date"
          controllerProps={{ name: 'startDate', control }}
          type="date"
          placeholder="Start date"
          required
        />
        <Input
          label="Stream URL"
          controllerProps={{ name: 'streamUrl', control }}
          type="url"
          placeholder="https://twitch.tv/..."
        />
        <LogInAndRegisterButton>Create Tournament</LogInAndRegisterButton>
      </form>
    </div>
  );
}
