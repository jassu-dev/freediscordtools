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
        <h2>How to Manage Discord Permissions</h2>
        <p>
          Managing server roles and bot permissions is critical for a secure Discord server. 
          Sometimes you need to generate a <strong>permission integer</strong> to authorize 
          a bot via an invite URL or to configure advanced role settings.
        </p>
        <p>
          Our <strong>Discord permission calculator</strong> streamlines this by letting you 
          toggle individual permissions and instantly seeing the resulting <strong>permission integer</strong>.
        </p>
      </article>
    </div>
  );
}
