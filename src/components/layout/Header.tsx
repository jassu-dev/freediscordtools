import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#23272A] border-b border-[#2C2F33] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-[#5865F2] hover:text-[#4752C4] transition-colors"
          aria-label="FreeDiscordTools home"
        >
          FreeDiscordTools
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 list-none m-0 p-0">
            <li>
              <Link href="/tools" className="text-[#F2F3F5] hover:text-[#5865F2] transition-colors text-sm font-medium">
                Tools
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#F2F3F5] hover:text-[#5865F2] transition-colors text-sm font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#F2F3F5] hover:text-[#5865F2] transition-colors text-sm font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
