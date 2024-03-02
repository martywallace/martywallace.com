import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  readonly icon: IconProp;
  readonly text: string;
  readonly href: string;
};

export default function NavigationItem({ icon, text, href }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-4 text-sm p-2 pr-12 hover:bg-gray-900 rounded-md group transition-all duration-150 ease-in-out"
    >
      <span className="bg-gray-700 rounded-md w-5 h-5 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-150 ease-in-out">
        <FontAwesomeIcon
          className="text-gray-400 group-hover:text-gray-900 text-xs transition-all duration-150 ease-in-out"
          icon={icon}
        />
      </span>
      <span className="text-gray-300 group-hover:text-white transition-all duration-150 ease-in-out">
        {text}
      </span>
    </Link>
  );
}
