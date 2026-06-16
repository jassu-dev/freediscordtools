import type { Metadata } from 'next';
import TimestampGenerator from '@/components/tools/TimestampGenerator';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Discord Timestamp Generator – All 7 Formats',
  description:
    'Free Discord timestamp generator and unix timestamp converter. Pick a date or use our unix time converter to generate all 7 Discord timestamp formats instantly.',
  keywords: [
    'discord timestamp generator',
    'discord unix timestamp',
    'discord timestamp',
    'discord timestamps',
    'timestamp unix',
    'unix timestamp conversion',
    'unix timestamp converter',
    'unix time converter',
    'discord timestamp converter',
    'discord timestamp maker',
    'discord timestamp format',
    'unix timestamp discord',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Timestamp Generator – All 7 Formats',
    description:
      'Convert any date and time into all 7 Discord timestamp formats using our Unix timestamp converter. No account needed.',
    url: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Timestamp Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Timestamp Generator – All 7 Formats',
    description:
      'Convert Unix time into Discord timestamps. The fastest Discord Unix timestamp converter available online.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'What is a Discord unix timestamp?',
    answer:
      'A Discord unix timestamp is a numerical value representing the number of seconds since January 1, 1970 (UTC), wrapped in a specific markdown syntax <t:UNIX:FORMAT>. This allows Discord to display the date and time in each user\'s local timezone.',
  },
  {
    question: 'How do I use a unix timestamp converter for Discord?',
    answer:
      'To use our unix timestamp converter, simply select your desired date and time. The tool will instantly generate the Discord-ready unix timestamp code that you can copy and paste into any message.',
  },
  {
    question: 'How do I get a unix timestamp for Discord?',
    answer:
      'You can get a unix timestamp by using this generator. Pick your event time, and we will provide the exact <t:1234567890:F> code needed for Discord to render the time correctly for everyone.',
  },
  {
    question: 'What is unix timestamp conversion in Discord?',
    answer:
      'Unix timestamp conversion in Discord refers to the process where the Discord app takes a raw unix time value and converts it into a human-readable format based on the individual user\'s local system clock.',
  },
  {
    question: 'Why should I use a discord unix timestamp?',
    answer:
      'Using a discord unix timestamp ensures that your global community sees the exact same moment in their own timezone. It eliminates the need for "EST/PST/GMT" labels and prevents confusion for international users.',
  },
  {
    question: 'How does the Discord timestamp countdown (:R) work?',
    answer:
      'The :R format renders as a live relative time — "in 2 hours", "3 days ago" — that updates automatically. It is the best way to handle discord timestamps for event reminders.',
  },
  {
    question: 'Can I use Discord timestamps in bot messages?',
    answer:
      'Yes. Discord bots can include <t:UNIX:FORMAT> strings in message content and embeds. Our tool is often used by developers as a reference for unix time converter formats.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`;

// ─── Format reference rows ────────────────────────────────────────────────────
const FORMAT_ROWS = [
  { code: 't', syntax: '<t:1749865320:t>', name: 'Short Time',          example: '1:42 AM',                         use: 'Event start times' },
  { code: 'T', syntax: '<t:1749865320:T>', name: 'Long Time',           example: '1:42:00 AM',                      use: 'Precise scheduling' },
  { code: 'd', syntax: '<t:1749865320:d>', name: 'Short Date',          example: '06/14/2026',                      use: 'Compact date display' },
  { code: 'D', syntax: '<t:1749865320:D>', name: 'Long Date',           example: 'June 14, 2026',                   use: 'Readable date display' },
  { code: 'f', syntax: '<t:1749865320:f>', name: 'Short Date/Time',     example: 'June 14, 2026 1:42 AM',           use: 'General announcements' },
  { code: 'F', syntax: '<t:1749865320:F>', name: 'Long Date/Time',      example: 'Sunday, June 14, 2026 1:42 AM',   use: 'Formal event listings' },
  { code: 'R', syntax: '<t:1749865320:R>', name: 'Relative (Countdown)', example: 'in 2 hours',                    use: 'Countdown timers' },
];

export default function DiscordTimestampGeneratorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Timestamp Generator"
        description="Free Discord timestamp generator and unix timestamp converter. Convert any date into Discord timestamps instantly. No account required."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Timestamp Generator', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* ── H1 ── */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Timestamp Generator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            The ultimate <strong className="text-[#1a1d2e]">Discord unix timestamp</strong> converter. Convert unix time, pick a date, and generate all 7 Discord formats instantly. Perfect for <strong className="text-[#1a1d2e]">unix timestamp conversion</strong> for your global community.
          </p>
        </header>

        {/* Ad: leaderboard below H1 */}
        <div className="flex justify-center mb-6">
          <AdSlot slotId={adsConfig.slots.timestampBelowTitle} width={728} height={90} />
        </div>

        {/* ── Tool ── */}
        <section aria-labelledby="tool-heading" className="mb-6">
          <h2 id="tool-heading" className="sr-only">Discord Timestamp Maker</h2>
          <TimestampGenerator />
        </section>

        {/* Ad: rectangle below tool */}
        <div className="flex justify-center mb-10">
          <AdSlot slotId={adsConfig.slots.timestampBelowTool} width={728} height={250} />
        </div>

        {/* ── How to use ── */}
        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use the Discord Timestamp Maker
          </h2>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>Pick a date and time — our <strong className="text-[#1a1d2e]">unix time converter</strong> handles the rest.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span>Select your timezone to ensure accurate <strong className="text-[#1a1d2e]">unix timestamp conversion</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span>Click Copy for the <strong className="text-[#1a1d2e]">discord timestamps</strong> format you need.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">4</span>
              <span>Paste it into Discord to see the live <strong className="text-[#1a1d2e]">timestamp unix</strong> effect!</span>
            </li>
          </ol>
        </section>

        {/* ── What is a Discord unix timestamp ── */}
        <section aria-labelledby="what-is-heading" className="mb-10">
          <h2 id="what-is-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            What Is a Discord Unix Timestamp?
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">discord unix timestamp</strong> is a piece of markdown code that tells Discord to display a specific time in every user&apos;s local clock. It relies on <strong className="text-[#1a1d2e]">unix time</strong>, which is a system for describing a point in time as the number of seconds that have passed since the Unix Epoch.
            </p>
            <p>
              By using a <strong className="text-[#1a1d2e]">unix timestamp converter</strong>, you can turn a human-readable date into a string like <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:1735689600:F&gt;</code>. Discord then performs the <strong className="text-[#1a1d2e]">unix timestamp conversion</strong> on its end to show the correct time for everyone in your server.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] pt-2">Why Use a Unix Time Converter?</h3>
            <p>
              Manually calculating <strong className="text-[#1a1d2e]">timestamp unix</strong> values is difficult. Our tool serves as a reliable <strong className="text-[#1a1d2e]">unix time converter</strong> specifically designed for the Discord community. Whether you are a server owner or a developer, getting the right <strong className="text-[#1a1d2e]">discord timestamps</strong> has never been easier.
            </p>
            <div className="bg-[#F0F2FF] rounded-lg p-4 font-mono text-sm text-[#5865F2]">
              &lt;t:UNIX_TIMESTAMP:FORMAT_CODE&gt;
            </div>
          </div>
        </section>

        {/* ── Formats table ── */}
        <section aria-labelledby="formats-heading" className="mb-10">
          <h2 id="formats-heading" className="text-2xl font-bold text-[#1a1d2e] mb-2">
            All Discord Timestamp Formats
          </h2>
          <p className="text-base text-[#5b6282] mb-4">
            Our <strong className="text-[#1a1d2e]">unix timestamp converter</strong> supports all 7 Discord display styles:
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold">Code</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold">Format</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold hidden sm:table-cell">Example</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold hidden md:table-cell">Usage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#E3E6F0]">
                {FORMAT_ROWS.map((row) => (
                  <tr key={row.code}>
                    <td className="px-3 py-2 font-mono text-[#5865F2] font-bold">{row.code}</td>
                    <td className="px-3 py-2 text-[#1a1d2e] font-medium">{row.name}</td>
                    <td className="px-3 py-2 text-[#5b6282] hidden sm:table-cell">{row.example}</td>
                    <td className="px-3 py-2 text-[#5b6282] hidden md:table-cell">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SEO Section 2 ── */}
        <section aria-labelledby="command-heading" className="mb-10">
          <h2 id="command-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            The Best Discord Unix Timestamp Tool
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              When it comes to <strong className="text-[#1a1d2e]">discord timestamps</strong>, accuracy is key. Our generator is the most popular <strong className="text-[#1a1d2e]">unix timestamp converter</strong> for Discord users because it handles daylight savings and timezone offsets perfectly.
            </p>
            <p>
              If you are looking for a <strong className="text-[#1a1d2e]">unix time converter</strong> that works on both mobile and desktop, you are in the right place. We provide the raw <strong className="text-[#1a1d2e]">timestamp unix</strong> syntax that works everywhere Discord is used.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] pt-2">Advanced Unix Timestamp Conversion</h3>
            <p>
              Developers can use our tool to verify their own <strong className="text-[#1a1d2e]">unix timestamp conversion</strong> logic. Since Discord uses seconds instead of milliseconds, our <strong className="text-[#1a1d2e]">unix time converter</strong> ensures you always get the 10-digit integer required for Discord tags.
            </p>
          </div>
        </section>

        {/* Ad: mid content */}
        <div className="flex justify-center mb-10">
          <AdSlot slotId={adsConfig.slots.timestampContentMid} width={728} height={90} />
        </div>

        {/* Ad: above FAQ */}
        <div className="flex justify-center mb-10">
          <AdSlot slotId={adsConfig.slots.timestampAboveFaq} width={728} height={90} />
        </div>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Unix Timestamp FAQ
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
