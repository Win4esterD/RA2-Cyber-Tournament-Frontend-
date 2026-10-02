import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { LuMedal, LuSave } from 'react-icons/lu';
import { backgroundColors } from '@/modules/profile/components/UserCard/consts';
import { UserCardThemeChangeButton } from '@/modules/profile/components/UserCardThemeChangeButton/UserCardThemeChangeButton';
import { CardStyleTypeEnum } from '@/modules/auth';
import { useMutation } from '@tanstack/react-query';

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;

type UserCardCustomizationFormPropsType = {
  card_style: CardStyleTypeEnum;
};

export function UserCardCustomizationForm({
  card_style,
}: UserCardCustomizationFormPropsType) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      theme: card_style,
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      
    }
  })

  const onSubmit = async () => {};

  return (
    <div className="bg-[#0d1219] border border-[#1e2733] rounded-xl p-6">
      <h3 className="text-sm font-semibold mb-4 text-slate-200">Card customization</h3>
      <Input
        label="NICKNAME"
        controllerProps={{ name: 'name', control }}
        labelUtilityClasses="block text-xs uppercase tracking-wider text-slate-500 mb-2"
      />
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
          RANK
        </label>
        <span className="inline-flex items-center gap-2 bg-[#161d28] text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full border border-[#1e2733]">
          <LuMedal className="w-4 h-4" />
          Commander
        </span>
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
          Card theme
        </label>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <UserCardThemeChangeButton
          title="Standard"
          gradientColor={backgroundColors[DEFAULT]}
        />
        <UserCardThemeChangeButton
          title="Soviet"
          gradientColor={backgroundColors[SOVIET]}
        />
        <UserCardThemeChangeButton
          title="Allied"
          gradientColor={backgroundColors[ALLIED]}
        />
        <UserCardThemeChangeButton title="Yuri" gradientColor={backgroundColors[YURI]} />
        <UserCardThemeChangeButton
          title="Golden"
          gradientColor={backgroundColors[GOLDEN]}
        />
        <UserCardThemeChangeButton title="Dark" gradientColor={backgroundColors[DARK]} />
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
          About
        </label>
        <textarea
          className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg px-4 py-2.5 text-sm focus:border-red-600/50 outline-none resize-none"
          placeholder="Tell us about yourself as a commander..."
          rows={3}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full mt-5 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
      >
        <LuSave className="w-4 h-4" />
        Save
      </button>
    </div>
  );
}
