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
      className="transition-all group relative bg-ui-light border border-ui-lighter hover:bg-ui-lighter rounded-md p-8 shadow-lg hover:shadow-xl top-0 md:hover:-top-2"
      rel="noopener noreffer"
      href={url}
      target="_blank"
    >
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon className="text-xl mr-3" icon={icon} />
          <h3 className="font-bold text-primary">{title}</h3>
        </div>
        <article className="prose transition group-hover:text-type-lightest">
          <p>{summary}</p>
        </article>
      </div>
    </a>
  );
};
