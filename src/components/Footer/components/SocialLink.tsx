import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  readonly icon: IconProp;
  readonly href: string;
};

export default function SocialLink({ icon, href }: Props) {
  return (
    <Link
      className="inline-block text-gray-400 hover:text-gray-100 text-xl transition-all duration-150 ease-in-out"
      href={href}
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
