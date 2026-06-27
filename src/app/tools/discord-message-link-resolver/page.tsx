import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordMessageLinkResolver from '@/components/tools/DiscordMessageLinkResolver';

const faqItems = [
  {
    question: 'What is a Discord message link?',
    answer:
      'A Discord message link is a URL that points directly to a specific message in a Discord channel or DM. The format is https://discord.com/channels/{guild_id}/{channel_id}/{message_id}.',
  },
  {
    question: 'How do I get a Discord message link?',
    answer:
      'In the Discord desktop app, hover over the message, click the three dots (More), and select "Copy Message Link". In the mobile app, press and hold the message, then select "Copy Message Link".',
  },
  {
    question: 'What is a Discord snowflake ID?',
    answer:
      'Discord uses snowflake IDs for users, messages, channels, and servers. A snowflake is a 64-bit integer that contains a timestamp and other metadata.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Message Link Resolver - Extract IDs & Timestamps',
  description:
    'Free Discord message link resolver. Paste any Discord message link to extract server ID, channel ID, message ID, and the timestamp when the message was sent.',
  keywords: [
    'discord message link resolver',
    'discord message link parser',
    'discord message id to date',
    'discord message link',
    'discord message timestamp',
    'discord link resolver',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-message-link-resolver/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-message-link-resolver/`;

export default function DiscordMessageLinkResolverPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Discord Message Link Resolver",
          description: "Free Discord message link resolver. Extract IDs and timestamps from Discord message links.",
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home',                         href: `${seoConfig.baseUrl}/` },
          { name: 'Tools',                        href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Message Link Resolver', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Message Link Resolver
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Paste any Discord message link to extract server ID, channel ID, message ID, and the exact timestamp when the message was sent.
          </p>
        </header>
        <DiscordMessageLinkResolver />
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl bg-white border border-[#E3E6F0] overflow-hidden group shadow-sm">
                <summary className="px-6 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center hover:bg-[#F8F9FF] transition">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 pt-2 text-[#5b6282] leading-relaxed border-t border-[#E3E6F0]/50 bg-[#F8F9FF]/30">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
