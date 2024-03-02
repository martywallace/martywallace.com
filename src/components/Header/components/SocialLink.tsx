import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  readonly icon: IconProp;
  readonly href: string;
};

export default function SocialLink({ icon, href }: Props) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-all duration-150"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
