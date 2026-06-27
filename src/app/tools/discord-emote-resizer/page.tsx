import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordEmoteResizer from '@/components/tools/DiscordEmoteResizer';

const faqItems = [
  {
    question: 'What size should Discord emotes be?',
    answer:
      'Discord emotes should be 128x128 pixels for standard server emotes. Smaller sizes like 64x64 and 32x32 are also allowed for different display contexts.',
  },
  {
    question: 'What file formats do Discord emotes support?',
    answer:
      'Discord supports PNG, JPG, and GIF file formats for emotes. Animated emotes (GIFs) are available for Nitro servers.',
  },
  {
    question: 'What is the maximum file size for a Discord emote?',
    answer:
      'Standard Discord emotes are limited to 256KB. Animated GIF emotes are also limited to 256KB.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Emote Resizer - Free Discord Emote Size Tool',
  description:
    'Free Discord emote resizer. Resize images to 128x128, 64x64, or 32x32 pixels for Discord emotes instantly. Download in PNG format.',
  keywords: [
    'discord emote resizer',
    'discord emote size',
    'discord emote generator',
    'emote resizer',
    'discord emoji resizer',
    'discord emote maker',
    'discord emote size tool',
    'resize image for discord emote',
    'discord emote dimensions',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-emote-resizer/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-emote-resizer/`;

export default function DiscordEmoteResizerPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Discord Emote Resizer",
          description: "Free Discord emote resizer. Resize images to Discord emote sizes (128x128, 64x64, 32x32) and download instantly.",
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home',                 href: `${seoConfig.baseUrl}/` },
          { name: 'Tools',                href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Emote Resizer', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Emote Resizer
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Resize any image to Discord emote sizes (128x128, 64x64, 32x32) instantly. Download in PNG format and use in your Discord server.
          </p>
        </header>
        <DiscordEmoteResizer />
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
