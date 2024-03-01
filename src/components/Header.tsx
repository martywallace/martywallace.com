import Container from './Container';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-800 py-5 sticky top-0 z-10 backdrop-blur bg-opacity-70 bg-gray-900">
      <Container>
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 text-sm">
            <span className="bg-orange-400 text-black flex items-center justify-center w-6 h-6 rounded-sm font-black text-xs">
              M
            </span>
            <span className="font-bold">Marty Wallace</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
