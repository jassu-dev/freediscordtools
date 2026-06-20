'use client';

import { useState } from 'react';
import ToolCard from './ToolCard';
import type { Tool } from '@/types';

interface Props {
  groupedTools: Record<string, Tool[]>;
  categories: string[];
  totalCount: number;
}

export default function ToolsPageClient({ groupedTools, categories, totalCount }: Props) {
  const [active, setActive] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filterTools = (toolList: Tool[]) => {
    if (!query.trim()) return toolList;
    const q = query.toLowerCase();
    return toolList.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  };

  const visibleCategories = active === 'all' ? categories : categories.filter((c) => c === active);

  const hasAnyResults = visibleCategories.some((cat) => filterTools(groupedTools[cat]).length > 0);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-[57px] z-30 -mx-4 px-4 py-3 bg-[#F8F9FF]/95 backdrop-blur-sm border-b border-[#E3E6F0] mb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActive('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
              active === 'all'
                ? 'bg-[#5865F2] text-white border-[#5865F2] shadow-md shadow-[#5865F2]/20'
                : 'bg-white text-[#5b6282] border-[#E3E6F0] hover:border-[#5865F2]/40 hover:text-[#5865F2]'
            }`}
          >
            All Tools
            <span className="ml-1.5 text-[10px] font-bold opacity-70">{totalCount}</span>
          </button>

          {categories.map((cat) => {
            const count = groupedTools[cat].length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  active === cat
                    ? 'bg-[#5865F2] text-white border-[#5865F2] shadow-md shadow-[#5865F2]/20'
                    : 'bg-white text-[#5b6282] border-[#E3E6F0] hover:border-[#5865F2]/40 hover:text-[#5865F2]'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[10px] font-bold opacity-70">{count}</span>
              </button>
            );
          })}

          {/* Inline keyword search */}
          <div className="relative ml-auto hidden sm:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9099b8] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Filter tools…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-sm bg-white border border-[#E3E6F0] rounded-full text-[#1a1d2e] placeholder:text-[#9099b8] focus:outline-none focus:border-[#5865F2] transition-all w-40 focus:w-52"
            />
          </div>
        </div>
      </div>

      {/* Tool sections */}
      {!hasAnyResults ? (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-xl font-bold text-[#1a1d2e] mb-2">No tools match &ldquo;{query}&rdquo;</p>
          <p className="text-[#5b6282] mb-4">Try a different keyword</p>
          <button
            onClick={() => setQuery('')}
            className="text-[#5865F2] font-semibold hover:underline"
          >
            Clear filter
          </button>
        </div>
      ) : (
        visibleCategories.map((category) => {
          const filtered = filterTools(groupedTools[category]);
          if (filtered.length === 0) return null;
          return (
            <section
              key={category}
              id={category.toLowerCase().replace(/\W+/g, '-')}
              className="mb-16 scroll-mt-32"
            >
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-extrabold text-[#1a1d2e] whitespace-nowrap tracking-tight">
                  {category}
                </h2>
                <div className="h-px flex-grow bg-gradient-to-r from-[#E3E6F0] to-transparent" />
                <span className="text-xs font-bold text-[#9099b8] whitespace-nowrap bg-[#F0F2FF] px-2.5 py-1 rounded-full">
                  {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
