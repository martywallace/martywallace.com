import { ReactNode } from 'react';
import Header from '../../../components/Header';

type Props = {
  readonly children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="py-5 md:py-20">{children}</div>
    </>
  );
}
