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
      onMouseEnter={() => track('highlight.mouse-enter', { title })}
      onMouseLeave={() => track('highlight.mouse-leave', { title })}
      className="p-5 rounded-md border border-gray-700 bg-gray-800 shadow-md group lg:hover:-top-2 relative top-0 md:transition-all hover:bg-gray-700 duration-150 ease-in-out"
    >
      <div className="-ml-8 rounded-md flex items-center mb-3 bg-amber-500 shadow-lg text-gray-900 space-x-1">
        <span className="w-8 h-8 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3 className="font-bold text-sm">{title}</h3>
      </div>
      <div className="prose transition group-hover:text-gray-100">
        {children}
      </div>
    </article>
  );
};

export default Highlight;
