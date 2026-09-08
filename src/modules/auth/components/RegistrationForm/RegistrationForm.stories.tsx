import { StoryObj, Meta } from "@storybook/nextjs-vite";
import { RegistrationForm } from "./RegistrationForm";

const meta = {
  component: RegistrationForm,
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-full text-white-text-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Story;
