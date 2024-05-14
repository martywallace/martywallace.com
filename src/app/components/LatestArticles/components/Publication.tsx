'use client';

import { track } from '../../../../tracking';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons';

type Props = {
  readonly title: string;
  readonly excerpt: string;
  readonly formattedDate: {
    readonly date: string;
    readonly monthYear: string;
  };
  readonly url: string;
};

const Publication = ({ title, excerpt, formattedDate, url }: Props) => {
  return (
    <article className="flex mb-6 last:mb-0">
      <time className="flex flex-shrink-0 w-20 rounded-md h-16 items-center flex-col justify-center bg-gray-800 text-gray-200 shadow-lg">
        <strong className="block text-xl leading-tight">
          {formattedDate.date}
        </strong>
        <span className="text-xs text-gray-400">{formattedDate.monthYear}</span>
      </time>

      <div className="pl-5">
        <h4 className="font-bold">
          <Link
            onClick={() => track('article.title.click', { url })}
            className="hover:underline"
            href={url}
          >
            {title}
          </Link>
        </h4>
        <div className="prose max-w-none mb-1">
          <p className="line-clamp-1">{excerpt}</p>
        </div>
        <div>
          <Link
            onClick={() => track('article.read-more.click', { url })}
            className="space-x-2 flex items-center text-amber-500 transition hover:text-amber-300 text-sm"
            href={url}
          >
            <span>Read</span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Publication;
