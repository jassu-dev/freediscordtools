import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordSpoilerGenerator from '@/components/tools/DiscordSpoilerGenerator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make a spoiler on Discord?',
    answer:
      'To make a spoiler on Discord, wrap your text in double vertical bars: ||spoiler text||. You can also use our Discord Spoiler Generator to create spoilers instantly!',
  },
  {
    question: 'Can you make image spoilers on Discord?',
    answer:
      'Yes! When uploading an image to Discord, check the "Mark as spoiler" box before sending. This will hide the image behind a spoiler overlay.',
  },
  {
    question: 'Do spoilers work on Discord mobile?',
    answer:
      'Yes! Discord spoilers work on both desktop and mobile. Just tap on a spoiler to reveal the hidden content.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Spoiler Generator - Free Spoiler Maker',
  description:
    'Free Discord spoiler generator. Create spoiler tags for text, images, and links instantly. The best Discord spoiler maker online with one-click copy.',
  keywords: [
    'discord spoiler generator',
    'discord spoiler maker',
    'how to make a spoiler on discord',
    'discord spoiler tags',
    'discord hidden text',
    'free discord spoiler tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-spoiler-generator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-spoiler-generator/`;

export default function DiscordSpoilerGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Spoiler Generator',
          description: 'Free Discord spoiler generator. Create spoiler tags for text, images, and links instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Spoiler Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Spoiler Generator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Create perfect Discord spoiler tags instantly. Just type your text, generate, and copy-paste into Discord!
          </p>
        </header>
        <DiscordSpoilerGenerator />
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
