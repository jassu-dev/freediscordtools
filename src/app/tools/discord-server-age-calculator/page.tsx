import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';
import DiscordServerAgeCalculator from '@/components/tools/DiscordServerAgeCalculator';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'How do I check how old a Discord server is?',
    answer:
      'To check how old a Discord server is, enable Developer Mode in Discord (User Settings → Advanced → Developer Mode), then right-click the server name in your sidebar and select "Copy Server ID". Paste that ID into our Discord server age calculator to instantly see the creation date and exact server age.',
  },
  {
    question: 'How old is my Discord server?',
    answer:
      'Your Discord server age is calculated by decoding the timestamp hidden inside your Server ID (also called a Snowflake ID). Every Discord server has a unique ID containing the exact millisecond it was created. Our free server age calculator decodes this and shows the years, months, and days since your server was founded.',
  },
  {
    question: 'What is a Discord Server ID?',
    answer:
      'A Discord Server ID (also called a Guild ID or Snowflake) is a unique 17–20 digit number assigned to every Discord server. It is not just a random number — the first 42 bits encode the creation timestamp, which is how our Discord server age checker works.',
  },
  {
    question: 'Can I check when a Discord account was created?',
    answer:
      'Yes! Our tool works for any Discord ID — not just servers. You can paste a User ID, Channel ID, Role ID, or Message ID to find out when that entity was created. Discord accounts created in 2015 are especially rare and badge-worthy.',
  },
  {
    question: 'Is this Discord server age calculator free?',
    answer:
      'Absolutely. Our Discord server age calculator is 100% free, requires no account, and runs entirely in your browser. Your ID data is never sent to a remote server — privacy is guaranteed.',
  },
  {
    question: 'What does the milestone badge mean?',
    answer:
      'Based on how old your server is, we award a milestone badge: Brand New (< 1 month), Growing (6+ months), One Year (1+ year), Established (2+ years), Veteran (3+ years), and Legendary (5+ years). It\'s a fun way to see your server\'s seniority at a glance.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Server Age Calculator — How Old Is My Discord Server?',
  description:
    'Free Discord server age calculator. Paste any Discord Server ID and instantly find out how old your server is, when it was created, and earn a milestone badge. Works for user IDs too.',
  keywords: [
    'discord server age calculator',
    'how old is my discord server',
    'discord server creation date',
    'discord server age checker',
    'discord server age',
    'check discord server age',
    'discord server age tool',
    'how to check discord server creation date',
    'discord guild age',
    'discord server birthday',
    'how old is a discord server',
    'when was my discord server created',
    'discord server id age',
    'discord snowflake age calculator',
    'how old is my discord account',
    'discord account age checker',
    'discord id creation date',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-server-age-calculator/`,
  },
  openGraph: {
    title: 'Discord Server Age Calculator — How Old Is My Discord Server?',
    description:
      'Find out exactly how old your Discord server is. Paste your Server ID and get the creation date, age in years/months/days, and a fun milestone badge.',
    url: `${seoConfig.baseUrl}/tools/discord-server-age-calculator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Server Age Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Server Age Calculator — How Old Is My Discord Server?',
    description:
      'Free tool to check how old any Discord server or account is. Paste the server ID and get the creation date, age, and milestone badge instantly.',
    site: seoConfig.twitterHandle,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-server-age-calculator/`;

export default function DiscordServerAgeCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Server Age Calculator"
        description="Free Discord server age calculator that decodes your Server ID to reveal the creation date, exact age in years/months/days, and milestone badges."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Server Age Calculator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Server Age Calculator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Wondering <strong>how old is my Discord server</strong>? Paste any <strong>Discord Server ID</strong> into our free <strong>Discord server age calculator</strong> and instantly find out the creation date, exact age in years, months and days, and unlock a fun milestone badge.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Server Age Calculator Tool</h2>
          <DiscordServerAgeCalculator />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Find Your Discord Server Age
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Finding out <strong>how old your Discord server is</strong> takes less than 30 seconds with our <strong>Discord server age checker</strong>. Follow these three steps:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Enable Developer Mode', body: 'Go to Discord User Settings → Advanced → toggle on Developer Mode. This unlocks the ability to copy IDs from any Discord entity.' },
                { step: '2', title: 'Copy Your Server ID', body: 'Right-click the server name in your Discord sidebar and select "Copy Server ID". On mobile, long-press the server icon and tap "Copy ID".' },
                { step: '3', title: 'Paste into the Calculator', body: 'Paste the 17–20 digit number into our Discord server age calculator above and click "Calculate Age". Your server creation date and age appear instantly.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 bg-[#F8F9FF] border border-[#E3E6F0] rounded-xl p-5">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#5865F2] text-white font-black text-sm flex items-center justify-center shadow-md shadow-[#5865F2]/20">
                    {step}
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1d2e] mb-1">{title}</p>
                    <p className="text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-[#E3E6F0] mb-10" />

        <article className="prose prose-lg max-w-3xl mx-auto text-[#5b6282] space-y-6 mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            Why Check Your Discord Server&apos;s Age?
          </h2>
          <p>
            Knowing <strong>how old your Discord server is</strong> matters more than you might think. Server age is often used as a trust signal — many communities require that members have accounts or servers older than a certain threshold to filter out bot accounts and low-quality users. If you are running a community, knowing your <strong>Discord server creation date</strong> helps you plan anniversary events, milestones, and giveaways.
          </p>
          <p>
            Our <strong>Discord server age calculator</strong> works by extracting the creation timestamp from the Server ID. Discord uses a system called <strong>Snowflake IDs</strong> — 64-bit integers where the first 42 bits represent the milliseconds since the Discord Epoch (January 1, 2015). This design means every single Discord entity (server, user, channel, message, role) has its exact creation time mathematically encoded in its ID.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Discord Server Age vs Account Age</h3>
          <p>
            While our tool is called a <strong>Discord server age calculator</strong>, it works equally well for <strong>Discord account age</strong>. Simply copy a User ID instead of a Server ID and the same calculation applies. User IDs are particularly useful for verifying how long a user has been on Discord — helpful for moderation and trust-level systems in larger communities.
          </p>
          <p>
            Many Discord moderation bots (such as MEE6, Dyno, and Carl-bot) let you set a minimum account age requirement before users can join or post. By knowing a user&apos;s account creation date from their ID, you can manually verify this too. Our <strong>Discord account age checker</strong> is a fast, no-bot alternative for manual moderation checks.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Discord Server Age Milestone Table</h3>
          <p>Here is a quick reference for all the milestone badges our tool awards:</p>
          <div className="overflow-x-auto rounded-xl border border-[#E3E6F0] not-prose">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th className="text-left px-4 py-2.5 text-[#1a1d2e] font-bold">Badge</th>
                  <th className="text-left px-4 py-2.5 text-[#1a1d2e] font-bold">Server Age</th>
                  <th className="text-left px-4 py-2.5 text-[#1a1d2e] font-bold">Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6F0]">
                {[
                  { badge: '✨ Brand New', age: '0–30 days', note: 'Just getting started! Great time to set up channels and rules.' },
                  { badge: '🌱 New Server', age: '1–6 months', note: 'Building a community. Focus on growing your member count.' },
                  { badge: '🚀 Growing', age: '6–12 months', note: 'Established enough to earn trust from potential members.' },
                  { badge: '🌟 One Year', age: '1–2 years', note: 'A reliable community milestone. Plan an anniversary event!' },
                  { badge: '⭐ Established', age: '2–3 years', note: 'Your server has proven long-term value to its community.' },
                  { badge: '💎 Veteran', age: '3–5 years', note: 'A legacy server with deep history and loyal members.' },
                  { badge: '🏆 Legendary', age: '5+ years', note: 'Among the oldest servers on Discord. Rare and prestigious.' },
                ].map((row) => (
                  <tr key={row.badge}>
                    <td className="px-4 py-2.5 font-bold text-[#1a1d2e]">{row.badge}</td>
                    <td className="px-4 py-2.5 font-mono text-[#5865F2]">{row.age}</td>
                    <td className="px-4 py-2.5 text-[#5b6282]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">What Are Discord Milestone Badges?</h3>
          <p>
            Our tool awards milestone badges based on how old the server is. A <strong>Legendary Server</strong> badge means the server is 5 or more years old — created all the way back when Discord was still growing as a platform. Badges range from <em>Brand New</em> to <em>Legendary</em>, making it easy to flex your server&apos;s seniority in your community or Discord bio.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">How to Celebrate Your Server Anniversary</h3>
          <p>
            Once you know your <strong>Discord server creation date</strong>, you can plan memorable anniversary celebrations to reward loyal members and attract new ones. Here are some ideas used by top Discord communities:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Server Anniversary Giveaways:</strong> Run a special giveaway for members who have been with you since the beginning. Use our <a href="/tools/discord-timestamp-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Timestamp Generator</a> to embed the exact anniversary date in your announcement.</li>
            <li><strong>Community Retrospectives:</strong> Post a recap of the server&apos;s top moments, member count milestones, and biggest events from the past year.</li>
            <li><strong>Special Roles:</strong> Create anniversary-exclusive roles (e.g. "OG Member" or "Year 1 Veteran") for users who have been in the server since launch.</li>
            <li><strong>Temporary Events:</strong> Host limited-time voice chats, gaming tournaments, or art contests themed around the server&apos;s age.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">When Was Discord Launched?</h3>
          <p>
            Discord officially launched on May 13, 2015. This means the absolute oldest Discord servers have a maximum age of around 11 years. The Discord Epoch (used in Snowflake calculations) is set to January 1, 2015, roughly 4 months before public launch. No Discord server can have a creation date earlier than May 2015.
          </p>
          <p>
            Early Discord servers from 2015 and 2016 are incredibly rare — most were gaming communities focused on early access games or streaming communities. If your server was created in 2015, it earns our <strong>🏆 Legendary Server</strong> badge and is among the oldest communities on the platform.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Privacy & Security</h3>
          <p>
            Our <strong>Discord server age calculator</strong> is completely client-side. The Server ID you paste is decoded mathematically in your browser using the Snowflake formula — no data is ever sent to our servers. You can safely use this tool to check IDs from any server or account without worrying about privacy.
          </p>
          <p>
            Note that Discord Server IDs are not private information — they are visible to all members with Developer Mode enabled, and some are publicly accessible through Discord&apos;s API. Decoding the timestamp from an ID does not expose any private server data.
          </p>
        </article>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Server Age FAQ
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

        <AuthorTrustBox updatedAt="July 2026" />
      </div>
    </>
  );
}
