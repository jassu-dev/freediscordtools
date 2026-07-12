import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import DiscordAutomodRuleBuilder from '@/components/tools/DiscordAutomodRuleBuilder';
import { seoConfig } from '@/config/seo';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'What is a Discord automod rule builder?',
    answer: 'A Discord automod rule builder is a free online tool that helps you create and customize auto-moderation rules for your Discord server. Our Discord automod rule builder lets you build keyword filters, spam blockers, mention limits, invite filters, and link protectors quickly and easily, with pre-made templates to get you started.',
  },
  {
    question: 'What are the best Discord automod rules to use?',
    answer: 'The best Discord automod rules include: 1) Keyword filters for slurs and offensive language, 2) Mention spam limits (5-10 mentions per message), 3) Spam detection, 4) Invite link filters to prevent raiding, 5) Malicious link protection. Use our Discord automod rule builder to set up all these rules instantly.',
  },
  {
    question: 'Is this Discord automod rule builder free?',
    answer: 'Yes! Our Discord automod rule builder is 100% free to use with no sign-up required. Create as many automod configurations as you need, customize them for your server, and copy the rules to implement in your Discord server settings.',
  },
  {
    question: 'How do I set up Discord auto moderation?',
    answer: 'To set up Discord auto moderation, first use our Discord automod rule builder to plan your rules, then go to Server Settings → AutoMod in Discord and create rules based on your configuration. Our builder gives you all the rule ideas you need to protect your server from spam, raids, and harassment.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Automod Rule Builder - Free Auto Moderation Tool',
  description: 'Free Discord automod rule builder to create, customize, and manage auto-moderation rules for your server. Build keyword filters, spam blockers, and link protectors instantly. The #1 Discord automod tool online.',
  keywords: ['discord automod rule builder', 'discord automod', 'automod rules', 'discord auto moderation', 'discord keyword filter', 'discord spam blocker', 'discord link filter', 'discord auto mod setup', 'discord server moderation', 'discord automod configuration', 'free discord automod tool'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/discord-automod-rule-builder/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-automod-rule-builder/`;

export default function DiscordAutomodRuleBuilderPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Automod Rule Builder',
          description: 'Free Discord automod rule builder to create, customize, and manage auto-moderation rules for your server.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Automod Rule Builder', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Discord Automod Rule Builder
          </h1>
          <p className="text-2xl text-[#5b6282] max-w-4xl mx-auto">
            Create professional Discord auto-moderation rules in minutes with pre-built templates for keyword filters, spam blockers, mention limits, and link protectors. The best Discord automod tool for any server.
          </p>
        </header>

        <section className="mb-12">
          <DiscordAutomodRuleBuilder />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>The Ultimate Guide to Discord Auto Moderation</h2>
          <p className="mb-6 leading-relaxed">
            Setting up effective Discord auto moderation is one of the best things you can do to protect your server from spam, raids, harassment, and rule-breaking content — but knowing which automod rules to use and how to configure them can be tricky. That's exactly why we built this free Discord automod rule builder — to give you a complete, ready-to-use automod configuration that you can implement in your server in minutes.
          </p>

          <p className="mb-6 leading-relaxed">
            A well-configured Discord automod setup saves your moderation team hours of work every week by handling common issues automatically, so your staff can focus on more important things like community building and member support. Whether you're running a small friend server or a massive public community, our Discord automod rule builder has you covered with templates for every moderation need.
          </p>

          <div className="my-6 p-5 bg-[#F0F2FF] border-l-4 border-[#5865F2] rounded-r-xl">
            <strong>Why Automod Matters:</strong> Good Discord automod rules reduce moderation burnout, prevent raids and spam attacks, keep your server clean 24/7, and create a safer environment for all members.
          </div>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Essential Discord Automod Rules Every Server Needs</h3>
          <p className="mb-6 leading-relaxed">
            The best Discord automod configurations cover all the common problem areas without being too strict. Here's what every good Discord automod setup should include, and what our Discord automod rule builder provides:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Keyword Filter:</strong> Blocks slurs, offensive language, and forbidden words automatically.</li>
            <li><strong>Mention Spam Limit:</strong> Prevents users from mass-mentioning (@everyone, @here, or many members) to avoid spam and raids.</li>
            <li><strong>Spam Detection:</strong> Catches repetitive messages, copy-pasted spam, and rapid-fire posting.</li>
            <li><strong>Invite Link Filter:</strong> Blocks unauthorized Discord invite links to prevent raiding and self-promo.</li>
            <li><strong>Link Filter:</strong> Protects against malicious links, phishing attempts, and sketchy websites.</li>
            <li><strong>Content Filtering:</strong> Removes NSFW or inappropriate content automatically if enabled.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">How to Use Our Discord Automod Rule Builder</h3>
          <p className="mb-6 leading-relaxed">
            Using our free Discord automod rule builder couldn't be easier. Follow these simple steps to create the perfect automod configuration for your server:
          </p>

          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li><strong>Browse Templates:</strong> Check out our pre-built automod rule templates for keyword filters, mention limits, spam detection, and more.</li>
            <li><strong>Enable Rules:</strong> Toggle the rules you want to include in your automod setup — disable any that don't fit your server's needs.</li>
            <li><strong>Add Custom Rules:</strong> Use the custom rule feature to add server-specific automod rules that aren't in our templates.</li>
            <li><strong>Preview & Copy:</strong> See your automod configuration in a clean, easy-to-read format, then copy it to your clipboard.</li>
            <li><strong>Implement in Discord:</strong> Go to Server Settings → AutoMod in Discord and create rules based on your configuration from our builder.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Free Discord Automod Templates for Every Server</h3>
          <p className="mb-6 leading-relaxed">
            Every Discord server has different moderation needs, and that's why our Discord automod rule builder includes flexible templates that work for any community. Whether you're running a casual friend group, a competitive gaming server, a professional business server, or a creative art community, you can customize our automod rules to fit perfectly.
          </p>

          <p className="mb-6 leading-relaxed">
            All of our templates are fully customizable — enable or disable rules, add your own custom automod rules, and create a Discord auto moderation setup that's perfect for your unique community. And because our Discord automod rule builder is free, you can experiment and iterate as much as you want until your configuration feels just right.
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Tips for Effective Discord Auto Moderation</h3>
          <p className="mb-6 leading-relaxed">
            Once you've created your perfect Discord automod configuration with our builder, here are some tips for making it work effectively in your server:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Start Moderate:</strong> Don't set rules too strict at first — you can always make them stricter later if needed.</li>
            <li><strong>Test Rules:</strong> Test your automod rules with a test account to make sure they work as expected.</li>
            <li><strong>Monitor Logs:</strong> Keep an eye on automod logs to catch any false positives or issues.</li>
            <li><strong>Allow Appeals:</strong> Have a clear appeal process for members who are incorrectly actioned by automod.</li>
            <li><strong>Combine with Human Mods:</strong> Automod is great, but it should complement — not replace — your human moderation team.</li>
            <li><strong>Update Regularly:</strong> Review and update your automod rules periodically as your server grows and changes.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Get Started with Our Free Discord Automod Rule Builder Today!</h3>
          <p className="mb-6 leading-relaxed">
            Ready to set up professional Discord auto moderation for your server? Start using our free Discord automod rule builder now! With pre-built templates for keyword filters, spam blockers, mention limits, and link protectors, custom rule support, and one-click copying, you'll have a complete automod configuration in minutes. Whether you need a basic setup for a small server or advanced rules for a large public community, our Discord automod rule builder has everything you need to keep your server safe and clean 24/7.
          </p>

          <p className="mb-6 leading-relaxed">
            And don't forget to check out our other Discord tools — including our Discord Rules Generator, Discord Ban Message Generator, and Discord Warning Generator — to make server moderation even easier!
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
              <AuthorTrustBox />
      </div>
    </>
  );
}
