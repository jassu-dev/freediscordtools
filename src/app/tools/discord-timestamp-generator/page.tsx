import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import TimestampGenerator from '@/components/tools/TimestampGenerator';
import PageSchema from '@/components/seo/PageSchema';
import { seoConfig } from '@/config/seo';
import { buildFaqJsonLd } from '@/lib/jsonld';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'How do I use a discord timestamp generator?',
    answer:
      'Using a discord timestamp generator or timestamp discord generator is simple: pick your date and time, choose a format (like relative or short time), and copy the generated code. Paste that code into a Discord message, and it will automatically show the correct time to every user in their own timezone.',
  },
  {
    question: 'How to use unix timestamp discord correctly?',
    answer:
      'To use a unix timestamp on Discord or unix time discord, you must wrap the 10-digit unix integer in the specific syntax <t:1234567890:F>. Replace 1234567890 with your timestamp and "F" with your desired format code. Our tool automates this process entirely.',
  },
  {
    question: 'What is a discord time calculator?',
    answer:
      'A discord time calculator is a tool that converts dates and times into Discord-compatible timestamps. Our tool works as a perfect discord time calculator, time converter for discord, discord timestamp maker, and discord time stamp generator!',
  },
  {
    question: 'What are discord time stamps used for?',
    answer:
      'Discord time stamps are primarily used for scheduling events, tournaments, or announcements in global servers. They ensure everyone sees the "starting time" in their local clock, avoiding timezone confusion.',
  },
  {
    question: 'How to get discord timestamps for my server?',
    answer:
      'You can generate accurate discord timestamps using our free online tool. It converts any local date and time into a universal unix integer that Discord understands.',
  },
  {
    question: 'Why is my unix timestamp discord not working?',
    answer:
      'Ensure you are using seconds (10 digits) rather than milliseconds (13 digits). Also, verify the syntax: it must start with "<t:" and end with ">". Our generator always provides the correct syntax.',
  },
  {
    question: 'How to use unix timestamp discord for a countdown?',
    answer:
      'To create a live countdown (e.g., "in 5 minutes"), use the ":R" format code at the end of your timestamp: <t:TIMESTAMP:R>. This is one of the most popular discord timestamps formats.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Timestamp Generator – All 7 Formats & Time Calculator 2026',
  description:
    'The best free Discord timestamp generator, timestamp discord generator, and discord time calculator. Learn how to use unix timestamp discord, unix time discord, and convert dates into all 7 discord time stamps with our discord timestamp maker and time converter for discord.',
  keywords: [
    'discord timestamp generator',
    'how to use unix timestamp discord',
    'discord timestamps',
    'discord time stamps',
    'discord unix timestamp',
    'unix timestamp discord',
    'discord timestamp converter',
    'discord timestamp maker',
    'discord timestamp format',
    'unix timestamp converter',
    'unix time converter',
    'timestamp discord generator',
    'unix time discord',
    'discord time calculator',
    'discord time stamp generator',
    'time converter for discord',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Timestamp Generator: #1 Unix Time Converter',
    description:
      'The fastest way to generate Discord timestamps. Convert any date and time into all 7 Discord time stamps formats instantly. No account needed.',
    url: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Timestamp Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Timestamp Generator: #1 Unix Time Converter',
    description:
      'Learn how to use unix timestamp discord and generate discord timestamps for your server announcements.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────


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
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Discord Timestamp Generator",
          description: "Free Discord timestamp generator and unix timestamp converter. Convert any date into Discord timestamps instantly. No account required.",
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Timestamp Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* ── H1 ── */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Timestamp Generator & Time Calculator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            The ultimate <strong className="text-[#1a1d2e]">Discord unix timestamp</strong> converter, timestamp discord generator, and discord time calculator. Convert unix time discord, pick a date, and generate all 7 Discord formats with our discord timestamp maker and discord time stamp generator. Perfect time converter for discord for your global community.
          </p>
        </header>

        {/* ── Tool ── */}
        <section aria-labelledby="tool-heading" className="mb-6">
          <h2 id="tool-heading" className="sr-only">Discord Timestamp Maker</h2>
          <TimestampGenerator />
        </section>

        {/* ── How to use ── */}
        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use Unix Timestamp Discord & Generate Discord Time Stamps
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 mb-6 leading-relaxed">
            <p>
              Learning <strong>how to use unix timestamp discord</strong> is essential for anyone who wants to post time-sensitive information that automatically adjusts to every viewer&apos;s local clock. <strong>Discord time stamps</strong> are not just static text; they are dynamic elements that improve server communication.
            </p>
          </div>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span><strong>Pick your moment:</strong> Select the exact date and time you want to share. Our <strong>discord timestamp generator</strong> handles the timezone conversion.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span><strong>Choose Format:</strong> Decide how you want the <strong>discord time stamps</strong> to appear (e.g., just the date, relative countdown, or full timestamp).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span><strong>Copy Code:</strong> Click the copy button to get the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">&lt;t:UNIX:F&gt;</code> syntax.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">4</span>
              <span><strong>Paste in Chat:</strong> Simply paste the code into your Discord message. Everyone will now see your <strong>discord timestamps</strong> in their own local time!</span>
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
            <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm">
              Want to learn more about scheduling? Check out our <a href="/blog/how-to-use-discord-timestamps/" className="text-[#5865F2] font-bold hover:underline">Ultimate Guide to Discord Timestamps</a>.
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

              <AuthorTrustBox />
      </div>
    </>
  );
}
