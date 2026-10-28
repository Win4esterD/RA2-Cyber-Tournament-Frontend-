import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { BackButton } from '@/modules/shared/ui/BackButton/BackButton';

const meta = {
  component: BackButton,
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
} satisfies Story;

export const WithText = {
  args: {
    text: 'Back',
  },
} satisfies Story;
