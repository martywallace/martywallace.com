import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  readonly children: ReactNode;
  readonly className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={clsx('w-full max-w-screen-lg mx-auto px-5', className)}>
      {children}
    </div>
  );
}
