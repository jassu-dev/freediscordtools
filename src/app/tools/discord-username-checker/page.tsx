import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { buildFaqJsonLd } from '@/lib/jsonld';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import UsernameCheckerTool from '@/components/tools/username-checker/UsernameCheckerTool';

const faqItems = [
  {
    question: 'How do I check if a Discord username is available?',
    answer:
      'Our Discord username checker validates your username against Discord\'s formatting rules and gives an availability score based on length, uniqueness, and character patterns. For a definitive live check, you must attempt to create the account inside Discord directly but our username checker discord tool filters out invalid formats first. Whether you need a discord username checker or a username checker discord, our tool is here to help!',
  },
  {
    question: 'What are the Discord username rules?',
    answer:
      'Discord usernames must be 2–32 characters long, contain only letters, numbers, underscores (_), and periods (.), must not start or end with a period or underscore, cannot contain consecutive dots or underscores, and cannot use reserved words like "discord", "admin", or "system". Use our discord username checker to verify your username meets all these rules!',
  },
  {
    question: 'Can I use spaces in a Discord username?',
    answer:
      'No. Discord usernames do not allow spaces. Use underscores (_) or periods (.) as separators instead. For example, "john smith" should be "john_smith" or "john.smith". Check your modified username with our username checker discord tool before using it!',
  },
  {
    question: 'What happened to Discord\'s name#1234 system?',
    answer:
      'Discord removed the discriminator (#tag) system in 2023. Usernames are now unique strings without numbers appended. This means short, common usernames like "john" or "gamer" are very likely already taken, so using our discord username checker can help you find a valid, available username quickly!',
  },
  {
    question: 'How long can a Discord username be?',
    answer:
      'Discord usernames must be between 2 and 32 characters long. Display names (the name shown in servers) have a separate 32-character limit but allow a wider range of characters including spaces and symbols. Use our username checker discord to make sure your username is within the length limit!',
  },
  {
    question: 'What is the difference between a Discord username and display name?',
    answer:
      'Your username (handle) is your unique account identifier and follows strict format rules. Use our discord username checker to validate it. Your display name is what others see in servers and DMs it can contain spaces, emojis, and special characters, and does not need to be unique.',
  },
  {
    question: 'Are Discord usernames case-sensitive?',
    answer:
      'No. Discord usernames are not case-sensitive. "JohnDoe" and "johndoe" are treated as the same username. All username comparisons are done in lowercase, so keep that in mind when using our username checker discord!',
  },
  {
    question: 'Can I change my Discord username?',
    answer:
      'Yes. Go to User Settings → My Account → Edit Username. You can change your username freely, but popular short names may already be taken. Use our discord username checker to help you validate format before you attempt the change!',
  },
  {
    question: 'What is the best discord username checker?',
    answer:
      'Our discord username checker is the best! It validates your username against all Discord rules, gives an availability score, and suggests alternatives. Whether you call it a discord username checker or a username checker discord, our tool is the perfect choice!',
  },
  {
    question: 'Are Discord usernames case sensitive?',
    answer:
      'No, Discord usernames are not case sensitive. "CoolUser" and "cooluser" are treated as the same username. Discord converts all usernames to lowercase internally, so capitalization does not create a unique identity.',
  },
  {
    question: 'What characters are allowed in Discord usernames?',
    answer:
      'Discord usernames allow only lowercase letters (a-z), numbers (0-9), underscores (_), and periods (.). No uppercase letters, spaces, or special characters are permitted in the username (handle). Display names have different, more relaxed rules.',
  },
  {
    question: 'What is the difference between a Discord handle and username?',
    answer:
      'In 2026, "handle" and "username" mean the same thing on Discord \u2014 it is your unique @identifier. Your "display name" is separate and can contain spaces, emojis, and special characters. The handle follows strict formatting rules while the display name is cosmetic.',
  },
  {
    question: 'Can you change your Discord username in 2026?',
    answer:
      'Yes, you can change your Discord username in 2026. Go to User Settings \u2192 My Account \u2192 Edit Username. Note that popular short names are often taken, and there may be a cooldown period between changes. Use our checker to validate your new username before attempting the switch.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Username Checker — Validate Rules & Availability',
  description:
    'Free Discord username checker: validate against all 2026 naming rules, check case sensitivity, allowed characters, and get availability scores instantly.',
  keywords: [
    'discord username checker',
    'username checker discord',
    'discord username availability checker',
    'check discord username',
    'is my discord username taken',
    'discord username validator',
    'discord username rules',
    'discord name checker',
    'discord username ideas',
    'discord username generator',
    'discord display name checker',
    'valid discord username',
    'discord username format',
    'are discord usernames case sensitive',
    'discord username allowed characters',
    'discord handle vs username',
    'can you change discord username 2026',
    'is discord username case sensitive',
    'can discord usernames have capital letters',
    'discord display name vs username difference 2026',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-username-checker/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-username-checker/`,
      'en': `${seoConfig.baseUrl}/tools/discord-username-checker/`,
    },
  },
  openGraph: {
    title: 'Discord Username Checker — Validate Rules & Availability',
    description:
      'Free discord username checker and username checker discord tool. Instantly check if your Discord username is valid, format-compliant, and likely available. Get an availability score and alternate suggestions.',
    url: `${seoConfig.baseUrl}/tools/discord-username-checker/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Username Checker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Username Checker — Validate Rules & Availability',
    description: 'Check if your Discord username is valid and likely available with our free discord username checker. Also known as username checker discord, our tool is instant and no sign-up required.',
    site: seoConfig.twitterHandle,
  },
};



const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-username-checker/`;

export default function DiscordUsernameCheckerPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Username Checker"
        description="Free Discord username checker. Validate format, check Discord naming rules, get an availability score and alternate suggestions instantly."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Username Checker', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Username Checker
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Instantly validate your Discord username against all naming rules, get an <strong className="text-[#1a1d2e]">availability score</strong>, and see suggested alternatives all before you open Discord with our free discord username checker! Also known as username checker discord, our tool makes checking usernames quick and easy!
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4">
            Want a unique-looking username? Try our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> to create stylized Unicode display names, then use our discord username checker to verify your base username!
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Username Checker Tool</h2>
          <UsernameCheckerTool />
        </section>

        {/* ── Discord Username Rules ── */}
        <section aria-labelledby="rules-heading" className="mb-10 space-y-5 text-[#5b6282] text-base leading-relaxed">
          <h2 id="rules-heading" className="text-2xl font-bold text-[#1a1d2e]">
            Discord Username Rules (2026)
          </h2>

          <p>
            In 2023, Discord replaced the old <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">username#1234</code> discriminator system with unique usernames. This was a major change: previously, many users could share the same display name because the four-digit tag made them distinguishable. Now, each username must be globally unique, which means the rules around valid characters and format matter much more, and that's where our discord username checker and username checker discord tool comes in handy!
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Rule</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6F0]">
                {[
                  ['Length', '2 to 32 characters'],
                  ['Allowed characters', 'a–z, A–Z, 0–9, underscore (_), period (.)'],
                  ['Not allowed', 'Spaces, @, #, :, backticks, most special characters'],
                  ['Starting character', 'Must begin with a letter or number (not _ or .)'],
                  ['Ending character', 'Must end with a letter or number (not _ or .)'],
                  ['Consecutive characters', 'No double periods (..) or double underscores (__)'],
                  ['Case sensitivity', 'Not case-sensitive "User" and "user" are the same'],
                  ['Reserved words', '"discord", "admin", "system", "clyde" and others are blocked'],
                ].map(([rule, detail]) => (
                  <tr key={rule as string}>
                    <td className="px-4 py-2 font-medium text-[#1a1d2e]">{rule}</td>
                    <td className="px-4 py-2">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Username vs Display Name</h3>
          <p>
            Discord has two separate name fields. Your <strong className="text-[#1a1d2e]">username</strong> (also called your handle) is the unique identifier that follows the rules above, which you can check with our discord username checker. It is what appears after the @ symbol and is used for friend requests and profile URLs. Your <strong className="text-[#1a1d2e]">display name</strong> is separate it can contain spaces, emoji, uppercase letters, and most Unicode characters, and does not need to be unique. Display names are what others see in server member lists and DMs. Always use our username checker discord to validate your username before setting it!
          </p>
          <p>
            To make your display name visually unique and stylized, try our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> which converts any text into 160+ Unicode font styles that work in display names, then use our discord username checker to verify your base username!
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Why Short Usernames Are Hard to Get</h3>
          <p>
            With over 500 million registered Discord accounts and no discriminator system to differentiate users, all the short, common usernames (3-5 characters, common names, simple words) were claimed almost immediately after the migration. Our discord username checker's availability score reflects this reality: usernames with 10+ characters, uncommon words, or special character separators have a much higher chance of still being available, and you can check them all with our username checker discord!
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Tips for Choosing a Good Discord Username</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Add a year, number, or underscore to a taken name: <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">name_2026</code>, then check it with our discord username checker!</li>
            <li>Combine two words: <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">swift.code</code> or <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">dark_pixel</code>, then verify with our username checker discord!</li>
            <li>Add a prefix like <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">the_</code>, <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">real_</code>, or <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">its_</code>, then use our discord username checker!</li>
            <li>Use a hobby + noun combo: <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">pixel.chef</code>, <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">void.coder</code>, check them with our username checker discord!</li>
            <li>Aim for 8–15 characters unique enough to be available, short enough to be memorable, and use our discord username checker to validate!</li>
          </ul>
        </section>

        {/* Username Rules Content Paragraph */}
        <section aria-labelledby="rules-2026-heading" className="mb-10 space-y-5 text-[#5b6282] text-base leading-relaxed">
          <h2 id="rules-2026-heading" className="text-2xl font-bold text-[#1a1d2e]">
            Discord Username Rules & Allowed Characters in 2026
          </h2>
          <p>
            Discord overhauled its username system in 2023, replacing the old Name#1234
            discriminator system with unique handles. In 2026, your Discord username
            must be between 2–32 characters and can only contain lowercase letters,
            numbers, underscores, and periods. Capital letters are automatically
            converted to lowercase — so Discord usernames are not case sensitive.
          </p>
          <p>
            Wondering about the difference between your Discord handle vs username vs
            display name? Your handle (username) is your unique identifier that others
            use to add you as a friend. Your display name is what appears in servers and
            can include spaces, emoji, and Unicode characters. Use our checker above to
            validate any username against all current Discord rules before trying to
            claim it.
          </p>
          <p>
            For a deeper dive into every rule, edge case, and tip, check out our{' '}
            <a href="/blog/discord-username-rules-guide/" className="text-[#5865F2] font-bold hover:underline">full Discord username rules guide for 2026</a>.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Username FAQ
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

        {/* Related tools */}
        <section aria-labelledby="related-heading" className="mb-4">
          <h2 id="related-heading" className="text-xl font-bold text-[#1a1d2e] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/tools/discord-font-generator/', name: 'Discord Font Generator', desc: 'Create stylized Unicode display names with 160+ font styles.' },
              { href: '/tools/discord-id-to-date/', name: 'Discord Snowflake Decoder', desc: 'Find the exact creation date of any Discord account or server.' },
              { href: '/tools/discord-status-generator/', name: 'Discord Status Generator', desc: 'Get 50+ cool custom status ideas or build your own.' },
              { href: '/tools/discord-timestamp-generator/', name: 'Discord Timestamp Generator', desc: 'Generate timezone-aware timestamps for server announcements.' },
            ].map((t) => (
              <a key={t.href} href={t.href} className="block p-4 rounded-xl border border-[#E3E6F0] hover:border-[#5865F2] hover:bg-[#F0F2FF] transition-all">
                <p className="font-bold text-[#1a1d2e] text-sm mb-1">{t.name}</p>
                <p className="text-xs text-[#5b6282]">{t.desc}</p>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
