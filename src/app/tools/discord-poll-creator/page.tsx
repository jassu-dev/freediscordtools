import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordPollCreator from '@/components/tools/DiscordPollCreator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make a poll on Discord?',
    answer:
      'To make a poll on Discord, use our Discord Poll Creator to generate a poll template, then paste it into Discord. You can add reaction emojis manually or use a bot like Carl-bot.',
  },
  {
    question: 'Are there Discord bots for polls?',
    answer:
      'Yes! Popular Discord poll bots include Carl-bot, Poll Bot, and Simple Poll. These bots can create polls with automatic reactions.',
  },
  {
    question: 'Can you make anonymous polls on Discord?',
    answer:
      'Discord doesn\'t have built-in anonymous polls, but some bots like Poll Bot offer anonymous poll features.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Poll Creator - Free Poll Maker',
  description:
    'Free Discord poll creator. Make simple polls, multiple-choice polls, and yes/no polls for Discord. Copy-paste ready poll templates.',
  keywords: [
    'discord poll creator',
    'discord poll maker',
    'how to make a poll on discord',
    'discord poll template',
    'discord survey maker',
    'free discord poll tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-poll-creator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-poll-creator/`;

export default function DiscordPollCreatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Poll Creator',
          description: 'Free Discord poll creator. Make simple polls, multiple-choice polls, and yes/no polls for Discord.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Poll Creator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Poll Creator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl leading-relaxed">
            The ultimate free <strong className="text-[#1a1d2e]">Discord poll creator</strong>. Make simple polls, multiple-choice polls, yes/no polls, and more for your Discord server. Generate copy-paste ready poll templates with reaction emoji options in seconds!
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4 rounded-r-xl">
            Want to boost engagement even more? Pair polls with our{' '}
            <a href="/tools/discord-embed-generator/" className="text-[#5865F2] font-bold hover:underline">
              Discord Embed Generator
            </a>!
          </p>
        </header>
        <section className="mb-10">
          <DiscordPollCreator />
        </section>
        
        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Why Use a Discord Poll Maker?
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              A <strong className="text-[#1a1d2e]">Discord poll maker</strong> is one of the best ways to engage your community, get feedback, and make decisions together. Our <strong className="text-[#1a1d2e]">Discord poll template</strong> generator makes it easy to create professional-looking polls without any bots or coding required.
            </p>
            <p>
              Polls work great for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Deciding on game nights or events</li>
              <li>Choosing server changes or features</li>
              <li>Getting feedback on content or ideas</li>
              <li>Running contests or voting</li>
              <li>Just for fun questions!</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use Our Discord Poll Creator: Step-by-Step
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <ol className="space-y-4 list-none">
              {[
                { n: '1', title: 'Add Your Question', body: 'Type your poll question in the input field. Keep it clear and engaging!' },
                { n: '2', title: 'Add Poll Options', body: 'Add your poll choices (minimum 2, maximum 10). Each option will get a corresponding emoji reaction.' },
                { n: '3', title: 'Generate Your Poll', body: 'Click "Generate Poll" to create your copy-paste ready poll template with emoji options.' },
                { n: '4', title: 'Copy and Paste to Discord', body: 'Click "Copy Poll" to copy to clipboard, then paste into your Discord server and add reaction emojis!' },
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
            Types of Polls You Can Create
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Our <strong className="text-[#1a1d2e]">Discord survey maker</strong> supports all kinds of polls:
            </p>
            <ul className="list-none space-y-3">
              {[
                { name: 'Yes/No Polls', desc: 'Simple two-option polls for quick decisions. Use 👍 and 👎 or ✅ and ❌ emojis.' },
                { name: 'Multiple Choice Polls', desc: '3-10 options for more complex questions. Use number emojis (1️⃣, 2️⃣, etc.) for clarity.' },
                { name: 'Preference Polls', desc: 'Ask your community what they prefer. Great for choosing games, movies, or activities.' },
                { name: 'Feedback Polls', desc: 'Get feedback on your server, content, or ideas. Use rating emojis like ⭐ or 😊.' },
                { name: 'Event Polls', desc: 'Choose dates or times for events. Perfect for planning game nights or meetups!' },
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
            Using Discord Bots for Polls
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              For more advanced polls (like anonymous polls, timed polls, or single-choice voting), you can use Discord bots. Popular poll bots include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Carl-bot:</strong> Supports reaction roles and simple poll commands.</li>
              <li><strong>Poll Bot:</strong> Dedicated poll bot with lots of customization options.</li>
              <li><strong>Simple Poll:</strong> Easy to use for quick polls.</li>
              <li><strong>Dyno:</strong> Includes basic poll features alongside moderation tools.</li>
            </ul>
            <p className="text-sm mt-4">
              Our <strong className="text-[#1a1d2e]">Discord poll creator</strong> is perfect for quick, manual polls with reaction emojis, while bots are better for more complex needs!
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/tools/discord-embed-generator/', name: 'Discord Embed Generator', desc: 'Create beautiful embeds for your poll announcements.' },
              { href: '/tools/discord-spoiler-generator/', name: 'Discord Spoiler Generator', desc: 'Hide results or sensitive info in your poll messages.' },
              { href: '/tools/discord-markdown-previewer/', name: 'Discord Markdown Previewer', desc: 'Preview your poll formatting before you send it.' },
              { href: '/tools/discord-rules-generator/', name: 'Discord Rules Generator', desc: 'Create clear rules for your server community.' },
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
