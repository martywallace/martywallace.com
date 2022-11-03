import { FC } from 'react';

type Props = {
  readonly title: string;
};

export const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className="mb-10">
      <h2 className="font-light text-3xl mb-3">{title}</h2>
      <div className="h-1 rounded-lg bg-primary w-16 " />
    </div>
  );
};
