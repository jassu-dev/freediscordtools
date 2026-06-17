import type { Metadata } from 'next';
import ToolCard from '@/components/tools/ToolCard';
import { tools } from '@/data/tools';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Free Tools – Discord Utilities and Resume Checkers',
  description: 'Browse all free tools. Discord timestamp generators, font converters, and ATS resume checkers to boost your productivity.',
  alternates: { canonical: `${seoConfig.baseUrl}/tools/` },
  openGraph: {
    title: 'Free Tools – Discord Utilities and Resume Checkers',
    description: 'Browse all free tools.',
    url: `${seoConfig.baseUrl}/tools/`,
    type: 'website',
  },
};

export default function ToolsPage() {
  const discordTools = tools.filter(t => t.slug.startsWith('discord-'));
  const educationTools = tools.filter(t => t.slug.includes('ats-'));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-10">Our Tools</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1a1d2e] mb-6">Discord Utilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {discordTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1a1d2e] mb-6">Education & Career Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
