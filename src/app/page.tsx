import type { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';
import BlogCard from '@/components/blog/BlogCard';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Free Discord Tools –  Utilities for Everyone',
  description: 'Free utilities for Discord users, server owners, moderators, and developers. Generate timestamps, format text, and more — all free.',
  alternates: {
    canonical: `${seoConfig.baseUrl}/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/`,
      'en': `${seoConfig.baseUrl}/`,
    },
  },
  openGraph: {
    title: 'Free Discord Tools – Discord Utilities for Everyone',
    description: 'Free Discord utilities for Discord users, server owners, moderators, and developers. Generate timestamps, format text, and more — all free.',
    url: `${seoConfig.baseUrl}/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Discord Tools – Discord Utilities for Everyone',
    description: 'Free Discord utilities for Discord users, server owners, moderators, and developers.',
  },
};

const homepageFaqs = [
  {
    question: 'What is FreeDiscordTools?',
    answer: 'FreeDiscordTools is a free collection of web-based utilities designed to help Discord users, server owners, moderators, and developers. Our tools run entirely in your browser with no sign-up required.',
  },
  {
    question: 'What is a Discord timestamp?',
    answer: 'A Discord timestamp is a special text code in the format <t:UNIX:FORMAT> that Discord renders as a formatted date or time. The timestamp automatically displays in each viewer\'s local timezone, making it ideal for scheduling events across different time zones.',
  },
  {
    question: 'Are these tools free to use?',
    answer: 'Yes, all tools on FreeDiscordTools are completely free. There is no account required, no usage limits, and no hidden fees.',
  },
  {
    question: 'Do the tools work on mobile?',
    answer: 'Yes, all tools are designed mobile-first and work on smartphones, tablets, and desktop browsers.',
  },
  {
    question: 'Is my data stored anywhere?',
    answer: 'No. All tools operate entirely client-side in your browser. No data is sent to any server, stored, or logged.',
  },
  {
    question: 'What is a Discord ID to Date converter?',
    answer: 'A Discord ID to Date converter (or snowflake converter) decodes the 64-bit integer ID used by Discord to find the exact creation time of a user account, server, channel, or message.',
  },
  {
    question: 'How do I use a Discord Webhook Sender?',
    answer: 'Simply copy your webhook URL from Discord, paste it into our tool, customize your bot name and avatar, and send messages instantly without any coding.',
  },
];

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
            The #1 <span className="text-[#5865F2]">Discord Timestamp Generator</span> & Utilities
          </h1>
          <p className="text-xl text-[#5b6282] mb-10 leading-relaxed">
            Free, powerful utilities for Discord users. Learn <strong>how to use unix timestamp discord</strong>, 
            generate <strong>discord time stamps</strong>, and master your server with simple tools.
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
        {/* Ad: Below Hero */}
        <div className="flex justify-center mb-16">
          <AdSlot slotId={adsConfig.slots.homepageBelowTitle} width={728} height={90} />
        </div>

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

        {/* Ad: Below tools */}
        <div className="flex justify-center mb-20">
          <AdSlot slotId={adsConfig.slots.homepageBelowGrid} width={728} height={90} />
        </div>

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

        {/* SEO Content — 1200+ words */}
        <section className="prose prose-lg max-w-none mb-20 text-[#373b4d]">
          <article>
            <h2 className="text-3xl font-bold text-[#1a1d2e] mb-6">The Complete Guide to Discord Utilities</h2>

            <p className="mb-6">
              Discord has grown from a gaming chat application into one of the most versatile communication platforms on the internet. With hundreds of millions of registered users and servers covering every topic imaginable — from gaming and programming to art, music, education, and business — Discord has become a central hub for online communities of every size and type. As Discord has grown, so has the need for specialized utilities that help users, server owners, moderators, and developers get more out of the platform.
            </p>

            <p className="mb-6">
              FreeDiscordTools is built to address exactly that need. This collection of free, browser-based utilities gives you powerful capabilities without requiring any account, installation, or payment. Whether you need to format dates and times for international audiences, generate special text effects for your messages, or manage complex server configurations, FreeDiscordTools provides the tools you need to communicate more effectively on Discord.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Understanding Discord Timestamps</h3>

            <p className="mb-6">
              One of the most powerful and underused features of Discord is its native timestamp system. Discord timestamps allow you to embed a specific date and time into your message that automatically displays in each viewer&apos;s local timezone. This eliminates the confusion that arises when coordinating events across different time zones — a problem that affects virtually every global Discord community.
            </p>

            <p className="mb-6">
              The syntax for a Discord timestamp is straightforward: <code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">&lt;t:UNIX_TIMESTAMP:FORMAT&gt;</code>. The UNIX_TIMESTAMP is a standard Unix timestamp — the number of seconds that have elapsed since January 1, 1970 at 00:00:00 UTC. The FORMAT is a single letter code that controls how Discord displays the date and time.
            </p>

            <p className="mb-6">
              Discord supports seven different timestamp format codes, each producing a different visual representation. The short time format (<code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">t</code>) displays just the hours and minutes, like &quot;3:04 PM&quot;. The long time format (<code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">T</code>) adds seconds, producing &quot;3:04:05 PM&quot;. The short date format (<code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">d</code>) shows the date as numbers, like &quot;01/01/2025&quot;. The long date format (<code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">D</code>) writes out the full month name, like &quot;January 1, 2025&quot;.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Discord Colored Text and ANSI Formatting</h3>

            <p className="mb-6">
              Another exciting feature is the ability to send <strong className="text-[#1a1d2e]">discord colored text</strong> using ANSI escape codes within code blocks. By using the <code className="bg-[#F8F9FF] px-2 py-0.5 rounded text-[#5865F2] font-mono">ansi</code> language identifier, you can apply foreground and background colors to your messages. This is perfect for creating <strong className="text-[#1a1d2e]">discord colorful code blocks</strong> that highlight important information or add flair to your server announcements.
            </p>

            <p className="mb-6">
              Our <strong className="text-[#1a1d2e]">Discord Colored Text Generator</strong> provides a visual <strong className="text-[#1a1d2e]">discord code block color picker</strong>, making it easy to design colorful messages without needing to know the complex escape codes. Simply type your text, pick your colors, and copy the ready-to-use code block directly into Discord.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Decoding Discord Snowflakes</h3>

            <p className="mb-6">
              Every object in Discord, from users to messages, has a unique 64-bit ID called a <strong className="text-[#1a1d2e]">snowflake</strong>. These IDs are not random; they contain an encoded timestamp representing the exact millisecond the object was created.
            </p>

            <p className="mb-6">
              Our <strong className="text-[#1a1d2e]">Discord ID to Date</strong> converter allows you to perform a <strong className="text-[#1a1d2e]">discord snowflake lookup</strong> to find the creation date of any account or server. This is a popular tool for checking the age of a Discord account or finding out exactly when a community was started.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Discord Webhook Testing Made Easy</h3>

            <p className="mb-6">
              Webhooks are a powerful way to send automated messages to Discord channels. However, testing them often requires coding knowledge or command-line tools. Our <strong className="text-[#1a1d2e]">Discord Webhook Sender</strong> simplifies this by providing a clean, easy-to-use interface.
            </p>

            <p className="mb-6">
              You can use our <strong className="text-[#1a1d2e]">discord webhook tester</strong> to send messages, customize the bot&apos;s username, and change the avatar image instantly. It&apos;s the fastest way to verify your webhook integrations are working correctly.
            </p>
          </article>
        </section>

        {/* Ad: Mid content */}
        <div className="flex justify-center mb-20">
          <AdSlot slotId={adsConfig.slots.homepageContentMid} width={728} height={90} />
        </div>

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

        {/* Ad: Above FAQ */}
        <div className="flex justify-center">
          <AdSlot slotId={adsConfig.slots.homepageAboveFaq} width={728} height={90} />
        </div>
      </div>
    </>
  );
}
