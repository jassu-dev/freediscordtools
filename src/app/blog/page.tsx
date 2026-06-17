import type { Metadata } from 'next';
import BlogCard from '@/components/blog/BlogCard';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Blog – Tips, Guides and News for Discord Users',
  description: 'Read the latest guides and tips on how to get the most out of Discord. Learn about timestamps, fonts, webhooks and more.',
  alternates: {
    canonical: `${seoConfig.baseUrl}/blog/`,
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
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1d2e] mb-4">
            Discord Guides & Blog
          </h1>
          <p className="text-xl text-[#373b4d] max-w-2xl mx-auto">
            Expert tips and detailed guides to help you master Discord.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
