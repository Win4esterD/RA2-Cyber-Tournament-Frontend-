import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserCardThemeChangeButton } from '@/modules/profile/components/UserCardThemeChangeButton/UserCardThemeChangeButton';
import { backgroundColors } from '@/modules/profile/components/UserCard/consts';

const meta = {
  component: UserCardThemeChangeButton,
} satisfies Meta<typeof UserCardThemeChangeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    title: 'Standard',
    gradientColor: backgroundColors.DEFAULT,
  },
} satisfies Story;

export const IsSelected = {
  args: {
    title: 'Standard',
    gradientColor: backgroundColors.DEFAULT,
    isSelected: true,
  },
} satisfies Story;
