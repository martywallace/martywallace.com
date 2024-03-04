'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { track } from '../../../../tracking';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly children: ReactNode;
};

const Highlight = ({ icon, title, children }: Props) => {
  return (
    <article
      onMouseEnter={() => track('experience.mouse-enter', { title })}
      onMouseLeave={() => track('experience.mouse-leave', { title })}
      className="p-5 rounded-md border border-gray-700 bg-gray-800 shadow-md group lg:hover:-top-2 relative top-0 md:transition-all hover:bg-gray-700 duration-150 ease-in-out"
    >
      <div className="flex items-center mb-3">
        <span className="w-8 h-8 bg-amber-500 text-gray-900 rounded-md shadow-lg flex items-center justify-center">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3 className="ml-3 font-bold">{title}</h3>
      </div>
      <div className="prose transition group-hover:text-gray-100">
        {children}
      </div>
    </article>
  );
};

export default Highlight;
