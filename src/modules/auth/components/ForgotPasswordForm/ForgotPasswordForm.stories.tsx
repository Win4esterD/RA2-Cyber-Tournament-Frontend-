import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { ForgotPasswordForm } from './ForgotPasswordForm';

const meta = {
  component: ForgotPasswordForm,
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-full text-white-text-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
