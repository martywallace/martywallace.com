'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faNewspaper, faUser } from '@fortawesome/pro-light-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';
import { useClickAway } from '@uidotdev/usehooks';
import NavigationItem from './components/NavigationItem';

export default function Navigation() {
  const [show, setShow] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => setShow(false));

  return (
    <div ref={ref} className="relative h-6 flex items-center">
      <button
        onClick={() => setShow(!show)}
        className="bg-transparent text-gray-300 hover:text-white transition-all duration-150 w-6 h-6 rounded-sm text-sm"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav
        className={clsx(
          'bg-gray-800 p-2 rounded-md border border-gray-700 absolute top-full left-0 shadow-xl',
          {
            'mt-0 opacity-100': show,
            'hidden -mt-4 opacity-0': !show,
          },
        )}
      >
        <NavigationItem text="Home" href="/" icon={faUser} />
        <NavigationItem text="Articles" href="/articles" icon={faNewspaper} />
      </nav>
    </div>
  );
}
