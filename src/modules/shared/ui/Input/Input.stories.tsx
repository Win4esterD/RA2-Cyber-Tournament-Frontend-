import type { StoryObj, Meta, Decorator } from '@storybook/nextjs-vite';
import { Input } from './Input';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  component: Input,
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          email: '',
          password: '',
        },
      });

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: 'Primary',
    placeholder: 'myemail@yandex.ru',
    Icon: TfiEmail,
    controllerProps: { name: 'email' },
  },
} satisfies Story;

export const WithValue = {
  args: {
    label: 'With value',
    placeholder: 'myemail@yandex.ru',
    Icon: TfiEmail,
    value: 'some-email@mail.ru',
    controllerProps: { name: 'email' },
  },
} satisfies Story;

export const TypePassword = {
  args: {
    label: 'Password type',
    type: 'password',
    Icon: RiLockPasswordLine,
    controllerProps: { name: 'password' },
  },
} satisfies Story;
