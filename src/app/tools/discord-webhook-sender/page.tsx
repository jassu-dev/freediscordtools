import type { Metadata } from 'next';
import WebhookSender from '@/components/tools/WebhookSender';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
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

        <hr className="border-[#E3E6F0] mb-10" />

        <article className="prose prose-lg max-w-3xl mx-auto text-[#5b6282] space-y-6 mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            The Complete Guide to Discord Webhooks
          </h2>
          <p>
            Discord webhooks are one of the most powerful and flexible features available to server owners and developers. A <strong>Discord webhook</strong> is essentially a unique URL tied to a specific channel that allows any external application or script to post messages directly — without needing a full Discord bot account or OAuth authentication.
          </p>
          <p>
            This makes webhooks ideal for a huge range of use cases: automated status reports, GitHub commit notifications, game server alerts, monitoring dashboards, RSS feed updates, e-commerce order confirmations, and much more. Our <strong>free Discord webhook sender</strong> lets you test and use webhooks without writing a single line of code.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">How to Create a Discord Webhook</h3>
          <p>
            Creating a webhook in Discord takes less than 30 seconds:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open your Discord server and navigate to the target channel.</li>
            <li>Click the gear icon (⚙️) next to the channel name to open <strong>Channel Settings</strong>.</li>
            <li>Go to the <strong>Integrations</strong> tab in the left sidebar.</li>
            <li>Click <strong>Webhooks → New Webhook</strong>.</li>
            <li>Give your webhook a name and optionally set a custom avatar image.</li>
            <li>Click <strong>Copy Webhook URL</strong> — this is the URL you paste into our tool.</li>
          </ol>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Webhooks vs Bots: What Is the Difference?</h3>
          <p>
            Many new Discord server owners confuse webhooks and bots. Here is a clear breakdown:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Discord Bots</strong> are full accounts that can read messages, respond to commands, manage members, assign roles, and perform complex server management. They require OAuth2 authorization, a developer account, and hosting infrastructure.</li>
            <li><strong>Discord Webhooks</strong> are simpler. They can only post messages to one specific channel. They require no account login, no developer app registration, and no hosting. Just a webhook URL.</li>
          </ul>
          <p>
            For most simple notification and content delivery use cases, webhooks are the right choice. Use our <strong>Discord webhook tester</strong> to prototype your integration quickly, then automate the same HTTP call in your application using <code>fetch</code>, <code>axios</code>, <code>requests</code>, or any HTTP library.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Adding Rich Embeds to Your Webhook</h3>
          <p>
            Plain text messages are fine for simple notifications, but for professional-looking messages, Discord webhooks support <strong>rich embeds</strong>. Embeds can include colored sidebars, titles with links, images, custom fields, and footers. They look far more polished than raw text.
          </p>
          <p>
            Use our <a href="/tools/discord-embed-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Embed Generator</a> to visually design your embed and copy the exact JSON payload. Then paste that JSON body into any webhook client — including this tool — to send it instantly.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Webhook Security Best Practices</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Never share your webhook URL publicly.</strong> Anyone with the URL can post to your channel. If exposed, immediately delete the webhook and create a new one.</li>
            <li><strong>Use separate webhooks per integration.</strong> This way you can revoke one webhook without disrupting others.</li>
            <li><strong>Set meaningful webhook names.</strong> In your server&apos;s integrations panel, label each webhook by its purpose (e.g., &quot;GitHub Commits&quot;, &quot;Uptime Monitor&quot;) for easy management.</li>
            <li><strong>Do not include secret tokens in webhook messages.</strong> Webhook payloads are visible to anyone with channel read access.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Rate Limits and Quotas</h3>
          <p>
            Discord&apos;s webhook API is subject to rate limiting. You can send a maximum of <strong>30 messages per minute</strong> per webhook URL. If you exceed this, Discord will respond with a 429 (Too Many Requests) error and include a <code>retry_after</code> field in seconds. Always implement rate limit handling in automated scripts to avoid getting blocked.
          </p>
          <p>
            For high-volume integrations, consider batching messages using embeds (up to 10 embeds per message) rather than sending many individual webhook calls.
          </p>
        </article>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-lg bg-white border border-[#E3E6F0]">
                <summary className="px-4 py-3 font-medium text-[#1a1d2e] text-base cursor-pointer list-none flex justify-between items-center gap-2">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] shrink-0 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="px-4 pb-4 pt-1 text-[#5b6282] text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
