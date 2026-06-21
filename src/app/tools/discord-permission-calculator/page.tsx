import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import { buildFaqJsonLd } from '@/lib/jsonld';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import PermissionCalculatorTool from '@/components/tools/PermissionCalculatorTool';

const faqItems = [
  {
    question: 'What is a Discord permission integer?',
    answer:
      'A Discord permission integer is a 64-bit number where each bit represents one permission flag. Combining permissions produces a single integer that Discord uses to determine what a role or bot is allowed to do.',
  },
  {
    question: 'How do I use this Discord permission calculator?',
    answer:
      'Toggle the checkboxes for each permission you want to grant. The calculator instantly shows the resulting integer. Copy it and paste it into your bot invite URL or API request.',
  },
  {
    question: 'How do I add the permission integer to a bot invite link?',
    answer:
      'Add a ?permissions=INTEGER parameter to your OAuth2 invite URL: https://discord.com/api/oauth2/authorize?client_id=YOUR_ID&permissions=YOUR_INTEGER&scope=bot',
  },
  {
    question: 'What does the Administrator permission do?',
    answer:
      'The Administrator permission grants all other permissions unconditionally and overrides all channel-level permission restrictions. Only grant it to fully trusted bots or roles.',
  },
  {
    question: 'Can permission integers be negative?',
    answer:
      'Some libraries return permission integers as signed 64-bit integers, which can appear negative in certain languages. Discord\'s API accepts both signed and unsigned representations. Our calculator outputs the standard unsigned integer.',
  },
  {
    question: 'Do channel overwrites override role permissions?',
    answer:
      'Yes. Channel permission overwrites are the final layer and can explicitly allow or deny specific permissions for a role or user in that channel, overriding the base role permission integer.',
  },
];
export const metadata: Metadata = {
  title: 'Discord Permission Calculator – Generate Permission Integer',
  description:
    'Free Discord permission calculator. Select role permissions and instantly generate the exact bitwise permission integer for bots and server role management.',
  keywords: [
    'discord permission calculator',
    'discord role permission integer',
    'discord bot permissions',
    'calculate discord permissions',
    'discord permission bitwise',
    'discord server role management',
    'discord bot invite permissions',
    'discord permission integer generator',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-permission-calculator/`,
  },
  openGraph: {
    title: 'Discord Permission Calculator – Generate Permission Integer',
    description:
      'Select Discord role permissions and instantly generate the exact bitwise integer for bot invites and role configuration.',
    url: `${seoConfig.baseUrl}/tools/discord-permission-calculator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Permission Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Permission Calculator – Generate Permission Integer',
    description: 'Calculate Discord permission integers for bots and roles instantly. Free, accurate, no sign-up.',
    site: seoConfig.twitterHandle,
  },
  other: {
    'script:ld+json': buildFaqJsonLd(faqItems),
  },
};


const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-permission-calculator/`;

export default function DiscordPermissionCalculatorPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Permission Calculator"
        description="Free Discord permission calculator. Generate the exact bitwise permission integer for bot invites and role management instantly."
        url={PAGE_URL}
        applicationCategory="DeveloperApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Permission Calculator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Permission Calculator
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Select the permissions you need and instantly generate the correct <strong className="text-[#1a1d2e]">Discord permission integer</strong> for bot invite links and role configuration. No manual bitwise math required.
          </p>
          <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4">
            Building a Discord bot? Read our <a href="/blog/discord-permission-integer-guide/" className="text-[#5865F2] font-bold hover:underline">Complete Guide to Discord Permission Integers</a>.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Permission Calculator Tool</h2>
          <PermissionCalculatorTool />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Use the Discord Permission Calculator
          </h2>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>Check each permission your role or bot needs. The integer updates live as you toggle.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span>Copy the generated <strong className="text-[#1a1d2e]">permission integer</strong> from the output field.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span>Paste it into your bot invite URL as the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">?permissions=</code> parameter, or use it in API calls.</span>
            </li>
          </ol>
        </section>

        <section aria-labelledby="guide-heading" className="mb-10 space-y-6 text-[#5b6282] text-base leading-relaxed">
          <h2 id="guide-heading" className="text-2xl font-bold text-[#1a1d2e]">
            How Discord Permission Integers Work
          </h2>

          <p>
            Discord stores every permission as a single bit inside a 64-bit integer. Each of the 64 bit positions maps to one specific permission flag. When a bit is <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">1</code>, that permission is granted. When it is <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">0</code>, it is denied. To combine multiple permissions you perform a bitwise OR across all the individual flag values, producing one number that encodes the entire permission set.
          </p>

          <p>
            For example, <strong className="text-[#1a1d2e]">KICK_MEMBERS</strong> has a value of <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">2</code> (bit 1) and <strong className="text-[#1a1d2e]">BAN_MEMBERS</strong> has a value of <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">4</code> (bit 2). A role with both permissions has an integer of <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">6</code>. Our calculator does this accumulation automatically as you toggle permissions.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Using the Integer in Bot Invite URLs</h3>
          <p>
            When you invite a bot through Discord's OAuth2 flow, you can pre-select its permissions by appending the integer to the invite URL:
          </p>
          <div className="bg-[#F0F2FF] rounded-lg p-4 font-mono text-sm text-[#5865F2] overflow-x-auto">
            https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&amp;permissions=INTEGER&amp;scope=bot
          </div>
          <p>
            The server admin who clicks the link sees those permissions pre-checked in the authorization screen. They can still deselect individual permissions before approving, but starting with the right integer reduces friction and avoids under-permissioning your bot.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">The Permission Hierarchy</h3>
          <p>
            Effective permissions for a user in a channel are resolved in three layers. The <strong className="text-[#1a1d2e]">@everyone role</strong> provides the base. Each additional role the user holds is OR'd on top, expanding the permission set. Finally, channel-level permission overwrites apply as the last layer they can explicitly allow permissions not in the role set, or explicitly deny permissions that roles would otherwise grant.
          </p>
          <p>
            The <strong className="text-[#1a1d2e]">Administrator</strong> permission (bit 3, value 8) is a special case: it bypasses all other checks and grants every permission unconditionally, including overriding channel-level denies. For this reason, avoid granting Administrator to bots unless absolutely required.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Security-Sensitive Permissions</h3>
          <p>
            The following permissions carry elevated risk and should only be granted to carefully reviewed roles and bots:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Administrator</strong> Full unrestricted server access.</li>
            <li><strong>Manage Guild</strong> Can change server settings, vanity URL, and integrations.</li>
            <li><strong>Manage Roles</strong> Can modify roles below the actor's highest role, enabling potential privilege escalation.</li>
            <li><strong>Mention Everyone</strong> Can ping @everyone and @here, sending notifications to all members.</li>
            <li><strong>Manage Webhooks</strong> Can create and delete webhooks, potentially bypassing moderation logging.</li>
            <li><strong>Manage Messages</strong> Can delete any message in channels where this permission is granted.</li>
          </ul>
        </section>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Permission Calculator FAQ
          </h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-lg bg-white border border-[#E3E6F0]">
                <summary className="px-4 py-3 font-medium text-[#1a1d2e] text-base cursor-pointer list-none flex justify-between items-center gap-2">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] shrink-0 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="px-4 pb-4 pt-1 text-[#5b6282] text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
