import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordPollCreator from '@/components/tools/DiscordPollCreator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make a poll on Discord?',
    answer:
      'To make a poll on Discord, use our Discord Poll Creator to generate a poll template, then paste it into Discord. You can add reaction emojis manually or use a bot like Carl-bot.',
  },
  {
    question: 'Are there Discord bots for polls?',
    answer:
      'Yes! Popular Discord poll bots include Carl-bot, Poll Bot, and Simple Poll. These bots can create polls with automatic reactions.',
  },
  {
    question: 'Can you make anonymous polls on Discord?',
    answer:
      'Discord doesn\'t have built-in anonymous polls, but some bots like Poll Bot offer anonymous poll features.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Poll Creator - Free Poll Maker',
  description:
    'Free Discord poll creator. Make simple polls, multiple-choice polls, and yes/no polls for Discord. Copy-paste ready poll templates.',
  keywords: [
    'discord poll creator',
    'discord poll maker',
    'how to make a poll on discord',
    'discord poll template',
    'discord survey maker',
    'free discord poll tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-poll-creator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-poll-creator/`;

export default function DiscordPollCreatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Poll Creator',
          description: 'Free Discord poll creator. Make simple polls, multiple-choice polls, and yes/no polls for Discord.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Poll Creator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Poll Creator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Create perfect Discord polls instantly. Just add your question and options, generate, and copy-paste into Discord!
          </p>
        </header>
        <DiscordPollCreator />
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
        <AuthorTrustBox />
      </div>
    </>
  );
}
