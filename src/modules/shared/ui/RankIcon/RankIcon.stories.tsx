import type { StoryObj, Meta } from '@storybook/nextjs-vite';
import { RankIcon } from '@/modules/shared/ui/RankIcon/RankIcon';
import { RankTypeEnum } from '@/modules/profile';

const {
  PRIVATE,
  CORPORAL,
  SERGEANT,
  LIEUTENANT,
  MAJOR,
  COLONEL,
  BRIGADIER_GENERAL,
  GENERAL,
  FIVE_STAR_GENERAL,
  COMMANDER_IN_CHIEF,
} = RankTypeEnum;

const meta = {
  component: RankIcon,
} satisfies Meta<typeof RankIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    rank: PRIVATE,
  },
} satisfies Story;

export const Corporal = {
  args: {
    rank: CORPORAL,
  },
} satisfies Story;

export const Sergeant = {
  args: {
    rank: SERGEANT,
  },
} satisfies Story;

export const Lieutenent = {
  args: {
    rank: LIEUTENANT,
  },
} satisfies Story;

export const Major = {
  args: {
    rank: MAJOR,
  },
} satisfies Story;

export const Colonel = {
  args: {
    rank: COLONEL,
  },
} satisfies Story;

export const BrigadierGeneral = {
  args: {
    rank: BRIGADIER_GENERAL,
  },
} satisfies Story;

export const General = {
  args: {
    rank: GENERAL,
  },
} satisfies Story;

export const FiveStarGen = {
  args: {
    rank: FIVE_STAR_GENERAL,
  },
} satisfies Story;

export const CommanderInChief = {
  args: {
    rank: COMMANDER_IN_CHIEF,
  },
} satisfies Story;
