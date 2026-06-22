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
            <Link href="/" className="text-xl font-black text-[#0f111a] tracking-tighter inline-flex min-h-[44px] items-center">
              FREE<span className="text-[#5865F2]">DISCORD</span>TOOLS
            </Link>
            <p className="text-sm text-[#2d3149] leading-relaxed">
              Your #1 destination for free, high-quality Discord utilities. From timestamp generators to font stylers, we help you master your Discord experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#0f111a] mb-4 uppercase text-xs tracking-widest">Platform</h3>
            <ul className="space-y-2 list-none p-0">
              <li><Link href="/tools/" className="text-sm text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">All Tools</Link></li>
              <li><Link href="/blog/" className="text-sm text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">Blog & Guides</Link></li>
              <li><Link href="/about/" className="text-sm text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">About Us</Link></li>
              <li><Link href="/contact/" className="text-sm text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-bold text-[#0f111a] mb-4 uppercase text-xs tracking-widest">Popular Tools</h3>
            <ul className="space-y-2 list-none p-0">
              {popularTools.map(tool => (
                <li key={tool.slug}>
                  <Link href={tool.href} className="text-sm text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E3E6F0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#2d3149] text-xs">
            &copy; {year} FreeDiscordTools. All rights reserved. Not affiliated with Discord Inc.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-6 list-none m-0 p-0">
              <li><Link href="/privacy-policy/" className="text-xs text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">Privacy</Link></li>
              <li><Link href="/terms/" className="text-xs text-[#2d3149] hover:text-[#5865F2] min-h-[44px] inline-flex items-center">Terms</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
