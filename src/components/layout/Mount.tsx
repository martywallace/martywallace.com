'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Mount({ children }: PropsWithChildren) {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const mount = el.current;

    document.body.appendChild(mount);

    return () => {
      document.body.removeChild(mount);
    };
  }, []);

  return createPortal(children, el.current);
}
