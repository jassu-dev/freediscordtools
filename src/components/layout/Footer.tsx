import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[#E3E6F0] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4 justify-center list-none m-0 p-0 mb-4">
            <li>
              <Link href="/about" className="text-[#5b6282] hover:text-[#5865F2] transition-colors text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-[#5b6282] hover:text-[#5865F2] transition-colors text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#5b6282] hover:text-[#5865F2] transition-colors text-sm">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[#5b6282] hover:text-[#5865F2] transition-colors text-sm">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-center text-[#5b6282] text-sm">
          &copy; {year} FreeDiscordTools. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
