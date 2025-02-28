import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type Props = {
  readonly icon: IconProp;
  readonly text: string;
  readonly href: string;
};

export default function NavigationItem({ icon, text, href }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm space-x-4 py-2 pr-12 hover:bg-gray-900 rounded-md group transition-all duration-150 ease-in-out"
    >
      <span className="w-6">
        <FontAwesomeIcon
          className="text-gray-500 group-hover:text-gray-400 transition-all duration-150 ease-in-out"
          icon={icon}
        />
      </span>
      <span className="text-gray-300 group-hover:text-white transition-all duration-150 ease-in-out">
        {text}
      </span>
    </Link>
  );
}
