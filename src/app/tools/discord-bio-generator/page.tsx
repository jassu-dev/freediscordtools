import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordBioGeneratorTool from '@/components/tools/bio-generator/DiscordBioGeneratorTool';

const faqItems = [
  {
    question: 'What is a Discord bio?',
    answer: 'A Discord bio (also called About Me) is a short text section on your Discord profile that lets you introduce yourself. It supports up to 190 characters and can include emoji, line breaks, and Unicode text styles. Your Discord bio is visible to anyone who views your profile card.',
  },
  {
    question: 'How do I add a bio on Discord?',
    answer: 'To add a Discord bio, open User Settings (click the gear icon near your avatar), go to Profiles, and click the "About Me" field. Type or paste your bio text and click Save. On mobile, tap your avatar → Edit Profile → About Me.',
  },
  {
    question: 'How long can a Discord bio be?',
    answer: 'Discord bios have a maximum length of 190 characters, including emoji and line breaks. Each line break counts as one character. Our generator shows a live character count so you stay within the limit.',
  },
  {
    question: 'What are good Discord bio ideas?',
    answer: 'Good Discord bio ideas match your personality and the servers you are in. Popular formats include: three emoji-led lines describing your interests, an aesthetic quote, a gaming tagline, or a matching bio with a friend. Browse our 60+ templates across Aesthetic, Funny, Gaming, Coding, Motivational, Anime, Music, and Matching categories.',
  },
  {
    question: 'What is an aesthetic Discord bio?',
    answer: 'An aesthetic Discord bio uses soft, poetic, or vaporwave-inspired language to set a mood rather than listing facts. Popular aesthetic discord bios feature moon and star emoji, lo-fi references, nature imagery, and minimal sentence structure. Check our Aesthetic category for 10+ ready-to-copy aesthetic discord bio templates.',
  },
  {
    question: 'What is a matching Discord bio?',
    answer: 'A matching Discord bio is a paired set of bios shared between two friends or a couple. Each person uses a complementary version for example one uses "🌙 moon to your stars" and the other uses "⭐ stars to your moon". Check our Matching category for couple and bestfriend discord bio ideas.',
  },
  {
    question: 'Can I use emoji in my Discord bio?',
    answer: 'Yes. Standard Unicode emoji work in Discord bios on all platforms. Discord Nitro subscribers can also use custom server emoji in their bio. Adding emoji at the start of each line is the most popular discord bio format because it creates strong visual hierarchy.',
  },
  {
    question: 'What is the best Discord bio template for gamers?',
    answer: 'The best discord bio templates for gamers are short, bold, and show your playstyle. Examples: "🎮 top frag or nothing / ⚔️ ranked grinder / 💀 skill issue not in my vocabulary" or "🕹️ casual chaos enjoyer / 🏆 bronze with gold tier dreams". See all gamer discord bio ideas in the Gaming category.',
  },
  {
    question: 'How do I make a funny Discord bio?',
    answer: 'A funny Discord bio works best when it is self-aware, specific, and punchy. Use relatable humor about your habits ("🤡 professionally confused / 🦥 expert in doing nothing") or absurdist observations. Browse our Funny category for 8+ ready-to-use funny discord bio ideas.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Bio Generator – 60+ Templates, Ideas & About Me Examples',
  description:
    'Free Discord bio generator with 60+ copy-paste templates. Find aesthetic discord bio ideas, funny discord bio ideas, cool discord bios, matching discord bio templates, and discord about me ideas all in one place.',
  keywords: [
    'discord bio generator',
    'discord bio ideas',
    'discord bios template',
    'discord bio templates',
    'discord bio template',
    'aesthetic discord bio',
    'funny discord bio',
    'matching discord bio',
    'cool discord bio',
    'discord about me ideas',
    'discord bio ideas aesthetic',
    'discord bio copy paste',
    'good discord bios',
    'discord profile bio ideas',
    'short discord bio',
    'cute discord bio',
    'discord bio for gamers',
    'discord about me template',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-bio-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-bio-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-bio-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Bio Generator – 60+ Templates, Ideas & About Me Examples',
    description:
      'Browse 60+ discord bio templates aesthetic, funny, gaming, matching, coding & more. Copy any discord bio idea in one click. Free, no sign-up.',
    url: `${seoConfig.baseUrl}/tools/discord-bio-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Bio Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Bio Generator – 60+ Templates & Bio Ideas',
    description: '60+ discord bio templates aesthetic, funny, gaming, matching. Copy any discord about me idea instantly.',
    site: seoConfig.twitterHandle,
  },
};


const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-bio-generator/`;

export default function DiscordBioGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Discord Bio Generator",
          description: "Free Discord bio generator with 60+ copy-paste templates. Find aesthetic, funny, gaming, matching, and cool discord bio ideas instantly.",
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Bio Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* H1 keyword-dense opener */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1d2e] mb-3">
            Discord Bio Generator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed mb-3">
            The best free <strong className="text-[#1a1d2e]">Discord bio generator</strong> with 60+ copy-paste <strong className="text-[#1a1d2e]">discord bio templates</strong>.
            Find <strong className="text-[#1a1d2e]">aesthetic discord bio ideas</strong>, <strong className="text-[#1a1d2e]">funny discord bio</strong> templates, <strong className="text-[#1a1d2e]">matching discord bio</strong> pairs, <strong className="text-[#1a1d2e]">cool discord bio</strong> lines, and <strong className="text-[#1a1d2e]">discord about me ideas</strong> all with live profile preview and one-click copy.
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282]">
            Want to stylize your bio with unique fonts? Try our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> convert any bio line into 160+ Unicode styles.
          </p>
        </header>

        {/* Tool */}
        <section aria-labelledby="tool-heading" className="mb-12">
          <h2 id="tool-heading" className="sr-only">Discord Bio Generator Tool</h2>
          <DiscordBioGeneratorTool />
        </section>

        {/* How to set a bio */}
        <section aria-labelledby="howto-heading" className="mb-12">
          <h2 id="howto-heading" className="text-2xl font-bold text-[#1a1d2e] mb-5">
            How to Set Your Discord Bio (About Me)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F8F9FF] rounded-xl p-5 border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-3 text-sm">Desktop / Web</h3>
              <ol className="space-y-2 text-sm text-[#5b6282] list-decimal list-inside">
                <li>Click gear icon (⚙️) near your username</li>
                <li>Go to <strong>Profiles</strong> tab</li>
                <li>Click <strong>About Me</strong> field</li>
                <li>Paste your <strong>discord bio template</strong></li>
                <li>Click <strong>Save Changes</strong></li>
              </ol>
            </div>
            <div className="bg-[#F8F9FF] rounded-xl p-5 border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-3 text-sm">Mobile (iOS / Android)</h3>
              <ol className="space-y-2 text-sm text-[#5b6282] list-decimal list-inside">
                <li>Tap your avatar (bottom-right)</li>
                <li>Tap <strong>Edit Profile</strong></li>
                <li>Tap <strong>About Me</strong></li>
                <li>Paste your discord bio idea</li>
                <li>Tap <strong>Save</strong></li>
              </ol>
            </div>
          </div>
          <p className="text-sm text-[#5b6282] leading-relaxed">
            Your bio is visible on your profile card when someone clicks your username in any server, DM, or friend list. A great <strong className="text-[#1a1d2e]">discord bio template</strong> makes an instant impression and tells people who you are before you say a word.
          </p>
        </section>

        {/* Bio ideas by category */}
        <section aria-labelledby="ideas-heading" className="mb-12 space-y-8">
          <h2 id="ideas-heading" className="text-2xl font-bold text-[#1a1d2e]">
            Discord Bio Ideas by Category
          </h2>

          {/* Aesthetic */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3">Aesthetic Discord Bio Ideas</h3>
            <p className="text-[#5b6282] text-base leading-relaxed mb-4">
              <strong className="text-[#1a1d2e]">Aesthetic discord bio ideas</strong> use soft, poetic language to create a mood. Instead of listing facts about yourself, they capture a feeling dreamy, lo-fi, dark academia, cottagecore, or vaporwave. The best <strong className="text-[#1a1d2e]">aesthetic discord bios</strong> are three short lines with emoji at the start of each, giving your profile card a structured, visual look.
            </p>
            <p className="text-[#5b6282] text-base leading-relaxed">
              Popular aesthetic discord bio formats in 2026 include: moon and night imagery (<em>🌙 only alive at night</em>), nature references (<em>🌿 quietly growing in the background</em>), and music as identity (<em>🎧 headphones in, world out</em>). Use our Aesthetic filter above to browse all 10+ aesthetic <strong className="text-[#1a1d2e]">discord bio templates</strong>.
            </p>
          </div>

          {/* Funny */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3">Funny Discord Bio Ideas</h3>
            <p className="text-[#5b6282] text-base leading-relaxed mb-4">
              A <strong className="text-[#1a1d2e]">funny discord bio</strong> is the fastest way to get a reaction from someone who visits your profile. The best funny discord bio ideas are self-deprecating, relatable, or absurdist they work because they are specific enough to feel real but universal enough to land with almost anyone.
            </p>
            <p className="text-[#5b6282] text-base leading-relaxed">
              Top <strong className="text-[#1a1d2e]">funny discord bio</strong> structures: the three-line chaos format (<em>🤡 professionally confused / 🦥 expert in doing nothing / 🫠 melting through life</em>), the sarcastic intro, or the absurd one-liner. Browse our Funny category for 8+ ready-to-copy funny discord about me ideas.
            </p>
          </div>

          {/* Matching */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3">Matching Discord Bio Templates</h3>
            <p className="text-[#5b6282] text-base leading-relaxed mb-4">
              <strong className="text-[#1a1d2e]">Matching discord bio</strong> templates are a popular trend where two people a couple or best friends use complementary bios that reference each other. One person might use <em>🌙 moon to your stars</em> while the other uses <em>⭐ stars to your moon</em>. They look great side by side when someone checks both profiles.
            </p>
            <p className="text-[#5b6282] text-base leading-relaxed">
              Our Matching category includes <strong className="text-[#1a1d2e]">matching discord bio</strong> pairs for couples, best friends, and server duos all designed to look great together. Filter by &ldquo;Matching&rdquo; above to see all pairs.
            </p>
          </div>

          {/* Cool */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a1d2e] mb-3">Cool Discord Bio Ideas</h3>
            <p className="text-[#5b6282] text-base leading-relaxed">
              <strong className="text-[#1a1d2e]">Cool discord bio</strong> ideas work across every server type because they feel effortlessly confident. The best cool discord bios are concise, use strong verbs, and avoid trying too hard. Examples: developer bios (<em>💻 backend dev | bug whisperer</em>), gamer bios (<em>🏆 esports or bust</em>), and motivational bios (<em>🚀 building what I wish existed</em>). Browse Coding, Gaming, and Motivational categories for the coolest <strong className="text-[#1a1d2e]">discord bio templates</strong>.
            </p>
          </div>
        </section>

        {/* Writing tips */}
        <section aria-labelledby="tips-heading" className="mb-12">
          <h2 id="tips-heading" className="text-2xl font-bold text-[#1a1d2e] mb-5">
            How to Write a Great Discord Bio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Use the three-line format', desc: 'Three short lines with an emoji each is the most popular discord bio template structure. It is readable, visually balanced, and fits the 190-character limit comfortably.' },
              { title: 'Start with your strongest line', desc: 'The first line of your discord about me is what people see before they scroll. Lead with your most memorable or interesting detail.' },
              { title: 'Match your server vibe', desc: 'A funny discord bio lands better in casual gaming servers. An aesthetic discord bio fits creative or music communities. Mirror the tone of the spaces you are active in.' },
              { title: 'Add stylized text', desc: 'Use our Discord Font Generator to convert any bio line into a fancy Unicode font. It makes your discord bio ideas stand out visually against plain text profiles.' },
              { title: 'Update it regularly', desc: 'Stale bios from months ago signal an inactive profile. Fresh discord about me ideas that reflect your current vibe make a much stronger impression.' },
              { title: 'Keep it under 160 chars', desc: 'While Discord allows 190 characters, bios over 160 chars can get clipped in some UI views. Leave breathing room for guaranteed full display.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-[#F8F9FF] rounded-xl p-4 border border-[#E3E6F0]">
                <p className="font-bold text-[#1a1d2e] text-sm mb-1">→ {tip.title}</p>
                <p className="text-xs text-[#5b6282] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-12">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-5">
            Discord Bio FAQ
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
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-[#1a1d2e] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/tools/discord-font-generator/', name: 'Discord Font Generator', desc: 'Stylize any bio line with 160+ Unicode fonts.' },
              { href: '/tools/discord-status-generator/', name: 'Discord Status Generator', desc: '200+ custom status ideas gaming, aesthetic, coding & more.' },
              { href: '/tools/discord-username-checker/', name: 'Discord Username Checker', desc: 'Validate your username and get an availability score.' },
              { href: '/tools/discord-color-text-generator/', name: 'Discord Colored Text', desc: 'Create colorful ANSI messages for your server.' },
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
