import { ReactNode } from 'react';

type Props = {
  readonly children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <section className="py-5 pt-20 md:py-24">{children}</section>;
}
