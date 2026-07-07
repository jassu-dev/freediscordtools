import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordInviteLinkGenerator from '@/components/tools/DiscordInviteLinkGenerator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do I create a Discord invite link?',
    answer:
      'To create a real Discord invite link, open your Discord server, go to Server Settings → Invites, and create a new invite. You can customize expiration, max uses, and temporary membership.',
  },
  {
    question: 'Can I make a custom Discord invite link?',
    answer:
      'Yes! If your server is boosted to Level 1 or higher, you can create a custom vanity URL (e.g., discord.gg/myserver).',
  },
  {
    question: 'How long do Discord invite links last?',
    answer:
      'Discord invite links can last from 30 minutes to never, depending on the settings you choose when creating the invite.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Invite Link Generator - Free Invite Maker',
  description:
    'Free Discord invite link generator. Create custom Discord invite links with expiration times, max uses, and temporary membership options.',
  keywords: [
    'discord invite link generator',
    'discord invite maker',
    'custom discord invite',
    'discord invite code',
    'how to make a discord invite link',
    'free discord invite tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-invite-link-generator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-invite-link-generator/`;

export default function DiscordInviteLinkGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Invite Link Generator',
          description: 'Free Discord invite link generator. Create custom Discord invite links with various options.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Invite Link Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Invite Link Generator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Preview and customize Discord invite link options. Learn how to create real invite links in the Discord app!
          </p>
        </header>
        <DiscordInviteLinkGenerator />
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
