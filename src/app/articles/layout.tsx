import { ReactNode } from 'react';
import PageContainer from '../../components/PageContainer';

type Props = {
  readonly children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <PageContainer>{children}</PageContainer>;
}
