import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import DiscordNicknameIdeaGenerator from '@/components/tools/DiscordNicknameIdeaGenerator';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What are good Discord nicknames?',
    answer: 'Good Discord nicknames are memorable, reflect your personality, and aren\'t too long. Combine an adjective + noun for a classic style, add a number or emoji for extra flair. Our generator gives you thousands of perfect Discord nickname ideas instantly!',
  },
  {
    question: 'How long can a Discord nickname be?',
    answer: 'Discord nicknames (display names) can be up to 32 characters long, including spaces and emoji. Keep this in mind when choosing a nickname or using our stylized fonts!',
  },
  {
    question: 'Can I use special fonts in my Discord nickname?',
    answer: 'Yes! Discord supports Unicode characters, which means you can use stylized fonts like bold, italic, or monospace in your nickname. Our generator has built-in font styling tools to help!',
  },
  {
    question: 'What are some cool Discord nicknames?',
    answer: 'Cool Discord nicknames often use words like "Shadow", "Fire", "Ninja", or "Legend". Our generator has hundreds of cool, funny, and aesthetic Discord nickname ideas for every vibe!',
  },
];

export const metadata: Metadata = {
  title: 'Discord Nickname Idea Generator & Styling Tool 2026',
  description: 'Free Discord nickname idea generator with 1000+ unique ideas. Stylize nicknames with Unicode fonts for cool, funny, and aesthetic names perfect for any server.',
  keywords: ['discord nickname ideas', 'cool discord nicknames', 'funny discord nicknames', 'aesthetic discord nicknames', 'discord name ideas', 'nicknames for discord', 'good discord nicknames'],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-nickname-idea-generator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-nickname-idea-generator/`;

export default function DiscordNicknameIdeaGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Nickname Idea Generator',
          description: 'Free Discord nickname idea generator with 1000+ unique ideas. Stylize nicknames with Unicode fonts using our built-in Discord font tool.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Nickname Idea Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Nickname Idea Generator
          </h1>
          <p className="text-xl text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Get thousands of unique Discord nickname ideas in seconds! From cool and funny to aesthetic and gaming-themed, our generator has the perfect name for you. Plus, built-in font styling to make your nickname stand out!
          </p>
          <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] mt-6 max-w-2xl mx-auto">
            Want more font styles? Check out our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> for 160+ styles!
          </p>
        </header>

        <DiscordNicknameIdeaGenerator />

        <article className="prose prose-lg max-w-none text-[#5b6282] mt-12">
          <h2>Why Use Our Discord Nickname Generator?</h2>
          <p>
            Coming up with a good Discord nickname can be hard! You want something memorable, unique, and that represents you. Our Discord nickname idea generator takes all the guesswork out of it by giving you thousands of awesome options to choose from.
          </p>
          <p>
            Whether you're looking for a cool gaming nickname, a funny name for your friend group, or an aesthetic name for your profile, we've got you covered. Just click generate, browse the ideas, and copy your favorite!
          </p>

          <h3>Tips for Choosing the Perfect Discord Nickname</h3>
          <ul>
            <li><strong>Keep it short:</strong> Aim for under 20 characters so it fits easily in the chat sidebar</li>
            <li><strong>Reflect your personality:</strong> Use words that describe you, your hobbies, or your favorite things</li>
            <li><strong>Add some flair:</strong> Throw in an emoji or use a stylized font to make your name stand out</li>
            <li><strong>Avoid offensive words:</strong> Make sure your nickname follows Discord's Community Guidelines</li>
            <li><strong>Make it memorable:</strong> Pick something people will remember and want to call you</li>
          </ul>

          <h3>Popular Discord Nickname Themes</h3>
          <p>
            Here are some of the most popular themes people use for their Discord nicknames:
          </p>
          <ul>
            <li><strong>Gaming:</strong> Names inspired by your favorite games, characters, or playstyles</li>
            <li><strong>Aesthetic:</strong> Soft, dreamy, or vaporwave-style names with matching emoji</li>
            <li><strong>Funny:</strong> Puns, jokes, or silly combinations that make people laugh</li>
            <li><strong>Cool:</strong> Edgy, mysterious, or badass-sounding names</li>
            <li><strong>Cute:</strong> Sweet, adorable names with animal or food references</li>
          </ul>

          <p>
            Start using our Discord nickname idea generator today and find your perfect name!
          </p>
        </article>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl bg-white border border-[#E3E6F0] overflow-hidden group shadow-sm">
                <summary className="px-6 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center hover:bg-[#F8F9FF] transition">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 pt-2 text-[#5b6282] leading-relaxed border-t border-[#E3E6F0]/50 bg-[#F8F9FF]/30">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
