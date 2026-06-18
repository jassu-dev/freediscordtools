import type { Metadata } from 'next';
import WebhookSender from '@/components/tools/WebhookSender';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Free Discord Webhook Message Sender & Webhook Tester',
  description:
    'Use our free Discord webhook message sender to test webhooks instantly. The best online webhook message sender to customize bot name, avatar, and content.',
  keywords: [
    'discord webhook message sender',
    'webhook message sender',
    'discord webhook tester',
    'send discord webhook message',
    'discord webhook online tool',
    'free discord webhook sender',
    'custom discord webhook message',
    'discord webhook api tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-webhook-sender/`,
  },
};

const faqItems = [
  {
    question: 'How to use a Discord webhook message sender?',
    answer:
      'To use our Discord webhook message sender, paste your webhook URL, enter your desired message in the message sender tool, customize your bot name or avatar, and click "Send". It is the fastest webhook message sender online.',
  },
  {
    question: 'Why use an online webhook message sender?',
    answer:
      'An online webhook message sender allows developers and server admins to quickly test webhook integrations, send announcements, or post formatted messages without writing any code. It is an essential webhook message sender utility.',
  },
  {
    question: 'Is this a free Discord webhook message sender?',
    answer:
      'Yes, our tool is a 100% free Discord webhook message sender. You can send as many messages as you need for testing or server management without any limitations or sign-up requirements.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-webhook-sender/`;

export default function DiscordWebhookSenderPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Webhook Message Sender"
        description="Free online tool to send and test messages via Discord webhooks instantly."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Webhook Message Sender', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Webhook Message Sender
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            The easiest <strong>Discord webhook message sender</strong>. Instantly send and test messages with our <strong>webhook message sender</strong> tool. No coding required—customize your bot, preview, and send!
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Webhook Message Sender Tool</h2>
          <WebhookSender />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use This Webhook Message Sender
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Looking for a reliable <strong>Discord webhook message sender</strong>? Follow these steps to send your first message:
            </p>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Get your webhook URL from Discord server settings.</li>
              <li>Paste the URL into our <strong>webhook message sender</strong> input.</li>
              <li>Customize your bot&apos;s username and avatar URL.</li>
              <li>Type your content into the message sender input area.</li>
              <li>Click Send to instantly trigger the <strong>Discord webhook message sender</strong>.</li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="why-heading" className="mb-10">
          <h2 id="why-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Best Webhook Message Sender for Developers
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Our <strong>Discord webhook message sender</strong> is designed for speed. Whether you are a developer testing a new integration or a server owner sending automated notifications, this <strong>webhook message sender</strong> simplifies the process. No more testing with curl—just paste, customize, and send.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
