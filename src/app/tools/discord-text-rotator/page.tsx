import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordTextRotator from '@/components/tools/DiscordTextRotator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make upside down text on Discord?',
    answer:
      'To make upside down text on Discord, use our Discord Text Rotator. It converts your text into upside-down characters that you can copy and paste directly into Discord.',
  },
  {
    question: 'Does upside down text work on Discord mobile?',
    answer:
      'Yes! Upside down text works on both Discord desktop and mobile, as long as the device supports the Unicode characters.',
  },
  {
    question: 'Can you reverse text on Discord?',
    answer:
      'Absolutely! Our Discord Text Rotator can reverse any text instantly. Just type your text, copy the reversed version, and paste it into Discord.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Text Rotator - Upside Down & Reversed Text',
  description:
    'Free Discord text rotator. Flip text upside-down, reverse text, and create weird text styles for Discord. One-click copy for all text effects.',
  keywords: [
    'discord text rotator',
    'upside down text discord',
    'reverse text discord',
    'discord weird text',
    'discord text flipper',
    'free discord text tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-text-rotator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-text-rotator/`;

export default function DiscordTextRotatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Text Rotator',
          description: 'Free Discord text rotator. Flip text upside-down, reverse text, and create weird text styles.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Text Rotator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Text Rotator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Create upside-down text, reversed text, and other weird text styles for Discord instantly!
          </p>
        </header>
        <DiscordTextRotator />
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
