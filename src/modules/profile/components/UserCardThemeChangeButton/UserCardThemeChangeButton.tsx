type UserCardThemeChangeButtonPropsType = {
  isSelected?: boolean;
  title: string;
  gradientColor: string;
  onClick: () => void;
};

export function UserCardThemeChangeButton({
  isSelected,
  title,
  gradientColor,
  onClick,
}: UserCardThemeChangeButtonPropsType) {
  return (
    <button
      type="button"
      className={`relative rounded-lg overflow-hidden h-16 bg-linear-to-br ${gradientColor} border-2 transition-all ${isSelected ? 'border-red-500' : 'border-transparent'} scale-105 hover:cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
