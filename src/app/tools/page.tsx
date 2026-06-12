import type { Metadata } from 'next';
import ToolCard from '@/components/tools/ToolCard';
import { tools } from '@/data/tools';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Discord Tools – All Free Discord Utilities',
  description: 'Browse all free Discord tools. Timestamp generators, text formatters, and more utilities for Discord users and server owners.',
  alternates: { canonical: `${seoConfig.baseUrl}/tools/` },
  openGraph: {
    title: 'Discord Tools – All Free Discord Utilities',
    description: 'Browse all free Discord tools and utilities.',
    url: `${seoConfig.baseUrl}/tools/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Tools – All Free Discord Utilities',
    description: 'Browse all free Discord tools and utilities.',
  },
};

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-4">Discord Tools</h1>
      <p className="text-[#5b6282] mb-10 text-lg">
        Free utilities for Discord users, server owners, moderators, and developers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
