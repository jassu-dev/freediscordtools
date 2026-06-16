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
// Title: 58 chars  |  Description: 155 chars
export const metadata: Metadata = {
  title: 'Discord Timestamp Generator – All 7 Formats',
  description:
    'Free Discord timestamp generator. Convert any date and time into all 7 Discord timestamp formats instantly. No sign-up. Works in every timezone.',
  keywords: [
    'discord timestamp generator',
    'discord timestamp converter',
    'discord timestamp maker',
    'discord timestamp format',
    'discord timestamp command',
    'discord timestamp countdown',
    'unix timestamp discord',
    'discord time stamp',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Timestamp Generator – Free & Instant',
    description:
      'Convert any date and time into all 7 Discord timestamp formats. Free Discord timestamp maker — no account needed.',
    url: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Timestamp Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Timestamp Generator – Free & Instant',
    description:
      'Convert any date and time into all 7 Discord timestamp formats. Free, instant, no sign-up.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'What is a Discord timestamp generator?',
    answer:
      'A Discord timestamp generator is a tool that converts a date, time, and timezone into the <t:UNIX:FORMAT> syntax that Discord renders as a formatted date or time in every user\'s local timezone.',
  },
  {
    question: 'How do I use the Discord timestamp command?',
    answer:
      'Type or paste <t:UNIX_TIMESTAMP:FORMAT> into any Discord message. Replace UNIX_TIMESTAMP with the seconds-since-epoch value and FORMAT with one of: t, T, d, D, f, F, or R. Use this generator to get the exact syntax in one click.',
  },
  {
    question: 'What are the 7 Discord timestamp formats?',
    answer:
      'The 7 Discord timestamp formats are: :t (short time), :T (long time), :d (short date), :D (long date), :f (short date/time), :F (long date/time with weekday), and :R (relative countdown/elapsed time).',
  },
  {
    question: 'How does the Discord timestamp countdown (:R) work?',
    answer:
      'The :R format renders as a live relative time — "in 2 hours", "3 days ago", "next week" — that updates automatically in the Discord client. It is the best Discord timestamp countdown format for event announcements.',
  },
  {
    question: 'What is a Discord timestamp converter?',
    answer:
      'A Discord timestamp converter takes a human-readable date and time and converts it into a Unix timestamp, then wraps it in Discord\'s <t:UNIX:FORMAT> syntax. This tool is a free Discord timestamp converter that handles any timezone.',
  },
  {
    question: 'Do Discord timestamps adjust for timezones automatically?',
    answer:
      'Yes. Discord timestamps display in each viewer\'s own local timezone automatically. You set the time once; everyone sees it correctly in their own timezone without any manual conversion.',
  },
  {
    question: 'Can I use Discord timestamps in bot messages?',
    answer:
      'Yes. Discord bots can include <t:UNIX:FORMAT> strings in message content, embeds, and components. The Discord client renders the timestamp regardless of whether it was sent by a user or a bot.',
  },
  {
    question: 'What is the Discord timestamp markdown syntax?',
    answer:
      'Discord timestamp markdown syntax is <t:UNIX:FORMAT> — an angle-bracket tag starting with "t:", followed by a Unix timestamp integer, a colon, and a single-letter format code. Example: <t:1735689600:F>.',
  },
  {
    question: 'Why is my Discord timestamp showing the wrong time?',
    answer:
      'The most common cause is selecting the wrong timezone in the generator. The Unix timestamp is calculated based on the timezone you pick. If your timezone is off, the displayed time will be shifted by the UTC offset difference.',
  },
  {
    question: 'Is this Discord timestamp maker free?',
    answer:
      'Yes. This Discord timestamp maker is completely free with no account, no sign-up, and no usage limits. It runs entirely in your browser — no data is sent to any server.',
  },
  {
    question: 'Do Discord timestamps work in embeds and slash commands?',
    answer:
      'Yes. Discord timestamp syntax works in message content, embed descriptions, embed fields, embed footers, and as part of slash command responses. Any field that renders markdown will render timestamps.',
  },
  {
    question: 'What is the maximum Discord timestamp date?',
    answer:
      'Discord renders timestamps up to the maximum 32-bit Unix timestamp value, which corresponds to January 19, 2038. For practical event scheduling, this range covers every real-world use case.',
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
        description="Free Discord timestamp generator and converter. Convert any date and time into all 7 Discord timestamp formats instantly. No account required."
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
            The free <strong className="text-[#1a1d2e]">Discord timestamp converter</strong> — pick a date, time, and timezone to instantly generate all 7 Discord timestamp formats. Copy the syntax and paste it into any Discord message.
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
            How to Use This Discord Timestamp Maker
          </h2>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>Choose a <strong className="text-[#1a1d2e]">date</strong> and <strong className="text-[#1a1d2e]">time</strong> using the inputs above.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span>Select your <strong className="text-[#1a1d2e]">timezone</strong> — the tool auto-detects your local timezone.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span>Click <strong className="text-[#1a1d2e]">Copy</strong> next to the <strong className="text-[#1a1d2e]">Discord timestamp format</strong> you want.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">4</span>
              <span>Paste the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:UNIX:FORMAT&gt;</code> syntax directly into your Discord message.</span>
            </li>
          </ol>
        </section>

        {/* ── What is a Discord timestamp ── */}
        <section aria-labelledby="what-is-heading" className="mb-10">
          <h2 id="what-is-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            What Is a Discord Timestamp?
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">Discord timestamp</strong> is a piece of special markdown syntax —{' '}
              <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:UNIX:FORMAT&gt;</code>{' '}
              — that the Discord client automatically renders as a formatted date or time. Every person who reads the message sees the timestamp converted to their own local timezone, with no manual calculation needed.
            </p>
            <p>
              The <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">UNIX</code> part is a standard Unix timestamp — an integer representing the number of seconds elapsed since January 1, 1970 at 00:00:00 UTC (the Unix epoch). The <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">FORMAT</code> part is a single-letter code that controls how Discord displays the value.
            </p>
            <p>
              This <strong className="text-[#1a1d2e]">Discord timestamp converter</strong> handles the Unix math for you. You provide a human-readable date and time; the tool outputs the exact syntax ready to paste. It also accounts for daylight saving time automatically, so your timestamps are always accurate.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] pt-2">Discord Timestamp Markdown Syntax</h3>
            <p>
              The full <strong className="text-[#1a1d2e]">Discord timestamp markdown syntax</strong> is:
            </p>
            <div className="bg-[#F0F2FF] rounded-lg p-4 font-mono text-sm text-[#5865F2]">
              &lt;t:UNIX_TIMESTAMP:FORMAT_CODE&gt;
            </div>
            <p>
              For example, <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:1735689600:F&gt;</code> renders as{' '}
              <em className="text-[#1a1d2e]">Wednesday, January 1, 2025 12:00 AM</em> for users in UTC, automatically adjusted to each viewer&apos;s local time.
            </p>
          </div>
        </section>

        {/* ── Formats table ── */}
        <section aria-labelledby="formats-heading" className="mb-10">
          <h2 id="formats-heading" className="text-2xl font-bold text-[#1a1d2e] mb-2">
            All 7 Discord Timestamp Formats
          </h2>
          <p className="text-base text-[#5b6282] mb-4">
            Discord supports 7 <strong className="text-[#1a1d2e]">Discord timestamp format</strong> codes. Each produces a different display style:
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold">Code</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold">Format Name</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold hidden sm:table-cell">Example Output</th>
                  <th scope="col" className="text-left px-3 py-2 text-[#1a1d2e] font-semibold hidden md:table-cell">Best Used For</th>
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

        {/* ── Discord timestamp command ── */}
        <section aria-labelledby="command-heading" className="mb-10">
          <h2 id="command-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How the Discord Timestamp Command Works
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              There is no built-in Discord slash command for timestamps — you use the <strong className="text-[#1a1d2e]">Discord timestamp command</strong> syntax directly in your message text. Discord&apos;s message renderer detects the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:…&gt;</code> pattern and replaces it with the formatted time before displaying it to any user.
            </p>
            <p>
              This works in regular messages, bot messages, embed descriptions, embed field values, and embed footers. Any Discord field that renders markdown will render timestamps.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] pt-2">Using Discord Timestamps in Bots</h3>
            <p>
              Developers can include <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">&lt;t:UNIX:FORMAT&gt;</code> strings in any bot response. Compute the Unix timestamp in your bot&apos;s backend (e.g., <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">Math.floor(Date.now() / 1000)</code> in JavaScript) and interpolate it into your message string. No special API calls required.
            </p>
          </div>
        </section>

        {/* Ad: mid content */}
        <div className="flex justify-center mb-10">
          <AdSlot slotId={adsConfig.slots.timestampContentMid} width={728} height={90} />
        </div>

        {/* ── Countdown / relative ── */}
        <section aria-labelledby="countdown-heading" className="mb-10">
          <h2 id="countdown-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Timestamp Countdown: The Relative Format
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              The <strong className="text-[#1a1d2e]">Discord timestamp countdown</strong> format is{' '}
              <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">:R</code>. It renders as a live relative string that Discord updates in real time: <em className="text-[#1a1d2e]">&quot;in 3 days&quot;</em>, <em className="text-[#1a1d2e]">&quot;in 2 hours&quot;</em>, <em className="text-[#1a1d2e]">&quot;5 minutes ago&quot;</em>.
            </p>
            <p>
              Use the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono text-sm">:R</code> format whenever you want readers to feel urgency or awareness of proximity — event countdowns, maintenance windows, deadline reminders, or giveaway end times. Set a timestamp for a future moment and Discord handles the live countdown automatically.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1d2e] pt-2">Common Use Cases for Discord Timestamps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
                { title: 'Gaming Raids & Tournaments',  desc: 'Post event times once — every player in every timezone sees the correct local time.' },
                { title: 'Live Stream Announcements',   desc: 'Use :F for the full date/time and :R for a live countdown to your stream.' },
                { title: 'Server Maintenance Windows',  desc: 'Communicate downtime precisely without timezone confusion.' },
                { title: 'Giveaway & Sale Deadlines',   desc: 'Use :R to show "ends in 4 hours" that counts down live in chat.' },
                { title: 'Bot Slash Commands',           desc: 'Return timestamps in bot responses; Discord renders them for every user.' },
                { title: 'Study Group Scheduling',      desc: 'Coordinate sessions across countries without manual timezone lookup.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-white border border-[#E3E6F0]">
                  <p className="font-semibold text-[#1a1d2e] mb-1 text-base">{item.title}</p>
                  <p className="text-[#5b6282] text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad: above FAQ */}
        <div className="flex justify-center mb-10">
          <AdSlot slotId={adsConfig.slots.timestampAboveFaq} width={728} height={90} />
        </div>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Timestamp Generator – FAQ
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
