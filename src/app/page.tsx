import type { Metadata } from 'next';
import ToolCard from '@/components/tools/ToolCard';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { tools } from '@/data/tools';
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
  return (
    <>
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[{ name: 'Home', href: seoConfig.baseUrl }]}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1d2e] mb-4">
            Free Discord Tools
          </h1>
          <p className="text-xl text-[#373b4d] max-w-2xl mx-auto">
            Free Discord utilities for Discord users, server owners, moderators, and developers.
          </p>
        </section>

        {/* Ad: Below title */}
        <div className="flex justify-center mb-8">
          <AdSlot slotId={adsConfig.slots.homepageBelowTitle} width={728} height={90} />
        </div>

        {/* Tool Grid */}
        <section aria-label="Available tools" className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* Ad: Below grid */}
        <div className="flex justify-center mb-12">
          <AdSlot slotId={adsConfig.slots.homepageBelowGrid} width={728} height={90} />
        </div>

        {/* SEO Content — 1200+ words */}
        <section className="prose prose-invert max-w-none mb-12">
          <article>
            <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">The Complete Guide to Discord Utilities</h2>

            <p className="text-[#373b4d] mb-4">
              Discord has grown from a gaming chat application into one of the most versatile communication platforms on the internet. With hundreds of millions of registered users and servers covering every topic imaginable — from gaming and programming to art, music, education, and business — Discord has become a central hub for online communities of every size and type. As Discord has grown, so has the need for specialized utilities that help users, server owners, moderators, and developers get more out of the platform.
            </p>

            <p className="text-[#373b4d] mb-4">
              FreeDiscordTools is built to address exactly that need. This collection of free, browser-based utilities gives you powerful capabilities without requiring any account, installation, or payment. Whether you need to format dates and times for international audiences, generate special text effects for your messages, or manage complex server configurations, FreeDiscordTools provides the tools you need to communicate more effectively on Discord.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Understanding Discord Timestamps</h3>

            <p className="text-[#373b4d] mb-4">
              One of the most powerful and underused features of Discord is its native timestamp system. Discord timestamps allow you to embed a specific date and time into your message that automatically displays in each viewer&apos;s local timezone. This eliminates the confusion that arises when coordinating events across different time zones — a problem that affects virtually every global Discord community.
            </p>

            <p className="text-[#373b4d] mb-4">
              The syntax for a Discord timestamp is straightforward: <code className="bg-white px-1 rounded text-[#5865F2]">&lt;t:UNIX_TIMESTAMP:FORMAT&gt;</code>. The UNIX_TIMESTAMP is a standard Unix timestamp — the number of seconds that have elapsed since January 1, 1970 at 00:00:00 UTC. The FORMAT is a single letter code that controls how Discord displays the date and time.
            </p>

            <p className="text-[#373b4d] mb-4">
              Discord supports seven different timestamp format codes, each producing a different visual representation. The short time format (<code className="bg-white px-1 rounded text-[#5865F2]">t</code>) displays just the hours and minutes, like &quot;3:04 PM&quot;. The long time format (<code className="bg-white px-1 rounded text-[#5865F2]">T</code>) adds seconds, producing &quot;3:04:05 PM&quot;. The short date format (<code className="bg-white px-1 rounded text-[#5865F2]">d</code>) shows the date as numbers, like &quot;01/01/2025&quot;. The long date format (<code className="bg-white px-1 rounded text-[#5865F2]">D</code>) writes out the full month name, like &quot;January 1, 2025&quot;.
            </p>

            <p className="text-[#373b4d] mb-4">
              The combined formats provide even more detail. The short date/time format (<code className="bg-white px-1 rounded text-[#5865F2]">f</code>) displays both the full date and time together, while the long date/time format (<code className="bg-white px-1 rounded text-[#5865F2]">F</code>) includes the full weekday name as well. The relative format (<code className="bg-white px-1 rounded text-[#5865F2]">R</code>) is perhaps the most useful for event announcements — it shows a human-readable relative time like &quot;in 2 hours&quot;, &quot;3 days ago&quot;, or &quot;next week&quot;, and it updates in real time as time passes.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Discord Colored Text and ANSI Formatting</h3>

            <p className="text-[#373b4d] mb-4">
              Another exciting feature is the ability to send <strong className="text-[#1a1d2e]">discord colored text</strong> using ANSI escape codes within code blocks. By using the <code className="bg-white px-1 rounded text-[#5865F2]">ansi</code> language identifier, you can apply foreground and background colors to your messages. This is perfect for creating <strong className="text-[#1a1d2e]">discord colorful code blocks</strong> that highlight important information or add flair to your server announcements.
            </p>

            <p className="text-[#373b4d] mb-4">
              Our <strong className="text-[#1a1d2e]">Discord Colored Text Generator</strong> provides a visual <strong className="text-[#1a1d2e]">discord code block color picker</strong>, making it easy to design colorful messages without needing to know the complex escape codes. Simply type your text, pick your colors, and copy the ready-to-use code block directly into Discord.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Decoding Discord Snowflakes</h3>

            <p className="text-[#373b4d] mb-4">
              Every object in Discord, from users to messages, has a unique 64-bit ID called a <strong className="text-[#1a1d2e]">snowflake</strong>. These IDs are not random; they contain an encoded timestamp representing the exact millisecond the object was created.
            </p>

            <p className="text-[#373b4d] mb-4">
              Our <strong className="text-[#1a1d2e]">Discord ID to Date</strong> converter allows you to perform a <strong className="text-[#1a1d2e]">discord snowflake lookup</strong> to find the creation date of any account or server. This is a popular tool for checking the age of a Discord account or finding out exactly when a community was started.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Discord Webhook Testing Made Easy</h3>

            <p className="text-[#373b4d] mb-4">
              Webhooks are a powerful way to send automated messages to Discord channels. However, testing them often requires coding knowledge or command-line tools. Our <strong className="text-[#1a1d2e]">Discord Webhook Sender</strong> simplifies this by providing a clean, easy-to-use interface.
            </p>

            <p className="text-[#373b4d] mb-4">
              You can use our <strong className="text-[#1a1d2e]">discord webhook tester</strong> to send messages, customize the bot&apos;s username, and change the avatar image instantly. It&apos;s the fastest way to verify your webhook integrations are working correctly.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Why Discord Timestamps Matter for Communities</h3>

            <p className="text-[#373b4d] mb-4">
              For anyone running a Discord server with members across multiple time zones, Discord timestamps are essential. Imagine announcing a gaming tournament, a study group session, a live stream, or a community meetup. Without Discord timestamps, you either have to pick a single timezone and hope everyone can convert it correctly, or list times in multiple zones — which is tedious and error-prone.
            </p>

            <p className="text-[#373b4d] mb-4">
              With Discord timestamps, every member sees the event time in their own local timezone automatically. A member in New York sees &quot;5:00 PM EDT&quot;, while a member in London sees &quot;10:00 PM BST&quot;, and a member in Tokyo sees &quot;6:00 AM JST&quot; — all from the same single timestamp code in your message. This is particularly valuable for gaming communities coordinating raid times, developer communities scheduling code reviews, and educational groups organizing study sessions.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">How Unix Timestamps Work</h3>

            <p className="text-[#373b4d] mb-4">
              To use Discord timestamps effectively, it helps to understand what a Unix timestamp actually is. Unix time (also called POSIX time or Epoch time) is a system for describing a point in time, defined as the number of seconds that have elapsed since the Unix epoch — which is midnight on January 1, 1970, Coordinated Universal Time (UTC), not counting leap seconds.
            </p>

            <p className="text-[#373b4d] mb-4">
              Unix timestamps are universal — they represent the same moment in time regardless of timezone. When Discord receives the timestamp value, it uses your device&apos;s local timezone settings to convert that universal time into a local representation. This is why Discord timestamps automatically adapt to each viewer&apos;s timezone without any special server-side logic.
            </p>

            <p className="text-[#373b4d] mb-4">
              For example, Unix timestamp 1735689600 corresponds to January 1, 2025 at 12:00 AM UTC. A user in Eastern Standard Time (UTC-5) would see &quot;December 31, 2024 7:00 PM EST&quot;, while a user in Japan Standard Time (UTC+9) would see &quot;January 1, 2025 9:00 AM JST&quot;. The raw number is the same; only the displayed representation differs based on timezone.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Discord Server Management Tips</h3>

            <p className="text-[#373b4d] mb-4">
              Beyond timestamps, effective Discord server management involves a wide range of strategies and tools. Successful server owners think carefully about channel structure, role hierarchies, permission systems, and community culture. Here are some best practices that experienced Discord administrators follow.
            </p>

            <p className="text-[#373b4d] mb-4">
              Channel organization is one of the most important aspects of server management. Grouping related channels into categories makes navigation intuitive for new members. Most servers benefit from having a clear welcome and rules channel, separate channels for announcements versus general discussion, topic-specific channels for different interests, and voice channels for different types of conversations.
            </p>

            <p className="text-[#373b4d] mb-4">
              Role management is equally crucial. A well-designed role system allows you to control access to specific channels, reward active members, recognize contributors, and organize your moderation team. Discord&apos;s role permission system is hierarchical — roles higher in the list override permissions set by lower roles, which allows for flexible and granular access control.
            </p>

            <p className="text-[#373b4d] mb-4">
              Bot integration is another area where utility tools become invaluable. Discord bots can automate moderation tasks, welcome new members, provide music playback, run polls and giveaways, track statistics, and integrate with external services. Understanding how bots use Discord&apos;s API and how to configure them effectively is a key skill for server administrators.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">Using Discord for Community Building</h3>

            <p className="text-[#373b4d] mb-4">
              Discord has proven to be an exceptional platform for building engaged online communities. Unlike social media platforms where content is algorithmically curated, Discord gives community owners direct, unfiltered access to their members. Messages appear in real time, conversations feel intimate, and the persistent nature of channels allows for ongoing discussion and reference.
            </p>

            <p className="text-[#373b4d] mb-4">
              Successful Discord communities share certain characteristics: clear purpose and identity, welcoming onboarding experiences, active and fair moderation, regular events and activities, and a culture of mutual respect. The tools available through FreeDiscordTools can support many of these goals — particularly the ability to communicate event times clearly and without timezone confusion.
            </p>

            <p className="text-[#373b4d] mb-4">
              For developers building Discord bots or integrations, utility tools that generate correct Discord-formatted content are especially valuable. Our Discord Timestamp Generator produces the exact syntax that Discord&apos;s message renderer expects, saving time and reducing errors in bot development workflows.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3 mt-6">About FreeDiscordTools</h3>

            <p className="text-[#373b4d] mb-4">
              FreeDiscordTools is designed with a simple philosophy: give Discord users powerful, accurate tools that are fast, free, and easy to use. Every tool on this site runs entirely in your browser — no data is ever sent to a server, no account is required, and no usage limits apply. The site is optimized for performance with no external dependencies, ensuring tools load instantly on any connection.
            </p>

            <p className="text-[#373b4d]">
              We are continuously expanding the toolset based on community needs. If you have a suggestion for a tool that would help Discord users, server owners, or developers, we want to hear from you. Use the Contact page to send your ideas — we review every suggestion.
            </p>
          </article>
        </section>

        {/* Ad: Mid content */}
        <div className="flex justify-center mb-12">
          <AdSlot slotId={adsConfig.slots.homepageContentMid} width={728} height={90} />
        </div>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-12">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {homepageFaqs.map((faq, i) => (
              <details key={i} className="p-4 rounded-lg bg-white border border-[#E3E6F0] group">
                <summary className="font-medium text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-[#5865F2] ml-2">+</span>
                </summary>
                <p className="mt-3 text-[#373b4d] text-base leading-relaxed">{faq.answer}</p>
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
