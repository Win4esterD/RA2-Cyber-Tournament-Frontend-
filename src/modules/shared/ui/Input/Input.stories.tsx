import { StoryObj, Meta } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: "Primary",
    placeholder: "myemail@yandex.ru",
    Icon: TfiEmail,
  },
} satisfies Story;

export const WithValue = {
  args: {
    label: "With value",
    placeholder: "myemail@yandex.ru",
    Icon: TfiEmail,
    value: "some-email@mail.ru",
  },
} satisfies Story;

export const TypePassword = {
  args: {
    label: "Password type",
    type: "password",
    Icon: RiLockPasswordLine,
  },
} satisfies Story;
