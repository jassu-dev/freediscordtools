import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordNitroPerksCalculator from '@/components/tools/DiscordNitroPerksCalculator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'How much does Discord Nitro cost?',
    answer:
      'Discord Nitro costs $9.99 per month or $99.99 per year. Discord Nitro Basic costs $2.99 per month or $29.99 per year.',
  },
  {
    question: 'Is Discord Nitro worth it?',
    answer:
      'Whether Discord Nitro is worth it depends on how you use Discord. If you want HD video, larger file uploads, and custom emoji anywhere, it might be worth it.',
  },
  {
    question: 'What is the difference between Nitro and Nitro Basic?',
    answer:
      'Nitro Basic offers 50MB file uploads, custom emoji anywhere, custom profile themes, and HD video (720p). Full Nitro adds 500MB uploads, server boosting, custom stickers, animated banners, and Nitro Games.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Nitro Perks Calculator - Compare Nitro Plans',
  description:
    'Free Discord Nitro perks calculator. Compare Nitro and Nitro Basic, monthly vs annual billing, and see how much money you can save with an annual subscription.',
  keywords: [
    'discord nitro perks',
    'discord nitro calculator',
    'discord nitro cost',
    'discord nitro basic',
    'discord nitro vs basic',
    'discord nitro price',
    'discord nitro annual',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-nitro-perks-calculator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-nitro-perks-calculator/`;

export default function DiscordNitroPerksCalculatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Discord Nitro Perks Calculator",
          description: "Free Discord Nitro perks calculator. Compare Nitro plans and see savings.",
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home',                          href: `${seoConfig.baseUrl}/` },
          { name: 'Tools',                         href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Nitro Perks Calculator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Nitro Perks Calculator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Compare Discord Nitro and Nitro Basic, see the cost for monthly vs annual billing, and calculate how much money you save with an annual subscription.
          </p>
        </header>
        <DiscordNitroPerksCalculator />
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
