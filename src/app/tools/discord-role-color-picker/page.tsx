import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';
import DiscordColorPicker from '@/components/tools/DiscordColorPicker';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'What colors can I use for Discord roles?',
    answer:
      'Discord roles support any valid hex color code — all 16.7 million hex colors are valid. However, certain colors render better on Discord\'s dark and light themes. Our Discord role color picker shows you a curated selection of the most popular and readable colors, including all official Discord brand colors.',
  },
  {
    question: 'What are the Discord default role colors?',
    answer:
      'Discord\'s default role color is grey (#99AAB5 or no color assigned). The Discord brand color palette includes Blurple (#5865F2), Green (#57F287), Yellow (#FEE75C), Fuchsia (#EB459E), and Red (#ED4245). These are the official colors used in Discord\'s own UI.',
  },
  {
    question: 'How do I change a Discord role color?',
    answer:
      'To change a Discord role color: Open your server Settings → Roles → select the role you want to edit. In the "Role Color" section, click on the color swatch to open the color picker. You can either pick a preset or enter a custom hex code. Use our tool to find the perfect color and copy its hex code directly into Discord.',
  },
  {
    question: 'What is a Discord role color hex code?',
    answer:
      'A Discord role color hex code is a 6-character alphanumeric code that represents a specific color using the RGB color model. For example, #5865F2 is Discord\'s signature Blurple color. You enter this hex code into the Discord role color editor to apply it to any role.',
  },
  {
    question: 'What is the Discord decimal color format?',
    answer:
      'The Discord API uses decimal integers instead of hex strings to represent colors. For example, #5865F2 (Discord Blurple) equals 5793266 in decimal. If you are setting role colors via the Discord API or a bot like Discord.js, you need the decimal value. Our color picker automatically provides both the hex code and the decimal equivalent.',
  },
  {
    question: 'Can I use white (#FFFFFF) as a Discord role color?',
    answer:
      'Yes, you can use white (#FFFFFF) as a Discord role color. On Discord\'s dark theme, white role names appear clearly. On light theme, it may be harder to read. Consider your server\'s primary theme when choosing role colors — our color picker includes a live preview to help you decide.',
  },
  {
    question: 'What Discord role color shows up the best?',
    answer:
      'Colors with high contrast against Discord\'s dark background (#36393F) show up best. Bright and vivid colors like Discord Blurple (#5865F2), Gold (#FFD700), Lime Green (#32CD32), and Hot Pink (#FF69B4) are consistently popular because they pop on dark backgrounds. Avoid very dark colors like Navy or Dark Red as they may be difficult to read.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Role Color Picker — Discord Color Codes & Hex Colors',
  description:
    'Free Discord role color picker with 40+ preset colors. Find the perfect Discord role color hex code, copy it instantly, and get the decimal value for Discord bots. Includes all official Discord colors.',
  keywords: [
    'discord role color picker',
    'discord color picker',
    'discord role colors',
    'discord color codes',
    'discord hex colors',
    'discord hex color codes',
    'discord colour picker',
    'discord role color hex',
    'discord colors',
    'discord color hex code',
    'discord role color list',
    'discord blurple hex',
    'discord colors list',
    'discord default role color',
    'discord color palette',
    'discord role color changer',
    'good discord role colors',
    'best discord role colors',
    'discord color name',
    'discord color decimal',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-role-color-picker/`,
  },
  openGraph: {
    title: 'Discord Role Color Picker — Discord Color Codes & Hex Colors',
    description:
      'Find the perfect Discord role color with our free color picker. 40+ curated presets, custom hex input, and instant copy of hex codes and decimal values.',
    url: `${seoConfig.baseUrl}/tools/discord-role-color-picker/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Role Color Picker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Role Color Picker — Discord Color Codes & Hex Colors',
    description:
      'The best free Discord role color picker. Browse 40+ presets, use a custom hex, and copy the color code instantly — no signup needed.',
    site: seoConfig.twitterHandle,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-role-color-picker/`;

export default function DiscordRoleColorPickerPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Role Color Picker"
        description="Free Discord role color picker with 40+ preset colors. Find the perfect hex code for Discord roles and get the decimal color value for bots."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Role Color Picker', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Role Color Picker & Color Codes
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Find the perfect <strong>Discord role color</strong> with our free <strong>Discord color picker</strong>. Browse 40+ curated <strong>Discord color codes</strong>, enter a custom hex, and copy the hex code or decimal value instantly — ideal for <strong>Discord server admins and bot developers</strong>.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Role Color Picker Tool</h2>
          <DiscordColorPicker />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Change a Discord Role Color
          </h2>
          <div className="text-base text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Changing a <strong>Discord role color</strong> is quick and easy. Here is how to apply a custom <strong>Discord color hex code</strong> to your server roles:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Pick Your Color Above', body: 'Browse the curated color presets or enter your own custom hex code. The live preview shows exactly how the color will look on a dark background, similar to Discord\'s dark theme.' },
                { step: '2', title: 'Copy the Hex Code', body: 'Click the hex code row in the "Color Values" panel to copy it to your clipboard. If you\'re building a Discord bot, copy the decimal value instead.' },
                { step: '3', title: 'Apply in Discord Role Settings', body: 'Go to your server Settings → Roles → select the role. Click the color swatch in the "Role Color" section and paste your hex code into the custom color field. Save changes.' },
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
            Complete Guide to Discord Color Codes
          </h2>
          <p>
            <strong>Discord color codes</strong> use the standard hex color format — a hash symbol followed by six hexadecimal characters representing the red, green, and blue channels. Discord&apos;s role color editor accepts all 16.7 million valid hex colors, giving you complete freedom to customize your server&apos;s look.
          </p>
          <p>
            Our <strong>Discord color picker</strong> saves you time by providing ready-to-copy hex codes for the most popular and readable <strong>Discord role colors</strong>. We curate colors that look great on both Discord&apos;s dark and light themes, so your role hierarchy always looks polished.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Official Discord Brand Colors</h3>
          <div className="overflow-x-auto rounded-xl border border-[#E3E6F0]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Color</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Name</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Hex Code</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Decimal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6F0]">
                {[
                  { name: 'Discord Blurple', hex: '#5865F2', dec: '5793266' },
                  { name: 'Discord Green',   hex: '#57F287', dec: '5763719' },
                  { name: 'Discord Yellow',  hex: '#FEE75C', dec: '16705372' },
                  { name: 'Discord Fuchsia', hex: '#EB459E', dec: '15418782' },
                  { name: 'Discord Red',     hex: '#ED4245', dec: '15548997' },
                ].map((row) => (
                  <tr key={row.hex}>
                    <td className="px-4 py-2">
                      <span className="inline-block w-5 h-5 rounded-md border border-gray-200" style={{ backgroundColor: row.hex }} />
                    </td>
                    <td className="px-4 py-2 font-medium text-[#1a1d2e]">{row.name}</td>
                    <td className="px-4 py-2 font-mono text-[#5865F2]">{row.hex}</td>
                    <td className="px-4 py-2 font-mono">{row.dec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Popular Discord Role Color Ideas by Server Theme</h3>
          <p>
            The best <strong>Discord role colors</strong> are chosen to match your server&apos;s overall theme and create a clear visual hierarchy. Here are the most popular color schemes for common server types:
          </p>
          <div className="space-y-3 not-prose">
            {[
              { theme: '🎮 Gaming Servers', colors: ['#5865F2 (Blurple) for Admin', '#57F287 (Green) for Moderators', '#FEE75C (Yellow) for VIP Members', '#ED4245 (Red) for Announcements'] },
              { theme: '🎨 Art & Creative Servers', colors: ['#EB459E (Fuchsia) for Artist roles', '#9370DB (Medium Purple) for Featured Artist', '#FFD700 (Gold) for Server Partners', '#40E0D0 (Turquoise) for Members'] },
              { theme: '📚 Study & Academic Servers', colors: ['#4169E1 (Royal Blue) for Staff', '#32CD32 (Lime Green) for Tutors', '#F0E68C (Khaki) for Students', '#C0C0C0 (Silver) for Newcomers'] },
              { theme: '🎵 Music & Entertainment', colors: ['#DC143C (Crimson) for VIPs', '#FF69B4 (Hot Pink) for Booster roles', '#1E90FF (Dodger Blue) for DJ roles', '#FFD700 (Gold) for Moderators'] },
            ].map(({ theme, colors }) => (
              <div key={theme} className="bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] p-4">
                <p className="font-bold text-[#1a1d2e] text-sm mb-2">{theme}</p>
                <ul className="text-xs text-[#5b6282] space-y-1 list-disc pl-4">
                  {colors.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Discord Color Decimal for Bot Developers</h3>
          <p>
            If you are using the <strong>Discord API</strong> or a bot library like <strong>Discord.js</strong>, <strong>discord.py</strong>, or <strong>JDA</strong>, role colors must be specified as decimal integers rather than hex strings. For example, Discord Blurple <code>#5865F2</code> is <code>5793266</code> in decimal. Our picker automatically converts any selected color to its decimal equivalent, making <strong>bot development faster and error-free</strong>.
          </p>
          <p>
            In Discord.js, you would set a role color like this: <code>role.setColor(0x5865F2)</code> or <code>role.setColor(5793266)</code>. Both the hex integer prefix format and decimal integer format work in the Discord API. Our tool provides both so you can use whichever your library requires.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">How to Create a Visual Role Hierarchy with Colors</h3>
          <p>
            Color psychology plays a real role in how members perceive authority and rank in a Discord server. A well-designed <strong>Discord role color</strong> hierarchy makes it immediately clear who has what permissions and status:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Top-tier roles (Owner, Admin):</strong> Use the most vibrant and unique colors — Discord Blurple, Crimson Red, or Gold. These should be instantly recognizable and never reused for other roles.</li>
            <li><strong>Mid-tier roles (Moderators, Staff):</strong> Choose cooler or complementary colors — Royal Blue, Sea Green, or Medium Purple. Visually distinct from admin but still clearly above members.</li>
            <li><strong>Membership levels (VIP, Booster, Regular):</strong> Use warmer or softer tones — Salmon, Sandy Brown, Orchid. These reward long-term members without visually competing with staff.</li>
            <li><strong>Base member roles:</strong> Light grey (#D3D3D3) or Silver (#C0C0C0) are classic choices — readable but humble.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Best Practices for Discord Role Colors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Use high-contrast colors for important roles.</strong> Admin, Moderator, and Staff roles should use colors that stand out clearly in the member list (e.g. Discord Blurple, Gold, Crimson).</li>
            <li><strong>Avoid very dark colors on dark theme.</strong> Colors like #000080 (Navy) or #8B0000 (Dark Red) can be nearly invisible on Discord&apos;s dark theme background (#36393F).</li>
            <li><strong>Create a color hierarchy.</strong> Use brighter, more saturated colors for higher roles (admin) and softer colors for lower roles (new members). This creates a natural visual rank system.</li>
            <li><strong>Test on both light and dark themes.</strong> While most users use dark mode, some use light mode. Colors like white or very light yellow may be unreadable on light backgrounds.</li>
            <li><strong>Avoid too many similar colors.</strong> If two roles look nearly identical in the member list sidebar, members won&apos;t be able to distinguish them. Use our picker&apos;s live preview to compare before committing.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">Related Discord Customization Tools</h3>
          <p>
            Want to take your server&apos;s visual identity even further? Pair this <strong>Discord role color picker</strong> with our other free customization tools:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="/tools/discord-role-color-gradient-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Role Color Gradient Generator</a> — Create beautiful gradient combinations across multiple roles.</li>
            <li><a href="/tools/discord-server-icon-resizer/" className="text-[#5865F2] font-bold hover:underline">Discord Server Icon Resizer</a> — Optimize your server icon image to the perfect dimensions.</li>
            <li><a href="/tools/discord-embed-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Embed Generator</a> — Build rich embeds with matching accent colors for your announcements.</li>
          </ul>
        </article>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Color Picker FAQ
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
