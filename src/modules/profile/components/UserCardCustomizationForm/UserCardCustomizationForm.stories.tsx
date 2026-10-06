import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCardCustomizationForm } from '@/modules/profile/components/UserCardCustomizationForm/UserCardCustomizationForm';
import { CardStyleTypeEnum } from '@/modules/profile';

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
    about_user: "There is something inside you, it's hard to explain",
    name: 'Kavinsky',
  },
} satisfies Story;
