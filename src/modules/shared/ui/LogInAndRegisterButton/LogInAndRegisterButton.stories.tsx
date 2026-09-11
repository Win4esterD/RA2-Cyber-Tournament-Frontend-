import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { LogInAndRegisterButton } from './LogInAndRegisterButton';

const meta = {
  component: LogInAndRegisterButton,
} satisfies Meta<typeof LogInAndRegisterButton>;

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
