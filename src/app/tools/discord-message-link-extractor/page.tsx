import type { Metadata } from 'next';
import MessageLinkExtractorTool from '@/components/tools/message-extractor/MessageLinkExtractorTool';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Discord Message Link Extractor – ID Lookup Tool',
  description:
    'Extract Server ID, Channel ID, and Message ID from any Discord message link instantly. Find and copy individual Discord snowflake IDs.',
  keywords: [
    'discord message link extractor',
    'extract id from discord link',
    'discord message id lookup',
    'discord channel id finder',
    'how to get discord message link id',
    'discord link decoder',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-message-link-extractor/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-message-link-extractor/`,
      'en': `${seoConfig.baseUrl}/tools/discord-message-link-extractor/`,
    },
  },
  openGraph: {
    title: 'Discord Message Link Extractor – ID Lookup Tool',
    description:
      'Extract Server ID, Channel ID, and Message ID from any Discord message link instantly. Decodes message urls locally in your browser.',
    url: `${seoConfig.baseUrl}/tools/discord-message-link-extractor/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Message Link Extractor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Message Link Extractor – ID Lookup Tool',
    description:
      'Extract Server ID, Channel ID, and Message ID from any Discord message link instantly.',
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'What is a Discord message link?',
    answer:
      'A Discord message link is a direct URL pointing to a specific message in a Discord server. It follows the format: https://discord.com/channels/SERVER_ID/CHANNEL_ID/MESSAGE_ID.',
  },
  {
    question: 'How do I extract IDs from a Discord link?',
    answer:
      'Simply paste the Discord message link into our online extractor tool. It parses the URL instantly and separates the Server (Guild) ID, Channel ID, and Message ID into copyable text fields.',
  },
  {
    question: 'What are the three IDs in a Discord link?',
    answer:
      'The three IDs are: 1. Server ID (the unique identifier for the guild), 2. Channel ID (the specific text channel where the message was posted), and 3. Message ID (the unique identifier of the message itself).',
  },
  {
    question: 'How do I get a Discord message link?',
    answer:
      'To get a message link, hover over any message in Discord, click the three dots (More) on the right side, and select "Copy Message Link". Make sure Developer Mode is enabled in settings if you want to copy raw IDs directly.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-message-link-extractor/`;

export default function MessageLinkExtractorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Message Link Extractor"
        description="Free online utility to extract Server ID, Channel ID, and Message ID from Discord message links instantly."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Message Link Extractor', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* H1 */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Message Link Extractor
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Paste a Discord message URL to extract individual snowflake IDs. Find the exact <strong className="text-[#1a1d2e]">Server ID</strong>, <strong className="text-[#1a1d2e]">Channel ID</strong>, and <strong className="text-[#1a1d2e]">Message ID</strong> instantly.
          </p>
        </header>

        {/* Tool */}
        <section aria-labelledby="tool-heading" className="mb-6">
          <h2 id="tool-heading" className="sr-only">Discord ID Extractor Tool</h2>
          <MessageLinkExtractorTool />
        </section>

        {/* How to use */}
        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Extract IDs from a Discord Link
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 mb-6 leading-relaxed">
            <p>
              Every Discord message link holds three core parts. If you are developing a bot, configuring webhooks, or managing server permissions, you often need these raw snowflake IDs.
            </p>
          </div>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span><strong>Copy Link:</strong> Go to Discord, click the three dots next to a message, and click <strong>Copy Message Link</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span><strong>Paste & Extract:</strong> Paste the link in the input box above and click the <strong>Extract IDs</strong> button.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span><strong>Copy Results:</strong> Use the convenient one-click copy buttons next to the Server, Channel, or Message ID to copy them to your clipboard.</span>
            </li>
          </ol>
        </section>

        {/* Anatomy of Link */}
        <section aria-labelledby="anatomy-heading" className="mb-10">
          <h2 id="anatomy-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Anatomy of a Discord Message URL
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A typical Discord message link looks like this:
            </p>
            <div className="bg-[#F0F2FF] rounded-lg p-4 font-mono text-sm text-[#5865F2] overflow-x-auto">
              https://discord.com/channels/123456789012345678/234567890123456789/345678901234567890
            </div>
            <p>
              The URL structure is broken down as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Server ID (123456789012345678):</strong> The first number sequence represents the unique ID of the server. For Direct Messages, this will appear as <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">@me</code>.</li>
              <li><strong>Channel ID (234567890123456789):</strong> The second number sequence represents the specific text channel or thread.</li>
              <li><strong>Message ID (345678901234567890):</strong> The final number represents the unique Snowflake ID of the message.</li>
            </ul>
            <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm">
              Want to see when an ID was created? Copy the Message ID and paste it into our <a href="/tools/discord-id-to-date/" className="text-[#5865F2] font-bold hover:underline">Discord ID to Date Converter</a>.
            </p>
          </div>
        </section>

        {/* Extensive SEO Article Section - NEW CONTENT EXPANSION (500+ Words) */}
        <article className="prose prose-lg max-w-none text-[#5b6282] space-y-6 border-t border-[#E3E6F0] pt-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            Comprehensive Guide to Discord Message Links & Snowflake IDs
          </h2>
          
          <p>
            Discord uses a distributed unique ID generation system inspired by Twitter, called <strong>Snowflake IDs</strong>. Every entity inside the Discord database including guilds (servers), text and voice channels, user profiles, emojis, and every single message sent is assigned a unique 64-bit integer.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e]">Why Are Discord Message Links Structured This Way?</h3>
          <p>
            When you copy a message link in Discord, the application generates a URL containing three different Snowflake IDs separated by slashes: <code>/channels/SERVER_ID/CHANNEL_ID/MESSAGE_ID</code>.
          </p>
          <p>
            This design enables the Discord client (desktop, mobile app, or browser) to route users directly to the correct spot. Here is why all three components are essential:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Context Routing:</strong> The client first checks the Server ID to establish the server connection. If you are not a member of this server, you will see an access error.</li>
            <li><strong>Channel Navigation:</strong> Once inside the server, the client navigates to the specific channel. The Channel ID resolves the text channel, voice channel, or thread container.</li>
            <li><strong>Message Focus:</strong> Finally, the Message ID prompts the client to fetch that message, scroll it into view, and briefly highlight it with an animation.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e]">How to Copy Discord Message Links on Different Devices</h3>
          <p>
            The process of obtaining a message URL varies slightly depending on the device you are using:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>On Desktop (Mac/Windows/Web App):</strong> Hover your cursor over the message. A reaction/options menu will appear on the far right. Click the three dots (&quot;More&quot; button) and select <strong>Copy Message Link</strong> from the dropdown list.
            </li>
            <li>
              <strong>On Mobile (iOS/Android):</strong> Press and hold the target message bubble for one second until the action sheet slides up. Tap the <strong>Copy Message Link</strong> option (usually near the bottom).
            </li>
          </ol>

          <h3 className="text-xl font-bold text-[#1a1d2e]">Developer and Moderator Use Cases</h3>
          <p>
            For server moderators, bot developers, and power users, extracting the raw numerical IDs from a message link is a daily task.
          </p>
          <p>
            If you are programming a Discord bot in Python (using Discord.py) or JavaScript (using Discord.js), you cannot use the entire message URL directly to fetch or edit a message. Your code requires the raw integer IDs. For example, in Discord.js v14:
          </p>
          <pre className="bg-[#1e1f22] p-3 rounded font-mono text-xs text-gray-200 overflow-x-auto">
{`// Fetching a message using extracted IDs
const channel = client.channels.cache.get('CHANNEL_ID');
channel.messages.fetch('MESSAGE_ID')
  .then(message => console.log(\`Found message: \${message.content}\`))
  .catch(console.error);`}
          </pre>
          <p>
            Moderators also use extracted message IDs to trace history in audit logs or search database entries. If a user deletes a message, the message ID remains recorded in mod logs, allowing administrators to cross-reference exactly when and where the message was sent using a snowflake converter.
          </p>
          <p>
            Our <strong>Discord Message Link Extractor</strong> operates entirely client-side. The URL parsing is done instantly inside your browser using JavaScript regex, which guarantees that your private server IDs and message URLs are never uploaded to any server or recorded.
          </p>
        </article>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="mb-10 mt-12">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Message Link Extractor FAQ
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
