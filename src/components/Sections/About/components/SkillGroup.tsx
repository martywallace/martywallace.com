import { ReactNode } from 'react';

type Props = {
  readonly title: string;
  readonly summary: string;
  readonly children: ReactNode;
};

const SkillGroup = ({ title, summary, children }: Props) => {
  return (
    <div className="border-b last:border-0 border-gray-800 pb-5 mb-5 last:mb-0">
      <h4 className="mb-1 text-lg font-bold">{title}</h4>
      <article className="prose max-w-none mb-3">
        <p>{summary}</p>
      </article>

      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
};

export default SkillGroup;
