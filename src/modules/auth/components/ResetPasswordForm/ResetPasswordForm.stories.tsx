import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { ResetPasswordForm } from './ResetPasswordForm';

const meta = {
  component: ResetPasswordForm,
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-full text-white-text-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ResetPasswordForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
