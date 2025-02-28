'use client';

import {
  faBars,
  faNewspaper,
  faTimes,
  faUser,
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Mount from '../../../layout/Mount';
import Logo from '../Logo';
import NavigationItem from './components/NavigationItem';

export default function Navigation() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      <div className="h-6 flex items-center">
        <button
          onClick={() => setShow(!show)}
          className="bg-transparent text-gray-300 hover:text-white transition-all duration-150 w-6 h-6 rounded-sm text-sm"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <Mount>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 z-20"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setShow(false);
                }
              }}
            >
              <motion.nav
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                className="flex flex-col w-full max-w-xs bg-gray-900 h-full shadow-2xl border-r border-gray-800"
              >
                <div className="flex-shrink-0 p-5 flex items-center border-b border-gray-800">
                  <div className="flex-grow">
                    <Logo />
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setShow(false)}
                      className="text-gray-300 hover:text-white transition-all duration-150 w-6 h-6 rounded-sm text-sm"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
                <div className="p-5 flex-grow overflow-y-auto">
                  <NavigationItem text="Home" href="/" icon={faUser} />
                  <NavigationItem
                    text="Articles"
                    href="/articles"
                    icon={faNewspaper}
                  />
                </div>
                {/* <div className="p-5 border-t border-gray-800">Social</div> */}
              </motion.nav>
            </motion.div>
          </Mount>
        )}
      </AnimatePresence>
    </>
  );
}
