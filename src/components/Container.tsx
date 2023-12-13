import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  readonly children: ReactNode;
  readonly className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={classNames('w-full max-w-screen-lg mx-auto px-5', className)}
    >
      {children}
    </div>
  );
}
