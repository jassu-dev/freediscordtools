import type { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';
import BlogCard from '@/components/blog/BlogCard';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';
import { buildFaqJsonLd } from '@/lib/jsonld';

const homepageFaqs = [
  {
    question: 'What is FreeDiscordTools?',
    answer: 'FreeDiscordTools is a free collection of browser-based utilities for Discord users, server owners, developers, and job seekers. Every tool runs entirely in your browser no account or installation required.',
  },
  {
    question: 'What kinds of tools are available?',
    answer: 'We cover Discord utilities (timestamps, fonts, colored text, webhooks, permission calculators, snowflake decoders) and career tools like an ATS resume checker to help you land more job interviews.',
  },
  {
    question: 'Are all tools free?',
    answer: 'Yes, every tool on FreeDiscordTools is completely free with no usage limits, no account required, and no hidden fees.',
  },
  {
    question: 'Do the tools work on mobile?',
    answer: 'Yes, all tools are designed mobile-first and work on smartphones, tablets, and desktop browsers.',
  },
  {
    question: 'Is my data stored anywhere?',
    answer: 'No. All tools run entirely client-side in your browser. No data is sent to any server, stored, or logged.',
  },
  {
    question: 'What is a Discord ID to Date converter?',
    answer: 'A Discord ID to Date converter decodes the 64-bit snowflake ID used by Discord to reveal the exact creation time of any user account, server, channel, or message.',
  },
  {
    question: 'What is the ATS Resume Checker?',
    answer: 'The ATS Resume Checker analyzes your CV against a job description to give you an ATS compatibility score and actionable tips to help your resume get past automated screening systems.',
  },
];
export const metadata: Metadata = {
  title: 'Free Discord Tools & Online Utilities for Everyone',
  description: 'A free collection of browser-based tools for Discord users, developers, and job seekers. No sign-up, no limits just fast, useful tools.',
  alternates: {
    canonical: `${seoConfig.baseUrl}/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/`,
      'en': `${seoConfig.baseUrl}/`,
    },
  },
  openGraph: {
    title: 'Free Discord Tools & Online Utilities for Everyone',
    description: 'A free collection of browser-based tools for Discord users, developers, and job seekers. No sign-up, no limits just fast, useful tools.',
    url: `${seoConfig.baseUrl}/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Discord Tools & Online Utilities for Everyone',
    description: 'A free collection of browser-based tools for Discord users, developers, and job seekers. No sign-up, no limits.',
  },
  other: {
    'script:ld+json': buildFaqJsonLd(homepageFaqs),
  },
};


export default function HomePage() {
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  const categories = Object.keys(groupedTools);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[{ name: 'Home', href: seoConfig.baseUrl }]}
      />
      
      {/* Hero Section */}
      <section className="bg-[#F8F9FF] border-b border-[#E3E6F0] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1d2e] mb-6 tracking-tight">
            Free <span className="text-[#5865F2]">Online Tools</span> for Discord & Beyond
          </h1>
          <p className="text-xl text-[#5b6282] mb-10 leading-relaxed">
            A growing collection of free, browser-based utilities Discord tools, career tools, and developer utilities. No sign-up, no install, just open and use.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tools/" 
              className="px-8 py-4 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
            >
              Explore All Tools
            </Link>
            <Link 
              href="/blog/" 
              className="px-8 py-4 bg-white text-[#1a1d2e] font-bold rounded-xl border border-[#E3E6F0] hover:bg-gray-50 transition-all"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Categorized Tool Grid */}
        <section aria-label="Available tools" className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-12 text-center">Popular Tools</h2>
          
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-xl font-bold text-[#5b6282] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#5865F2]" />
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedTools[category].map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Latest from Blog */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1d2e] mb-2">Latest from the Blog</h2>
              <p className="text-[#5b6282]">Guides, tips, and news about Discord and beyond.</p>
            </div>
            <Link href="/blog/" className="text-[#5865F2] font-bold hover:underline mb-1">
              View All Posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="prose prose-lg max-w-none mb-20 text-[#373b4d]">
          <article>
            <h2 className="text-3xl font-bold text-[#1a1d2e] mb-6">Free Browser-Based Tools for Everyone</h2>

            <p className="mb-6">
              FreeDiscordTools started as a collection of Discord utilities and has grown into a broader toolkit for anyone who spends time online whether you manage a Discord community, build bots, or are actively job hunting. Every tool on this site runs entirely in your browser. Nothing is installed, nothing is stored, and no account is ever required.
            </p>

            <p className="mb-6">
              The goal is simple: take tasks that are tedious or technically complex and turn them into a single-page tool anyone can use in under a minute. That applies equally to generating a Discord timestamp for a global event announcement and to checking whether your resume will survive an ATS filter before a recruiter ever sees it.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Discord Utilities</h3>

            <p className="mb-6">
              Discord has grown from a gaming chat app into one of the most widely used communication platforms on the internet, with hundreds of millions of users across communities covering gaming, programming, art, music, education, finance, and more. As the platform has matured, so has the demand for tools that extend and simplify what you can do inside it.
            </p>

            <p className="mb-6">
              Our Discord tools cover the most common needs. The <strong>Timestamp Generator</strong> converts any date and time into the <code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">&lt;t:UNIX:FORMAT&gt;</code> syntax Discord uses to display localized times for every viewer essential for coordinating events across time zones. The <strong>Snowflake Decoder</strong> extracts the creation date hidden inside any Discord ID, useful for verifying account age or server history. The <strong>Colored Text Generator</strong> builds ANSI escape sequences for vivid, colorful code blocks. The <strong>Font Generator</strong> converts plain text into 160+ Unicode styles for usernames, bios, and channel names. The <strong>Webhook Sender</strong> lets you test and fire webhook messages without writing a single line of code. The <strong>Permission Calculator</strong> computes the exact bitwise integer needed for bot authorization flows.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Career Tools</h3>

            <p className="mb-6">
              Beyond Discord, we offer tools aimed at job seekers. The <strong>ATS Resume Checker</strong> analyzes your CV against a job description and produces an ATS compatibility score with specific, actionable feedback. Over 90% of large employers use Applicant Tracking Systems to screen resumes before a human ever reads them. A well-formatted resume full of relevant experience can still be filtered out if it does not match the right keywords or uses a layout the parser cannot read. Our checker surfaces those issues immediately so you can fix them before submitting.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Privacy-First Design</h3>

            <p className="mb-6">
              All tools are client-side by design. Your resume content, Discord IDs, webhook URLs, and any other data you enter never leave your device. There are no accounts, no cookies that track you across sessions, and no analytics attached to individual inputs. What you type stays in your browser tab.
            </p>
          </article>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-20">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#1a1d2e] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homepageFaqs.map((faq, i) => (
              <details key={i} className="p-5 rounded-xl bg-white border border-[#E3E6F0] group transition-all hover:border-[#5865F2]/30">
                <summary className="font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-[#5865F2] ml-2 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#5b6282] text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
