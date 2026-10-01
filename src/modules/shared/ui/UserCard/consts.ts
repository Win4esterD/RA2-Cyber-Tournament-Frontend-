import type { CardStyleTypeEnum } from '@/modules/auth';

export const backgroundColors = {
  default: 'from-slate-700 to-slate-900',
  soviet: 'from-red-800 to-red-950',
  allied: 'from-blue-700 to-blue-950',
  yuri: 'from-purple-700 to-purple-950',
  golden: 'rom-yellow-600 to-yellow-900',
  dark: 'from-gray-800 to-black',
};

export const ringColors = {
  default: 'ring-slate-600',
  soviet: 'ring-red-600',
  allied: 'ring-blue-500',
  yuri: 'ring-purple-500',
  golden: 'ring-yellow-500',
  dark: 'ring-gray-600',
} as const;
