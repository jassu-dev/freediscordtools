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
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  const categories = Object.keys(groupedTools);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-10 text-center">Free Online Tools</h1>
      <p className="text-center text-lg text-[#5b6282] max-w-2xl mx-auto mb-16">
        Boost your productivity with our suite of free, high-quality Discord utilities and professional career tools.
      </p>
      
      {categories.map((category) => (
        <section key={category} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1a1d2e] whitespace-nowrap">{category}</h2>
            <div className="h-px bg-[#E3E6F0] w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedTools[category].map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
