import { Input } from '@/modules/shared/ui/Input/Input';
import { useForm, useWatch } from 'react-hook-form';
import { LuSave } from 'react-icons/lu';
import { backgroundColors } from '@/modules/profile/components/UserCard/consts';
import { UserCardThemeChangeButton } from '@/modules/profile/components/UserCardThemeChangeButton/UserCardThemeChangeButton';
import {
  CardStyleTypeEnum,
  type UpdateProfileDataType,
} from '@/modules/profile/types/UserTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/modules/profile/services/userService';
import { authQueryKeys } from '@/modules/auth';
import { useErrorStore } from '@/modules/shared/stores/ErrorStore';
import type { ErrorResponseType } from '@/modules/shared/global_types/ErrorResponseType';
import { useUpdateProfileSchema } from '@/modules/profile/schemas/UpdateProfileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import type { AuthResponseType } from '@/modules/auth';
import { toast } from 'react-toastify';

const { DEFAULT, SOVIET, ALLIED, YURI, GOLDEN, DARK } = CardStyleTypeEnum;

type UserCardCustomizationFormPropsType = {
  card_style: CardStyleTypeEnum;
  name: string | null;
  about_user: string | null;
};

export function UserCardCustomizationForm({
  card_style,
  name,
  about_user,
}: UserCardCustomizationFormPropsType) {
  const queryClient = useQueryClient();
  const setGlobalError = useErrorStore((state) => state.setError);
  const updateProfileSchema = useUpdateProfileSchema();
  const t = useTranslations('profile.customization');

  const {
    control,
    handleSubmit,
    setValue,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateProfileDataType>({
    defaultValues: {
      name,
      card_style,
      about_user,
    },
    resolver: zodResolver(updateProfileSchema),
  });

  const cardStyle = useWatch({ name: 'card_style', control });

  const mutation = useMutation({
    mutationFn: async (data: UpdateProfileDataType) => {
      const response = await userService.updateProfileData(data);
      return response;
    },
    onSuccess: (response) => {
      const { data } = response;
      queryClient.setQueryData(authQueryKeys.user, (prev: AuthResponseType) =>
        prev ? { ...prev, user: data } : prev,
      );

      const { name, about_user, card_style } = data;
      reset({ name, about_user, card_style });
      toast.success(t('profileUpdated'), {
        position: 'bottom-right',
        autoClose: 2500,
      });
    },
    onError: (err: ErrorResponseType) => {
      setGlobalError(err);
    },
  });

  const onSubmit = async (data: UpdateProfileDataType) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#0d1219] border border-[#1e2733] rounded-xl p-6"
    >
      <h3 className="text-sm font-semibold mb-4 text-slate-200">Card customization</h3>
      <Input
        label={t('nickname')}
        controllerProps={{ name: 'name', control }}
        labelUtilityClasses="block text-xs uppercase tracking-wider text-slate-500 mb-2"
        defaultValue={name || ''}
      />
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
          {t('cardTheme')}
        </label>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <UserCardThemeChangeButton
          title="Standard"
          gradientColor={backgroundColors[DEFAULT]}
          isSelected={cardStyle === DEFAULT}
          onClick={() =>
            setValue('card_style', DEFAULT, { shouldDirty: true, shouldTouch: true })
          }
        />
        <UserCardThemeChangeButton
          title="Soviet"
          gradientColor={backgroundColors[SOVIET]}
          isSelected={cardStyle === SOVIET}
          onClick={() =>
            setValue('card_style', SOVIET, { shouldDirty: true, shouldTouch: true })
          }
        />
        <UserCardThemeChangeButton
          title="Allied"
          gradientColor={backgroundColors[ALLIED]}
          isSelected={cardStyle === ALLIED}
          onClick={() =>
            setValue('card_style', ALLIED, { shouldDirty: true, shouldTouch: true })
          }
        />
        <UserCardThemeChangeButton
          title="Yuri"
          gradientColor={backgroundColors[YURI]}
          isSelected={cardStyle === YURI}
          onClick={() =>
            setValue('card_style', YURI, { shouldDirty: true, shouldTouch: true })
          }
        />
        <UserCardThemeChangeButton
          title="Golden"
          gradientColor={backgroundColors[GOLDEN]}
          isSelected={cardStyle === GOLDEN}
          onClick={() =>
            setValue('card_style', GOLDEN, { shouldDirty: true, shouldTouch: true })
          }
        />
        <UserCardThemeChangeButton
          title="Dark"
          gradientColor={backgroundColors[DARK]}
          isSelected={cardStyle === DARK}
          onClick={() =>
            setValue('card_style', DARK, { shouldDirty: true, shouldTouch: true })
          }
        />
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
          {t('about')}
        </label>
        <textarea
          className="w-full bg-[#0a0e14] border border-[#1e2733] rounded-lg px-4 py-2.5 text-sm focus:border-red-600/50 outline-none resize-none"
          placeholder={t('aboutPlaceholder')}
          rows={3}
          defaultValue={about_user || ''}
          {...register('about_user')}
        ></textarea>
        <p className="text-xs text-red-500">{errors.about_user?.message}</p>
      </div>
      <button
        type="submit"
        disabled={!isDirty}
        className="w-full mt-5 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
      >
        <LuSave className="w-4 h-4" />
        {t('save')}
      </button>
    </form>
  );
}
