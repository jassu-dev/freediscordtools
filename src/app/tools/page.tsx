import type { Metadata } from 'next';
import { tools } from '@/data/tools';
import { seoConfig } from '@/config/seo';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ToolsPageClient from '@/components/tools/ToolsPageClient';

export const metadata: Metadata = {
  title: 'Free Online Tools – Discord Utilities, Resume Checkers & Developer Tools',
  description:
    'Browse 15+ free browser-based tools: Discord timestamp generator, font generator, color text generator, webhook sender, ATS resume checker, PX to REM converter. No sign-up, no limits.',
  keywords: [
    'free discord tools',
    'discord timestamp generator',
    'discord font generator',
    'ats resume checker',
    'px to rem converter',
    'discord webhook sender',
    'bionic reading converter',
  ],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/` },
  openGraph: {
    title: 'Free Online Tools – Discord Utilities, Resume Checkers & Developer Tools',
    description:
      'Browse 15+ free browser-based tools for Discord users, job seekers, and developers. No sign-up required.',
    url: `${seoConfig.baseUrl}/tools/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Free Discord Tools' }],
  },
};

export default function ToolsPage() {
  const groupedTools = tools.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    },
    {} as Record<string, typeof tools>
  );

  const categories = Object.keys(groupedTools);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-20">
        {/* Page header */}
        <header className="text-center mb-8">
          <p className="text-sm font-bold text-[#5865F2] uppercase tracking-widest mb-3">
            Free &amp; No Sign-Up
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1d2e] mb-4 tracking-tight">
            Free Online Tools
          </h1>
          <p className="text-lg text-[#5b6282] max-w-2xl mx-auto leading-relaxed">
            {tools.length}+ browser-based utilities for Discord users, developers, and job seekers.
            Everything runs locally your data never leaves your device.
          </p>
        </header>

        {/* Client-rendered filter + grid */}
        <ToolsPageClient
          groupedTools={groupedTools}
          categories={categories}
          totalCount={tools.length}
        />
      </div>
    </>
  );
}
