import type { Metadata } from 'next';

import FaqSchema from '@/components/seo/FaqSchema';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import DiscordTextRotator from '@/components/tools/DiscordTextRotator';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';

const faqItems = [
  {
    question: 'How do you make upside down text on Discord?',
    answer:
      'To make upside down text on Discord, use our Discord Text Rotator. It converts your text into upside-down characters that you can copy and paste directly into Discord.',
  },
  {
    question: 'Does upside down text work on Discord mobile?',
    answer:
      'Yes! Upside down text works on both Discord desktop and mobile, as long as the device supports the Unicode characters.',
  },
  {
    question: 'Can you reverse text on Discord?',
    answer:
      'Absolutely! Our Discord Text Rotator can reverse any text instantly. Just type your text, copy the reversed version, and paste it into Discord.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Text Rotator - Upside Down & Reversed Text',
  description:
    'Free Discord text rotator. Flip text upside-down, reverse text, and create weird text styles for Discord. One-click copy for all text effects.',
  keywords: [
    'discord text rotator',
    'upside down text discord',
    'reverse text discord',
    'discord weird text',
    'discord text flipper',
    'free discord text tool',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-text-rotator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-text-rotator/`;

export default function DiscordTextRotatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Text Rotator',
          description: 'Free Discord text rotator. Flip text upside-down, reverse text, and create weird text styles.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Text Rotator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Text Rotator
          </h1>
          <p className="text-lg text-[#5b6282] mt-4 max-w-3xl leading-relaxed">
            The ultimate free <strong className="text-[#1a1d2e]">Discord text rotator</strong>. Flip text upside-down, reverse text, and create weird text styles for Discord instantly! Add personality to your messages, usernames, nicknames, and bios with one-click copy. Perfect for gaming servers, creative communities, and anyone who wants to stand out.
          </p>
          <p className="bg-[#F0F2FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4 rounded-r-xl">
            Want more Discord font styles? Check out our{' '}
            <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">
              Discord Font Generator
            </a>!
          </p>
        </header>
        <section className="mb-10">
          <DiscordTextRotator />
        </section>
        
        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Why Use an Upside Down Text Discord Tool?
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              An <strong className="text-[#1a1d2e]">upside down text Discord</strong> tool is perfect for adding a fun, playful twist to your Discord messages. Whether you're trolling friends, creating unique usernames, or just want to add personality to your server, our <strong className="text-[#1a1d2e]">Discord text flipper</strong> makes it easy and fast.
            </p>
            <p>
              Our tool uses Unicode character substitution with special Unicode characters that look like upside-down versions of regular letters. This means the text works on all devices, including Windows, Mac, iOS, Android, and the Discord mobile apps. No downloads or special software required!
            </p>
          </div>
        </section>

        <section className="mb-10 bg-white rounded-2xl p-6 border border-[#E3E6F0] shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use Our Discord Text Rotator: Step-by-Step
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <ol className="space-y-4 list-none">
              {[
                { n: '1', title: 'Type your text', body: 'Enter the text you want to transform into the input box. This can be a username, nickname, message, bio, or any text you want to make upside-down or reverse.' },
                { n: '2', title: 'Choose your style', body: 'Our tool generates multiple options: Reversed Text and Upside Down Text. Both update as you type, no need to click anything.' },
                { n: '3', title: 'Copy and paste', body: 'Click "Copy" on your desired style, then paste it into Discord with Ctrl+V (Windows) or Cmd+V (Mac). Your weird Discord text ready go!' },
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
            Creative Uses for Weird Discord Text Styles
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Upside-down and reversed text aren't just for jokes! Here are creative ways to use them:
            </p>
            <ul className="list-none space-y-3">
              {[
                { name: 'Unique Usernames', desc: 'Stand out from crowd with an upside-down or reversed username that people will remember.' },
                { name: 'Secret Messages', desc: 'Hide secret messages in chat that people have to read backwards or flip their heads to understand.' },
                { name: 'Server Role Names', desc: 'Make your server roles stand out with weird text styles for a memorable hierarchy.' },
                { name: 'Jokes & Puns', desc: 'Deliver punchlines in upside-down text for a fun, interactive joke setup-first punchline reveal.' },
                { name: 'Profile Bios', desc: 'Add a playful twist to your Discord bio with upside-down or reversed text that shows off your personality.' },
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
            How Our Discord Text Flipper Works
          </h2>
          <div className="text-[#5b6282] space-y-4 leading-relaxed">
            <p>
              Our <strong className="text-[#1a1d2e]">Discord text flipper</strong> uses Unicode character mapping. Instead of actually rotating text, it replaces each letter with a Unicode character that looks like an upside-down version. For example, "a" becomes "ɐ", "b" becomes "q", "e" becomes "ə", and so on.
            </p>
            <p>
              Because these are actual Unicode characters, they work everywhere Discord does, not just images or styling. This means your upside-down text will display correctly for everyone who views your message, profile, or messages.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                <tr className="bg-[#F8F9FF] text-[#1a1d2e]">
                  <th scope="col" className="px-4 py-3 text-left font-bold border border-[#E3E6F0]">Original</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold border border-[#E3E6F0]">Upside Down</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold border border-[#E3E6F0]">Reversed</th>
                </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-4 py-3 text-[#1a1d2e] border border-[#E3E6F0]">Hello World</td>
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">pɹoʍ ollǝH</td>
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">dlroW olleH</td>
                  </tr>
                  <tr className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-4 py-3 text-[#1a1d2e] border border-[#E3E6F0]">Discord</td>
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">pɹoɔsıp</td>
                    <td className="px-4 py-3 font-mono text-[#5865F2] border border-[#E3E6F0]">drocsiD</td>
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
              { href: '/tools/discord-font-generator/', name: 'Discord Font Generator', desc: 'Create fancy fonts for your Discord usernames and bios.' },
              { href: '/tools/discord-spoiler-generator/', name: 'Discord Spoiler Generator', desc: 'Hide text behind spoiler tags for respectful conversations.' },
              { href: '/tools/discord-color-text-generator/', name: 'Discord Colored Text Generator', desc: 'Add colorful ANSI text your Discord messages.' },
              { href: '/tools/discord-poll-creator/', name: 'Discord Poll Creator', desc: 'Make interactive polls your server.' },
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
