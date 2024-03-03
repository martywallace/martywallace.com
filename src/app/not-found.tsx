import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen px-5">
      <div>
        <h2 className="text-3xl font-light mb-3">404 Not Found</h2>
        <div className="prose prose-invert">
          <p>
            This page doesn&apos;t exists&hellip; Perhaps try going{' '}
            <Link href="/">home</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
