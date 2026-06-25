import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import DiscordRulesGenerator from '@/components/tools/DiscordRulesGenerator';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What is a Discord rules generator?',
    answer: 'A Discord rules generator is a free online tool that helps you create perfect discord server rules quickly and easily. Our discord rules generator provides 100+ ready-to-use rules templates across general community, gaming, art, tech, and moderation categories, so you can build a comprehensive discord rules list in minutes without starting from scratch.',
  },
  {
    question: 'What are the best Discord rules to include?',
    answer: 'The best discord rules always include: 1) Be respectful and civil, 2) No harassment or hate speech, 3) No NSFW content, 4) No spamming or self-promo, 5) Follow Discord ToS, 6) No doxxing, and 7) Channel-specific guidelines. For gaming servers, add no cheating/toxicity rules. Use our discord rules generator to mix and match the perfect rules for your community.',
  },
  {
    question: 'How do I make good Discord rules for a gaming server?',
    answer: 'The best discord rules for gaming servers include: no cheating/hacking, no toxicity or flaming, no spoiling without tags, respect team members, and follow game-specific rules. Our discord rules generator has a dedicated gaming rules template with all the essential gaming discord rules ready to go.',
  },
  {
    question: 'Is this Discord rules generator free?',
    answer: 'Yes! Our discord rules generator is 100% free to use with no sign-up, no limits, and no hidden fees. Create as many discord server rules lists as you need, customize them with your own rules, and copy them to your clipboard instantly.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Rules Generator - Free Discord Server Rules Template',
  description: 'Free Discord rules generator with 100+ ready-to-use rules templates. Create perfect discord server rules, best discord rules for gaming servers, and comprehensive discord rules lists instantly. The #1 discord rules generator online.',
  keywords: ['discord rules generator', 'discord server rules', 'best discord rules', 'discord rules template', 'discord rules list', 'gaming discord rules', 'how to make discord rules', 'free discord rules generator', 'discord server rules template', 'good discord rules', 'simple discord rules', 'discord mod rules'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/discord-rules-generator/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-rules-generator/`;

export default function DiscordRulesGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Rules Generator',
          description: 'Free Discord rules generator with 100+ ready-to-use rules templates. Create perfect discord server rules instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Rules Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Discord Rules Generator
          </h1>
          <p className="text-2xl text-[#5b6282] max-w-4xl mx-auto">
            Create perfect discord server rules in minutes with 100+ ready-to-use templates. The best discord rules generator for gaming servers, art communities, and general discord servers.
          </p>
        </header>

        <section className="mb-12">
          <DiscordRulesGenerator />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>The Ultimate Guide to Discord Server Rules</h2>
          <p className="mb-6 leading-relaxed">
            Creating good discord rules is one of the most important steps when launching a new server, but it can be hard to know where to start. That's exactly why we built this free discord rules generator — to give you a comprehensive starting point with all the best discord rules already written, so you can focus on growing your community instead of stressing over wording.
          </p>

          <p className="mb-6 leading-relaxed">
            A strong discord rules list sets the tone for your entire community. It tells members what behavior is expected, what won't be tolerated, and creates a safe, inclusive environment where everyone feels welcome. Whether you're running a small friend group server or a massive public community, our discord rules generator has you covered with templates for every type of server.
          </p>

          <div className="my-6 p-5 bg-[#F0F2FF] border-l-4 border-[#5865F2] rounded-r-xl">
            <strong>Why Rules Matter:</strong> Clear, well-written discord server rules reduce moderation work, prevent conflicts, and make your server feel professional and trustworthy to new members.
          </div>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">What Makes Great Discord Rules?</h3>
          <p className="mb-6 leading-relaxed">
            The best discord rules are clear, concise, and easy to understand. They're not overly long or filled with jargon, but they cover all the essential bases. Here's what every good discord rules list should include, and what our discord rules generator provides:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Respect & Civility:</strong> The foundation of any good community — no harassment, no hate speech, no discrimination.</li>
            <li><strong>Content Guidelines:</strong> What content is allowed (and what isn't), including NSFW policies and spoiler rules.</li>
            <li><strong>Behavior Rules:</strong> No spamming, no excessive pinging, no self-promotion without permission.</li>
            <li><strong>Privacy & Safety:</strong> No doxxing, no sharing personal info without consent, no malicious links.</li>
            <li><strong>Discord ToS Compliance:</strong> A reminder to follow Discord's official Terms of Service and Community Guidelines.</li>
            <li><strong>Channel-Specific Rules:</strong> Encouraging members to use the right channels for the right conversations.</li>
            <li><strong>Moderation Policies:</strong> Letting members know how moderators will enforce rules and what to do if they have issues.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Best Discord Rules for Gaming Servers</h3>
          <p className="mb-6 leading-relaxed">
            Gaming servers have unique needs, and our discord rules generator includes a dedicated gaming template with all the best discord rules for gaming servers. In addition to the general rules above, great gaming discord rules should include:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>No Cheating/Hacking:</strong> An immediate ban offense in most gaming communities.</li>
            <li><strong>No Toxicity or Griefing:</strong> Keep gameplay fun and respectful for everyone.</li>
            <li><strong>No Spoilers:</strong> Use spoiler tags for major plot points or game endings.</li>
            <li><strong>Team Play Guidelines:</strong> Respect team leaders and follow in-game strategies during organized matches.</li>
            <li><strong>No Piracy:</strong> Only allow legitimate game copies and no sharing of cracks or keygens.</li>
          </ul>

          <p className="mb-6 leading-relaxed">
            Our discord rules generator makes it easy to create perfect gaming discord rules — just toggle the gaming category, select the rules you want, add your own custom rules, and copy!
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">How to Use Our Discord Rules Generator</h3>
          <p className="mb-6 leading-relaxed">
            Using our free discord rules generator couldn't be simpler. Here's a step-by-step guide to creating your perfect discord server rules:
          </p>

          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li><strong>Browse Templates:</strong> Check out our pre-written rules across categories like General Community, Gaming, Art & Design, Technology & Coding, and Moderation.</li>
            <li><strong>Select Rules:</strong> Toggle the checkboxes next to the rules you want to include in your discord rules list.</li>
            <li><strong>Add Custom Rules:</strong> Use the custom rules section to add any server-specific rules that aren't in our templates.</li>
            <li><strong>Preview & Copy:</strong> See your rules in a Discord-like dark mode preview, then click Copy Rules to copy everything to your clipboard.</li>
            <li><strong>Paste in Your Server:</strong> Paste your new rules into your Discord server's #rules channel, and you're done!</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Free Discord Rules Templates for Every Community</h3>
          <p className="mb-6 leading-relaxed">
            No two Discord communities are the same, and that's why our discord rules generator includes templates for every type of server. Whether you're running a cozy art server, a competitive gaming community, a tech/coding hub, or just a general hangout spot, we have the perfect discord rules template for you.
          </p>

          <p className="mb-6 leading-relaxed">
            All of our templates are fully customizable — mix and match rules from different categories, add your own custom rules, and create a discord rules list that's perfect for your unique community. And because our discord rules generator is free, you can experiment and iterate as much as you want until your rules feel just right.
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Tips for Presenting Your Discord Server Rules</h3>
          <p className="mb-6 leading-relaxed">
            Once you've created your perfect discord rules list with our generator, here are some tips for presenting them effectively in your server:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Use a Dedicated #rules Channel:</strong> Keep all your rules in one easy-to-find place.</li>
            <li><strong>Pin the Rules Message:</strong> Pin your official rules message to the top of the channel so it's always visible.</li>
            <li><strong>Use Formatting:</strong> Use Discord markdown (bold, headings, bullet points) to make your rules easy to scan.</li>
            <li><strong>Keep It Readable:</strong> Don't make your rules too long — focus on what's essential.</li>
            <li><strong>Link to Rules Everywhere:</strong> Mention your rules channel in your welcome message, server description, and other key places.</li>
            <li><strong>Enforce Consistently:</strong> Make sure your moderation team enforces the rules fairly and consistently.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Get Started with Our Free Discord Rules Generator Today!</h3>
          <p className="mb-6 leading-relaxed">
            Ready to create the perfect discord server rules for your community? Start using our free discord rules generator now! With 100+ ready-to-use rules templates, custom rule support, and one-click copying, you'll have professional discord rules in minutes. Whether you need simple discord rules for a small server, the best discord rules for gaming servers, or a comprehensive discord rules template for a large public community, our generator has everything you need.
          </p>

          <p className="mb-6 leading-relaxed">
            And don't forget to check out our blog for more tips and guides — including our articles on 50 Discord Server Rules Examples, Best Discord Rules for Gaming Servers, and How to Create Discord Rules for even more ideas and inspiration!
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
