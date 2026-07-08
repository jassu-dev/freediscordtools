import type { Metadata } from 'next';

import PageSchema from '@/components/seo/PageSchema';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';
import DiscordNameGenerator from '@/components/tools/DiscordNameGenerator';
import { seoConfig } from '@/config/seo';

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-name-generator/`;

const faqItems = [
  {
    question: 'What is a Discord name generator?',
    answer:
      'A Discord name generator creates Discord username ideas, Discord display name ideas, Discord server name ideas, clan names, and channel names from words, themes, and style patterns. This tool helps you find memorable Discord names fast without needing to brainstorm from scratch.',
  },
  {
    question: 'What are good Discord names?',
    answer:
      'Good Discord names are short, readable, easy to remember, and matched to your community vibe. A good Discord username idea might combine a personal keyword with an aesthetic, gaming, funny, cute, dark, or professional word.',
  },
  {
    question: 'Can this tool make Discord server name ideas?',
    answer:
      'Yes. Change the name type to Server name and the Discord name generator will create Discord server name ideas for gaming servers, aesthetic communities, creator servers, study servers, friend groups, and professional communities.',
  },
  {
    question: 'Are generated Discord names guaranteed to be available?',
    answer:
      'No generator can guarantee Discord username availability because usernames are claimed inside Discord. Use these Discord name ideas as strong starting points, then test your favorite names in Discord.',
  },
  {
    question: 'How do I make a Discord name more unique?',
    answer:
      'Add a personal keyword, use a separator like a dot or underscore, choose a specific niche word, or add a short number only when needed. The best Discord names feel specific instead of random.',
  },
  {
    question: 'Can I use these ideas for channels and roles?',
    answer:
      'Yes. The channel mode creates lowercase Discord channel name ideas with hyphens, while the other modes can inspire role names, event names, community names, and Discord profile names.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Name Generator 2026 - Username, Server & Clan Name Ideas',
  description:
    'Free Discord name generator for username ideas, display names, server names, clan names, channel names, aesthetic Discord names, funny Discord names, and gaming names.',
  keywords: [
    'discord name generator',
    'discord names',
    'discord name ideas',
    'discord username ideas',
    'discord username generator',
    'discord server name ideas',
    'discord server name generator',
    'discord display name ideas',
    'aesthetic discord names',
    'funny discord names',
    'cool discord names',
    'gaming discord names',
    'discord clan name generator',
    'discord channel name ideas',
    'best discord names 2026',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: 'Discord Name Generator 2026 - Username, Server & Clan Name Ideas',
    description:
      'Generate Discord username ideas, server name ideas, display names, clan names, and channel names by vibe. Free, fast, and copy-paste ready.',
    url: PAGE_URL,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Name Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Name Generator 2026',
    description: 'Free Discord name generator for usernames, server names, clan names, and channel names.',
    site: seoConfig.twitterHandle,
  },
};

export default function DiscordNameGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Name Generator',
          description:
            'Free Discord name generator for username ideas, display names, server names, clan names, and channel names.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Name Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#5865F2] mb-3">
            Free Discord identity tool
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Name Generator for Usernames, Servers, Clans & Channels
          </h1>
          <p className="text-lg text-[#5b6282] mt-5 max-w-3xl mx-auto leading-relaxed">
            Use this Discord name generator to create Discord names that feel memorable, searchable, and copy-paste ready. Generate Discord username ideas, Discord display name ideas, Discord server name ideas, Discord clan names, and Discord channel name ideas for aesthetic communities, gaming servers, study groups, creator hubs, and friend servers.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-12">
          <h2 id="tool-heading" className="sr-only">Discord Name Generator Tool</h2>
          <DiscordNameGenerator />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282]">
          <h2>Why This Discord Name Generator Has Viral Potential</h2>
          <p>
            Discord names are not just labels. A Discord name is the first signal people see before they decide whether a profile, server, clan, or channel feels worth clicking. That is why searches like <strong>discord name generator</strong>, <strong>discord names</strong>, <strong>discord name ideas</strong>, <strong>discord username ideas</strong>, <strong>discord server name ideas</strong>, <strong>aesthetic Discord names</strong>, <strong>funny Discord names</strong>, and <strong>gaming Discord names</strong> keep growing. Every Discord user eventually needs a new username, a better display name, a cleaner server name, a catchy clan name, or a channel name that looks organized.
          </p>
          <p>
            This free Discord name generator is built for that repeat behavior. People rename profiles, launch new servers, test community ideas, rebrand gaming clans, and refresh their channel structure again and again. A tool that helps with Discord username ideas, Discord display name ideas, Discord server name ideas, Discord clan name ideas, and Discord channel name ideas gives visitors a reason to come back whenever they want a new identity.
          </p>

          <h2>How to Use the Discord Name Generator</h2>
          <p>
            Start by choosing the kind of Discord name you need. The username mode creates compact Discord username ideas. The display name mode creates readable Discord display names. The server name mode creates Discord server name ideas for communities and brands. The clan mode creates gaming clan names with short tags. The channel mode creates lowercase Discord channel name ideas with hyphens, which fits the way most Discord servers organize text channels.
          </p>
          <p>
            Next, choose a vibe. Aesthetic Discord names work well for cozy servers, music communities, anime groups, art communities, and profile rebrands. Gaming Discord names work well for competitive communities, ranked squads, esports clans, and gaming servers. Funny Discord names work well for friend servers and casual communities. Dark Discord names work well for roleplay servers, lore servers, and dramatic branding. Cute Discord names fit soft communities, lifestyle servers, and friendly hangouts. Professional Discord names are best for creators, businesses, study servers, coding communities, and serious community brands.
          </p>
          <p>
            Finally, add a seed keyword. The seed can be your name, game, niche, fandom, city, role, brand, or topic. A seed like "valorant" will produce different Discord name ideas than a seed like "study", "anime", "music", "crypto", "fitness", or "nova". This makes the Discord name generator more useful because it creates targeted Discord names instead of generic random names.
          </p>

          <h2>Best Discord Username Ideas</h2>
          <p>
            The best Discord username ideas are short enough to type, unique enough to claim, and specific enough to remember. A Discord username generator should avoid names that look like random keyboard noise. Names such as <code>nova.echo</code>, <code>ranked_nova</code>, <code>soft.signal</code>, <code>pixel.queue</code>, and <code>creator.hub</code> are stronger than names with too many numbers or confusing symbols.
          </p>
          <p>
            When you are choosing Discord username ideas, test a few variations. Try a dot, underscore, or short number only when needed. Avoid very long Discord usernames because they are harder to remember and harder to share. If your first Discord username idea is taken, add a niche word instead of adding five random numbers. For example, <code>nova</code> may be taken, but <code>nova.queue</code>, <code>nova.signal</code>, <code>nova.labs</code>, or <code>nova.guild</code> may feel cleaner.
          </p>

          <h2>Best Discord Server Name Ideas</h2>
          <p>
            Discord server name ideas should communicate the community promise quickly. A gaming server name should sound active. A study server name should sound focused. A creator server name should sound credible. A friend server name can be funny, cozy, or chaotic. Use this Discord server name generator when you need a server name that gives people a reason to join.
          </p>
          <p>
            Good Discord server names often combine a core topic with a vibe word. Examples include "Pixel Guild", "Cozy Study Cafe", "Creator Labs", "Midnight Queue", "Lunar Hangout", "Ranked Arena", "Soft Hours", and "Launch Collective". These Discord server name ideas work because they are clear, memorable, and easy to say out loud.
          </p>

          <h2>Discord Name Ideas by Category</h2>
          <ul>
            <li><strong>Aesthetic Discord names:</strong> lunar echo, velvet cloud, soft halo, aurora diary, crystal bloom, serene signal.</li>
            <li><strong>Gaming Discord names:</strong> ranked strike, pixel raid, clutch queue, respawn lobby, boss arena, quest guild.</li>
            <li><strong>Funny Discord names:</strong> sleepy toast, panic button, mildly loading, oops wizard, snack problem, tiny meme.</li>
            <li><strong>Dark Discord names:</strong> shadow signal, obsidian crown, midnight vault, phantom order, eclipse sector, raven veil.</li>
            <li><strong>Cute Discord names:</strong> boba bean, peachy cloud, honey pocket, mochi nest, sunny cup, plush spark.</li>
            <li><strong>Professional Discord names:</strong> creator hub, launch labs, focus desk, strategy circle, maker base, growth network.</li>
          </ul>

          <h2>How to Make Discord Names More Clickable</h2>
          <p>
            A clickable Discord name has three traits: it is easy to read, it suggests a clear identity, and it feels like it belongs in the right community. Aesthetic Discord names should feel visual. Gaming Discord names should feel energetic. Funny Discord names should create an instant reaction. Professional Discord names should feel trustworthy. Discord server name ideas should describe the community without sounding generic.
          </p>
          <p>
            If your name is for a public community, think about search. People may search Discord server lists, social posts, Google, TikTok, Reddit, or YouTube for communities like yours. A Discord server name that contains the topic naturally can help people understand what the server is about. For example, "Valorant Queue Hub" is clearer than "The Hub" because it includes the niche. "Study Sprint Cafe" is clearer than "The Cafe" because it includes the purpose.
          </p>

          <h2>Related Discord Tools</h2>
          <p>
            After you find a Discord name, polish the rest of your identity. Use the <a href="/tools/discord-username-checker/" className="text-[#5865F2] font-bold hover:underline">Discord Username Checker</a> to validate username rules, the <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> to style your display name, the <a href="/tools/discord-bio-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Bio Generator</a> to write your profile, and the <a href="/tools/discord-server-icon-resizer/" className="text-[#5865F2] font-bold hover:underline">Discord Server Icon Resizer</a> to prepare your server icon.
          </p>
        </article>

        <section aria-labelledby="faq-heading" className="mt-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#1a1d2e] mb-6 text-center">
            Discord Name Generator FAQ
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl bg-white border border-[#E3E6F0] shadow-sm">
                <summary className="px-5 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2]" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 pb-4 text-[#5b6282] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorTrustBox />
      </div>
    </>
  );
}
