import type { Metadata } from 'next';
import ColorTextGenerator from '@/components/tools/ColorTextGenerator';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { buildFaqJsonLd } from '@/lib/jsonld';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

// ─── Metadata ────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'How do I type in color on Discord?',
    answer:
      'To type in color on Discord, you must use a code block with the "ansi" language identifier and specific ANSI escape codes. This tool generates those codes for you so you can just copy and paste.',
  },
  {
    question: 'What is a Discord ANSI color generator?',
    answer:
      'A Discord ANSI color generator is a tool that helps you create colorful text for Discord by generating the complex ANSI escape sequences required by Discord\'s markdown renderer.',
  },
  {
    question: 'Why is my Discord ANSI text not working?',
    answer:
      'Discord ANSI colored text currently only works on the Desktop and Web versions of Discord. If you are on mobile, you will see the raw code instead of colored text. Also, ensure you are using the correct triple backtick syntax with "ansi".',
  },
  {
    question: 'Can I use Discord colored text in my bio or username?',
    answer:
      'No, ANSI colored text only works inside code blocks in messages. It cannot be used in usernames, bios, or channel names.',
  },
  {
    question: 'What colors are available in Discord ANSI?',
    answer:
      'Discord supports 8 foreground colors (Gray, Red, Green, Yellow, Blue, Pink, Cyan, White) and 8 background colors. You can also use Bold and Underline formatting.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Colored Text Generator | Free ANSI Color Picker',
  description:
    'Free Discord colored text generator. Create colorful Discord messages using ANSI escape codes. Copy and paste colorful code blocks into Discord easily.',
  keywords: [
    'discord colored text generator',
    'discord colored text',
    'discord color text',
    'discord colors text',
    'discord text color',
    'discord color text generator',
    'discord ansi color generator',
    'discord code block color picker',
    'ansi colored text for discord',
    'how to type in color on discord',
    'discord ansi text escape codes',
    'discord colorful code blocks',
    'discord color text copy paste',
    'discord background text color generator',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-color-text-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-color-text-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-color-text-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Colored Text Generator – Free & Instant',
    description:
      'Generate ANSI colored text for Discord. Free Discord color text maker no account needed.',
    url: `${seoConfig.baseUrl}/tools/discord-color-text-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Colored Text Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Colored Text Generator – Free & Instant',
    description:
      'Generate ANSI colored text for Discord. Free, instant, no sign-up.',
    site: seoConfig.twitterHandle,
  },
  other: {
    'script:ld+json': buildFaqJsonLd(faqItems),
  },
};

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-color-text-generator/`;

export default function DiscordColorTextGeneratorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Colored Text Generator"
        description="Free Discord colored text generator. Create colorful Discord messages using ANSI escape codes. No account required."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Colored Text Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* ── H1 ── */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Colored Text Generator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Use our free <strong className="text-[#1a1d2e]">Discord color text generator</strong> to create eye-catching messages. Pick colors, apply styles, and copy the ANSI code block directly into your Discord chat.
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4">
            Master the art of colorful messages! Check out our <a href="/blog/discord-ansi-color-formatting-guide/" className="text-[#5865F2] font-bold hover:underline">Complete Discord ANSI Color Guide</a>.
          </p>
        </header>

        {/* ── Tool ── */}
        <section aria-labelledby="tool-heading" className="mb-6">
          <h2 id="tool-heading" className="sr-only">Discord ANSI Color Generator</h2>
          <ColorTextGenerator />
        </section>

        {/* ── How to use ── */}
        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use the Discord Color Text Generator
          </h2>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>Type your message into the <strong className="text-[#1a1d2e]">Text Segment</strong> boxes.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span>Choose your <strong className="text-[#1a1d2e]">Text Color</strong> and <strong className="text-[#1a1d2e]">Background Color</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span>Click <strong className="text-[#1a1d2e]">Copy ANSI Code</strong> to copy the entire code block.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">4</span>
              <span>Paste it into Discord to see your <strong className="text-[#1a1d2e]">discord colorful code blocks</strong> in action!</span>
            </li>
          </ol>
        </section>

        {/* ── SEO Content Section 1 ── */}
        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            The Ultimate Discord ANSI Color Generator
          </h2>
          <p className="text-base text-[#5b6282] leading-relaxed">
            Discord recently added support for <strong className="text-[#1a1d2e]">ansi colored text for discord</strong> within code blocks. This allows users to create stunning, colorful messages that stand out in any server. However, typing the <strong className="text-[#1a1d2e]">discord ansi text escape codes</strong> manually is nearly impossible. That&apos;s where our <strong className="text-[#1a1d2e]">discord code block color picker</strong> comes in.
          </p>
          <p className="text-base text-[#5b6282] leading-relaxed">
            Our tool acts as a visual <strong className="text-[#1a1d2e]">discord color text copy paste</strong> utility. You don&apos;t need to know any programming. Simply use the editor above to style your text, and we handle the generation of the invisible escape characters.
          </p>
        </section>

        {/* ── SEO Content Section 2 ── */}
        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            Why Is My Discord Colored Text Not Working?
          </h2>
          <p className="text-base text-[#5b6282] leading-relaxed">
            If you&apos;ve tried to use <strong className="text-[#1a1d2e]">discord colored text</strong> and it didn&apos;t work, there are a few common reasons:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#5b6282]">
            <li><strong>Mobile Compatibility:</strong> ANSI colors are not yet supported on the Discord mobile app (iOS/Android). They only work on the Desktop app and browser version.</li>
            <li><strong>Missing Escape Character:</strong> Discord requires a specific non-printable character (ESC) to trigger colors. You cannot just type "\u001b". Our generator includes this character automatically.</li>
            <li><strong>Wrong Markdown:</strong> You must use triple backticks followed by "ansi" at the start: <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">```ansi</code>.</li>
          </ul>
        </section>

        {/* ── SEO Content Section 3 ── */}
        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            How to Type in Color on Discord Manually
          </h2>
          <p className="text-base text-[#5b6282] leading-relaxed">
            If you want to understand the <strong className="text-[#1a1d2e]">discord text color</strong> system, it uses the standard ANSI escape sequence: <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2] font-mono">[formatting;background;foregroundm</code>. 
          </p>
          <p className="text-base text-[#5b6282] leading-relaxed">
            For example, to get red text, the code is <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">31</code>. For a blue background, it&apos;s <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">44</code>. Our <strong className="text-[#1a1d2e]">discord background text color generator</strong> allows you to mix and match these effortlessly.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Colored Text FAQ
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
