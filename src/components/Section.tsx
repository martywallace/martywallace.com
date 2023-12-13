import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  readonly fullHeight?: boolean;
  readonly children?: ReactNode;
  readonly style?: 'light';
  readonly padded?: boolean;
  readonly containerClassName?: string;
};

const Section = ({
  children,
  fullHeight,
  style,
  padded,
  containerClassName,
}: Props) => {
  return (
    <section
      className={classNames(
        'flex items-center border-b border-gray-700 last:border-b-0',
        {
          'min-h-screen': fullHeight,
          'bg-gray-800': style === 'light',
          'lg:py-28 py-6': padded,
        },
      )}
    >
      <div className={classNames('w-full', containerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
