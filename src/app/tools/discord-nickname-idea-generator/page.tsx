import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import DiscordNicknameIdeaGenerator from '@/components/tools/DiscordNicknameIdeaGenerator';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What are good Discord nicknames?',
    answer: 'Good Discord nicknames are memorable, reflect your personality, and aren\'t too long. Combine an adjective + noun for a classic style, add a number or emoji for extra flair. Our Discord nickname generator gives you thousands of perfect Discord nickname ideas instantly! Whether you need nicknames for Discord, a server nickname Discord, or just a cool Discord nickname, we\'ve got you covered.',
  },
  {
    question: 'How long can a Discord nickname be?',
    answer: 'Discord nicknames (display names) can be up to 32 characters long, including spaces and emoji. Keep this in mind when choosing a Discord nickname or using our stylized fonts in our Discord nickname generator!',
  },
  {
    question: 'Can I use special fonts in my Discord nickname?',
    answer: 'Yes! Discord supports Unicode characters, which means you can use stylized fonts like bold, italic, or monospace in your Discord nickname. Our Discord nickname generator has built-in font styling tools to help you make the perfect nicknames on Discord!',
  },
  {
    question: 'What are some cool Discord nicknames?',
    answer: 'Cool Discord nicknames often use words like "Shadow", "Fire", "Ninja", or "Legend". Our Discord nickname generator has hundreds of cool, funny, and aesthetic Discord nickname ideas for every vibe. Find the best nicknames for Discord right here!',
  },
  {
    question: 'What is the best Discord nickname generator?',
    answer: 'Our Discord nickname generator is the best! It has thousands of unique Discord nickname ideas, multiple themes (Gaming, Aesthetic, Funny), and built-in font styling. Generate server nickname Discord, nicknames on Discord, and more with just one click!',
  },
];

export const metadata: Metadata = {
  title: 'Discord Nickname Generator | Best Discord Nickname Ideas & Tools 2026',
  description: 'Free Discord nickname generator with 1000+ unique ideas! Find cool Discord nicknames, funny nicknames for Discord, and server nickname Discord ideas. The ultimate Discord nickname generator for all your needs.',
  keywords: ['discord nickname generator', 'discord nickname', 'nicknames for discord', 'discord nickname ideas', 'nicknames on discord', 'server nickname discord', 'cool discord nicknames', 'funny discord nicknames', 'aesthetic discord nicknames', 'discord name ideas', 'good discord nicknames'],
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
          name: 'Discord Nickname Generator',
          description: 'Free Discord nickname generator with 1000+ unique ideas. Stylize nicknames with Unicode fonts using our built-in Discord font tool. Generate perfect nicknames for Discord, server nickname Discord, and more!',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Nickname Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Nickname Generator
          </h1>
          <p className="text-xl text-[#5b6282] mt-4 max-w-3xl mx-auto">
            Get thousands of unique Discord nickname ideas in seconds! The ultimate Discord nickname generator for cool nicknames for Discord, server nickname Discord, and nicknames on Discord! From cool and funny to aesthetic and gaming-themed, our Discord nickname generator has the perfect Discord nickname for you. Plus, built-in font styling to make your Discord nickname stand out!
          </p>
          <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] mt-6 max-w-2xl mx-auto">
            Want more font styles? Check out our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Discord Font Generator</a> for 160+ styles!
          </p>
        </header>

        <DiscordNicknameIdeaGenerator />

        <article className="prose prose-lg max-w-none text-[#5b6282] mt-12">
          <h2>Why Use Our Discord Nickname Generator?</h2>
          <p>
            Coming up with a good Discord nickname can be hard! You want something memorable, unique, and that represents you. Our Discord nickname generator takes all the guesswork out of it by giving you thousands of awesome Discord nickname ideas to choose from. Whether you need nicknames for Discord, a server nickname Discord, or just a cool Discord nickname, our Discord nickname generator has you covered!
          </p>
          <p>
            Whether you're looking for a cool gaming Discord nickname, a funny name for your friend group on Discord, or an aesthetic Discord nickname for your profile, we've got you covered. Just click generate, browse the ideas, and copy your favorite Discord nickname!
          </p>

          <h3>Tips for Choosing the Perfect Discord Nickname</h3>
          <ul>
            <li><strong>Keep it short:</strong> Aim for under 20 characters so your Discord nickname fits easily in the chat sidebar</li>
            <li><strong>Reflect your personality:</strong> Use words that describe you, your hobbies, or your favorite things for your Discord nickname</li>
            <li><strong>Add some flair:</strong> Throw in an emoji or use a stylized font to make your Discord nickname stand out on Discord</li>
            <li><strong>Avoid offensive words:</strong> Make sure your Discord nickname follows Discord's Community Guidelines</li>
            <li><strong>Make it memorable:</strong> Pick a Discord nickname people will remember and want to call you</li>
          </ul>

          <h3>Popular Discord Nickname Themes</h3>
          <p>
            Here are some of the most popular themes people use for their Discord nicknames on Discord:
          </p>
          <ul>
            <li><strong>Gaming:</strong> Discord nicknames inspired by your favorite games, characters, or playstyles</li>
            <li><strong>Aesthetic:</strong> Soft, dreamy, or vaporwave-style Discord nicknames with matching emoji</li>
            <li><strong>Funny:</strong> Puns, jokes, or silly Discord nicknames that make people laugh on Discord</li>
            <li><strong>Cool:</strong> Edgy, mysterious, or badass-sounding Discord nicknames</li>
            <li><strong>Cute:</strong> Sweet, adorable Discord nicknames with animal or food references</li>
          </ul>

          <p>
            Start using our Discord nickname generator today and find your perfect Discord nickname! Whether you need nicknames for Discord, a server nickname Discord, or any other Discord nickname, our Discord nickname generator is here to help!
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
