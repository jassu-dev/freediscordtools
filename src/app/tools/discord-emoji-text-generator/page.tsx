import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import EmojiTextGenerator from '@/components/tools/EmojiTextGenerator';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { buildFaqJsonLd } from '@/lib/jsonld';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What are Discord regional indicators?',
    answer:
      'Discord regional indicators are a set of 26 Unicode characters (🇦 through 🇿) representing letters. When sent inside Discord chat, they render as large blue squares with white alphabetical symbols.',
  },
  {
    question: 'How do you make big emoji letters in Discord?',
    answer:
      'Type your text into our online generator. It automatically maps each character to its corresponding emoji representation (like :regional_indicator_a: for A) and copies the text directly to your clipboard.',
  },
  {
    question: 'Why does my emoji text exceed the character limit?',
    answer:
      'Each translated letter (e.g. :regional_indicator_m:) is around 22 characters long. Short phrases can quickly hit Discord\'s 2,000 character limit. Keep your big text headers short for announcement titles.',
  },
  {
    question: 'Can I translate numbers and symbols?',
    answer:
      'Yes, our translator maps numbers 0-9 into text emojis (e.g. :one:, :two:) and supports punctuation like question marks (!, ?) and hashes (#).',
  },
];
export const metadata: Metadata = {
  title: 'Discord Emoji Text Generator – Big Block Letter Maker',
  description:
    'Convert regular text into large Discord emoji block letters instantly. Create eye-catching announcement headings with copy-paste regional indicators.',
  keywords: [
    'discord emoji text generator',
    'discord regional indicator maker',
    'discord big block letters',
    'discord emoji keyboard text',
    'make big letters in discord',
    'discord emoji text copy paste',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-emoji-text-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-emoji-text-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-emoji-text-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Emoji Text Generator – Big Block Letter Maker',
    description:
      'Turn text into big regional indicator emojis for Discord. Free online translator with custom spacing controls.',
    url: `${seoConfig.baseUrl}/tools/discord-emoji-text-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Emoji Text Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Emoji Text Generator – Big Block Letter Maker',
    description:
      'Translate headers into large emoji letters. Easy copy-paste for Discord server announcements.',
    site: seoConfig.twitterHandle,
  },
};


const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-emoji-text-generator/`;

export default function EmojiTextGeneratorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Emoji Big Text Generator"
        description="Free online utility to translate text into Discord regional indicator block letters."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Emoji Text Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* H1 */}
        <header className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1d2e] mb-3">
            Discord Emoji Big Text Generator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Convert standard text into massive Discord emoji letters. Ideal for designing <strong className="text-[#1a1d2e]">header rules</strong>, <strong className="text-[#1a1d2e]">announcement channels</strong>, and welcoming titles. Translate letters, numbers, and symbols instantly.
          </p>
        </header>

        {/* Main interactive tool */}
        <main className="mb-16">
          <EmojiTextGenerator />
        </main>

        <hr className="border-[#E3E6F0] mb-12" />

        {/* Informative Article */}
        <article className="prose prose-lg max-w-3xl mx-auto text-[#5b6282] space-y-6">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            How to Make Big Emoji Text in Discord: The Complete Guide
          </h2>
          <p>
            One of the most visually striking things you can do in a Discord server is use large block letters made entirely from emojis. Whether you are designing a welcome channel, titling a rules section, or creating an eye-catching announcement header, <strong>Discord emoji big text</strong> immediately grabs attention and adds personality to your server.
          </p>
          <p>
            This guide explains exactly how regional indicator symbols work, when to use big letter text, and how to get the most out of our free <strong>Discord emoji text generator</strong>.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">What Are Discord Regional Indicator Symbols?</h3>
          <p>
            Regional indicators are a set of 26 special Unicode characters (U+1F1E6 through U+1F1FF) originally designed for representing country flags when paired together. However, when used individually in Discord, each character renders as a large blue square block with a white letter inside creating the &quot;big letter&quot; effect that Discord communities love.
          </p>
          <p>
            These are the emoji equivalents of the alphabet:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>🇦 = A (regional_indicator_a)</li>
            <li>🇧 = B (regional_indicator_b)</li>
            <li>🇨 = C (regional_indicator_c)</li>
            <li>...and so on through 🇿 = Z (regional_indicator_z)</li>
          </ul>
          <p>
            Our generator automatically translates every letter in your input into its corresponding regional indicator emoji. You never need to remember emoji codes or look them up manually.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Numbers and Symbols Support</h3>
          <p>
            Beyond letters, our <strong>Discord regional indicator maker</strong> also supports:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Numbers 0–9:</strong> Translated to keycap emojis like 0️⃣, 1️⃣, 2️⃣ through 9️⃣. These render with a bordered square appearance in Discord.</li>
            <li><strong>Exclamation mark (!):</strong> Translated to ❗ for emphasis.</li>
            <li><strong>Question mark (?):</strong> Translated to ❓ to signal a query visually.</li>
            <li><strong>Hash (#):</strong> Translated to #️⃣, matching Discord&apos;s hashtag emoji.</li>
            <li><strong>Spaces:</strong> Converted to invisible separator emojis to maintain readable word spacing on mobile and desktop.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Creative Ways to Use Emoji Big Text</h3>
          <p>
            Server owners and community managers use regional indicator text in many creative ways:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Channel Headers:</strong> Pin a message at the top of a channel using big letter text like &quot;🇷 🇺 🇱 🇪 🇸&quot; to create a visual section title that stands out from regular chat.</li>
            <li><strong>Welcome Messages:</strong> Greet new members with a personalized &quot;🇼 🇪 🇱 🇨 🇴 🇲 🇪&quot; banner that feels warm and community-oriented.</li>
            <li><strong>Event Announcements:</strong> Use caps and numbers together for event dates like &quot;🇬 🇮 🇻 🇪 🇦 🇼 🇦 🇾&quot; to make promotions impossible to miss.</li>
            <li><strong>Game Results:</strong> Post game server results with team names in big letters to celebrate victories in a visually exciting way.</li>
            <li><strong>Reaction Polls:</strong> Create react-to-vote polls where different reaction emojis correspond to lettered options (A, B, C).</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Important: Character Limit Considerations</h3>
          <p>
            There is an important caveat to using <strong>Discord emoji block letters</strong>: each translated character is significantly longer than a regular letter. For example, the letter &quot;A&quot; becomes the emoji code <code>:regional_indicator_a:</code>, which Discord internally processes as a multi-byte sequence. In practice, each emoji letter takes roughly 1–2 characters in Discord&apos;s counter, but a phrase of 10 letters can still approach the limit quickly when combined with spaces.
          </p>
          <p>
            As a rule of thumb, keep your emoji text headers to <strong>10 characters or fewer</strong> to stay safely within Discord&apos;s 2,000 character limit, especially if you are combining the header with a regular text announcement below it.
          </p>
          <p>
            To check if your full message is within limits, use our <a href="/tools/discord-character-counter/" className="text-[#5865F2] font-bold hover:underline">Discord Character Counter</a> after generating the emoji text.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Controlling Word Spacing</h3>
          <p>
            Our generator includes a word spacing slider that controls how many gap emojis are inserted between words. On default settings, words can look cramped, especially on smaller mobile screens. Increasing the gap slightly (1–2 spacer emojis) makes multi-word headers much more legible.
          </p>
          <p>
            Once your emoji text looks perfect in the preview, click Copy to copy the full output to your clipboard. Then paste it directly into Discord no extra formatting steps are needed. The emojis render automatically in Discord&apos;s desktop app, browser client, and mobile apps on both iOS and Android.
          </p>
          <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm">
            Combine emoji headers with formatted body text! Use our <a href="/tools/discord-markdown-previewer/" className="text-[#5865F2] font-bold hover:underline">Discord Markdown Previewer</a> to design the body content, then add your big letter header on top for maximum visual impact.
          </p>
        </article>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto mt-16">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-6 text-center">
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
