import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PermissionCalculatorTool from '@/components/tools/PermissionCalculatorTool';

export const metadata: Metadata = {
  title: 'Discord Permission Calculator - Role Integer Tool',
  description:
    'Free Discord permission calculator. Select server role permissions and generate the exact permission integer needed for your bot configuration.',
  keywords: [
    'discord permission calculator',
    'discord role permission integer',
    'discord bot permissions',
    'calculate discord permissions',
    'discord permission bitwise',
    'discord server role management',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-permission-calculator/`,
  },
};

const faqItems = [
  {
    question: 'What is a Discord permission integer?',
    answer: 'Discord permissions are stored as a 64-bit integer, where each bit represents a specific permission. The permission integer is a numerical value used to set these permissions when configuring bots.',
  },
  {
    question: 'How do I use this permission calculator?',
    answer: 'Simply check the boxes for the permissions you want to grant to a role, and the tool will instantly calculate the exact permission integer to copy and paste into your bot\'s settings.',
  },
  {
    question: 'Is this calculator accurate?',
    answer: 'Yes, this calculator uses the official Discord bitwise permission constants to ensure 100% accuracy in generating the required permission integer.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-permission-calculator/`;

export default function DiscordPermissionCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <WebSiteSchema />
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Permission Calculator', href: PAGE_URL },
        ]}
      />
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#1a1d2e] mb-4">Discord Permission Calculator</h1>
        <p className="text-xl text-[#5b6282]">
          Easily calculate your <strong>Discord permission integer</strong> for bot setups and role management.
        </p>
      </header>

      <section className="mb-10">
        <PermissionCalculatorTool />
      </section>

      <article className="prose prose-lg max-w-none text-[#5b6282]">
        <h2>Complete Guide: How Discord Permission Integers Work</h2>
        <p>
          Discord&apos;s permission system is one of the most powerful — and most misunderstood — aspects of managing a server or configuring a bot. Every action a user, role, or bot can perform on Discord is governed by a specific permission. And every set of permissions is represented under the hood as a single large integer number, known as the <strong>permission integer</strong> or <strong>permission bitfield</strong>.
        </p>
        <p>
          Understanding how to read and generate this integer is essential for server admins configuring roles, bot developers building invite links, and anyone debugging why a bot or user &quot;can&apos;t do&quot; something in a specific channel.
        </p>

        <h3>What Is a Discord Permission Integer?</h3>
        <p>
          Discord stores all permissions as a <strong>64-bit integer</strong>. Each of the 64 bit positions (from bit 0 to bit 63) represents one specific permission flag. When a bit is set to <code>1</code>, that permission is granted. When it is <code>0</code>, it is denied. This system is called a <strong>bitfield</strong> or <strong>bitmask</strong>.
        </p>
        <p>
          For example:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bit 0 = <code>CREATE_INSTANT_INVITE</code> (value: 1)</li>
          <li>Bit 1 = <code>KICK_MEMBERS</code> (value: 2)</li>
          <li>Bit 2 = <code>BAN_MEMBERS</code> (value: 4)</li>
          <li>Bit 3 = <code>ADMINISTRATOR</code> (value: 8)</li>
          <li>...and so on up to bit 63.</li>
        </ul>
        <p>
          To grant a role both <strong>KICK_MEMBERS</strong> and <strong>BAN_MEMBERS</strong>, you add their values: <code>2 + 4 = 6</code>. That&apos;s the permission integer for that role.
        </p>
        <p>
          Our <strong>Discord permission calculator</strong> automates this by letting you check each permission, and instantly calculating the resulting combined integer. No binary math required.
        </p>

        <h3>How to Use Permission Integers with Bot Invite Links</h3>
        <p>
          When you generate a bot invite URL through the Discord Developer Portal, you add a <code>permissions</code> parameter to the OAuth2 URL. This tells Discord which permissions to pre-select for the bot&apos;s role when it joins a server. The value of that parameter is the permission integer.
        </p>
        <p>
          Example invite URL with permissions:
        </p>
        <div className="bg-[#F0F2FF] rounded-lg p-4 font-mono text-sm text-[#5865F2] overflow-x-auto">
          https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=2147483655&scope=bot
        </div>
        <p>
          In this URL, <code>2147483655</code> is the permission integer encoding the set of permissions your bot needs. Using our calculator, you can select exactly the permissions your bot requires and copy the resulting number directly into your invite link.
        </p>

        <h3>Discord Role Permission Hierarchy</h3>
        <p>
          Discord permission integers interact with the server&apos;s <strong>role hierarchy</strong>. When calculating effective permissions for a user in a channel, Discord combines permissions from:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>@everyone role</strong> — Base permissions that apply to all server members.</li>
          <li><strong>User&apos;s roles</strong> — Each role the user has, combined using bitwise OR (stacking all granted permissions together).</li>
          <li><strong>Channel overrides</strong> — Channel-specific allow/deny overrides that can grant or revoke specific permissions per-role or per-user in a specific channel, overriding the server-wide role settings.</li>
        </ol>
        <p>
          Note: If any role grants <strong>ADMINISTRATOR</strong> (bit 3, value 8), it overrides all other permission checks and grants unrestricted access throughout the server, regardless of channel overrides.
        </p>

        <h3>Dangerous Permissions to Monitor</h3>
        <p>
          Some permissions carry significant security risk and should only be granted to highly trusted roles:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>ADMINISTRATOR</strong> — Grants all permissions unconditionally. Never give this to bots unless absolutely required.</li>
          <li><strong>MANAGE_GUILD</strong> — Allows changing server settings, invites, and integrations.</li>
          <li><strong>MANAGE_ROLES</strong> — Allows editing roles below the user&apos;s highest role. Can be abused to self-escalate privileges.</li>
          <li><strong>MENTION_EVERYONE</strong> — Allows pinging @everyone and @here. Keep restricted to moderators only.</li>
          <li><strong>MANAGE_WEBHOOKS</strong> — Can create and delete webhooks, potentially bypassing moderation systems.</li>
        </ul>

        <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-8">
          Need a deeper understanding of how these integers are calculated? Read our <a href="/blog/discord-permission-integer-guide/" className="text-[#5865F2] font-bold hover:underline">Ultimate Guide to Discord Permission Integers</a>.
        </p>
      </article>
    </div>
  );
}
