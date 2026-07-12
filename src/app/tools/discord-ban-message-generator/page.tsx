import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import DiscordBanMessageGenerator from '@/components/tools/DiscordBanMessageGenerator';
import { seoConfig } from '@/config/seo';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'What is a Discord ban message generator?',
    answer: 'A Discord ban message generator is a free online tool that helps you create professional, polite ban messages for your Discord server. Our Discord ban message generator provides pre-written templates for permanent bans, temporary bans, harassment bans, and spam bans, so you can handle bans consistently and professionally without stress.',
  },
  {
    question: 'What should a good Discord ban message include?',
    answer: 'A good Discord ban message should include: 1) The server name, 2) A clear reason for the ban, 3) Whether the ban is permanent or temporary, 4) Appeal information if applicable, 5) A polite but firm tone. Use our Discord ban message generator to create perfect ban messages every time.',
  },
  {
    question: 'Is this Discord ban message generator free?',
    answer: 'Yes! Our Discord ban message generator is 100% free to use with no sign-up required. Create as many ban messages as you need, customize them with your server info and reason, and copy them to your clipboard instantly.',
  },
  {
    question: 'How do I ban someone on Discord politely?',
    answer: 'To ban someone politely on Discord, use our Discord ban message generator to create a clear, professional message that states the reason without being hostile. Be specific about the rule violation, and include appeal info if you offer appeals — our generator makes this easy!',
  },
];

export const metadata: Metadata = {
  title: 'Discord Ban Message Generator - Free Ban Templates',
  description: 'Free Discord ban message generator with 10+ professional, customizable ban templates for permanent and temporary bans. Create polite, formal ban messages instantly. The #1 Discord ban message tool online.',
  keywords: ['discord ban message generator', 'discord ban message', 'discord ban template', 'discord permanent ban', 'discord temp ban', 'discord server moderation', 'discord ban notice', 'how to ban someone on discord', 'discord ban appeal', 'polite discord ban message', 'professional discord ban message', 'free discord ban template'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/discord-ban-message-generator/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-ban-message-generator/`;

export default function DiscordBanMessageGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Ban Message Generator',
          description: 'Free Discord ban message generator with professional, customizable ban templates for permanent and temporary bans.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Ban Message Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Discord Ban Message Generator
          </h1>
          <p className="text-2xl text-[#5b6282] max-w-4xl mx-auto">
            Create professional, polite ban messages for your Discord server in minutes with 10+ customizable templates for permanent bans, temporary bans, harassment bans, and spam bans.
          </p>
        </header>

        <section className="mb-12">
          <DiscordBanMessageGenerator />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>The Ultimate Guide to Discord Ban Messages</h2>
          <p className="mb-6 leading-relaxed">
            Banning members is never fun, but it's a necessary part of running a healthy Discord server. The key is to handle bans professionally, consistently, and politely — which is exactly why we built this free Discord ban message generator. With pre-written templates for every ban scenario, you can create perfect ban messages in seconds without spending time stressing over wording.
          </p>

          <p className="mb-6 leading-relaxed">
            A well-written Discord ban message reduces conflict, sets clear expectations, and maintains your server's professional reputation. Whether you're banning someone for spam, harassment, or repeated rule violations, our Discord ban message generator has a template that fits your needs — and all templates are fully customizable to match your server's tone.
          </p>

          <div className="my-6 p-5 bg-[#F0F2FF] border-l-4 border-[#5865F2] rounded-r-xl">
            <strong>Why Good Ban Messages Matter:</strong> Professional ban messages reduce appeals, prevent drama, show members you're fair, and maintain your server's reputation as a well-run community.
          </div>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">What Every Great Discord Ban Message Should Include</h3>
          <p className="mb-6 leading-relaxed">
            The best Discord ban messages are clear, concise, and professional — they leave no room for confusion while maintaining a polite tone. Here's what every good Discord ban message should include, and what our Discord ban message generator provides:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Server Name:</strong> Clearly state which server the ban applies to.</li>
            <li><strong>Ban Reason:</strong> Be specific about which rule(s) were violated — don't leave the member guessing.</li>
            <li><strong>Ban Duration:</strong> Specify whether it's a permanent ban or a temporary ban, and if temporary, how long it lasts.</li>
            <li><strong>Appeal Information:</strong> If you offer ban appeals, tell the member how and when they can appeal.</li>
            <li><strong>Polite but Firm Tone:</strong> Be clear and direct, but avoid being hostile or insulting.</li>
            <li><strong>No Ambiguity:</strong> Make sure the member understands exactly why they were banned and what happens next.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Common Discord Ban Scenarios & Templates</h3>
          <p className="mb-6 leading-relaxed">
            Our Discord ban message generator includes templates for every common ban scenario, so you're always prepared. Here are some of the most frequent ban situations you'll encounter as a server mod or owner:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Standard Ban:</strong> For general rule violations after multiple warnings.</li>
            <li><strong>Temporary Ban:</strong> For more serious but not permanent violations (e.g., 1 week, 1 month, etc.).</li>
            <li><strong>Harassment Ban:</strong> For members who harass, bully, or target other members — usually permanent.</li>
            <li><strong>Spam Ban:</strong> For members who spam messages, links, or invites repeatedly.</li>
            <li><strong>Raid Ban:</strong> For members participating in server raids or attacks.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">How to Use Our Discord Ban Message Generator</h3>
          <p className="mb-6 leading-relaxed">
            Using our free Discord ban message generator couldn't be simpler. Follow these easy steps to create the perfect ban message for your server:
          </p>

          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li><strong>Select a Template:</strong> Choose from our pre-written ban templates (Standard, Temporary, Harassment, Spam, etc.).</li>
            <li><strong>Customize Fields:</strong> Fill in your server name, ban reason, appeal info, and ban duration (for temp bans).</li>
            <li><strong>Preview Message:</strong> See your ban message in a Discord-like dark mode preview to make sure it looks perfect.</li>
            <li><strong>Copy & Use:</strong> Click "Copy Message" to copy the ban message to your clipboard, then paste it into Discord.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Tips for Banning Members Professionally on Discord</h3>
          <p className="mb-6 leading-relaxed">
            Once you've created your perfect Discord ban message with our generator, here are some tips for handling the ban professionally:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Document Everything:</strong> Keep records of warnings, rule violations, and ban reasons for future reference.</li>
            <li><strong>Be Consistent:</strong> Apply rules and bans fairly and consistently to all members — no favoritism.</li>
            <li><strong>Ban Privately First:</strong> Send the ban message via DM before banning, if possible, so the member gets the message.</li>
            <li><strong>Avoid Public Drama:</strong> Don't announce bans publicly unless absolutely necessary — keep it private.</li>
            <li><strong>Have an Appeal Process:</strong> If appropriate, offer a way for banned members to appeal their ban.</li>
            <li><strong>Take Breaks:</strong> Moderation is stressful — take breaks if you're feeling frustrated or burnt out.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Get Started with Our Free Discord Ban Message Generator Today!</h3>
          <p className="mb-6 leading-relaxed">
            Ready to handle bans professionally and consistently on your Discord server? Start using our free Discord ban message generator now! With 10+ customizable templates for permanent bans, temporary bans, harassment bans, and spam bans, you'll have perfect ban messages in minutes. Whether you're a new mod or an experienced server owner, our Discord ban message generator makes moderation easier and less stressful.
          </p>

          <p className="mb-6 leading-relaxed">
            And don't forget to check out our other Discord tools — including our Discord Rules Generator, Discord Warning Generator, and Discord Automod Rule Builder — to make server moderation even easier!
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
              <AuthorTrustBox />
      </div>
    </>
  );
}
