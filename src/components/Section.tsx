import classNames from 'classnames';
import { ReactNode } from 'react';
import Container from './Container';

type Props = {
  readonly fullHeight?: boolean;
  readonly children?: ReactNode;
  readonly style?: 'light';
};

const Section = ({ children, fullHeight, style }: Props) => {
  return (
    <section
      className={classNames(
        'flex items-center lg:py-28 border-b border-gray-800 last:border-b-0',
        {
          'min-h-screen py-16': fullHeight,
          'py-6': !fullHeight,
          'bg-gray-800': style === 'light',
        },
      )}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
