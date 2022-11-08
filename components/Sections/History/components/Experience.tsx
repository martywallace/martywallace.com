import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly children: ReactNode;
};

const Experience: FC<Props> = ({ icon, title, children }) => {
  return (
    <article className="p-5 rounded-md border border-ui-dark-lighter shadow-lg">
      <div className="flex items-center mb-3">
        <span className="w-10 h-8 bg-gradient-to-tr from-primary to-primary-dark text-ui-dark rounded-md shadow-lg flex items-center justify-center">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3 className="ml-3 font-bold">{title}</h3>
      </div>
      <div className="prose">{children}</div>
    </article>
  );
};

export default Experience;
