'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import type { BlogPost } from '@/data/blog';

interface Props {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: Props) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.keywords.some((k) => k.toLowerCase().includes(query.toLowerCase()))
      )
    : posts;

  return (
    <>
      {/* Article search */}
      <div className="max-w-lg mx-auto mb-12">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9099b8] pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder={`Search ${posts.length} articles…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#E3E6F0] rounded-xl text-[#1a1d2e] placeholder:text-[#9099b8] focus:outline-none focus:border-[#5865F2] focus:shadow-[0_0_0_3px_rgba(88,101,242,0.12)] transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9099b8] hover:text-[#5865F2] transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {query && (
          <p className="text-sm text-[#5b6282] mt-2.5 text-center">
            {filtered.length === 0
              ? 'No articles found'
              : `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found`}
          </p>
        )}
      </div>

      {/* Grid or empty state */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">📭</p>
          <p className="text-xl font-bold text-[#1a1d2e] mb-2">No articles match &ldquo;{query}&rdquo;</p>
          <p className="text-[#5b6282] mb-5">Try searching for a topic like &ldquo;discord&rdquo; or &ldquo;CSS&rdquo;</p>
          <button
            onClick={() => setQuery('')}
            className="px-6 py-2.5 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-colors"
          >
            Show all articles
          </button>
        </div>
      )}
    </>
  );
}
