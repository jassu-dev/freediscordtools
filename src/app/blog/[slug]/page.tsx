import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
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
    title: `${post.title} – FreeDiscordTools Blog`,
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
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Blog', href: `${seoConfig.baseUrl}/blog/` },
          { name: post.title, href: `${seoConfig.baseUrl}/blog/${post.slug}/` },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <Link
            href="/blog"
            className="text-[#5865F2] font-bold text-sm mb-4 inline-flex items-center hover:underline"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-[#5b6282] text-sm">
            <span>Published on {post.date}</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none text-[#373b4d] leading-relaxed
            prose-headings:text-[#1a1d2e] prose-headings:font-bold
            prose-a:text-[#5865F2] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-code:bg-[#F0F2FF] prose-code:px-1 prose-code:rounded prose-code:text-[#5865F2]
            prose-strong:text-[#1a1d2e]
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <footer className="mt-16 pt-8 border-t border-[#E3E6F0]">
           <div className="bg-[#F8F9FF] p-8 rounded-2xl border border-[#E3E6F0] text-center">
             <h2 className="text-xl font-bold text-[#1a1d2e] mb-2">Want to try these tools?</h2>
             <p className="text-[#5b6282] mb-6">Explore our full collection of free utilities for Discord.</p>
             <Link 
              href="/tools/"
              className="inline-block bg-[#5865F2] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#4752C4] transition-all shadow-md active:scale-95"
             >
               View All Tools
             </Link>
           </div>
        </footer>
      </article>
    </>
  );
}
