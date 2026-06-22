'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const navLinks = [
  { href: '/tools/', label: 'Tools' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [mobileOpen]);

  return (
    <header className="bg-white border-b border-[#E3E6F0] sticky top-0 z-40 shadow-sm">
      {/* Main row */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-extrabold text-[#5865F2] hover:text-[#4752C4] transition-colors whitespace-nowrap flex-shrink-0 tracking-tight min-h-[44px] flex items-center px-1"
          aria-label="FreeDiscordTools home"
        >
          Free<span className="text-[#0f111a]">Discord</span>Tools
        </Link>

        {/* Search hidden on xs, shown from sm */}
        <div className="hidden sm:flex flex-1 min-w-0 max-w-md">
          <div className="w-full">
            <SearchBar />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto flex-shrink-0" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#2d3149] hover:text-[#5865F2] hover:bg-[#F0F2FF] transition-all min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden ml-auto flex-shrink-0 p-3 rounded-lg text-[#2d3149] hover:bg-[#F0F2FF] hover:text-[#5865F2] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden border-t border-[#E3E6F0] bg-white animate-in slide-in-from-top-2 duration-150"
        >
          {/* Mobile search */}
          <div className="px-4 pt-3 pb-2">
            <SearchBar />
          </div>
          {/* Mobile nav links */}
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col list-none m-0 p-0 pb-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3.5 text-sm font-semibold text-[#2d3149] hover:text-[#5865F2] hover:bg-[#F8F9FF] transition-colors min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
