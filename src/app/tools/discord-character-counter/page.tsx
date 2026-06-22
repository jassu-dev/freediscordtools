import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import CharacterCounter from '@/components/tools/CharacterCounter';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What is the character limit on Discord?',
    answer:
      'Regular Discord users have a strict limit of 2,000 characters per message. Users with Discord Nitro can send messages up to 4,000 characters long.',
  },
  {
    question: 'How does the Discord text splitter work?',
    answer:
      'Our tool counts your character length. If it exceeds 2,000 (or 4,000 in Nitro mode), it divides the text using smart formatting boundaries (like paragraph breaks or sentence terminals) and adds numbered suffixes (e.g. 1/3) so you can copy and paste them sequentially.',
  },
  {
    question: 'What is the best way to bypass the 2000 limit?',
    answer:
      'The safest and cleanest way is splitting your text into multiple logical messages. Splitting by paragraph ensures your lists and announcements remain visually readable for server members.',
  },
  {
    question: 'Does this counter count spaces and emojis?',
    answer:
      'Yes, all letters, spaces, numbers, and emojis are counted. Note that Discord represents custom server emojis under the hood as code sequences like <:emoji_name:id>, which can count as more characters than a regular Unicode emoji.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Character Counter & Message Splitter Tool',
  description:
    'Count characters, words, sentences, and paragraphs for your Discord posts. Automatically split long messages exceeding 2000 or 4000 (Nitro) limits.',
  keywords: [
    'discord character counter',
    'discord message splitter',
    'discord word counter',
    'discord text bypass 2000 limit',
    'split text for discord',
    'discord text length checker',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-character-counter/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-character-counter/`,
      'en': `${seoConfig.baseUrl}/tools/discord-character-counter/`,
    },
  },
  openGraph: {
    title: 'Discord Character Counter & Message Splitter Tool',
    description:
      'Instantly count text lengths and split messages exceeding Discord limits. Supports smart paragraph, sentence, and word division.',
    url: `${seoConfig.baseUrl}/tools/discord-character-counter/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Character Counter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Character Counter & Message Splitter Tool',
    description:
      'Split long announcements at sentence or paragraph breaks. Free Discord length counter.',
    site: seoConfig.twitterHandle,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-character-counter/`;

export default function CharacterCounterPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Character Counter & Splitter',
          description: 'Free online utility to count text characters and automatically split messages exceeding Discord character limits.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Character Counter', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* H1 */}
        <header className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1d2e] mb-3">
            Discord Character Counter & Splitter
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Verify message metrics and easily slice long rules, bios, or announcements. Toggle between standard <strong className="text-[#1a1d2e]">2,000 limits</strong> and <strong className="text-[#1a1d2e]">4,000 Nitro limits</strong> with instant smart paragraph-break divisions.
          </p>
        </header>

        {/* Main interactive tool */}
        <main className="mb-16">
          <CharacterCounter />
        </main>

        <hr className="border-[#E3E6F0] mb-12" />

        {/* Informative Article */}
        <article className="prose prose-lg max-w-3xl mx-auto text-[#5b6282] space-y-6">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            Complete Guide to Discord Character Limits and Message Splitting
          </h2>
          <p>
            Every Discord user eventually runs into the character limit. Whether you are writing a detailed server rules document, a long event description, a bot response, or a game guide, Discord imposes strict per-message limits that cut off your content mid-sentence if you are not careful.
          </p>
          <p>
            Understanding these limits and using a <strong>Discord character counter</strong> tool helps you manage content length before posting. This guide covers everything from what the exact limits are, to the smartest ways to split content across multiple messages.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Discord Character Limits Explained</h3>
          <p>
            Discord enforces different character limits depending on your account type:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard accounts:</strong> 2,000 characters per message. This is the limit for the vast majority of Discord users.</li>
            <li><strong>Discord Nitro subscribers:</strong> 4,000 characters per message. Nitro users get double the limit, which is useful for detailed messages.</li>
            <li><strong>Bot messages:</strong> Bots sending plain text messages are also limited to 2,000 characters per response, though they can send multiple messages in sequence.</li>
            <li><strong>Embed descriptions:</strong> Up to 4,096 characters per embed description field, independent of the message limit.</li>
          </ul>
          <p>
            When you exceed the 2,000 character limit, Discord prevents you from sending and highlights the text input in red. There is no automatic truncation you must either shorten your message or split it manually. This is where a <strong>Discord message splitter</strong> saves enormous time.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">How Our Discord Message Splitter Works</h3>
          <p>
            Rather than manually counting characters or editing paragraphs down, paste your full text into our tool. The character counter instantly displays:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Total characters</strong> the exact count including spaces, punctuation, and emoji.</li>
            <li><strong>Total words</strong> useful for estimating reading time and verbosity.</li>
            <li><strong>Sentences and paragraphs</strong> helpful metrics for structuring longer content.</li>
          </ul>
          <p>
            If your text exceeds the limit, the splitter activates automatically. You can choose from three intelligent split strategies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Smart Paragraph Split:</strong> Divides the text at double line breaks (paragraph boundaries). This keeps paragraphs intact and is the most readable option for rules, guides, and announcements.</li>
            <li><strong>Smart Sentence Split:</strong> Splits at sentence-ending punctuation (periods, exclamation marks, question marks). Each message part ends at a complete sentence, ensuring no ideas are cut in half.</li>
            <li><strong>Strict Character Split:</strong> Cuts exactly at the character threshold. Best used for code blocks, data dumps, or content where paragraph structure does not matter.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">How Characters Are Counted: Spaces, Emojis, and More</h3>
          <p>
            Many users are surprised to find that spaces count toward the character total including leading and trailing spaces. Newline characters (line breaks) also count as characters. Here is a quick breakdown:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard Unicode emojis</strong> (like 😀) count as 1–2 characters depending on their Unicode representation.</li>
            <li><strong>Custom Discord server emojis</strong> in messages are referenced as <code>&lt;:emoji_name:123456789&gt;</code> which can be 20+ characters long.</li>
            <li><strong>Newlines and spaces</strong> each count as one character.</li>
            <li><strong>Discord markdown syntax</strong> (like <code>**bold**</code> asterisks) are included in the character count as-is.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">Pro Tips for Server Managers and Bot Developers</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Write rules in parts:</strong> Most servers post their rules across 3–5 pinned messages. Pre-split your document here to guarantee each part fits within limits.</li>
            <li><strong>Use embeds for longer content:</strong> If you need more room, move content to <a href="/tools/discord-embed-generator/" className="text-[#5865F2] font-bold hover:underline">Discord embeds</a>, which support 4,096-character descriptions.</li>
            <li><strong>Add part numbering:</strong> Our splitter automatically adds &quot;(1/3)&quot;, &quot;(2/3)&quot; etc. to split parts, so readers know the sequence.</li>
            <li><strong>Test bot responses early:</strong> If your bot generates dynamic responses, use this counter to verify maximum-length outputs stay within 2,000 characters.</li>
            <li><strong>Copy each part separately:</strong> Each split section has its own copy button so you can send them to Discord one by one in the correct order.</li>
          </ul>
          <p>
            For announcements that need special formatting, use our <a href="/tools/discord-markdown-previewer/" className="text-[#5865F2] font-bold hover:underline">Discord Markdown Previewer</a> to design the content first, then paste it here to count and split before publishing.
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
