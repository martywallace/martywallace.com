import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  readonly noPadding?: boolean;
}>;

export default function Box({ children, noPadding = false }: Props) {
  return (
    <div
      className={clsx('bg-gray-800 rounded-md shadow-md', {
        'p-6': !noPadding,
      })}
    >
      {children}
    </div>
  );
}
