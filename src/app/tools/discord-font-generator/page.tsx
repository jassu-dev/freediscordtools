import type { Metadata } from 'next';
import FontGenerator from '@/components/tools/FontGenerator';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

// â”€â”€â”€ Metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€âexport const metadata: Metadata = {
  title: 'Discord Font Generator â€” Copy & Paste Aesthetic Discord Fonts',
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
    title: 'Discord Font Generator â€” Copy & Paste Aesthetic Discord Fonts',
    description:
      'Generate 160+ fancy fonts for Discord instantly. Custom Discord fonts, aesthetic Discord fonts, discord bio fonts, and discord nickname styles â€” live preview, copy and paste, free.',
    url: `${seoConfig.baseUrl}/tools/discord-font-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: seoConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Discord Font Generator â€” Copy & Paste Aesthetic Discord Fonts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Font Generator â€” Copy & Paste Aesthetic Discord Fonts',
    description:
      'Change your default Discord font. Generate aesthetic, gothic, gaming, cute, and glitch discord fonts with live preview. Copy and paste instantly.',
    site: seoConfig.twitterHandle,
  },
};

// â”€â”€â”€ FAQ data â€” keyword-dense Q&A â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const faqItems = [
  {
    question: 'How do I change my Discord font?',
    answer:
      'To change your default Discord font, you must use an online Discord font generator. Since Discord does not offer direct font settings, you type your text into a generator, which converts the characters into styled Unicode glyphs. You then copy and paste the generated text directly into Discord usernames, bios, nicknames, or chat messages.',
  },
  {
    question: 'What is a Discord font generator?',
    answer:
      'A Discord font generator is a free browser utility that converts standard text into fancy fonts for Discord. By mapping Latin letters to mathematical and decorative Unicode symbol blocks, the generator creates styled text (like bold, italic, gothic, script, bubble, or glitch) that Discord can render natively on all devices.',
  },
  {
    question: 'How do custom Discord fonts work?',
    answer:
      'Discord fonts work using Unicode character encoding. The generator replaces default keyboard letters with unique Unicode glyphs, such as mapping A to ð€ (bold serif) or ð’œ (mathematical script). Because these are actual Unicode characters rather than stylesheet classes, they display as fancy text on Windows, Mac, iOS, Android, and web clients.',
  },
  {
    question: 'Can I use a custom Discord font for my username or nickname?',
    answer:
      'Yes. Custom Discord username fonts and discord nickname fonts are fully supported. You can copy the generated text and paste it into your Display Name, Username, or Server Nickname settings. Compact styles like Bold (ðð¨ð¥ð), Small Caps (êœ±á´á´€ÊŸÊŸ), or Monospace (ð™¼ðš˜ðš—ðš˜) are recommended for readability.',
  },
  {
    question: 'What are the best Discord bio fonts?',
    answer:
      'The best discord bio fonts are styles that remain legible in full sentences. Popular options include Bold Script (ð“•ð“ªð“·ð“¬ð”‚) for elegance, Italic (ð¼ð‘¡ð‘Žð‘™ð‘–ð‘) for emphasis, and Spaced (S p a c e d) for a minimal aesthetic look. Use our live profile simulator to preview how your bio font looks before applying it.',
  },
  {
    question: 'Are Discord fonts safe to copy and paste?',
    answer:
      'Yes. Copying and pasting fonts from this Discord font generator is 100% safe. Since the generator outputs standard Unicode characters, it does not modify your Discord client files, does not require a custom client like BetterDiscord, and is fully compliant with Discord Terms of Service.',
  },
  {
    question: 'Why do some Discord fonts show as empty boxes or question marks?',
    answer:
      'If a Discord font displays as a question mark or an empty box (known as a "tofu"), it means your current device or operating system does not have the specific Unicode character set installed in its system font. This typically happens on older versions of Windows, Android, or Linux.',
  },
  {
    question: 'Do Discord fonts work on mobile devices?',
    answer:
      'Yes. All fancy text for Discord generated by this tool works perfectly on mobile Discord apps (iOS and Android). Since it converts your characters into native Unicode glyphs, your custom font will render identically for mobile users and desktop users.',
  },
  {
    question: 'Can I use fancy fonts in Discord channel names and server topics?',
    answer:
      'Yes. You can use these fonts in server names, category names, channel topics, role names, and text channels. Server owners frequently use this discord text generator to style their channels and category headers to give their server a cleaner visual organization.',
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

          {/* â”€â”€ H1 â”€â”€ */}
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Discord Font Generator
            </h1>
            <p className="text-base md:text-lg text-[#8b8fa8] leading-relaxed max-w-3xl">
              Welcome to the ultimate free <strong className="text-white">Discord font generator</strong>. If you are looking to customize your profiles, stand out in server chats, or change your default <strong className="text-white">Discord font</strong>, you are in the right place. Our online tool converts plain text into <strong>160+ fancy Discord fonts</strong> instantly. Generate <strong className="text-[#7289da]">aesthetic Discord fonts</strong>, <strong className="text-[#7289da]">cool Discord fonts</strong>, and custom nicknames with one-click copy and paste.
            </p>
            <p className="bg-[#1e2030] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#8b8fa8] mt-4">
              Want to create a stunning profile? Read our <a href="/blog/aesthetic-discord-profile-guide/" className="text-[#5865F2] font-bold hover:underline">Aesthetic Discord Profile Guide</a>.
            </p>
          </header>

          {/* â”€â”€ Tool â”€â”€ */}
          <section aria-labelledby="tool-section-heading" className="mb-8">
            <h2 id="tool-section-heading" className="sr-only">Discord Font Generator Tool</h2>
            <FontGenerator />
          </section>

          {/* â”€â”€ Fancy Discord Fonts â”€â”€ */}
          <section
            aria-labelledby="fancy-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="fancy-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Fancy Discord Fonts & Text Changer
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                A <strong className="text-[#e3e5f5]">Discord font changer</strong> or generator uses Unicode symbol tables to create styled characters. When you write a message, update your bio, or customize a channel name, this <strong className="text-[#e3e5f5]">Discord font generator</strong> substitutes standard alphanumeric keys with fancy text glyphs, giving the visual appearance of a custom <strong className="text-[#e3e5f5]">Discord font</strong> without breaking platform readability.
              </p>
              <p>
                Because these fancy fonts for Discord use official Unicode standards, they render identically on Windows, Mac, iOS, Android, and web browsers. Your server members and friends will see the same cool Discord fonts you chose, ensuring your profile brand stays consistent everywhere.
              </p>
              <p>
                The most popular fancy Discord fonts in 2026 are <strong className="text-[#e3e5f5]">Bold Serif (ðð¨ð¥ð)</strong>, <strong className="text-[#e3e5f5]">Bold Script (ð“‘ð“¸ð“µð“­)</strong>, <strong className="text-[#e3e5f5]">Gothic / Fraktur (ð”‰ð”¯ð”žð”¨ð”±ð”²ð”¯)</strong>, <strong className="text-[#e3e5f5]">Vaporwave (ï¼¶ï½ï½ï½ï½’)</strong>, and <strong className="text-[#e3e5f5]">Glitch / Zalgo</strong> text. Filter by categories above to browse styles that match your exact gaming or aesthetic preference.
              </p>
            </div>
          </section>

          {/* â”€â”€ Aesthetic Fonts for Discord â”€â”€ */}
          <section
            aria-labelledby="aesthetic-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="aesthetic-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Aesthetic Discord Fonts & Spacing Styles
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                An <strong className="text-[#e3e5f5]">aesthetic Discord font</strong> is the most common way users customize their bio cards and Display Names. These styles draw inspiration from vaporwave, minimal lo-fi layouts, and cute layouts. Every aesthetic font for Discord on this page is free to generate, copy, and paste instantly.
              </p>
              <p>
                Popular <strong className="text-[#e3e5f5]">aesthetic Discord fonts</strong>:
              </p>
              <ul className="list-none space-y-2.5 pl-0">
                {[
                  { name: 'Vaporwave â€” ï¼¶ï½ï½ï½ï½’ï½—ï½ï½–ï½…',   desc: 'Fullwidth Unicode letters â€” the ultimate aesthetic discord font for usernames.' },
                  { name: 'Spaced â€” S p a c e d',              desc: 'Clean letter-spaced formatting, perfect for subtitle headers in discord bio fonts.' },
                  { name: 'Sparkle â€” Sâœ¦pâœ¦aâœ¦râœ¦kâœ¦lâœ¦e',          desc: 'Sparkle-separated fancy text for discord, designed for announcements.' },
                  { name: 'Stars â€” â˜… Discord â˜…',               desc: 'Star-wrapped decorative styles for custom server channel labels.' },
                  { name: 'Hearts â€” â™¡ Discord â™¡',              desc: 'Cute heart-accented aesthetic discord font ideal for gaming profiles.' },
                ].map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">â–¸</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.name}</strong> â€” {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Our <strong className="text-[#e3e5f5]">Discord font generator</strong> hosts over 25+ distinct aesthetic variations. Simply select the <strong>Aesthetic</strong> tab above the grid to see them all.
              </p>
            </div>
          </section>

          {/* â”€â”€ How to Use Discord Fonts â”€â”€ */}
          <section
            aria-labelledby="how-to-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="how-to-heading" className="text-2xl font-bold text-white mb-4">
              How to Use the Discord Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Changing your default <strong className="text-[#e3e5f5]">Discord fonts</strong> takes just a few steps:
              </p>
              <ol className="space-y-3 list-none">
                {[
                  {
                    n: '1',
                    title: 'Type your Discord text',
                    body: 'Enter your discord username, discord nickname, bio text, or message into the input box. The discord font generator converts your text across all 160+ discord fonts in real time â€” no need to press enter.',
                  },
                  {
                    n: '2',
                    title: 'Pick a discord font style',
                    body: 'Browse the discord font grid or search by name. Filter by category â€” Aesthetic, Gothic, Gaming, Cute, Anime, Cyberpunk, and more. Click any card to instantly preview that discord font in the live Discord preview (message, username, bio, profile views).',
                  },
                  {
                    n: '3',
                    title: 'Copy and paste your fancy Discord text',
                    body: 'Hit Copy on any discord font card to copy the fancy text for discord to your clipboard. Open Discord, go to your username, bio, or message box, and paste with Ctrl+V (Windows) or Cmd+V (Mac). Done â€” your cool discord font is live.',
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

          {/* â”€â”€ Discord Username Font Generator â”€â”€ */}
          <section
            aria-labelledby="username-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="username-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Discord Nickname & Username Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Your Discord display name is your first impression. A customized <strong className="text-[#e3e5f5]">Discord username font</strong> makes your account instantly memorable. This <strong className="text-[#e3e5f5]">discord nickname generator</strong> features a live mockup preview so you can check your text layout before saving changes.
              </p>
              <p>
                For nicknames, it is best to use compact fonts without wide spaces or complex decorators. Here are top-rated discord nickname fonts:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { style: 'ðð¨ð¥ð ð’ðžð«ð¢ðŸ',   reason: 'Highly readable and thick â€” the #1 discord username font.' },
                  { style: 'ð”‰ð”¯ð”žð”¨ð”±ð”²ð”¯',       reason: 'Dark gothic styling â€” the classic choice for gaming profiles.' },
                  { style: 'êœ±á´á´€ÊŸÊŸ á´„á´€á´©',   reason: 'Clean capital letters shrunk down â€” subtle yet custom.' },
                  { style: 'ï¼¶ï½ï½ï½ï½’ï½—ï½ï½–ï½…', reason: 'Spaced out fullwidth letters â€” the iconic lo-fi discord font.' },
                  { style: 'â“‘â“¤â“‘â“‘â“›â“”',       reason: 'Circled bubble numbers and letters â€” cute, friendly look.' },
                  { style: 'ð™¼ðš˜ðš—ðš˜ðšœðš™ðšŠðšŒðšŽ',    reason: 'Code typewriter design â€” great for programmers and developers.' },
                ].map((item) => (
                  <div key={item.style} className="bg-[#13141f] rounded-lg p-3 border border-[#2e3147]">
                    <p className="text-[#e3e5f5] text-base mb-0.5">{item.style}</p>
                    <p className="text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
              <p>
                Use the <strong className="text-[#e3e5f5]">ðŸ‘¤ Username</strong> tab in the live mockup preview to confirm readability of your new nickname.
              </p>
            </div>
          </section>

          {/* â”€â”€ Discord Bio Font Generator â”€â”€ */}
          <section
            aria-labelledby="bio-fonts-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="bio-fonts-heading" className="text-2xl font-bold text-white mb-4">
              Aesthetic Discord Bio Font Generator
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord grants users 190 characters in the About Me section. Selecting a custom <strong className="text-[#e3e5f5]">discord bio font</strong> makes your profile stand out during mouse hover actions. This dedicated <strong className="text-[#e3e5f5]">discord bio font generator</strong> allows you to preview layout margins and space limits before applying the copy-paste action.
              </p>
              <p>
                Top font styles for longer descriptions:
              </p>
              <ul className="list-none space-y-2.5">
                {[
                  { style: 'Script & Bold Script', desc: 'ð’®ð’¸ð“‡ð’¾ð“…ð“‰ â€” elegant cursive flow, excellent for quotes.' },
                  { style: 'Italic Serif',         desc: 'ð¼ð‘¡ð‘Žð‘™ð‘–ð‘ â€” highly legible, clean accenting for sentences.' },
                  { style: 'Vaporwave Style',      desc: 'ï¼¡ï½…ï½“ï½”ï½ˆï½…ï½”ï½‰ï½ƒ â€” wide space layout, sets a distinct retro vibe.' },
                  { style: 'Small Caps',            desc: 'êœ±á´á´€ÊŸÊŸ á´„á´€á´©êœ± â€” structured block layout that maximizes character limits.' },
                ].map((item) => (
                  <li key={item.style} className="flex gap-3">
                    <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">â–¸</span>
                    <span>
                      <strong className="text-[#e3e5f5]">{item.style}</strong> â€” {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Toggle the <strong className="text-[#e3e5f5]">ðŸ“ Bio</strong> tab in our preview simulator to inspect paragraph alignments.
              </p>
            </div>
          </section>

          {/* â”€â”€ Glitch Text & Vaporwave â”€â”€ */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Glitch Text Discord Font</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed mb-4">
                The <strong className="text-[#e3e5f5]">glitch text discord font</strong> (also called Zalgo text) overlays combining marks to create corrupted, glitching letter effects. It is a trending choice for cyberpunk and gaming profiles.
              </p>
            </div>
            <div className="bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]">
              <h2 className="text-xl font-bold text-white mb-3">Vaporwave Discord Font Changer</h2>
              <p className="text-[#8b8fa8] text-sm leading-relaxed mb-4">
                Our <strong className="text-[#e3e5f5]">vaporwave discord font changer</strong> outputs wide full-width Unicode characters. This classic aesthetic is a standard tool for designing visually clean server lists and usernames.
              </p>
            </div>
          </section>

          {/* â”€â”€ How Unicode fonts work â”€â”€ */}
          <section
            aria-labelledby="unicode-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="unicode-heading" className="text-2xl font-bold text-white mb-4">
              How a Discord Font Generator Works Under the Hood
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                Discord renders characters using fixed system fonts. A <strong className="text-[#e3e5f5]">discord font generator</strong> bypasses this limitation by converting plain letters into unique code representations defined in the **Unicode Standard**. Rather than changing font families, the tool replaces standard keyboard keys with visual matches from Unicode mathematical, gothic, or circled character blocks.
              </p>
              <p>
                Because these characters are standard Unicode mappings, they are natively supported by all modern operating systems. Your custom Discord font will load successfully in client chats, profile cards, and direct messages without requiring users to download additional files or scripts.
              </p>
            </div>
          </section>

          {/* â”€â”€ Discord text formatting guide â”€â”€ */}
          <section
            aria-labelledby="formatting-heading"
            className="mb-10 bg-[#1e2030] rounded-2xl p-6 border border-[#2e3147]"
          >
            <h2 id="formatting-heading" className="text-2xl font-bold text-white mb-4">
              Native Discord Font Formatting (Markdown)
            </h2>
            <div className="text-[#8b8fa8] space-y-4 leading-relaxed text-base">
              <p>
                You can combine your custom <strong className="text-[#e3e5f5]">discord font</strong> selections with Discord's built-in Markdown elements to build advanced message layouts:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#13141f] text-[#e3e5f5]">
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Markdown Code</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">Visual Effect</th>
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold hidden sm:table-cell">Works in</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2e3147]">
                    {[
                      { syntax: '**text**',        effect: 'Bold Style',          works: 'Messages, bios' },
                      { syntax: '*text*',           effect: 'Italic Style',        works: 'Messages, bios' },
                      { syntax: '__text__',         effect: 'Underline Accent',    works: 'Messages only' },
                      { syntax: '~~text~~',         effect: 'Strikethrough',       works: 'Messages only' },
                      { syntax: '||text||',         effect: 'Spoiler Cover',       works: 'Messages only' },
                      { syntax: '`text`',           effect: 'Monospace Box',       works: 'Messages only' },
                      { syntax: '> text',           effect: 'Indented Quote',      works: 'Messages only' },
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
                <strong className="text-[#e3e5f5]">Please Note:</strong> Native Markdown formatting rules apply only to server messages. If you want to use styled text in usernames, nicknames, status lines, or server category name fields, you must use our <strong className="text-[#e3e5f5]">discord font generator</strong>.
              </p>
            </div>
          </section>

          {/* â”€â”€ FAQ â”€â”€ */}
          <section aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="text-2xl font-bold text-white mb-4">
              FAQs About Discord Fonts & Generator Options
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
}
