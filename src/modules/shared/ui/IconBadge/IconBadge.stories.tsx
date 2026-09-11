import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { IconBadge } from './IconBadge';
import { CiLogin } from 'react-icons/ci';

const meta = {
  component: IconBadge,
} satisfies Meta<typeof IconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    Icon: <CiLogin className="w-8 h-8" />,
  },
} satisfies Story;

export const WithoutIcon = {} satisfies Story;
