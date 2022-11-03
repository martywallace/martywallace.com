import classNames from 'classnames';
import { FC, ReactNode } from 'react';

type Props = {
  readonly fullHeight?: boolean;
  readonly children?: ReactNode;
  readonly style?: 'light';
};

const theme = (fullHeight?: boolean, style?: Props['style']) =>
  classNames('flex items-center px-5 py-16', {
    'min-h-screen border-b border-ui-dark-light': fullHeight,
    'bg-ui-dark-light': style === 'light',
  });

export const Section: FC<Props> = ({ children, fullHeight, style }) => {
  return (
    <section className={theme(fullHeight, style)}>
      <div className="w-full max-w-screen-lg mx-auto">{children}</div>
    </section>
  );
};
