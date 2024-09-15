import { fontPoppins } from '@/src/helpers/fontHelper';

interface IProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: IProps) {
  return (
    <div className={fontPoppins.className} x-layout={'photobox'}>
      {children}
    </div>
  );
}
