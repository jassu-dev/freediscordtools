import Link from 'next/link';
import { tools } from '@/data/tools';

export default function Footer() {
  const year = new Date().getFullYear();
  const popularTools = tools.slice(0, 4);

  return (
    <footer className="bg-white border-t border-[#E3E6F0] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-black text-[#1a1d2e] tracking-tighter">
              FREE<span className="text-[#5865F2]">DISCORD</span>TOOLS
            </Link>
            <p className="text-sm text-[#5b6282] leading-relaxed">
              Your #1 destination for free, high-quality Discord utilities. From timestamp generators to font stylers, we help you master your Discord experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#1a1d2e] mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 list-none p-0">
              <li><Link href="/tools/" className="text-sm text-[#5b6282] hover:text-[#5865F2]">All Tools</Link></li>
              <li><Link href="/blog/" className="text-sm text-[#5b6282] hover:text-[#5865F2]">Blog & Guides</Link></li>
              <li><Link href="/about/" className="text-sm text-[#5b6282] hover:text-[#5865F2]">About Us</Link></li>
              <li><Link href="/contact/" className="text-sm text-[#5b6282] hover:text-[#5865F2]">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h4 className="font-bold text-[#1a1d2e] mb-4 uppercase text-xs tracking-widest">Popular Tools</h4>
            <ul className="space-y-2 list-none p-0">
              {popularTools.map(tool => (
                <li key={tool.slug}>
                  <Link href={tool.href} className="text-sm text-[#5b6282] hover:text-[#5865F2]">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E3E6F0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5b6282] text-xs">
            &copy; {year} FreeDiscordTools. All rights reserved. Not affiliated with Discord Inc.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-6 list-none m-0 p-0">
              <li><Link href="/privacy-policy/" className="text-xs text-[#5b6282] hover:text-[#5865F2]">Privacy</Link></li>
              <li><Link href="/terms/" className="text-xs text-[#5b6282] hover:text-[#5865F2]">Terms</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
