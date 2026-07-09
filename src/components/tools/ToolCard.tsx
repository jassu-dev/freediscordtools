import Link from 'next/link';
import type { Tool } from '@/types';

const categoryMeta: Record<string, { color: string; bg: string; icon: string }> = {
  'Discord Formatting': { color: '#5865F2', bg: 'rgba(88,101,242,0.10)', icon: '✏️' },
  'Discord Lookup & Assets': { color: '#EB459E', bg: 'rgba(235,69,158,0.10)', icon: '🔍' },
  'Discord Management & Dev': { color: '#57F287', bg: 'rgba(87,242,135,0.12)', icon: '⚙️' },
  'Professional Tools': { color: '#F9A825', bg: 'rgba(249,168,37,0.12)', icon: '💼' },
  'Productivity & Developer Tools': { color: '#5C6BC0', bg: 'rgba(92,107,192,0.10)', icon: '🛠️' },
};

const fallbackMeta = { color: '#5865F2', bg: 'rgba(88,101,242,0.10)', icon: '🔧' };

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const meta = categoryMeta[tool.category] ?? fallbackMeta;
  // Show only the first word of the category as badge text to keep it compact
  const badgeText = (tool.category || '').split(' ')[0] || 'Tool';

  return (
    <Link
      href={tool.href}
      prefetch={true}
      className="group relative flex flex-col p-6 rounded-2xl bg-white border border-[#E3E6F0] hover:border-[#5865F2]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5865F2]/40"
      data-testid="tool-card"
    >
      {/* Category badge */}
      <span
        className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
        style={{ color: meta.color, backgroundColor: meta.bg }}
      >
        {badgeText}
      </span>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
        style={{ backgroundColor: meta.bg }}
        aria-hidden="true"
      >
        {meta.icon}
      </div>

      {/* Content */}
      <h2 className="text-base font-bold text-[#1a1d2e] mb-2 pr-10 leading-snug group-hover:text-[#5865F2] transition-colors">
        {tool.name}
      </h2>
      <p className="text-sm text-[#5b6282] leading-relaxed flex-grow mb-5">
        {tool.description}
      </p>

      {/* CTA */}
      <span
        className="inline-flex items-center gap-1.5 self-start text-sm font-bold text-white px-4 py-2 rounded-lg transition-all"
        style={{ backgroundColor: meta.color }}
      >
        Use Tool
        <svg
          className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
