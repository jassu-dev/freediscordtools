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
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Invite Link Generator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl leading-relaxed">
            The ultimate free <strong className="text-[#1a1d2e]">Discord invite link generator</strong> and planning tool. Preview and customize Discord invite link options, including expiration times, max uses, and temporary membership. Learn how to create real, working invite links in the Discord app and grow your community safely!
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4 rounded-r-xl">
            Just launched your server? Use our{' '}
            <a href="/tools/discord-rules-generator/" className="text-[#5865F2] font-bold hover:underline">
              Discord Rules Generator
            </a> to set up your server rules!
          </p>
        </header>
        <section className="mb-10">
          <DiscordInviteLinkGenerator />
        </section>
        
        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Understanding Discord Invite Settings
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              When creating a <strong className="text-[#1a1d2e]">Discord invite link</strong>, you have several important options to choose from. Our <strong className="text-[#1a1d2e]">Discord invite maker</strong> helps you visualize these settings so you can decide what's best for your community before you create the real link in Discord.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#F8F9FF] p-4 rounded-lg border border-[#E3E6F0]">
                <h3 className="font-bold text-[#1a1d2e] mb-2">Expiration Time</h3>
                <p className="text-sm">How long the link stays valid: 30 minutes to never. Short expirations are safer for limited promotions.</p>
              </div>
              <div className="bg-[#F8F9FF] p-4 rounded-lg border border-[#E3E6F0]">
                <h3 className="font-bold text-[#1a1d2e] mb-2">Max Uses</h3>
                <p className="text-sm">How many times the link can be used: 1 use to unlimited. Great for giveaways or limited invites.</p>
              </div>
              <div className="bg-[#F8F9FF] p-4 rounded-lg border border-[#E3E6F0]">
                <h3 className="font-bold text-[#1a1d2e] mb-2">Temporary Membership</h3>
                <p className="text-sm">Users get kicked unless they get a role. Perfect for trial periods or gated communities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Make a Discord Invite Link in the Discord App
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Our tool helps you plan, but to create a real, working invite link, follow these steps in Discord:
            </p>
            <ol className="space-y-4 list-none">
              {[
                { n: '1', title: 'Open Server Settings', body: 'Open your Discord server, click the server name in the top-left, and select "Invite People".' },
                { n: '2', title: 'Customize Settings', body: 'Click "Edit invite link" to adjust expiration time, max uses, and temporary membership options.' },
                { n: '3', title: 'Generate and Copy', body: 'Click "Generate a new link" to create your invite, then click "Copy" to share it!' },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#5865F2] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1d2e] mb-1">{step.title}</p>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Invite Best Practices for Growing Your Community
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A great <strong className="text-[#1a1d2e]">Discord invite code</strong> strategy can help you grow your community safely and sustainably:
            </p>
            <ul className="list-none space-y-3">
              {[
                { name: 'Use Short Expirations for Public Links', desc: 'For links shared on social media or forums, set short expirations to prevent abuse.' },
                { name: 'Limit Max Uses for Giveaways', desc: 'For giveaways or promotions, set a max number of uses to control how many people join.' },
                { name: 'Use Permanent Links for Trusted Members', desc: 'For sharing with friends or existing community members, permanent links are convenient.' },
                { name: 'Create Vanity URLs at Boost Level 1', desc: 'Once your server hits Boost Level 1, create a memorable custom URL like discord.gg/myserver.' },
                { name: 'Track Invite Analytics', desc: 'Use Discord\'s invite analytics to see where your new members are coming from.' },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong className="text-[#1a1d2e]">{item.name}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Understanding Discord Vanity URLs
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">custom Discord invite</strong> (vanity URL) is a branded, memorable link like discord.gg/myserver instead of a random string of characters. Here's what you need to know:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Requirement:</strong> Your server needs to be Boost Level 1 (2 boosts) to get a vanity URL.</li>
              <li><strong>How to set it up:</strong> Go to Server Settings → Vanity URL (once eligible).</li>
              <li><strong>Best practices:</strong> Choose something short, easy to spell, and relevant to your server name.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/tools/discord-rules-generator/', name: 'Discord Rules Generator', desc: 'Create perfect server rules for your community.' },
              { href: '/tools/discord-poll-creator/', name: 'Discord Poll Creator', desc: 'Make interactive polls for your new members.' },
              { href: '/tools/discord-embed-generator/', name: 'Discord Embed Generator', desc: 'Create beautiful embeds for your server announcements.' },
              { href: '/tools/discord-webhook-sender/', name: 'Discord Webhook Sender', desc: 'Send automated messages to your server.' },
            ].map((t) => (
              <a key={t.href} href={t.href} className="block p-4 rounded-xl bg-white border border-[#E3E6F0] hover:border-[#5865F2] transition-all shadow-sm">
                <p className="font-bold text-[#1a1d2e] text-sm mb-1">{t.name}</p>
                <p className="text-xs text-[#5b6282]">{t.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4 text-center">
            Frequently Asked Questions
          </h2>
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
