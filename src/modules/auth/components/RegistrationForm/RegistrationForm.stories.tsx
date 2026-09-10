import { StoryObj, Meta } from "@storybook/nextjs-vite";
import { RegistrationForm } from "./RegistrationForm";

const meta = {
  component: RegistrationForm,
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-full text-white-text-primary">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ErrorState = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText("Email"), "email@provider");

    await userEvent.type(canvas.getByLabelText("Password"), "a-r");

    await userEvent.click(canvas.getByText("Register"));

  },
} satisfies Story;
