import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
  readonly icon: IconProp;
  readonly title: string;
  readonly summary: string;
  readonly url: string;
};

export const SocialTile: FC<Props> = ({ icon, title, summary, url }) => {
  return (
    <a
      className="flex group border hover:bg-ui-dark-light border-ui-dark-lighter rounded-md p-3"
      rel="noopener noreffer"
      href={url}
      target="_blank"
    >
      <div className="mb-5">
        <FontAwesomeIcon className="text-2xl" icon={icon} />
      </div>
      <div className="flex-grow pl-3">
        <h3 className="font-light text-lg text-primary mb-2">{title}</h3>
        <article className="prose">
          <p>{summary}</p>
        </article>
      </div>
    </a>
  );
};
