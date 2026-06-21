import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogPageClient from '@/components/blog/BlogPageClient';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Blog – Discord Guides, CSS Tips & Developer Tutorials',
  description: `Read ${blogPosts.length}+ expert guides on Discord formatting, webhooks, server management, CSS units, bionic reading, and ATS resume optimisation. Updated regularly.`,
  keywords: [
    'discord guides',
    'discord text formatting',
    'discord markdown',
    'px to rem guide',
    'bionic reading',
    'ats resume tips',
    'discord webhook tutorial',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/blog/`,
  },
  openGraph: {
    title: 'Blog – Discord Guides, CSS Tips & Developer Tutorials',
    description: `${blogPosts.length}+ expert guides for Discord users, developers, and productivity enthusiasts.`,
    url: `${seoConfig.baseUrl}/blog/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'FreeDiscordTools Blog' }],
  },
};

export default function BlogListPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Blog', href: `${seoConfig.baseUrl}/blog/` },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page header */}
        <header className="text-center mb-12">
          <p className="text-sm font-bold text-[#5865F2] uppercase tracking-widest mb-3">
            {blogPosts.length} Articles &amp; Guides
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1d2e] mb-4 tracking-tight">
            Guides &amp; Tutorials
          </h1>
          <p className="text-xl text-[#5b6282] max-w-2xl mx-auto leading-relaxed">
            In-depth tutorials on Discord, web development, productivity, and career growth.
          </p>
        </header>

        {/* Client-rendered search + card grid */}
        <BlogPageClient posts={blogPosts} />
      </div>
    </>
  );
}
