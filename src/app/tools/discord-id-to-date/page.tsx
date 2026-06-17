import type { Metadata } from 'next';
import SnowflakeConverter from '@/components/tools/SnowflakeConverter';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Discord ID to Date – Discord Snowflake Converter',
  description:
    'Convert any Discord ID (snowflake) into its exact creation date and time. Find out when a Discord account, server, or channel was created instantly.',
  keywords: [
    'discord id to date',
    'discord snowflake converter',
    'check discord account creation date',
    'discord id lookup',
    'discord snowflake to timestamp',
    'find discord creation date',
    'discord snowflake lookup',
    'discord account age checker',
    'snowflake to date discord',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-id-to-date/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-id-to-date/`,
      'en': `${seoConfig.baseUrl}/tools/discord-id-to-date/`,
    },
  },
  openGraph: {
    title: 'Discord ID to Date – Discord Snowflake Converter',
    description:
      'Instantly convert Discord IDs into creation dates. Our free tool decodes Discord snowflakes to show you the exact age of any account or server.',
    url: `${seoConfig.baseUrl}/tools/discord-id-to-date/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord ID to Date' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord ID to Date – Discord Snowflake Converter',
    description:
      'Ever wondered when a Discord account was made? Use our Snowflake converter to find the exact creation date from any Discord ID.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'What is a Discord Snowflake?',
    answer:
      'A Discord Snowflake is a unique 64-bit integer used as an ID for everything in Discord (users, servers, messages, etc.). It contains a timestamp encoded within it, which represents the exact time the object was created.',
  },
  {
    question: 'How do I find a Discord ID?',
    answer:
      'To find a Discord ID, enable "Developer Mode" in your Discord User Settings > Advanced. Once enabled, you can right-click any user, server, or message and select "Copy User ID" or "Copy Server ID".',
  },
  {
    question: 'How does the Discord ID to Date converter work?',
    answer:
      'The converter takes the 64-bit ID and extracts the first 42 bits. It then adds the Discord Epoch (January 1, 2015) to those bits to calculate the exact milliseconds since 1970, giving you the creation date.',
  },
  {
    question: 'Is it safe to use a Discord ID lookup tool?',
    answer:
      'Yes, it is completely safe. Discord IDs are public information within the app. Our tool simply decodes the mathematical timestamp within the ID and does not access any private account data.',
  },
  {
    question: 'Can I check when a Discord server was created?',
    answer:
      'Yes! By copying the Server ID (Guild ID) and pasting it into our converter, you can see the exact second the Discord server was first initialized.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-id-to-date/`;

export default function DiscordIdToDatePage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord ID to Date Converter"
        description="Decode Discord Snowflakes into human-readable creation dates. Find account and server ages instantly."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord ID to Date', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord ID to Date Converter
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Instantly convert any <strong className="text-[#1a1d2e]">Discord ID to date</strong>. Our <strong className="text-[#1a1d2e]">Discord snowflake converter</strong> decodes IDs to show you exactly when an account, server, or channel was created.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Snowflake Lookup Tool</h2>
          <SnowflakeConverter />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Find the Creation Date of a Discord ID
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              To use our <strong className="text-[#1a1d2e]">discord account age checker</strong>, you first need to get the ID of the object you want to check. Follow these simple steps:
            </p>
            <div className="space-y-6">
              <div className="bg-[#F8F9FF] p-5 rounded-xl border border-[#E3E6F0]">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Step 1: Enable Developer Mode</h3>
                <p>By default, Discord hides IDs. To show them, go to <strong>User Settings</strong> &gt; <strong>Advanced</strong> and toggle on <strong>Developer Mode</strong>. This works on Desktop, Web, and Mobile versions of Discord.</p>
              </div>
              <div className="bg-[#F8F9FF] p-5 rounded-xl border border-[#E3E6F0]">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Step 2: Copy the ID</h3>
                <p>Once developer mode is on, you can right-click any user, server (guild), channel, or message and select <strong>Copy User ID</strong> or <strong>Copy Server ID</strong>. On mobile, long-press the item to find the Copy ID option.</p>
              </div>
              <div className="bg-[#F8F9FF] p-5 rounded-xl border border-[#E3E6F0]">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Step 3: Convert the Snowflake</h3>
                <p>Paste the 17-20 digit number into our <strong className="text-[#1a1d2e]">snowflake to date</strong> converter above. Our tool instantly decodes the timestamp hidden within the ID.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="technical-heading" className="mb-10">
          <h2 id="technical-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            The Science Behind the Discord Snowflake
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">Discord Snowflake</strong> is a 64-bit integer that is unique across all of Discord. It is not just a random number; it is structured to ensure that IDs can be generated in a decentralized way while maintaining chronological order.
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                    <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Bits</th>
                    <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Purpose</th>
                    <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3E6F0]">
                  <tr>
                    <td className="px-4 py-2 font-mono">42 to 63</td>
                    <td className="px-4 py-2 text-[#1a1d2e] font-medium">Timestamp</td>
                    <td className="px-4 py-2">Milliseconds since Discord Epoch (2015-01-01)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">17 to 21</td>
                    <td className="px-4 py-2 text-[#1a1d2e] font-medium">Internal Worker ID</td>
                    <td className="px-4 py-2">Identifies the machine that generated the ID</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">12 to 16</td>
                    <td className="px-4 py-2 text-[#1a1d2e] font-medium">Internal Process ID</td>
                    <td className="px-4 py-2">Identifies the process on the machine</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">0 to 11</td>
                    <td className="px-4 py-2 text-[#1a1d2e] font-medium">Increment</td>
                    <td className="px-4 py-2">For every ID generated on that process, this number increases</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The <strong>Discord Epoch</strong> is set to <code>1420070400000</code> milliseconds (January 1, 2015). By shifting the Snowflake 22 bits to the right and adding the Epoch, we get the exact Unix timestamp of creation. This is the math our <strong className="text-[#1a1d2e]">discord id lookup</strong> tool uses to give you the most accurate results.
            </p>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord ID Lookup FAQ
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
