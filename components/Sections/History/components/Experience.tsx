import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { track } from '../../../../tracking';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly children: ReactNode;
};

const Experience = ({ icon, title, children }: Props) => {
  return (
    <article
      onMouseEnter={() => track('experience.mouse-enter', { title })}
      onMouseLeave={() => track('experience.mouse-leave', { title })}
      className="p-5 rounded-md border border-ui-lighter bg-ui-light shadow-md group lg:hover:-top-3 relative top-0 md:transition-all hover:bg-ui-lighter"
    >
      <div className="flex items-center mb-3">
        <span className="w-10 h-8 bg-gradient-to-tr from-primary to-primary-dark text-ui rounded-md shadow-lg flex items-center justify-center">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3 className="ml-3 font-bold">{title}</h3>
      </div>
      <div className="prose transition group-hover:text-type-lightest">
        {children}
      </div>
    </article>
  );
};

export default Experience;
