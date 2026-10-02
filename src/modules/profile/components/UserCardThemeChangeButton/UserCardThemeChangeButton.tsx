type UserCardThemeChangeButtonPropsType = {
  isSelected?: boolean;
  title: string;
  gradientColor: string;
};

export function UserCardThemeChangeButton({
  isSelected,
  title,
  gradientColor,
}: UserCardThemeChangeButtonPropsType) {
  return (
    <button
      className={`relative rounded-lg overflow-hidden h-16 bg-linear-to-br ${gradientColor} border-2 transition-all ${isSelected ? 'border-red-500': 'border-transparent'} scale-105 hover:cursor-pointer border-transparen`}
    >
      {title}
    </button>
  );
}
