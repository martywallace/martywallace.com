'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useMemo } from 'react';

const email = 'bWFydHlAbWFydHl3YWxsYWNlLmNvbQ==';

export default function Email() {
  const [ref, entry] = useIntersectionObserver({
    rootMargin: '20px',
  });

  const value = useMemo(() => atob(email), []);

  return (
    <div ref={ref}>
      {entry?.isIntersecting ? (
        <a
          className="text-gray-400 underline hover:text-gray-100"
          href={`mailto:${value}`}
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-600 font-mono">{email}</span>
      )}
    </div>
  );
}
