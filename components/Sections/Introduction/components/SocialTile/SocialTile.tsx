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
      className="transition-all relative bg-ui-dark-light rounded-md p-5 shadow-lg top-0 md:hover:-top-2"
      rel="noopener noreffer"
      href={url}
      target="_blank"
    >
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon className="text-xl mr-2" icon={icon} />
          <h3 className="font-light  text-primary">{title}</h3>
        </div>
        <article className="prose">
          <p>{summary}</p>
        </article>
      </div>
    </a>
  );
};
