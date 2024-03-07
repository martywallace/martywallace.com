'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { track } from '../../../../../tracking';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly summary: string;
  readonly url: string;
};

export const SocialTile = ({ icon, title, summary, url }: Props) => {
  return (
    <a
      onMouseEnter={() => track('social-tile.mouse-enter', { title })}
      onMouseLeave={() => track('social-tile.mouse-leave', { title })}
      onClick={() => track('social-tile.click', { title })}
      className="transition-all group relative bg-gray-800 border border-gray-700 hover:bg-gray-700 bg-opacity-80 backdrop-blur rounded-md p-3 sm:p-5 shadow-lg hover:shadow-xl top-0 md:hover:-top-2"
      rel="noopener noreffer"
      href={url}
      target="_blank"
    >
      <div className="flex-grow">
        <div className="flex items-center sm:mb-2 space-x-3">
          <FontAwesomeIcon className="text-xl" icon={icon} />
          <h3 className="font-bold text-gray-100">{title}</h3>
        </div>
        <article className="hidden sm:block prose transition group-hover:text-gray-100 text-sm">
          <p>{summary}</p>
        </article>
      </div>
    </a>
  );
};
