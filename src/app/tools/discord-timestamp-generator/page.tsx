import type { Metadata } from 'next';
import TimestampGenerator from '@/components/tools/TimestampGenerator';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Discord Timestamp Generator – #1 Free Timestamp Generator for Discord',
  description:
    'The best Discord timestamp generator. Convert any date and time into all 7 Discord timestamp formats instantly. Free timestamp generator for Discord — no sign-up needed.',
  keywords: [
    'discord timestamp generator',
    'timestamp generator discord',
    'timestamp discord generator',
    'discord timestamps generator',
    'discord time stamp generator',
    'discord timestamp',
    'discord timestamp format',
    'unix timestamp discord',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
  },
  openGraph: {
    title: 'Discord Timestamp Generator – Free & Instant',
    description:
      'Generate Discord timestamps instantly. The free timestamp generator for Discord — convert any date and time into all 7 Discord timestamp formats and copy with one click.',
    url: `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Timestamp Generator – Free & Instant',
    description:
      'Generate Discord timestamps instantly. Convert any date and time into all 7 Discord timestamp formats and copy with one click.',
  },
};

const faqItems = [
  {
    question: 'What is a Discord timestamp?',
    answer:
      "A Discord timestamp is a special syntax code in the format <t:UNIX:FORMAT> that Discord renders as a formatted date or time. It automatically displays in each viewer's local timezone.",
  },
  {
    question: 'How do I use a Discord timestamp?',
    answer:
      'Use the generator above to pick a date, time, and timezone. Copy the generated syntax and paste it directly into any Discord message. Discord will render it as a formatted time.',
  },
  {
    question: 'What are the 7 Discord timestamp formats?',
    answer:
      'The 7 formats are: t (short time), T (long time), d (short date), D (long date), f (short date/time), F (long date/time), and R (relative time).',
  },
  {
    question: 'Do Discord timestamps adjust for different timezones?',
    answer:
      "Yes. Discord timestamps automatically display in each viewer's local timezone. You set the time once and every person who reads the message sees it in their own timezone.",
  },
  {
    question: 'What is a Unix timestamp?',
    answer:
      'A Unix timestamp is an integer representing the number of seconds elapsed since January 1, 1970 00:00:00 UTC (the Unix epoch). Discord uses Unix timestamps as the basis for its timestamp system.',
  },
  {
    question: 'How does the relative time format (R) work?',
    answer:
      'The R format displays a human-readable relative time like "in 2 hours", "3 days ago", or "last week". It updates in real time as time passes, making it ideal for countdown or event announcements.',
  },
  {
    question: 'Can I use Discord timestamps in bot messages?',
    answer:
      'Yes. Discord bots can send messages containing timestamp syntax just like regular users. The bot simply includes the <t:UNIX:FORMAT> string in the message content.',
  },
  {
    question: 'Why is my Discord timestamp showing the wrong time?',
    answer:
      'Check that you selected the correct timezone in the generator. The timestamp is calculated from the date and time you enter in the selected timezone. If your timezone is wrong, the resulting Unix timestamp will be offset.',
  },
  {
    question: 'What is the maximum Unix timestamp Discord supports?',
    answer:
      'Discord supports standard 32-bit Unix timestamps, which covers dates up to January 19, 2038. For practical event scheduling, this is more than sufficient.',
  },
  {
    question: 'Can I use negative Unix timestamps for dates before 1970?',
    answer:
      "Discord's timestamp renderer handles negative Unix timestamps, which correspond to dates before January 1, 1970. However, the practical use case for historical dates in Discord messages is limited.",
  },
  {
    question: 'Do Discord timestamps work in embeds?',
    answer:
      'Yes. Discord timestamp syntax works in both regular messages and in embed fields, descriptions, and other embed properties that support markdown.',
  },
  {
    question: 'Is there a limit on how many timestamps I can use in one message?',
    answer:
      'Discord does not impose a specific limit on the number of timestamp codes in a single message, though the overall message length limit of 2,000 characters applies.',
  },
  {
    question: 'Why does the preview show a different time than expected?',
    answer:
      "The preview shows the time as it would appear to someone in your selected timezone. The actual Discord render may differ slightly based on the viewer's own timezone and locale settings.",
  },
  {
    question: 'Do Discord timestamps work on mobile?',
    answer:
      "Yes. Discord timestamps work identically on the Discord mobile app (iOS and Android) and the desktop application. The timezone conversion is handled by your device's timezone settings.",
  },
  {
    question: 'Can I edit a timestamp after posting it?',
    answer:
      'Yes. You can edit a Discord message to change or update timestamp codes just like any other message content. The rendered time will update to reflect the new timestamp.',
  },
  {
    question: 'What happens if Discord cannot parse my timestamp?',
    answer:
      'If Discord receives an invalid timestamp syntax, it will display the raw text (e.g., <t:invalid:t>) rather than a formatted time. Always use a generator to ensure the syntax is correct.',
  },
  {
    question: 'Is this tool free to use?',
    answer:
      'Yes, the Discord Timestamp Generator on FreeDiscordTools is completely free. No account is required, and there are no usage limits.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-timestamp-generator/`;

export default function DiscordTimestampGeneratorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Timestamp Generator"
        description="Free Discord timestamp generator. Convert any date and time into all 7 Discord timestamps formats instantly and copy them with one click. The best timestamp generator for Discord."
        url={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: seoConfig.baseUrl },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Timestamp Generator', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F2F3F5] mb-4">
            Discord Timestamp Generator
          </h1>
          <p className="text-xl text-[#B9BBBE]">
            The free timestamp generator for Discord. Convert any date and time into all 7 Discord
            timestamp formats and copy the syntax with one click — works for every timezone.
          </p>
        </section>

        {/* Ad: Below title */}
        <div className="flex justify-center mb-8">
          <AdSlot slotId={adsConfig.slots.timestampBelowTitle} width={728} height={90} />
        </div>

        {/* Tool Island */}
        <section aria-label="Discord Timestamp Generator tool" className="mb-10">
          <TimestampGenerator />
        </section>

        {/* Ad: Below tool */}
        <div className="flex justify-center mb-12">
          <AdSlot slotId={adsConfig.slots.timestampBelowTool} width={728} height={250} />
        </div>

        {/* What Is A Discord Timestamp? */}
        <section aria-labelledby="what-is-heading" className="mb-12">
          <h2 id="what-is-heading" className="text-3xl font-bold text-[#F2F3F5] mb-6">
            What Is A Discord Timestamp? (And Why Use a Timestamp Generator for Discord?)
          </h2>
          <div className="text-[#B9BBBE] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#F2F3F5]">Discord timestamp</strong> is a special piece of
              text that Discord automatically converts into a formatted date, time, or relative time
              display when a message is rendered. This <strong className="text-[#F2F3F5]">Discord
              timestamp generator</strong> creates the exact syntax you need:{' '}
              <code className="bg-[#2C2F33] px-1 rounded text-[#5865F2] font-mono">
                &lt;t:UNIX:FORMAT&gt;
              </code>{' '}
              — where UNIX is a Unix timestamp (seconds since January 1, 1970 UTC) and FORMAT is a
              single letter code that controls how Discord displays the date and time.
            </p>
            <p>
              The reason every Discord user needs a <strong className="text-[#F2F3F5]">timestamp
              generator for Discord</strong> is timezone awareness. Instead of typing
              &quot;3:00 PM EST&quot; and making every reader manually convert, a Discord timestamp
              automatically displays in each viewer&apos;s local timezone. Post a timestamp for
              3:00 PM in New York and a reader in London sees 8:00 PM, while a reader in Tokyo sees
              5:00 AM the next day — automatically, with zero effort.
            </p>
            <p>
              This automatic timezone conversion makes the <strong className="text-[#F2F3F5]">Discord
              timestamps generator</strong> invaluable for any community with global members. Gaming
              guilds scheduling raid times, study groups planning sessions, development teams
              coordinating standups, content creators announcing live streams, event organizers
              running online conferences — all benefit enormously from Discord&apos;s built-in
              timestamp system.
            </p>
            <p>
              Discord timestamps are based on the Unix timestamp standard — a universal way to
              represent moments in time as the number of seconds elapsed since midnight on
              January 1, 1970 (the Unix epoch). Because Unix timestamps are timezone-agnostic, they
              represent an absolute moment that every device can translate correctly into local time.
            </p>
            <p>
              To use a Discord timestamp in your message, include the{' '}
              <code className="bg-[#2C2F33] px-1 rounded text-[#5865F2] font-mono">
                &lt;t:UNIX:FORMAT&gt;
              </code>{' '}
              syntax directly in your text. Discord&apos;s renderer replaces it with the formatted
              display automatically. The raw syntax is never visible to readers — they always see
              the rendered time. If you hover over the rendered timestamp in most Discord clients,
              you can see the underlying Unix value.
            </p>
            <p>
              Computing the correct Unix timestamp manually requires knowing the UTC offset for your
              timezone at a specific date and time — and UTC offsets change with daylight saving
              time. That&apos;s exactly what this <strong className="text-[#F2F3F5]">timestamp
              discord generator</strong> handles for you. Select the date, time, and timezone, and
              it instantly computes the correct Unix timestamp and generates the syntax for all
              seven Discord format codes.
            </p>
            <p>
              The generator also shows a live preview of how each format appears to Discord users in
              the selected timezone, so you can pick the right format before copying. Use short or
              long time formats to display just the time, date formats to emphasize the calendar
              date, or the relative format to show a live countdown like &quot;in 2 hours&quot; that
              updates in real time.
            </p>
            <p>
              Whether you call it a <em>discord timestamp generator</em>, a{' '}
              <em>timestamp generator discord</em>, or a <em>timestamp discord generator</em> —
              this tool does exactly one thing: turns any date and time into the Discord syntax you
              can paste directly into your messages, bots, or embeds.
            </p>
          </div>
        </section>

        {/* Formats Reference Table */}
        <section aria-labelledby="formats-heading" className="mb-12">
          <h2 id="formats-heading" className="text-3xl font-bold text-[#F2F3F5] mb-6">
            All Discord Timestamp Formats — Complete Reference
          </h2>
          <p className="text-[#B9BBBE] mb-4">
            This Discord timestamps generator supports all 7 official format codes. Here is every
            Discord timestamp format with its code, name, syntax, and example output:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2C2F33] border-b border-[#40444B]">
                  <th className="text-left px-4 py-3 text-[#F2F3F5] font-semibold text-sm">
                    Code
                  </th>
                  <th className="text-left px-4 py-3 text-[#F2F3F5] font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 text-[#F2F3F5] font-semibold text-sm">
                    Syntax
                  </th>
                  <th className="text-left px-4 py-3 text-[#F2F3F5] font-semibold text-sm">
                    Example Output
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: 't', name: 'Short Time', syntax: '<t:1234567890:t>', example: '3:04 PM' },
                  {
                    code: 'T',
                    name: 'Long Time',
                    syntax: '<t:1234567890:T>',
                    example: '3:04:05 PM',
                  },
                  {
                    code: 'd',
                    name: 'Short Date',
                    syntax: '<t:1234567890:d>',
                    example: '02/13/2009',
                  },
                  {
                    code: 'D',
                    name: 'Long Date',
                    syntax: '<t:1234567890:D>',
                    example: 'February 13, 2009',
                  },
                  {
                    code: 'f',
                    name: 'Short Date/Time',
                    syntax: '<t:1234567890:f>',
                    example: 'February 13, 2009 3:04 PM',
                  },
                  {
                    code: 'F',
                    name: 'Long Date/Time',
                    syntax: '<t:1234567890:F>',
                    example: 'Friday, February 13, 2009 3:04 PM',
                  },
                  {
                    code: 'R',
                    name: 'Relative Time',
                    syntax: '<t:1234567890:R>',
                    example: '16 years ago',
                  },
                ].map((row) => (
                  <tr key={row.code} className="border-b border-[#40444B] hover:bg-[#2C2F33]">
                    <td className="px-4 py-3 font-mono text-[#5865F2] font-bold">{row.code}</td>
                    <td className="px-4 py-3 text-[#F2F3F5] text-sm">{row.name}</td>
                    <td className="px-4 py-3 font-mono text-[#B9BBBE] text-xs">{row.syntax}</td>
                    <td className="px-4 py-3 text-[#B9BBBE] text-sm">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How To Use */}
        <section aria-labelledby="how-to-use-heading" className="mb-12">
          <h2 id="how-to-use-heading" className="text-3xl font-bold text-[#F2F3F5] mb-6">
            How To Use This Discord Timestamp Generator
          </h2>
          <ol className="space-y-4 text-[#B9BBBE]">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <strong className="text-[#F2F3F5]">Select a date</strong>
                <p className="mt-1">
                  Use the date picker to choose the date for your event or announcement. The
                  generator initializes to today&apos;s date automatically.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <strong className="text-[#F2F3F5]">Set a time</strong>
                <p className="mt-1">
                  Enter the time using the time input. Use the time in your own timezone — you will
                  select the timezone in the next step.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <strong className="text-[#F2F3F5]">Choose a timezone</strong>
                <p className="mt-1">
                  Select your timezone from the dropdown. The generator auto-detects your local
                  timezone, but you can change it to schedule events in any timezone worldwide.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-sm">
                4
              </span>
              <div>
                <strong className="text-[#F2F3F5]">Review the outputs</strong>
                <p className="mt-1">
                  The generator instantly displays all 7 Discord timestamp formats with the correct
                  syntax and a preview of how each will appear.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white flex items-center justify-center font-bold text-sm">
                5
              </span>
              <div>
                <strong className="text-[#F2F3F5]">Copy and paste</strong>
                <p className="mt-1">
                  Click the Copy button next to the format you want. Then paste the copied syntax
                  directly into your Discord message.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Examples */}
        <section aria-labelledby="examples-heading" className="mb-12">
          <h2 id="examples-heading" className="text-3xl font-bold text-[#F2F3F5] mb-6">
            Examples
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#2C2F33] border border-[#40444B]">
              <h3 className="text-lg font-semibold text-[#F2F3F5] mb-2">
                Gaming Tournament Announcement
              </h3>
              <p className="text-[#B9BBBE] text-sm mb-3">
                Announcing a tournament for an international gaming community where players are in
                multiple time zones.
              </p>
              <p className="text-[#B9BBBE] text-sm">
                Message: &quot;The finals begin &lt;t:1735689600:F&gt; — see you there!&quot;
                <br />
                Each player sees the date and time in their own timezone, so no one misses the event
                due to timezone confusion.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#2C2F33] border border-[#40444B]">
              <h3 className="text-lg font-semibold text-[#F2F3F5] mb-2">Event Countdown</h3>
              <p className="text-[#B9BBBE] text-sm mb-3">
                Building excitement for an upcoming product launch or community event with a live
                countdown.
              </p>
              <p className="text-[#B9BBBE] text-sm">
                Message: &quot;Our new tool launches &lt;t:1735689600:R&gt;! Get ready.&quot;
                <br />
                The relative format shows &quot;in 3 days&quot;, &quot;in 2 hours&quot;, etc. and
                updates in real time as the launch approaches.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#2C2F33] border border-[#40444B]">
              <h3 className="text-lg font-semibold text-[#F2F3F5] mb-2">Study Group Schedule</h3>
              <p className="text-[#B9BBBE] text-sm mb-3">
                Coordinating a recurring study session for a Discord server with students in
                different countries.
              </p>
              <p className="text-[#B9BBBE] text-sm">
                Message: &quot;Weekly session: &lt;t:1735689600:t&gt; every Sunday. Add it to your
                calendar!&quot;
                <br />
                Using the short time format keeps the message concise while still showing the
                correct local time to each student.
              </p>
            </div>
          </div>
        </section>

        {/* Ad: Mid content */}
        <div className="flex justify-center mb-12">
          <AdSlot slotId={adsConfig.slots.timestampContentMid} width={728} height={90} />
        </div>

        {/* Ad: Above FAQ */}
        <div className="flex justify-center mb-12">
          <AdSlot slotId={adsConfig.slots.timestampAboveFaq} width={728} height={90} />
        </div>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#F2F3F5] mb-6">
            Discord Timestamp Generator – Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="p-4 rounded-lg bg-[#2C2F33] border border-[#40444B]"
              >
                <summary className="font-medium text-[#F2F3F5] cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-[#5865F2] ml-2 shrink-0" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#B9BBBE] text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
