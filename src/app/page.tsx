import type { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';
import BlogCard from '@/components/blog/BlogCard';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';

const homepageFaqs = [
  {
    question: 'What is FreeDiscordTools?',
    answer: 'FreeDiscordTools is a free collection of browser-based utilities for Discord users, server owners, developers, and job seekers. Every tool runs entirely in your browser no account or installation required.',
  },
  {
    question: 'What kinds of free online tools are available?',
    answer: 'We cover Discord utilities (timestamps, fonts, colored text, webhooks, permission calculators, snowflake decoders) and career tools like an ATS resume checker and case converter to help you land more job interviews and improve productivity.',
  },
  {
    question: 'Are all discord tools free to use?',
    answer: 'Yes, every tool on FreeDiscordTools, including our popular discord timestamp generator and font generator, is completely free with no usage limits, no account required, and no hidden fees.',
  },
  {
    question: 'Do the web tools work on mobile?',
    answer: 'Yes, all our web tools are designed mobile-first and work perfectly on smartphones, tablets, and desktop browsers.',
  },
  {
    question: 'Is my data safe when using your discord utilities?',
    answer: 'No. All tools run entirely client-side in your browser. No data is sent to any server, stored, or logged. This is the safest way to use discord utilities online.',
  },
  {
    question: 'What is a Discord ID to Date converter?',
    answer: 'A Discord ID to Date converter decodes the 64-bit snowflake ID used by Discord to reveal the exact creation time of any user account, server, channel, or message.',
  },
  {
    question: 'What is the best ATS Resume Checker?',
    answer: 'The FreeDiscordTools ATS Resume Checker is one of the best free tools to analyze your CV against a job description, providing an ATS compatibility score and actionable tips.',
  },
  {
    question: 'How does the Case Converter help with SEO?',
    answer: 'The Case Converter allows you to instantly change text to Title Case or Sentence Case, which is essential for professional-looking SEO headings and meta descriptions.',
  },
];

export const metadata: Metadata = {
  title: 'FreeDiscordTools – #1 Collection of Discord Utilities & Web Tools',
  description: 'Free, fast, and secure browser-based tools for Discord users, developers, and job seekers. Discord timestamp generator, font generator, case converter, ATS resume checker, and more. No sign-up required.',
  alternates: {
    canonical: `${seoConfig.baseUrl}/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/`,
      'en': `${seoConfig.baseUrl}/`,
    },
  },
  openGraph: {
    title: 'FreeDiscordTools – #1 Collection of Discord Utilities & Web Tools',
    description: 'Free, fast, and secure browser-based tools for Discord users, developers, and job seekers. No sign-up, no limits just fast, useful tools.',
    url: `${seoConfig.baseUrl}/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreeDiscordTools – #1 Collection of Discord Utilities & Web Tools',
    description: 'Free, fast, and secure browser-based tools for Discord users, developers, and job seekers. No sign-up, no limits.',
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
      <PageSchema
        faqItems={homepageFaqs}
        breadcrumbs={[{ name: 'Home', href: seoConfig.baseUrl }]}
      />

      {/* Hero Section */}
      <section className="bg-[#F8F9FF] border-b border-[#E3E6F0] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1d2e] mb-6 tracking-tight leading-tight">
            Free <span className="text-[#5865F2]">Online Tools</span> & Discord Utilities
          </h1>
          <p className="text-xl text-[#5b6282] mb-10 leading-relaxed max-w-3xl mx-auto">
            A growing collection of <strong>free online tools</strong> including <strong>discord utilities</strong>, career tools, and developer utilities. From password generator, color converter, QR code generator, JSON formatter, Base64 encoder/decoder, Discord role color gradient generator, Discord server icon resizer, and Discord rules generator. No sign-up, no install, just 100% free browser-based tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/"
              className="px-8 py-4 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
            >
              Explore All {tools.length}+ Tools
            </Link>
            <Link
              href="/blog/"
              className="px-8 py-4 bg-white text-[#1a1d2e] font-bold rounded-xl border border-[#E3E6F0] hover:bg-gray-50 transition-all"
            >
              Read SEO Guides
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Categorized Tool Grid */}
        <section aria-label="Available tools" className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-12 text-center">Popular Free Online Tools</h2>

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
              <h2 className="text-3xl font-bold text-[#1a1d2e] mb-2">SEO & Discord Guides</h2>
              <p className="text-[#5b6282]">Master your digital presence with our latest guides and tips.</p>
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
            <h2 className="text-3xl font-bold text-[#1a1d2e] mb-6">The Best Collection of Free Online Tools & Discord Utilities</h2>

            <p className="mb-6 leading-relaxed">
              FreeDiscordTools is your one-stop shop for the <strong>best free online tools</strong> and <strong>discord utilities</strong>. Whether you're managing a community, building a brand, or looking for a job, our <strong>web utilities</strong> are designed to save you time and effort. Every tool on our site, from the <strong>discord font generator</strong> to the <strong>case converter</strong>, <strong>password generator</strong>, <strong>color converter</strong>, <strong>QR code generator</strong>, <strong>JSON formatter</strong>, <strong>Base64 encoder/decoder</strong>, <strong>discord role color gradient generator</strong>, <strong>discord server icon resizer</strong>, and <strong>discord rules generator</strong>, is built to run entirely in your browser for maximum privacy and speed.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Powerful Discord Tools for Server Owners</h3>

            <p className="mb-6 leading-relaxed">
              Managing a Discord server requires the right <strong>discord tools</strong>. Our <strong>discord timestamp generator</strong> is a favorite among server owners for coordinating global events. We also provide a <strong>discord colored text generator</strong>, <strong>webhook sender</strong>, and <strong>permission calculator</strong> to help you customize and secure your community. If you're looking for <strong>aesthetic discord fonts</strong>, our <strong>font generator</strong> offers 160+ styles to make your profile stand out. And don't forget our <strong>discord role color gradient generator</strong> for beautiful gradients, <strong>discord server icon resizer</strong> for perfect server icons, and <strong>discord rules generator</strong> to create the perfect discord server rules for your community!
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Essential Career & Productivity Web Utilities</h3>

            <p className="mb-6 leading-relaxed">
              Our <strong>career tools</strong> are designed to give you an edge in the job market. The <strong>ATS resume checker</strong> provides an instant <strong>ATS score</strong> and optimization tips to help your CV pass automated filters. Additionally, our <strong>case converter</strong> and <strong>word counter</strong> are perfect for content creators who need to maintain professional formatting and meet strict character limits. We also offer a <strong>password generator</strong> to create strong, secure passwords, a <strong>color converter</strong> for designers, a <strong>QR code generator</strong> for marketing, a <strong>JSON formatter</strong> for developers, and a <strong>Base64 encoder/decoder</strong> for encoding data. All these <strong>free online tools</strong> are accessible without any sign-up or installation.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Why Choose Our Free Web Utilities?</h3>

            <p className="mb-6 leading-relaxed">
              Unlike many other sites, we don't believe in paywalls or mandatory accounts. Our <strong>online tools</strong> are 100% free and prioritize your privacy. By running everything client-side, we ensure that your sensitive data—like resume content or webhook URLs—never leaves your computer. This makes FreeDiscordTools the most trusted platform for <strong>discord utilities</strong> and <strong>web tools</strong> in 2026.
            </p>
          </article>
        </section>

        <VisibleFAQ items={homepageFaqs} />
      </div>
    </>
  );
}
