import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 text-sm">
      <span className="bg-amber-500 text-black flex items-center justify-center w-6 h-6 rounded-sm font-black text-xs">
        M
      </span>
      <span className="font-bold">Marty Wallace</span>
    </Link>
  );
}
