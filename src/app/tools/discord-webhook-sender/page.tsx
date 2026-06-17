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
  title: 'Discord Webhook Sender – Send Webhook Messages Online',
  description:
    'Free Discord webhook sender and tester. Send messages to any Discord webhook URL instantly. Customize username, avatar, and message content.',
  keywords: [
    'discord webhook sender',
    'send message to discord webhook',
    'discord webhook tester',
    'discord message sender online',
    'custom discord webhook',
    'discord webhook tool',
    'discord webhook creator',
    'discord webhook manager',
    'discohook alternative',
    'sites like discohook',
    'discord embed generator',
    'send webhook with bot avatar',
    'discord webhook api tester',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-webhook-sender/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-webhook-sender/`,
      'en': `${seoConfig.baseUrl}/tools/discord-webhook-sender/`,
    },
  },
  openGraph: {
    title: 'Discord Webhook Sender – Send Webhook Messages Online',
    description:
      'The easiest way to send and test Discord webhooks. Enter your URL, customize your bot, and send messages instantly from your browser.',
    url: `${seoConfig.baseUrl}/tools/discord-webhook-sender/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Webhook Sender' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Webhook Sender – Send Webhook Messages Online',
    description:
      'Test your Discord webhooks with our free online sender. Customize your bot and send messages without any coding.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'What is a Discord Webhook?',
    answer:
      'A Discord Webhook is a unique URL that allows external services to send messages to a specific channel in your Discord server without having a full bot account.',
  },
  {
    question: 'How do I create a Discord Webhook?',
    answer:
      'To create a webhook: Go to your Server Settings > Integrations > Webhooks. Click "New Webhook", select a channel, and click "Copy Webhook URL".',
  },
  {
    question: 'How to use this Discord Webhook Sender?',
    answer:
      'Simply paste your Webhook URL, enter your desired message content, and click "Send Message". You can also customize the bot\'s display name and avatar image.',
  },
  {
    question: 'Is my Webhook URL safe?',
    answer:
      'Yes. Our tool sends the message directly from your browser to Discord. We do not store or log your webhook URLs or message content on our servers.',
  },
  {
    question: 'Why is my Discord Webhook not working?',
    answer:
      'Ensure the URL is correct and that the webhook has not been deleted from the server settings. Also, check that your message content is not empty and follows Discord\'s character limits.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-webhook-sender/`;

export default function DiscordWebhookSenderPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Webhook Sender"
        description="Online tool to send and test messages via Discord webhooks. No coding required."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Webhook Sender', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Webhook Sender
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            The ultimate <strong className="text-[#1a1d2e]">Discord webhook sender</strong>. Easily send messages, test integrations, and customize your webhook bot without writing a single line of code.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Webhook Tester Tool</h2>
          <WebhookSender />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Send a Message via Discord Webhook
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Sending a message with our <strong className="text-[#1a1d2e]">discord webhook tester</strong> is fast and easy:
            </p>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Copy your <strong className="text-[#1a1d2e]">Webhook URL</strong> from your Discord server settings.</li>
              <li>Paste the URL into the input field above.</li>
              <li>(Optional) Enter a custom <strong className="text-[#1a1d2e]">Username</strong> and <strong className="text-[#1a1d2e]">Avatar URL</strong>.</li>
              <li>Type your message in the <strong className="text-[#1a1d2e]">Message Content</strong> box.</li>
              <li>Click <strong className="text-[#1a1d2e]">Send Message</strong> to deliver it to Discord instantly.</li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="benefits-heading" className="mb-10">
          <h2 id="benefits-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Why Use an Online Discord Webhook Tool?
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Our <strong className="text-[#1a1d2e]">discord message sender online</strong> is perfect for developers who need to quickly test their webhook integrations. It saves time by providing a clean UI instead of having to use <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">curl</code> or Postman.
            </p>
            <p>
              Server owners also use our <strong className="text-[#1a1d2e]">discord webhook tool</strong> to send announcements or formatted messages that look more professional than standard user messages.
            </p>
          </div>
        </section>

        <section className="mb-10 bg-[#F8F9FF] p-6 rounded-2xl border border-[#E3E6F0]">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">The Best Discohook Alternative</h2>
          <p className="text-[#5b6282] mb-4">
            If you are looking for a <strong className="text-[#1a1d2e]">Discohook alternative</strong>, our tool offers several advantages:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5b6282]">
            <li className="flex gap-2">
              <span className="text-[#5865F2] font-bold">✓</span>
              <span><strong>No Login Required:</strong> Send webhooks instantly without connecting your Discord account.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#5865F2] font-bold">✓</span>
              <span><strong>Lightweight & Fast:</strong> Our interface is optimized for speed and works perfectly on mobile devices.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#5865F2] font-bold">✓</span>
              <span><strong>Privacy First:</strong> We never log your webhook URLs or message content.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#5865F2] font-bold">✓</span>
              <span><strong>Completely Free:</strong> All features are available to everyone at no cost.</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Webhook FAQ
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
