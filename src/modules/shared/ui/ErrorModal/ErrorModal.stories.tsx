import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { ErrorModal } from './ErrorModal';

const meta = {
  component: ErrorModal,
} satisfies Meta<typeof ErrorModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    error: {
      statusCode: 500,
      message: 'The server was fucked up!',
      error: 'Fuck you!',
    },
    closeHandler: () => console.log('Window closed'),
  },
} satisfies Story;

export const WithoutError = {
  args: {
    error: {
      statusCode: 400,
      message: 'No message for this error!',
    },
    closeHandler: () => console.log('Window closed'),
  },
} satisfies Story;
