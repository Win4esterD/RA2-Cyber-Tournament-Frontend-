import { StoryObj, Meta } from "@storybook/nextjs-vite";
import { RegistrationForm } from "./RegistrationForm";

const meta = {
  component: RegistrationForm,
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
