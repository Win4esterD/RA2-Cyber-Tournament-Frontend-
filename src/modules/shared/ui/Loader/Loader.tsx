import { LuLoaderCircle } from 'react-icons/lu';

type LoaderPropsType = {
  className?: string;
};

export function Loader({ className }: LoaderPropsType) {
  return <LuLoaderCircle className={`animate-spin ${className}`} />;
}
