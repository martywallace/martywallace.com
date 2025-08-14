'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import Box from '../../../../components/Box';
import { track } from '../../../../tracking';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly children: ReactNode;
};

const Highlight = ({ icon, title, children }: Props) => {
  return (
    <Box noPadding>
      <article
        onMouseEnter={() => track('highlight.mouse-enter', { title })}
        onMouseLeave={() => track('highlight.mouse-leave', { title })}
        className="relative py-6"
      >
        <div className="pl-3 p-3 flex items-center mb-4 border-l-4 border-amber-500 space-x-1 bg-gray-700">
          <span className="w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={icon} />
          </span>
          <h3 className="font-bold text-sm">{title}</h3>
        </div>
        <div className="prose px-6">{children}</div>
      </article>
    </Box>
  );
};

export default Highlight;
