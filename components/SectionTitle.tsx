import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  readonly title: string;
  readonly align?: 'left' | 'center' | 'right';
};

const theme = (align: Props['align']) =>
  classNames('mb-10 flex flex-col', {
    'items-start': align === 'left',
    'items-center': align === 'center',
    'items-end': align === 'right',
  });

const SectionTitle: FC<Props> = ({ title, align = 'left' }) => {
  return (
    <div className={theme(align)}>
      <h2 className="font-light text-3xl mb-3">{title}</h2>
      <div className="h-1 rounded-lg bg-primary w-16 " />
    </div>
  );
};

export default SectionTitle;
