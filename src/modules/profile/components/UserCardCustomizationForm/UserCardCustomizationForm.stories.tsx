import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCardCustomizationForm } from '@/modules/profile/components/UserCardCustomizationForm/UserCardCustomizationForm';
import { CardStyleTypeEnum } from '@/modules/auth';

const { DEFAULT } = CardStyleTypeEnum;

const meta = {
  component: UserCardCustomizationForm,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="w-120 ">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof UserCardCustomizationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    card_style: DEFAULT,
  },
} satisfies Story;
