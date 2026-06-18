import type { Metadata } from 'next';
import FontGenerator from '@/components/tools/FontGenerator';
import AdSlot from '@/components/ads/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { adsConfig } from '@/config/ads';
import { seoConfig } from '@/config/seo';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Discord Font Generator | 160+ Fancy Text Styles',
  description:
    'Free Discord font generator with 160+ fancy fonts for Discord. Create aesthetic Discord fonts, cool Discord fonts, and fancy text for Discord usernames, bios, and messages. One-click copy.',
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
    title: 'Discord Font Generator – 160+ Fancy Fonts for Discord',
    description:
      'Generate 160+ fancy fonts for Discord instantly. Aesthetic Discord fonts, cool Discord fonts, discord bio fonts, and discord username fonts — live preview, one-click copy, free.',
    url: `${seoConfig.baseUrl}/tools/discord-font-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: seoConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Discord Font Generator – 160+ Fancy Fonts for Discord',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Font Generator – 160+ Fancy Fonts for Discord',
    description:
      'Aesthetic, gothic, gaming, cute, and glitch discord fonts with live preview. Best discord font generator — free, instant, no sign-up.',
    site: seoConfig.twitterHandle,
  },
};

// ─── FAQ data — keyword-dense Q&A ─────────────────────────────────────────────
const faqItems = [
  {
    question: 'What is a Discord font generator?',
    answer:
      'A Discord font generator is a free online tool that converts plain text into fancy fonts for Discord. Because Discord does not support custom fonts natively, a Discord font generator uses Unicode mathematical and decorative character sets to create stylish Discord text that looks like bold, italic, script, gothic, bubble, or glitch fonts — all without any plugin or app. This Discord text generator works instantly in your browser.',
  },
  {
    question: 'How do Discord fonts work?',
    answer:
      'Discord fonts work by replacing standard letters with visually similar Unicode characters. For example, the Discord font generator maps the letter A to 𝐀 (bold), 𝒜 (script), or Ａ (vaporwave). These Unicode glyphs are real characters — not CSS tricks — so they render as cool Discord fonts on every device: Windows, Mac, iOS, Android, and the Discord web app. That is why fancy text for Discord always looks the same for every viewer.',
  },
  {
    question: 'Can I use fancy fonts in my Discord username?',
    answer:
      'Yes. Discord username fonts are fully supported. Use this Discord font generator to create a unique discord nickname font, copy it with one click, and paste it into your Discord display name or username field. The best discord username fonts are compact styles — Bold (𝐁𝐨𝐥𝐝), Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴩꜱ), Script (𝒮𝒸𝓇𝒾𝓅𝓉), and Vaporwave (Ｖａｐｏｒ) — because they fit within Discord\'s character limit while still looking distinctive.',
  },
  {
    question: 'What are the best fonts for Discord bios?',
    answer:
      'The best discord bio fonts are styles that look great across full sentences. Top picks for discord bio fonts include: Bold Script (𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽) for an elegant feel, Aesthetic Spaced (D i s c o r d) for a clean vaporwave vibe, Anime Sparkle (✨𝓐𝓷𝓲𝓶𝓮✨) for kawaii profiles, and Italic (𝐼𝑡𝑎𝑙𝑖𝑐) for a sophisticated look. Use the 📝 Bio and 🖼️ Profile tabs in the live Discord preview to see exactly how your discord bio fonts will appear before you copy them.',
  },
  {
    question: 'What are aesthetic Discord fonts?',
    answer:
      'Aesthetic Discord fonts are fancy Discord text styles inspired by vaporwave, lo-fi, and soft internet culture. The most popular aesthetic discord fonts are: Vaporwave (Ａｅｓｔｈｅｔｉｃ) — fullwidth Unicode characters with a retro-futuristic feel; Spaced (A e s t h e t i c) — airy letter-spaced text; Sparkle (S✦p✦a✦r✦k✦l✦e) — sparkle-separated letters; and Script (𝒮𝒸𝓇𝒾𝓅𝓉) — flowing cursive. All aesthetic discord fonts in this generator are free and copy with one click.',
  },
  {
    question: 'What are the coolest Discord fonts?',
    answer:
      'The coolest discord fonts depend on your style. For dark and gaming profiles, cool discord fonts include Fraktur (𝔉𝔯𝔞𝔨𝔱𝔲𝔯), Cyberpunk (𝗖̷𝘆̴𝗯̸𝗲̵𝗿̷), and Glitch — all trending in 2025. For cute and anime profiles, cool discord fonts include Anime Sparkle (✨𝓐𝓷𝓲𝓶𝓮✨), UwU, and Kawaii styles. For clean professional looks, Bold (𝐁𝐨𝐥𝐝), Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴩꜱ), and Monospace (𝙼𝚘𝚗𝚘) are the coolest discord fonts available.',
  },
  {
    question: 'How do I use this Discord font generator?',
    answer:
      'Using this Discord font generator takes three steps. First, type your text — your discord nickname, bio, or message — into the input field. The discord text generator converts it instantly across all 160+ font styles. Second, click any font card to select it and see a live Discord preview in the message, username, bio, and profile tabs. Third, click Copy to copy the fancy text for Discord to your clipboard, then paste it into Discord with Ctrl+V or Cmd+V. No sign-up, no download — this discord font generator is completely free.',
  },
  {
    question: 'Do Discord fonts and fancy text work on mobile Discord?',
    answer:
      'Yes. All fancy text for Discord and discord fonts generated by this tool work perfectly on mobile Discord (iOS and Android). Because the discord font generator creates real Unicode characters — not styled text or images — they display identically on every device. Your friends on mobile will see the same cool discord fonts as users on desktop.',
  },
  {
    question: 'Can I use a Discord font in my server name or channel topic?',
    answer:
      'Yes. Fancy fonts for Discord work in every text field that accepts Unicode — server names, channel names, channel topics, role names, category names, and status messages. Many Discord server owners use this discord text generator to create stylish channel topics and role names that make their server stand out. Just generate your discord font, copy it, and paste it anywhere in Discord.',
  },
  {
    question: 'What font categories does this Discord font generator offer?',
    answer:
      'This discord font generator offers 12 categories of fancy fonts for discord: Aesthetic (vaporwave, spaced, sparkle), Cute (UwU, kawaii, emoji wraps), Gothic (fraktur, double struck, blackletter), Fancy (strikethrough, underline, superscript), Gaming (L33t speak, retro, glitch), Anime (sparkle script, moonlight, sakura), Cyberpunk (neon, cyber strike, glitch bold), Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴩꜱ), Bubble (circled letters), Glitch (zalgo), Script (cursive), and Bold — over 160 discord fonts in total.',
  },
  {
    question: 'What is a Discord nickname generator?',
    answer:
      'A Discord nickname generator is a tool that creates unique, stylish nicknames for Discord using fancy fonts and unicode text styles. This discord nickname generator lets you type any name, instantly see it transformed into 160+ cool discord fonts, and copy your favourite discord nickname font in one click. It doubles as a discord username font generator — perfect for standing out in servers and DMs.',
  },
  {
    question: 'Are these Discord fonts free?',
    answer:
      'Yes. This Discord font generator is completely free. Every discord font, every fancy text for discord, and every copy action is free with no account, no sign-up, no usage limits, and no watermarks. The discord text generator runs entirely in your browser — no data is sent to any server. Bookmark this page as your go-to discord font changer.',
  },
  {
    question: 'What is the Glitch / Zalgo discord font?',
    answer:
      'The Glitch discord font (also called Zalgo text) applies Unicode combining diacritical marks above and below each character, creating a visually distorted glitching effect. It is one of the most popular cool discord fonts for edgy, horror-themed, or cyberpunk Discord profiles. The Glitch discord font works in messages, bios, usernames, and channel topics — anywhere fancy text for discord is supported.',
  },
  {
    question: 'Can Discord bots use fancy fonts?',
    answer:
      'Yes. Discord bots can send fancy text for discord in message content, embed titles, embed descriptions, embed fields, and embed footers. Developers can generate the unicode text with this discord font generator, or replicate the same Unicode codepoint mappings in their bot\'s backend. The discord fonts render identically whether sent by a human or a bot.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-font-generator/`;

export default function DiscordFontGeneratorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Font Generator"
        description="Free Discord font generator with 160+ fancy fonts for Discord. Generate aesthetic Discord fonts, cool Discord fonts, and fancy text for Discord usernames, bios, and messages instantly."
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

          {/* ── H1 ── */}
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Discord Font Generator
            </h1>
            <p className="text-base md:text-lg text-[#8b8fa8] leading-relaxed max-w-3xl">
              The best free <strong className="text-[#7289da]">Discord font generator</strong> — generate{' '}
              <strong className="text-[#7289da]">160+ fancy fonts for Discord</strong> instantly.
              Create <strong className="text-[#7289da]">aesthetic Discord fonts</strong>,{' '}
              <strong className="text-[#7289da]">cool Discord fonts</strong>, and{' '}
              <strong className="text-[#7289da]">fancy text for Discord</strong> usernames, bios, and messages.
              Live preview. One-click copy. No sign-up.
              </p>
              <p className="bg-[#1e2030] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#8b8fa8] mt-4">
              Want to create a stunning profile? Read our <a href="/blog/aesthetic-discord-profile-guide/" className="text-[#5865F2] font-bold hover:underline">Aesthetic Discord Profile Guide</a>.
              </p>
              </header>
          {/* Ad: below H1 */}
          <div className="flex justify-center mb-6">
            <AdSlot slotId={adsConfig.slots.fontBelowTitle} width={728} height={90} />
          </div>

          {/* ── Tool ── */}
          <section aria-labelledby="tool-section-heading" className="mb-8">
            <h2 id="tool-section-heading" className="sr-only">Discord Font Generator Tool</h2>
            <FontGenerator />
          </section>

          {/* Ad: below tool */}
          <div className="flex justify-center mb-10">
            <AdSlot slotId={adsConfig.slots.fontBelowTool} width={728} height={250} />
          </div>

          {/* ── Fancy Discord Fonts ── */}
          <section
            aria-labelledby="fancy-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="fancy-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Fancy Discord Fonts
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                <strong className="text-[#e3e5f5]">Fancy Discord fonts</strong> are Unicode character sets
                that make your Discord text look bold, italic, gothic, script, or decorative — right inside
                Discord, no apps needed. This <strong className="text-[#e3e5f5]">Discord font generator</strong>{' '}
                covers every style of fancy text for Discord, from elegant{' '}
                <strong className="text-[#e3e5f5]">script Discord fonts</strong> to dark{' '}
                <strong className="text-[#e3e5f5]">gothic Discord fonts</strong> to playful{' '}
                <strong className="text-[#e3e5f5]">bubble Discord fonts</strong>.
              </p>
              <p>
                Because these fancy fonts for Discord use real Unicode characters — not CSS, not images —
                they render identically on every device. Windows, Mac, iOS, Android, and the Discord web app
                all display the same cool Discord fonts. That is what makes a proper{' '}
                <strong className="text-[#e3e5f5]">Discord text generator</strong> different from
                basic copy-paste tricks.
              </p>
              <p>
                The most-used fancy Discord fonts in 2025 are{' '}
                <strong className="text-[#e3e5f5]">Bold Serif (𝐁𝐨𝐥𝐝)</strong>,{' '}
                <strong className="text-[#e3e5f5]">Bold Script (𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽)</strong>,{' '}
                <strong className="text-[#e3e5f5]">Fraktur (𝔉𝔯𝔞𝔨𝔱𝔲𝔯)</strong>,{' '}
                <strong className="text-[#e3e5f5]">Vaporwave (Ｖａｐｏｒ)</strong>, and{' '}
                <strong className="text-[#e3e5f5]">Glitch</strong>. Use the Trending filter above to
                see what fancy discord fonts other users are copying the most right now.
              </p>
            </div>
          </section>

          {/* ── Aesthetic Fonts for Discord ── */}
          <section
            aria-labelledby="aesthetic-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="aesthetic-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Aesthetic Fonts for Discord
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                <strong className="text-[#e3e5f5]">Aesthetic Discord fonts</strong> are the most searched
                category on every Discord font generator. They draw from vaporwave, lo-fi, and soft internet
                aesthetics — giving your Discord username, bio, or message a dreamy, minimal, or retro feel.
                Every aesthetic font for Discord on this page is free to copy instantly.
              </p>
              <p>
                Top <strong className="text-[#e3e5f5]">aesthetic fonts for Discord</strong>:
              </p>
              <ul className="list-none space-y-2.5 pl-0">
                {[
                  { name: 'Vaporwave — Ｖａｐｏｒｗａｖｅ',   desc: 'Fullwidth Unicode — the defining aesthetic discord font. Perfect for discord usernames and bios.' },
                  { name: 'Spaced — S p a c e d',              desc: 'Letter-spaced aesthetic text. Minimal, clean, great for discord bio fonts.' },
                  { name: 'Sparkle — S✦p✦a✦r✦k✦l✦e',          desc: 'Sparkle-separated fancy text for discord. Magical, eye-catching.' },
                  { name: 'Stars — ★ Discord ★',               desc: 'Star-wrapped discord fancy text. Popular for discord status messages.' },
                  { name: 'Hearts — ♡ Discord ♡',              desc: 'Heart-wrapped aesthetic discord font. Ideal for cute discord bios.' },
                ].map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">▸</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.name}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                This <strong className="text-[#e3e5f5]">Discord font generator</strong> has 25+ aesthetic
                fonts for Discord — more than any other discord text generator. Filter by the{' '}
                <strong className="text-[#e3e5f5]">Aesthetic</strong> category above to browse them all.
              </p>
            </div>
          </section>

          {/* ── How to Use Discord Fonts ── */}
          <section
            aria-labelledby="how-to-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="how-to-heading" className="text-2xl font-bold text-white mb-4">
              How to Use Discord Fonts
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Using this <strong className="text-[#e3e5f5]">Discord font generator</strong> to get fancy
                text for Discord takes under 10 seconds:
              </p>
              <ol className="space-y-3 list-none">
                {[
                  {
                    n: '1',
                    title: 'Type your Discord text',
                    body: 'Enter your discord username, discord nickname, bio text, or message into the input box. The discord font generator converts your text across all 160+ discord fonts in real time — no need to press enter.',
                  },
                  {
                    n: '2',
                    title: 'Pick a discord font style',
                    body: 'Browse the discord font grid or search by name. Filter by category — Aesthetic, Gothic, Gaming, Cute, Anime, Cyberpunk, and more. Click any card to instantly preview that discord font in the live Discord preview (message, username, bio, profile views).',
                  },
                  {
                    n: '3',
                    title: 'Copy your fancy Discord text',
                    body: 'Hit Copy on any discord font card to copy the fancy text for discord to your clipboard. Open Discord, go to your username, bio, or message box, and paste with Ctrl+V (Windows) or Cmd+V (Mac). Done — your cool discord font is live.',
                  },
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

          {/* ── Discord Username Font Generator ── */}
          <section
            aria-labelledby="username-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="username-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Discord Username Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Your Discord username is the first thing people see. A unique{' '}
                <strong className="text-[#e3e5f5]">discord username font</strong> makes you instantly
                recognizable across servers, friend lists, and DMs. This{' '}
                <strong className="text-[#e3e5f5]">discord username font generator</strong> shows a live
                preview of exactly how your name looks inside Discord — before you copy a single character.
              </p>
              <p>
                The best <strong className="text-[#e3e5f5]">discord username fonts</strong> are compact
                one-to-one character maps that don&apos;t add spaces or decorators. Top picks for
                discord nickname fonts:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { style: '𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟',   reason: 'Strong, confident — the #1 discord username font for serious profiles.' },
                  { style: '𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽', reason: 'Elegant cursive — the top aesthetic discord font for usernames.' },
                  { style: 'ꜱᴍᴀʟʟ ᴄᴀᴩꜱ',   reason: 'Subtle small caps — looks professional, works as a discord nickname font.' },
                  { style: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',       reason: 'Dark gothic — the go-to cool discord font for gaming personas.' },
                  { style: 'Ｖａｐｏｒｗａｖｅ', reason: 'Wide fullwidth — the iconic aesthetic discord username font.' },
                  { style: 'ⓑⓤⓑⓑⓛⓔ',       reason: 'Circled bubble letters — fun, eye-catching discord nickname font.' },
                ].map((item) => (
                  <div key={item.style} className="bg-[#13141f] rounded-lg p-3 border border-[#2e3147]">
                    <p className="text-[#e3e5f5] text-base mb-0.5">{item.style}</p>
                    <p className="text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
              <p>
                Click the <strong className="text-[#e3e5f5]">👤 Username</strong> tab in the live Discord
                preview to see your <strong className="text-[#e3e5f5]">discord username font</strong> exactly
                as it appears on a real Discord profile card.
              </p>
            </div>
          </section>

          {/* ── Discord Bio Font Generator ── */}
          <section
            aria-labelledby="bio-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="bio-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Discord Bio Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Your Discord bio is 190 characters of prime real estate to express your personality.
                Stylish <strong className="text-[#e3e5f5]">discord bio fonts</strong> make your profile
                stand out every time someone clicks to view it. This{' '}
                <strong className="text-[#e3e5f5]">discord bio font generator</strong> has a dedicated
                live bio preview so you can see your fancy text for discord exactly as it appears in the
                About Me section — before you copy it.
              </p>
              <p>
                Best <strong className="text-[#e3e5f5]">discord bio fonts</strong> for longer text:
              </p>
              <ul className="list-none space-y-2.5">
                {[
                  { style: 'Script & Bold Script', desc: '𝒮𝒸𝓇𝒾𝓅𝓉 — flowing cursive discord bio font for quotes, taglines, and aesthetic bios.' },
                  { style: 'Italic',               desc: '𝐼𝑡𝑎𝑙𝑖𝑐 — clean, readable discord font for bio that adds subtle style without overdoing it.' },
                  { style: 'Vaporwave',            desc: 'Ａｅｓｔｈｅｔｉｃ — fullwidth aesthetic discord font for bio, strong vaporwave statement.' },
                  { style: 'Anime Sparkle',         desc: '✨𝓐𝓷𝓲𝓶𝓮✨ — sparkle-wrapped bold script discord bio font for kawaii and anime profiles.' },
                  { style: 'Small Caps',            desc: 'ꜱᴍᴀʟʟ ᴄᴀᴩꜱ — compact discord bio font that works great for short punchy bios.' },
                ].map((item) => (
                  <li key={item.style} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">▸</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.style}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Use the <strong className="text-[#e3e5f5]">📝 Bio</strong> and{' '}
                <strong className="text-[#e3e5f5]">🖼️ Profile</strong> tabs in the live Discord preview
                to audition every <strong className="text-[#e3e5f5]">discord bio font</strong> before
                copying your fancy text for discord.
              </p>
            </div>
          </section>

          {/* ── Glitch Text & Vaporwave ── */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Glitch Text Discord</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed mb-4">
                The <strong className="text-[#e3e5f5]">glitch text discord</strong> style (Zalgo) uses combining characters to create a corrupted look. It&apos;s perfect for horror themes, edgy bios, and grabbing attention in busy channels. Our generator offers several levels of glitch intensity.
              </p>
            </div>
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Vaporwave Text Generator</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed mb-4">
                Create the iconic <strong className="text-[#e3e5f5]">vaporwave text</strong> look with full-width characters. This aesthetic style (Ａｅｓｔｈｅｔｉｃ) is a staple of Discord profile design, providing a clean yet retro-futuristic vibe for usernames and channel titles.
              </p>
            </div>
          </section>

          {/* Ad: mid-content */}
          <div className="flex justify-center mb-10">
            <AdSlot slotId={adsConfig.slots.fontContentMid} width={728} height={90} />
          </div>

          {/* ── How Unicode fonts work ── */}
          <section
            aria-labelledby="unicode-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="unicode-heading" className="text-2xl font-bold text-white mb-4">
              How Unicode Fonts Work in Discord
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord has no built-in <strong className="text-[#e3e5f5]">discord font changer</strong>.
                The platform renders all text using a fixed system font. A{' '}
                <strong className="text-[#e3e5f5]">discord text generator</strong> like this one works
                around that limitation using the Unicode Standard — the universal character encoding system
                that every modern device supports. Instead of changing fonts (which Discord blocks), a
                discord font generator substitutes each letter with a styled Unicode lookalike that looks
                like a different font.
              </p>
              <p>
                The <em className="text-[#e3e5f5]">Mathematical Alphanumeric Symbols</em> block
                (U+1D400–U+1D7FF) alone gives us bold, italic, bold-italic, script, bold-script, fraktur,
                bold-fraktur, double-struck, sans-serif, bold-sans, italic-sans, bold-italic-sans, and
                monospace variants of every Latin letter — all usable as{' '}
                <strong className="text-[#e3e5f5]">fonts for Discord</strong>. These are the backbone of
                every serious <strong className="text-[#e3e5f5]">discord font generator</strong>.
              </p>
              <p>
                Other Unicode blocks that power cool discord fonts and fancy text for discord:
              </p>
              <ul className="list-none space-y-2">
                {[
                  { range: 'U+24B6–U+24FF', name: 'Enclosed Alphanumerics', desc: 'Circled letters — powers Bubble discord fonts (ⓐⓑⓒ)' },
                  { range: 'U+FF01–U+FF60', name: 'Fullwidth Latin',         desc: 'Wide characters — powers Vaporwave aesthetic discord fonts (ａｂｃ)' },
                  { range: 'U+0300–U+036F', name: 'Combining Diacriticals',  desc: 'Stacked marks — powers Glitch / Zalgo discord fonts' },
                  { range: 'U+1D00–U+1D7F', name: 'Phonetic Extensions',     desc: 'Small caps — powers Small Caps discord fonts (ꜱᴍᴀʟʟ)' },
                  { range: 'U+1F130–U+1F169',name: 'Enclosed Alphas',        desc: 'Squared and Filled Bubble discord fonts (🅐🅑🅒)' },
                ].map((item) => (
                  <li key={item.range} className="flex gap-3">
                    <code className="text-[#5865F2] font-mono text-xs shrink-0 pt-0.5">{item.range}</code>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.name}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Because all <strong className="text-[#e3e5f5]">discord fonts</strong> generated here are
                genuine Unicode characters, they also work as fancy text for Instagram, Twitter/X, TikTok,
                YouTube, Reddit, and every other platform that supports Unicode — which is everywhere.
              </p>
            </div>
          </section>

          {/* ── Discord text formatting guide ── */}
          <section
            aria-labelledby="formatting-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="formatting-heading" className="text-2xl font-bold text-white mb-4">
              Discord Text Formatting Guide
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord also has its own Markdown-based{' '}
                <strong className="text-[#e3e5f5]">discord text formatting</strong> system. Combining
                Discord&apos;s native markdown with <strong className="text-[#e3e5f5]">fancy text for Discord</strong>{' '}
                from this discord font generator gives you even more options for your messages:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#13141f] text-[#e3e5f5]">
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Discord Markdown</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Effect</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold hidden sm:table-cell">Works in</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2e3147]">
                    {[
                      { syntax: '**text**',        effect: 'Bold',          works: 'Messages, bios' },
                      { syntax: '*text*',           effect: 'Italic',        works: 'Messages, bios' },
                      { syntax: '__text__',         effect: 'Underline',     works: 'Messages only' },
                      { syntax: '~~text~~',         effect: 'Strikethrough', works: 'Messages only' },
                      { syntax: '||text||',         effect: 'Spoiler',       works: 'Messages only' },
                      { syntax: '`text`',           effect: 'Inline code',   works: 'Messages only' },
                      { syntax: '> text',           effect: 'Block quote',   works: 'Messages only' },
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
              <p>
                <strong className="text-[#e3e5f5]">Key difference:</strong>{' '}
                Discord Markdown bold/italic only works in messages. But{' '}
                <strong className="text-[#e3e5f5]">discord fonts</strong> from this discord font generator
                work everywhere — usernames, bios, server names, role names, and messages — because they are
                Unicode characters, not Discord formatting codes. That is the real power of a proper{' '}
                <strong className="text-[#e3e5f5]">discord text generator</strong>.
              </p>
            </div>
          </section>

          {/* Ad: above FAQ */}
          <div className="flex justify-center mb-10">
            <AdSlot slotId={adsConfig.slots.fontAboveFaq} width={728} height={90} />
          </div>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-4">
              Frequently Asked Questions — Discord Font Generator
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
