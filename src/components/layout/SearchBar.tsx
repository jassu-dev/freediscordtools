'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';

interface SearchResult {
  type: 'tool' | 'article';
  name: string;
  description: string;
  href: string;
}

function runSearch(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  const toolResults: SearchResult[] = tools
    .filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    )
    .slice(0, 5)
    .map((t) => ({ type: 'tool', name: t.name, description: t.description, href: t.href }));

  const blogResults: SearchResult[] = blogPosts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
    )
    .slice(0, 4)
    .map((p) => ({
      type: 'article',
      name: p.title,
      description: p.excerpt,
      href: `/blog/${p.slug}/`,
    }));

  return [...toolResults, ...blogResults];
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = runSearch(query);
  const toolResults = results.filter((r) => r.type === 'tool');
  const blogResults = results.filter((r) => r.type === 'article');

  const close = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [close]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
      inputRef.current?.blur();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    }
    if (e.key === 'Enter' && activeIndex >= 0 && results[activeIndex]) {
      window.location.href = results[activeIndex].href;
    }
  }

  return (
    <div ref={containerRef} className="relative w-full" role="search" aria-label="Site search">
      {/* Input */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9099b8] pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search tools & articles…"
          aria-label="Search tools and articles"
          aria-expanded={open && results.length > 0}
          aria-autocomplete="list"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKey}
          className="w-full pl-9 pr-8 py-2 text-sm bg-[#F0F2FF] border border-[#E3E6F0] rounded-lg text-[#1a1d2e] placeholder:text-[#9099b8] focus:outline-none focus:border-[#5865F2] focus:bg-white transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              close();
              inputRef.current?.focus();
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9099b8] hover:text-[#5865F2] transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && query.trim() && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-[#E3E6F0] z-50 overflow-hidden max-h-[440px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-sm font-semibold text-[#1a1d2e]">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#9099b8] mt-1">Try a different keyword</p>
            </div>
          ) : (
            <>
              {toolResults.length > 0 && (
                <div>
                  <p className="px-4 pt-3 pb-1.5 text-[10px] font-extrabold text-[#9099b8] uppercase tracking-widest">
                    Tools
                  </p>
                  {toolResults.map((r, i) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={close}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-[#F8F9FF] transition-colors ${
                        activeIndex === i ? 'bg-[#F0F2FF]' : ''
                      }`}
                    >
                      <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-[#5865F2]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#5865F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1a1d2e] truncate">{r.name}</p>
                        <p className="text-xs text-[#5b6282] line-clamp-1 mt-0.5">{r.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-[#D4D8EF] ml-auto mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}

              {blogResults.length > 0 && (
                <div className={toolResults.length > 0 ? 'border-t border-[#F0F2FF]' : ''}>
                  <p className="px-4 pt-3 pb-1.5 text-[10px] font-extrabold text-[#9099b8] uppercase tracking-widest">
                    Articles
                  </p>
                  {blogResults.map((r, i) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={close}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-[#F8F9FF] transition-colors ${
                        activeIndex === toolResults.length + i ? 'bg-[#F0F2FF]' : ''
                      }`}
                    >
                      <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1a1d2e] line-clamp-1">{r.name}</p>
                        <p className="text-xs text-[#5b6282] line-clamp-1 mt-0.5">{r.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-[#D4D8EF] ml-auto mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-[#F0F2FF] bg-[#FAFBFF] flex justify-between items-center">
                <span className="text-xs text-[#9099b8]">
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </span>
                <Link
                  href="/tools/"
                  onClick={close}
                  className="text-xs text-[#5865F2] font-semibold hover:underline"
                >
                  Browse all tools →
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
