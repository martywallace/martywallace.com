'use client';

import { format } from 'date-fns';
import { track } from '../../../../tracking';

type Props = {
  readonly title: string;
  readonly excerpt: string;
  readonly date: Date;
  readonly url: string;
};

const Publication = ({ title, excerpt, date, url }: Props) => {
  return (
    <article className="flex mb-10 last:mb-0">
      <time className="flex flex-shrink-0 w-20 rounded-md h-16 items-center flex-col justify-center bg-gray-700 text-white shadow-lg">
        <strong className="block text-xl leading-tight">
          {format(date, 'dd')}
        </strong>
        <span className="text-xs text-gray-300">
          {format(date, 'MMM yyyy')}
        </span>
      </time>

      <div className="pl-5">
        <h4 className="font-bold">
          <a
            onClick={() => track('article.title.click', { url })}
            className="hover:underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h4>
        <div className="prose max-w-none mb-2">
          <p className="line-clamp-2">{excerpt}</p>
        </div>
        <div>
          <a
            onClick={() => track('article.read-more.click', { url })}
            className="text-amber-500 transition hover:text-amber-300"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more&hellip;{' '}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Publication;
