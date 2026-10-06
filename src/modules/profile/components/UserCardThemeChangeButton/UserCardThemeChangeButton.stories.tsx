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
    onClick: () => console.log('Standard'),
  },
} satisfies Story;

export const IsSelected = {
  args: {
    title: 'Selected',
    gradientColor: backgroundColors.DEFAULT,
    isSelected: true,
    onClick: () => console.log('Selected'),
  },
} satisfies Story;

export const Soviet = {
  args: {
    title: 'Soviet',
    gradientColor: backgroundColors.SOVIET,
    onClick: () => console.log('Soviet'),
  },
} satisfies Story;

export const Allied = {
  args: {
    title: 'Allied',
    gradientColor: backgroundColors.ALLIED,
    onClick: () => console.log('Allied'),
  },
} satisfies Story;

export const Yuri = {
  args: {
    title: 'Yuri',
    gradientColor: backgroundColors.YURI,
    onClick: () => console.log('Yuri'),
  },
} satisfies Story;

export const Golden = {
  args: {
    title: 'Golden',
    gradientColor: backgroundColors.GOLDEN,
    onClick: () => console.log('Golden'),
  },
} satisfies Story;

export const Dark = {
  args: {
    title: 'Dark',
    gradientColor: backgroundColors.DARK,
    onClick: () => console.log('Dark'),
  },
} satisfies Story;
