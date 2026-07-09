import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordSpoilerGenerator from '@/components/tools/DiscordSpoilerGenerator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make a spoiler on Discord?',
    answer:
      'To make a spoiler on Discord, wrap your text in double vertical bars: ||spoiler text||. You can also use our Discord Spoiler Generator to create spoilers instantly!',
  },
  {
    question: 'Can you make image spoilers on Discord?',
    answer:
      'Yes! When uploading an image to Discord, check the "Mark as spoiler" box before sending. This will hide the image behind a spoiler overlay.',
  },
  {
    question: 'Do spoilers work on Discord mobile?',
    answer:
      'Yes! Discord spoilers work on both desktop and mobile. Just tap on a spoiler to reveal the hidden content.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Spoiler Generator - Free Spoiler Maker',
  description:
    'Free Discord spoiler generator. Create spoiler tags for text, images, and links instantly. The best Discord spoiler maker online with one-click copy.',
  keywords: [
    'discord spoiler generator',
    'discord spoiler maker',
    'how to make a spoiler on discord',
    'discord spoiler tags',
    'discord hidden text',
    'free discord spoiler tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-spoiler-generator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-spoiler-generator/`;

export default function DiscordSpoilerGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Spoiler Generator',
          description: 'Free Discord spoiler generator. Create spoiler tags for text, images, and links instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Spoiler Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Spoiler Generator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl leading-relaxed">
            The ultimate free <strong className="text-[#1a1d2e]">Discord spoiler generator</strong>. Create perfect spoiler tags for text, images, and links instantly. Just type your hidden content, generate, and copy-paste into Discord! Keep conversations fun and respectful by hiding movie endings, game plot twists, and surprise announcements.
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4 rounded-r-xl">
            Want to master Discord formatting? Read our{' '}
            <a href="/blog/the-ultimate-discord-markdown-guide/" className="text-[#5865F2] font-bold hover:underline">
              Ultimate Discord Markdown Guide
            </a>.
          </p>
        </header>
        <section className="mb-10">
          <DiscordSpoilerGenerator />
        </section>
        
        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Why Use a Discord Spoiler Maker?
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">Discord spoiler maker</strong> is essential for respectful conversation in any community. Whether you're discussing the latest episode of your favorite show, a newly released video game, or sharing exciting news, spoiler tags ensure that only people who want to see the content will see it. Our <strong className="text-[#1a1d2e]">Discord spoiler generator</strong> makes this process fast and error-free.
            </p>
            <p>
              Instead of manually typing double vertical bars every time, our tool handles the formatting for you. Just type your text, click generate, and copy the result. It works on both desktop and mobile Discord apps, so you can create perfect spoiler tags no matter where you are.
            </p>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Make Spoilers on Discord: Step-by-Step
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <ol className="space-y-4 list-none">
              {[
                { n: '1', title: 'Enter your hidden text', body: 'Type the content you want to hide into the input box above. This can be movie endings, game secrets, surprise announcements, or anything else you don\'t want to spoil for others.' },
                { n: '2', title: 'Generate the spoiler tag', body: 'Click the "Generate Spoiler" button. Our Discord spoiler tag creator will automatically wrap your text in the required || double vertical bars || syntax.' },
                { n: '3', title: 'Copy and paste', body: 'Hit "Copy" to copy the formatted text to your clipboard. Open Discord, paste with Ctrl+V (Windows) or Cmd+V (Mac), and send your message.' },
                { n: '4', title: 'Reveal the content', body: 'Anyone who wants to see the spoiler can simply click or tap on the blurred text to reveal it. This keeps your server friendly and inclusive for everyone.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#5865F2] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1d2e] mb-1">{step.title}</p>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Creative Uses for Discord Spoiler Tags
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Discord spoiler tags aren't just for hiding plot twists! Here are some creative ways to use them in your server:
            </p>
            <ul className="list-none space-y-3">
              {[
                { name: 'Interactive Games', desc: 'Create choose-your-own-adventure stories or scavenger hunts where each clue is hidden behind a spoiler tag.' },
                { name: 'Surprise Announcements', desc: 'Build excitement for server events, giveaways, or new features by revealing details one step at a time.' },
                { name: 'Sensitive Content Warnings', desc: 'Hide potentially triggering or NSFW content behind a spoiler tag so people can opt-in to view it.' },
                { name: 'Joke Punchlines', desc: 'Share jokes where the punchline is hidden, letting people read the setup first before revealing the funny part.' },
                { name: 'Server Rules Recaps', desc: 'Hide detailed rules explanations behind spoilers to keep your rules channel clean but thorough.' },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-[#5865F2] font-mono shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong className="text-[#1a1d2e]">{item.name}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Spoiler Syntax & Best Practices
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Discord spoiler tags use a simple syntax: wrap your text in <code className="bg-[#F8F9FF] px-1 py-0.5 rounded text-[#5865F2]">||double vertical bars||</code>. Here are some best practices to keep in mind:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Always use spoiler tags for any content that could ruin a show, game, or movie for others.</li>
              <li>Give context before the spoiler so people know what they're clicking into (e.g., "||Ending of Episode 5||").</li>
              <li>Don't overuse spoilers for trivial content – reserve them for actual surprises or sensitive information.</li>
              <li>Remember that spoilers work on both desktop and mobile, so everyone can participate safely.</li>
            </ul>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FF] text-[#1a1d2e]">
                    <th scope="col" className="px-4 py-3 text-left font-bold border border-[#E3E6F0]">What You Type</th>
                    <th scope="col" className="px-4 py-3 text-left font-bold border border-[#E3E6F0]">What It Looks Like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">||Spoiler text here||</td>
                    <td className="px-4 py-3 text-[#5b6282] border border-[#E3E6F0]">Blurred spoiler that reveals on click</td>
                  </tr>
                  <tr className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">Check the image ||[spoiler image]||</td>
                    <td className="px-4 py-3 text-[#5b6282] border border-[#E3E6F0]">Text and an image hidden behind a spoiler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/tools/discord-markdown-previewer/', name: 'Discord Markdown Previewer', desc: 'Write and preview Discord text formatting live before you send it.' },
              { href: '/tools/discord-text-rotator/', name: 'Discord Text Rotator', desc: 'Create upside-down and reversed text for your Discord messages.' },
              { href: '/tools/discord-poll-creator/', name: 'Discord Poll Creator', desc: 'Make interactive polls for your server with reaction emojis.' },
              { href: '/tools/discord-color-text-generator/', name: 'Discord Colored Text Generator', desc: 'Add colorful ANSI text to your Discord messages.' },
            ].map((t) => (
              <a key={t.href} href={t.href} className="block p-4 rounded-xl bg-white border border-[#E3E6F0] hover:border-[#5865F2] transition-all shadow-sm">
                <p className="font-bold text-[#1a1d2e] text-sm mb-1">{t.name}</p>
                <p className="text-xs text-[#5b6282]">{t.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4 text-center">
            Frequently Asked Questions
          </h2>
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

        <AuthorTrustBox />
      </div>
    </>
  );
}
