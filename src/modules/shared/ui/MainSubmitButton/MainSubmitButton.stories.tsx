import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MainSubmitButton } from './MainSubmitButton';

const meta = {
  component: MainSubmitButton,
} satisfies Meta<typeof MainSubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    children: 'Log In',
  },
} satisfies Story;

export const WithClickHandler = {
  args: {
    children: 'Register',
    onClick: () => console.log('Click handled'),
  },
} satisfies Story;
