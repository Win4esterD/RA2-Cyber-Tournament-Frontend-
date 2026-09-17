import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { ErrorModal } from './ErrorModal';
import { useState } from 'react';
import { LogInAndRegisterButton } from '../LogInAndRegisterButton/LogInAndRegisterButton';

const meta = {
  component: ErrorModal,
  decorators: [
    (Story) => {
      return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Story />
        </div>
      );
    },
  ],
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

export const WithCloseHandler = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        {!isOpen && (
          <LogInAndRegisterButton onClick={() => setIsOpen(true)}>
            Open window
          </LogInAndRegisterButton>
        )}
        {isOpen && <ErrorModal {...args} closeHandler={() => setIsOpen(false)} />}
      </div>
    );
  },
} satisfies Story;
