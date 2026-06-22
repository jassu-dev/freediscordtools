import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';import { seoConfig } from '@/config/seo';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { buildFaqJsonLd } from '@/lib/jsonld';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import StatusGeneratorTool from '@/components/tools/status-generator/StatusGeneratorTool';

const faqItems = [
  {
    question: 'How do I set a custom status on Discord?',
    answer:
      'Click on your avatar in the bottom-left corner of Discord (or tap your profile icon on mobile). Select "Set a custom status". Type or paste your status text, pick an emoji, and optionally set an expiry time. Click Save.',
  },
  {
    question: 'What is the character limit for a Discord custom status?',
    answer:
      'Discord custom statuses have a maximum length of 128 characters, including any emoji. Our generator respects this limit and warns you if your custom status is too long.',
  },
  {
    question: 'Can I use any emoji in my Discord status?',
    answer:
      'Yes, you can use any standard Unicode emoji in your status. Discord Nitro subscribers can also use custom server emojis. Standard users are limited to default Unicode emojis.',
  },
  {
    question: 'Does my Discord custom status expire?',
    answer:
      'Only if you set it to. When setting your status, Discord offers optional expiry options: "Today", "This Week", "Don\'t clear". If you choose "Don\'t clear", your status remains until you manually change or remove it.',
  },
  {
    question: 'Can people see my Discord status if I\'m invisible?',
    answer:
      'When your presence is set to Invisible, other users cannot see your custom status. Your status is only visible to others when you are Online, Idle, or Do Not Disturb.',
  },
  {
    question: 'What is the difference between a custom status and a Rich Presence status?',
    answer:
      'A custom status is text you write yourself in User Settings. Rich Presence status is automatic it\'s populated by Discord-integrated applications (like games or Spotify) to show what you\'re playing or listening to. Both can be visible simultaneously.',
  },
  {
    question: 'Are there Discord status rules or restrictions?',
    answer:
      'Yes. Your custom status must comply with Discord\'s Community Guidelines and Terms of Service. Status text cannot contain slurs, threats, harassment, or illegal content. Violating these rules can result in account suspension.',
  },
  {
    question: 'What are the best Discord status ideas for gamers?',
    answer:
      'Popular gamer statuses include: "grinding for that rare drop 🕹️", "git gud or go home ⚔️", "carrying the whole team again 🥇", or "not dead, just respawning 🎮". Browse our Gaming category for 10+ ready-to-copy ideas.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Status Generator – 50+ Cool Custom Status Ideas',
  description:
    'Free Discord custom status generator. Browse 50+ cool Discord status ideas by category or build your own with a live preview. Copy and paste in seconds.',
  keywords: [
    'discord status generator',
    'discord custom status ideas',
    'cool discord status',
    'discord status ideas',
    'discord status copy paste',
    'funny discord status',
    'aesthetic discord status',
    'discord status maker',
    'good discord status ideas',
    'discord status for gamers',
    'discord status text generator',
    'best discord custom status',
    'cute discord status ideas',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-status-generator/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-status-generator/`,
      'en': `${seoConfig.baseUrl}/tools/discord-status-generator/`,
    },
  },
  openGraph: {
    title: 'Discord Status Generator – 50+ Cool Custom Status Ideas',
    description:
      'Browse 50+ cool, funny, and aesthetic Discord status ideas or build a custom one with live preview. Copy and paste instantly.',
    url: `${seoConfig.baseUrl}/tools/discord-status-generator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Status Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Status Generator – 50+ Cool Custom Status Ideas',
    description: '50+ cool Discord status ideas by category gaming, aesthetic, coding, studying, funny. Copy in one click.',
    site: seoConfig.twitterHandle,
  },
};


const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-status-generator/`;

export default function DiscordStatusGeneratorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Status Generator"
        description="Free Discord custom status generator with 50+ cool, funny, and aesthetic status ideas. Browse by category or build a custom status with live preview."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Status Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Status Generator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Find the perfect <strong className="text-[#1a1d2e]">Discord custom status</strong>. Browse 50+ ideas across Gaming, Aesthetic, Coding, Studying, Funny, and Motivational categories or build your own with a live Discord preview.
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4">
            Want your status text in a unique style? Use our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> to stylize any text with Unicode fonts.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Status Generator Tool</h2>
          <StatusGeneratorTool />
        </section>

        {/* ── How to set a status ── */}
        <section aria-labelledby="howto-heading" className="mb-10 space-y-4 text-[#5b6282] text-base leading-relaxed">
          <h2 id="howto-heading" className="text-2xl font-bold text-[#1a1d2e]">
            How to Set a Custom Status on Discord
          </h2>
          <p>
            Setting a custom Discord status takes about 10 seconds. Here is the process on both desktop and mobile:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F8F9FF] rounded-xl p-5 border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-3">Desktop / Web</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Click your avatar in the bottom-left</li>
                <li>Select <strong>Set a custom status</strong></li>
                <li>Type or paste your status text</li>
                <li>Pick an emoji from the picker</li>
                <li>Set expiry (optional) → click <strong>Save</strong></li>
              </ol>
            </div>
            <div className="bg-[#F8F9FF] rounded-xl p-5 border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-3">Mobile (iOS / Android)</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Tap your profile icon (bottom-right)</li>
                <li>Tap your avatar at the top</li>
                <li>Select <strong>Set Status</strong></li>
                <li>Enter your text and emoji</li>
                <li>Tap <strong>Save</strong></li>
              </ol>
            </div>
          </div>

          <p>
            Your status is visible to all users who can see your profile friends, server members (when online), and anyone who visits your profile card. It updates immediately after saving.
          </p>
        </section>

        {/* ── Status ideas by category ── */}
        <section aria-labelledby="ideas-heading" className="mb-10 space-y-4 text-[#5b6282] text-base leading-relaxed">
          <h2 id="ideas-heading" className="text-2xl font-bold text-[#1a1d2e]">
            Discord Status Ideas by Category
          </h2>

          <p>
            Choosing the right Discord status is about matching your current vibe to something that reflects your personality. Here is a breakdown of the most popular categories and what works best for each:
          </p>

          {[
            {
              title: '🎮 Gaming Status Ideas',
              desc: 'Gaming statuses are the most popular on Discord, where a large portion of the user base is actively playing. The best gamer statuses are either self-deprecating ("skill issue honestly"), brag-worthy ("top 1 or nothing"), or situational ("grinding for that rare drop"). These perform especially well in gaming servers where members relate immediately.',
              examples: ['"not dead, just respawning 🎮"', '"carrying the whole team again 🥇"', '"big brain plays incoming 🧠"'],
            },
            {
              title: '✨ Aesthetic Status Ideas',
              desc: 'Aesthetic statuses set a mood rather than describe an activity. They work best paired with a minimalist or vaporwave profile. Keep them poetic, slightly melancholic, or dreamy. Pair with our Discord Font Generator for maximum aesthetic impact.',
              examples: ['"midnight tea and sad music 🌙"', '"main character energy 🌧️"', '"soft hours only ✨"'],
            },
            {
              title: '💻 Coding & Developer Status Ideas',
              desc: 'Developer-focused statuses resonate strongly in programming servers and tech communities. They range from relatable pain points to deadpan humor about the realities of software development.',
              examples: ['"debugging since 2 AM 👨‍💻"', '"it\'s a feature, not a bug 🐛"', '"testing in production (again) 🧪"'],
            },
            {
              title: '😄 Funny Status Ideas',
              desc: 'Humor is always a crowd-pleaser. Funny statuses get reactions and start conversations. They work across all server types and demographics from gaming communities to study groups.',
              examples: ['"aggressively doing nothing 🦥"', '"melting gently into the couch 🫠"', '"pretending to have my life together 🎭"'],
            },
          ].map((cat) => (
            <div key={cat.title} className="bg-[#F8F9FF] rounded-xl p-5 border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-2">{cat.title}</h3>
              <p className="text-sm mb-3">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.examples.map((ex) => (
                  <span key={ex} className="px-3 py-1 bg-white border border-[#E3E6F0] rounded-lg text-xs text-[#1a1d2e] font-mono">{ex}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Tips ── */}
        <section aria-labelledby="tips-heading" className="mb-10 space-y-3 text-[#5b6282] text-base leading-relaxed">
          <h2 id="tips-heading" className="text-2xl font-bold text-[#1a1d2e]">
            Tips for Writing the Perfect Discord Status
          </h2>
          <ul className="space-y-3">
            {[
              ['Lead with an emoji', 'An emoji at the start catches the eye before the text is read. It sets the tone immediately and makes your status more visually distinctive in profile previews.'],
              ['Keep it under 60 characters', 'While Discord allows 128 characters, statuses longer than ~60 characters get truncated in most UI contexts. Front-load the most important part.'],
              ['Be specific over generic', '"grinding ranked in Valorant" lands better than "playing games". Specific statuses start conversations and give others something to respond to.'],
              ['Update it regularly', 'A stale status from 3 months ago signals an inactive account. Changing it weekly or when your situation changes keeps your profile feeling alive.'],
              ['Match your server vibe', 'In a professional dev server, "shipping at 3 AM 📦" fits perfectly. In a chill music server, "music louder than thoughts 🎵" lands better. Context-aware statuses get more reactions.'],
            ].map(([title, desc]) => (
              <li key={title as string} className="flex gap-3">
                <span className="text-[#5865F2] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <strong className="text-[#1a1d2e]">{title}: </strong>
                  {desc}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Custom Status FAQ
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
              { href: '/tools/discord-font-generator/', name: 'Discord Font Generator', desc: 'Stylize your status text with 160+ Unicode fonts.' },
              { href: '/tools/discord-username-checker/', name: 'Discord Username Checker', desc: 'Validate your username and get an availability score.' },
              { href: '/tools/discord-color-text-generator/', name: 'Discord Colored Text', desc: 'Create colorful ANSI messages for your server.' },
              { href: '/tools/discord-timestamp-generator/', name: 'Discord Timestamp Generator', desc: 'Generate timezone-aware timestamps for announcements.' },
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
