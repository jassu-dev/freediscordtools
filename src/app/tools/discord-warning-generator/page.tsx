import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import DiscordWarningGenerator from '@/components/tools/DiscordWarningGenerator';
import { seoConfig } from '@/config/seo';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'What is a Discord warning generator?',
    answer: 'A Discord warning generator is a free online tool that helps you create professional, friendly warning messages for your Discord server. Our Discord warning generator provides pre-written templates for first warnings, second warnings, formal warnings, and friendly reminders, so you can handle member warnings consistently and professionally.',
  },
  {
    question: 'What should a good Discord warning message include?',
    answer: 'A good Discord warning message should include: 1) The member's username, 2) A clear reason for the warning, 3) Which rule(s) were violated, 4) A reminder to follow server rules, 5) A polite but firm tone. Use our Discord warning generator to create perfect warnings every time.',
  },
  {
    question: 'Is this Discord warning generator free?',
    answer: 'Yes! Our Discord warning generator is 100% free to use with no sign-up required. Create as many warning messages as you need, customize them with usernames and reasons, and copy them to your clipboard instantly.',
  },
  {
    question: 'How do I warn someone on Discord politely?',
    answer: 'To warn someone politely on Discord, use our Discord warning generator to create a clear, friendly message that explains the issue without being hostile. Be specific about the rule violation, and remind them of your server's rules — our generator makes this easy!',
  },
];

export const metadata: Metadata = {
  title: 'Discord Warning Generator - Free Warning Templates',
  description: 'Free Discord warning generator with friendly, formal, and professional warning templates for first, second, and final warnings. Customize usernames and reasons easily. The #1 Discord warning tool online.',
  keywords: ['discord warning generator', 'discord warning message', 'discord warning template', 'discord first warning', 'discord second warning', 'discord server moderation', 'discord warning notice', 'how to warn someone on discord', 'polite discord warning', 'friendly discord warning', 'free discord warning template'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/discord-warning-generator/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-warning-generator/`;

export default function DiscordWarningGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Warning Generator',
          description: 'Free Discord warning generator with friendly, formal, and professional warning templates for first, second, and final warnings.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Warning Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Discord Warning Generator
          </h1>
          <p className="text-2xl text-[#5b6282] max-w-4xl mx-auto">
            Create friendly, professional warning messages for your Discord server in minutes with customizable templates for first warnings, second warnings, formal warnings, and gentle reminders.
          </p>
        </header>

        <section className="mb-12">
          <DiscordWarningGenerator />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>The Ultimate Guide to Discord Warnings</h2>
          <p className="mb-6 leading-relaxed">
            Warnings are one of the most important moderation tools — they give members a chance to correct their behavior before more serious action is taken, but writing consistent, professional warnings can be time-consuming. That's exactly why we built this free Discord warning generator — to give you pre-written templates for every warning scenario, so you can handle warnings quickly and consistently without stress.
          </p>

          <p className="mb-6 leading-relaxed">
            A well-written Discord warning reduces conflict, sets clear expectations, and helps members understand how to improve. Whether you're giving a friendly reminder, a first warning, a second warning, or a final warning, our Discord warning generator has a template that fits your needs — and all templates are fully customizable to match your server's tone.
          </p>

          <div className="my-6 p-5 bg-[#F0F2FF] border-l-4 border-[#5865F2] rounded-r-xl">
            <strong>Why Good Warnings Matter:</strong> Professional warnings reduce repeat offenses, show members you're fair, maintain your server's positive atmosphere, and create a clear paper trail for future moderation actions.
          </div>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">What Every Great Discord Warning Should Include</h3>
          <p className="mb-6 leading-relaxed">
            The best Discord warnings are clear, specific, and constructive — they tell the member exactly what they did wrong, how to fix it, and what happens if they continue. Here's what every good Discord warning should include, and what our Discord warning generator provides:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Username:</strong> Address the member directly so there's no confusion who the warning is for.</li>
            <li><strong>Warning Reason:</strong> Be specific about which rule(s) were violated — don't leave the member guessing.</li>
            <li><strong>Clear Expectations:</strong> Tell the member exactly what they need to do differently in the future.</li>
            <li><strong>Consequence Reminder:</strong> If it's a second or final warning, remind them what will happen if the behavior continues.</li>
            <li><strong>Polite but Firm Tone:</strong> Be friendly and constructive, but clear that rules must be followed.</li>
            <li><strong>No Ambiguity:</strong> Make sure the member understands exactly why they're being warned and what to do next.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Common Discord Warning Scenarios & Templates</h3>
          <p className="mb-6 leading-relaxed">
            Our Discord warning generator includes templates for every common warning scenario, so you're always prepared. Here are some of the most frequent warning situations you'll encounter as a server mod or owner:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Friendly Reminder:</strong> For minor, first-time offenses where a gentle nudge is enough.</li>
            <li><strong>First Warning:</strong> For clear rule violations that need to be addressed but aren't severe.</li>
            <li><strong>Second Warning:</strong> For repeat violations where more serious action may be coming if it continues.</li>
            <li><strong>Formal Warning:</strong> For more serious violations or when you need a formal record.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">How to Use Our Discord Warning Generator</h3>
          <p className="mb-6 leading-relaxed">
            Using our free Discord warning generator couldn't be simpler. Follow these easy steps to create the perfect warning message for your server:
          </p>

          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li><strong>Select a Template:</strong> Choose from our pre-written warning templates (Friendly Reminder, First Warning, Second Warning, Formal Warning, etc.).</li>
            <li><strong>Customize Fields:</strong> Fill in the username and warning reason.</li>
            <li><strong>Preview Message:</strong> See your warning message in a Discord-like dark mode preview to make sure it looks perfect.</li>
            <li><strong>Copy & Use:</strong> Click "Copy Warning" to copy the message to your clipboard, then paste it into Discord.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Tips for Warning Members Professionally on Discord</h3>
          <p className="mb-6 leading-relaxed">
            Once you've created your perfect Discord warning with our generator, here are some tips for delivering it professionally:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Warn Privately First:</strong> Whenever possible, send warnings via DM instead of publicly to avoid embarrassing the member.</li>
            <li><strong>Be Consistent:</strong> Apply warnings fairly and consistently to all members — no favoritism.</li>
            <li><strong>Document Everything:</strong> Keep records of all warnings (who, when, why) for future reference.</li>
            <li><strong>Focus on Behavior, Not Personality:</strong> Address the rule violation, not the member's character.</li>
            <li><strong>Give a Path Forward:</strong> Tell the member exactly what they need to do to avoid further action.</li>
            <li><strong>Stay Calm:</strong> Even if the member is upset, stay professional and calm in your response.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Get Started with Our Free Discord Warning Generator Today!</h3>
          <p className="mb-6 leading-relaxed">
            Ready to handle warnings professionally and consistently on your Discord server? Start using our free Discord warning generator now! With customizable templates for friendly reminders, first warnings, second warnings, and formal warnings, you'll have perfect warning messages in minutes. Whether you're a new mod or an experienced server owner, our Discord warning generator makes moderation easier and less stressful.
          </p>

          <p className="mb-6 leading-relaxed">
            And don't forget to check out our other Discord tools — including our Discord Rules Generator, Discord Ban Message Generator, and Discord Automod Rule Builder — to make server moderation even easier!
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
              <AuthorTrustBox />
      </div>
    </>
  );
}
