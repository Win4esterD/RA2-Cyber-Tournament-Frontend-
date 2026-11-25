import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { CreateTournamentForm } from '@/modules/tournaments/CreateTournamentForm/CreateTournamentForm';

const meta = {
  component: CreateTournamentForm,
  decorators: [
    (Story) => {
      return (
        <div className="p-6 lg:p-10 max-w-2xl mx-auto">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof CreateTournamentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    submitHandler: (data) => console.log(data),
  },
} satisfies Story;
