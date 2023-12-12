import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  readonly fullHeight?: boolean;
  readonly children?: ReactNode;
  readonly style?: 'light';
};

const theme = (fullHeight?: boolean, style?: Props['style']) =>
  classNames('flex items-center px-5 lg:py-28 border-b border-gray-800', {
    'min-h-screen py-16': fullHeight,
    'py-6': !fullHeight,
    'bg-gray-800': style === 'light',
  });

const Section = ({ children, fullHeight, style }: Props) => {
  return (
    <section className={theme(fullHeight, style)}>
      <div className="w-full max-w-screen-lg mx-auto">{children}</div>
    </section>
  );
};

export default Section;
