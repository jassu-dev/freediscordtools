import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title}`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${seoConfig.baseUrl}/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${seoConfig.baseUrl}/blog/${post.slug}/`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      site: seoConfig.twitterHandle,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.keywords.some((k) => post.keywords.includes(k)))
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: seoConfig.siteName, url: seoConfig.baseUrl },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
      logo: { '@type': 'ImageObject', url: `${seoConfig.baseUrl}/icon.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${seoConfig.baseUrl}/blog/${post.slug}/` },
    image: { '@type': 'ImageObject', url: seoConfig.defaultOgImage, width: 1200, height: 630 },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Blog', href: `${seoConfig.baseUrl}/blog/` },
          { name: post.title, href: `${seoConfig.baseUrl}/blog/${post.slug}/` },
        ]}
      />
      {post.faqItems && post.faqItems.length > 0 && (
        <FaqSchema items={post.faqItems} />
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <Link
            href="/blog/"
            className="text-[#5865F2] font-bold text-sm mb-4 inline-flex items-center hover:underline"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-[#5b6282] text-sm gap-3">
            <span>Published on {post.date}</span>
            <span>·</span>
            <span>{seoConfig.siteName}</span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none text-[#373b4d]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16 pt-8 border-t border-[#E3E6F0]">
            <h2 className="text-xl font-bold text-[#1a1d2e] mb-4">Related Articles</h2>
            <div className="space-y-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="block p-4 rounded-xl border border-[#E3E6F0] hover:border-[#5865F2] hover:bg-[#F0F2FF] transition-all"
                >
                  <p className="font-bold text-[#1a1d2e] text-sm mb-1">{p.title}</p>
                  <p className="text-xs text-[#5b6282]">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-12 pt-8 border-t border-[#E3E6F0]">
          <div className="bg-[#F8F9FF] p-8 rounded-2xl border border-[#E3E6F0] text-center">
            <h2 className="text-xl font-bold text-[#1a1d2e] mb-2">Try the Tools</h2>
            <p className="text-[#5b6282] mb-6">Explore our full collection of free utilities for Discord, developers, and job seekers.</p>
            <Link
              href="/tools/"
              className="inline-block bg-[#5865F2] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#4752C4] transition-all shadow-md active:scale-95"
            >
              View All Tools →
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
