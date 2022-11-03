import { format } from 'date-fns';
import { FC } from 'react';

type Props = {
  readonly title: string;
  readonly excerpt: string;
  readonly date: Date;
  readonly url: string;
};

export const Publication: FC<Props> = ({ title, excerpt, date, url }) => {
  return (
    <article className="flex items-center mb-5 last:mb-0">
      <time className="flex flex-shrink-0 w-20 rounded-md h-16 items-center flex-col justify-center bg-gradient-to-tr from-primary to-primary-light text-ui-dark">
        <strong className="block text-lg leading-tight">
          {format(date, 'do')}
        </strong>
        <span className="text-sm">{format(date, 'MMM')}</span>
      </time>

      <div className="pl-5">
        <h4 className="text-lg font-bold">
          <a
            className="hover:underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h4>
        <div className="prose max-w-none">
          <p className="line-clamp-1">{excerpt}</p>
        </div>
      </div>
    </article>
  );
};
