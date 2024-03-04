import { ReactNode } from 'react';
import PageContainer from '../../components/PageContainer';
import { Metadata } from 'next';

type Props = {
  readonly children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Articles - Marty Wallace',
};

export default function Layout({ children }: Props) {
  return <PageContainer>{children}</PageContainer>;
}
