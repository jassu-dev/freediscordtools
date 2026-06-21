import type { Metadata } from 'next';
import FontGenerator from '@/components/tools/FontGenerator';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Discord Font Generator - Copy & Paste Aesthetic Discord Fonts',
  description:
    'Free Discord font generator to change your default Discord fonts. Copy and paste 160+ aesthetic Discord fonts, cool Discord fonts, and fancy text for usernames, nicknames, bios, and messages.',
  keywords: [
    'discord font',
    'discord fonts',
    'discord font generator',
    'fonts for discord',
    'discord fancy text',
    'discord text generator',
    'aesthetic discord fonts',
    'cool discord fonts',
    'discord nickname generator',
    'discord username fonts',
    'fancy text for discord',
    'discord bio fonts',
    'discord unicode fonts',
    'discord username font',
    'discord text styles',
    'fancy discord fonts',
    'cool fonts for discord',
    'discord font changer',
    'discord nickname font',
    'discord profile font',
    'discord username fonts copy and paste',
    'small text generator for discord',
    'gothic fonts for discord bio',
    'cursive discord font generator',
    'invisible text for discord username',
    'discord channel name font generator',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-font-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-font-generator/`,
      en: `${seoConfig.baseUrl}/tools/discord-font-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Font Generator - Copy & Paste Aesthetic Discord Fonts',
    description:
      'Generate 160+ fancy fonts for Discord instantly. Custom Discord fonts, aesthetic Discord fonts, discord bio fonts, and discord nickname styles - live preview, copy and paste, free.',
    url: `${seoConfig.baseUrl}/tools/discord-font-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: seoConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Discord Font Generator - Copy & Paste Aesthetic Discord Fonts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Font Generator - Copy & Paste Aesthetic Discord Fonts',
    description:
      'Change your default Discord font. Generate aesthetic, gothic, gaming, cute, and glitch discord fonts with live preview. Copy and paste instantly.',
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'How do I change my Discord font?',
    answer:
      'To change your default Discord font, use an online Discord font generator. Since Discord does not offer direct font settings, you type your text into a generator, which converts the characters into styled Unicode glyphs. Copy and paste the generated text directly into Discord usernames, bios, nicknames, or chat messages.',
  },
  {
    question: 'What is a Discord font generator?',
    answer:
      'A Discord font generator is a free browser utility that converts standard text into fancy fonts for Discord. By mapping Latin letters to mathematical and decorative Unicode symbol blocks, the generator creates styled text (like bold, italic, gothic, script, bubble, or glitch) that Discord can render natively on all devices.',
  },
  {
    question: 'How do custom Discord fonts work?',
    answer:
      'Discord fonts work using Unicode character encoding. The generator replaces default keyboard letters with unique Unicode glyphs. Because these are actual Unicode characters rather than stylesheet classes, they display as fancy text on Windows, Mac, iOS, Android, and web clients.',
  },
  {
    question: 'Can I use a custom Discord font for my username or nickname?',
    answer:
      'Yes. Custom Discord username fonts and discord nickname fonts are fully supported. Copy the generated text and paste it into your Display Name, Username, or Server Nickname settings. Compact styles like Bold, Small Caps, or Monospace are recommended for readability.',
  },
  {
    question: 'What are the best Discord bio fonts?',
    answer:
      'The best discord bio fonts are styles that remain legible in full sentences. Popular options include Bold Script for elegance, Italic for emphasis, and Spaced for a minimal aesthetic look. Use our live profile simulator to preview how your bio font looks before applying it.',
  },
  {
    question: 'Are Discord fonts safe to copy and paste?',
    answer:
      'Yes. Copying and pasting fonts from this Discord font generator is 100% safe. The generator outputs standard Unicode characters, does not modify your Discord client files, does not require a custom client like BetterDiscord, and is fully compliant with Discord Terms of Service.',
  },
  {
    question: 'Why do some Discord fonts show as empty boxes or question marks?',
    answer:
      'If a Discord font displays as a question mark or empty box (known as "tofu"), your device or OS does not have the specific Unicode character set installed in its system font. This typically happens on older versions of Windows, Android, or Linux.',
  },
  {
    question: 'Do Discord fonts work on mobile devices?',
    answer:
      'Yes. All fancy text generated by this tool works perfectly on mobile Discord apps (iOS and Android). Since it converts characters into native Unicode glyphs, your custom font renders identically for mobile and desktop users.',
  },
  {
    question: 'Can I use fancy fonts in Discord channel names and server topics?',
    answer:
      'Yes. You can use these fonts in server names, category names, channel topics, role names, and text channels. Server owners frequently use this discord text generator to style their channels and give their server a cleaner visual organization.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-font-generator/`;

export default function DiscordFontGeneratorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Font Generator"
        description="Free Discord font generator to change your default Discord fonts. Copy and paste 160+ aesthetic Discord fonts, cool Discord fonts, and fancy text for usernames, bios, and messages."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',                   href: `${seoConfig.baseUrl}/` },
          { name: 'Tools',                  href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Font Generator', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="min-h-screen bg-[#13141f]">
        <div className="max-w-5xl mx-auto px-4 py-8">

          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Discord Font Generator
            </h1>
            <p className="text-base md:text-lg text-[#8b8fa8] leading-relaxed max-w-3xl">
              The ultimate free <strong className="text-white">Discord font generator</strong>. Convert plain text into{' '}
              <strong className="text-white">160+ fancy Discord fonts</strong> instantly. Generate{' '}
              <strong className="text-[#7289da]">aesthetic Discord fonts</strong>,{' '}
              <strong className="text-[#7289da]">cool Discord fonts</strong>, and custom nicknames with one-click copy and paste.
            </p>
            <p className="bg-[#1e2030] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#8b8fa8] mt-4">
              Want a stunning profile? Read our{' '}
              <a href="/blog/aesthetic-discord-profile-guide/" className="text-[#5865F2] font-bold hover:underline">
                Aesthetic Discord Profile Guide
              </a>.
            </p>
          </header>

          <section aria-labelledby="tool-section-heading" className="mb-8">
            <h2 id="tool-section-heading" className="sr-only">Discord Font Generator Tool</h2>
            <FontGenerator />
          </section>

          {/* Fancy Discord Fonts */}
          <section
            aria-labelledby="fancy-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="fancy-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Fancy Discord Fonts &amp; Text Changer
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                A <strong className="text-[#e3e5f5]">Discord font changer</strong> uses Unicode symbol tables to create styled characters. This{' '}
                <strong className="text-[#e3e5f5]">Discord font generator</strong> substitutes standard keys with fancy text glyphs, giving the visual appearance of a custom{' '}
                <strong className="text-[#e3e5f5]">Discord font</strong> without breaking platform readability.
              </p>
              <p>
                Because these fonts use official Unicode standards, they render identically on Windows, Mac, iOS, Android, and web browsers.
                Your server members will see the same cool Discord fonts you chose, keeping your profile consistent everywhere.
              </p>
              <p>
                The most popular fancy Discord fonts in 2026 are{' '}
                <strong className="text-[#e3e5f5]">Bold Serif</strong>,{' '}
                <strong className="text-[#e3e5f5]">Bold Script</strong>,{' '}
                <strong className="text-[#e3e5f5]">Gothic / Fraktur</strong>,{' '}
                <strong className="text-[#e3e5f5]">Vaporwave</strong>, and{' '}
                <strong className="text-[#e3e5f5]">Glitch / Zalgo</strong>.
                Filter by categories above to browse styles that match your exact preference.
              </p>
            </div>
          </section>

          {/* Aesthetic Fonts */}
          <section
            aria-labelledby="aesthetic-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="aesthetic-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Aesthetic Discord Fonts &amp; Spacing Styles
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                An <strong className="text-[#e3e5f5]">aesthetic Discord font</strong> is the most popular way to customize bio cards and Display Names.
                These styles draw from vaporwave, minimal lo-fi layouts, and cute aesthetics.
                Every aesthetic font on this page is free to generate, copy, and paste instantly.
              </p>
              <ul className="list-none space-y-2.5 pl-0">
                {[
                  { name: 'Vaporwave', desc: 'Fullwidth Unicode letters — the ultimate aesthetic discord font for usernames.' },
                  { name: 'Spaced',    desc: 'Clean letter-spaced formatting, perfect for subtitle headers in discord bio fonts.' },
                  { name: 'Sparkle',   desc: 'Sparkle-separated fancy text for discord, designed for announcements.' },
                  { name: 'Stars',     desc: 'Star-wrapped decorative styles for custom server channel labels.' },
                  { name: 'Hearts',    desc: 'Cute heart-accented aesthetic discord font ideal for gaming profiles.' },
                ].map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">&#x25B8;</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.name}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How to use */}
          <section
            aria-labelledby="how-to-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="how-to-heading" className="text-2xl font-bold text-white mb-4">
              How to Use the Discord Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <ol className="space-y-3 list-none">
                {[
                  { n: '1', title: 'Type your Discord text', body: 'Enter your username, nickname, bio, or message. The generator converts your text across all 160+ fonts in real time.' },
                  { n: '2', title: 'Pick a font style', body: 'Browse the font grid or filter by category — Aesthetic, Gothic, Gaming, Cute, Anime, Cyberpunk, and more. Click any card to preview in the live Discord mockup.' },
                  { n: '3', title: 'Copy and paste', body: 'Hit Copy on any font card. Open Discord, paste with Ctrl+V (Windows) or Cmd+V (Mac). Your cool discord font is live.' },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#5865F2] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[#e3e5f5] mb-0.5">{step.title}</p>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Username fonts */}
          <section
            aria-labelledby="username-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="username-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Discord Nickname &amp; Username Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                A customized <strong className="text-[#e3e5f5]">Discord username font</strong> makes your account instantly memorable.
                This <strong className="text-[#e3e5f5]">discord nickname generator</strong> features a live mockup preview
                so you can check your text layout before saving. Want to make sure your username is actually available?
                Try our <a href="/tools/discord-username-checker/" className="text-[#5865F2] font-bold hover:underline">Discord Username Checker</a>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { style: 'Bold Serif',   reason: 'Highly readable and thick — the #1 discord username font.' },
                  { style: 'Fraktur',      reason: 'Dark gothic styling — the classic choice for gaming profiles.' },
                  { style: 'Small Caps',   reason: 'Clean capital letters shrunk down — subtle yet custom.' },
                  { style: 'Vaporwave',    reason: 'Spaced fullwidth letters — the iconic lo-fi discord font.' },
                  { style: 'Bubble',       reason: 'Circled letters — cute, friendly look.' },
                  { style: 'Monospace',    reason: 'Code typewriter design — great for developers.' },
                ].map((item) => (
                  <div key={item.style} className="bg-[#13141f] rounded-lg p-3 border border-[#2e3147]">
                    <p className="text-[#e3e5f5] text-base mb-0.5 font-semibold">{item.style}</p>
                    <p className="text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bio fonts */}
          <section
            aria-labelledby="bio-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="bio-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Aesthetic Discord Bio Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord grants users 190 characters in About Me. A custom{' '}
                <strong className="text-[#e3e5f5]">discord bio font</strong> makes your profile stand out.
                Toggle the <strong className="text-[#e3e5f5]">Bio</strong> tab in our preview to see exactly how it looks.
              </p>
              <ul className="list-none space-y-2.5">
                {[
                  { style: 'Script & Bold Script', desc: 'Elegant cursive flow, excellent for quotes.' },
                  { style: 'Italic Serif',          desc: 'Highly legible, clean accenting for sentences.' },
                  { style: 'Vaporwave',             desc: 'Wide spaced layout, sets a distinct retro vibe.' },
                  { style: 'Small Caps',            desc: 'Structured block layout that maximizes character limits.' },
                ].map((item) => (
                  <li key={item.style} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">&#x25B8;</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.style}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Glitch & Vaporwave */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Glitch Text Discord Font</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed">
                The <strong className="text-[#e3e5f5]">glitch text discord font</strong> (Zalgo text) overlays combining marks
                to create corrupted, glitching letter effects. Trending for cyberpunk and gaming profiles.
              </p>
            </div>
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Vaporwave Discord Font Changer</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed">
                Our <strong className="text-[#e3e5f5]">vaporwave discord font changer</strong> outputs wide full-width Unicode characters.
                This classic aesthetic is standard for designing visually clean server lists and usernames.
              </p>
            </div>
          </section>

          {/* How Unicode works */}
          <section
            aria-labelledby="unicode-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="unicode-heading" className="text-2xl font-bold text-white mb-4">
              How a Discord Font Generator Works
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord renders all text using fixed system fonts. A <strong className="text-[#e3e5f5]">discord font generator</strong> bypasses
                this by converting plain letters into unique Unicode codepoints from mathematical, gothic, or circled character blocks.
                Instead of changing font families (which Discord blocks), it substitutes characters visually.
              </p>
              <p>
                Because these are standard Unicode mappings, they are natively supported by all modern operating systems.
                Your custom Discord font loads in chats, profile cards, and DMs with no downloads or scripts required.
              </p>
            </div>
          </section>

          {/* Markdown guide */}
          <section
            aria-labelledby="formatting-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="formatting-heading" className="text-2xl font-bold text-white mb-4">
              Native Discord Markdown Formatting
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>Combine Unicode fonts with Discord&apos;s built-in Markdown for advanced message layouts:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#13141f] text-[#e3e5f5]">
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Syntax</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Effect</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold hidden sm:table-cell">Works in</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2e3147]">
                    {[
                      { syntax: '**text**',  effect: 'Bold',         works: 'Messages, bios' },
                      { syntax: '*text*',    effect: 'Italic',       works: 'Messages, bios' },
                      { syntax: '__text__',  effect: 'Underline',    works: 'Messages only' },
                      { syntax: '~~text~~',  effect: 'Strikethrough',works: 'Messages only' },
                      { syntax: '||text||',  effect: 'Spoiler',      works: 'Messages only' },
                      { syntax: '`text`',    effect: 'Monospace',    works: 'Messages only' },
                      { syntax: '> text',    effect: 'Block Quote',  works: 'Messages only' },
                    ].map((row) => (
                      <tr key={row.syntax} className="hover:bg-[#23263a] transition-colors">
                        <td className="px-3 py-2 font-mono text-[#5865F2]">{row.syntax}</td>
                        <td className="px-3 py-2 text-[#e3e5f5]">{row.effect}</td>
                        <td className="px-3 py-2 hidden sm:table-cell">{row.works}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                Markdown only works in messages. For usernames, nicknames, and status lines use our{' '}
                <strong className="text-[#e3e5f5]">discord font generator</strong> above.
              </p>
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-heading" className="mb-10">
            <h2 id="related-heading" className="text-xl font-bold text-white mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: '/tools/discord-color-text-generator/', name: 'Discord Colored Text Generator', desc: 'Create colorful ANSI messages for your server.' },
                { href: '/tools/discord-username-checker/',     name: 'Discord Username Checker',        desc: 'Validate your username and get an availability score.' },
                { href: '/tools/discord-status-generator/',     name: 'Discord Status Generator',        desc: '50+ cool status ideas or build your own with live preview.' },
                { href: '/tools/discord-timestamp-generator/',  name: 'Discord Timestamp Generator',     desc: 'Generate timezone-aware timestamps for announcements.' },
              ].map((t) => (
                <a key={t.href} href={t.href} className="block p-4 rounded-xl bg-[#1e2030] border border-[#2e3147] hover:border-[#5865F2] transition-all">
                  <p className="font-bold text-[#e3e5f5] text-sm mb-1">{t.name}</p>
                  <p className="text-xs text-[#8b8fa8]">{t.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-4">
              Discord Font Generator FAQ
            </h2>
            <div className="space-y-2">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-xl bg-[#1e2030] border border-[#2e3147] hover:border-[#5865F2]/50 transition-colors"
                >
                  <summary className="px-5 py-4 font-medium text-[#e3e5f5] text-base cursor-pointer list-none flex justify-between items-center gap-3">
                    <span>{faq.question}</span>
                    <span className="text-[#5865F2] shrink-0 text-xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <p className="px-5 pb-4 pt-1 text-[#8b8fa8] text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
