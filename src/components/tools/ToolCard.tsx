import Link from 'next/link';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="block p-6 rounded-xl bg-white border border-[#E3E6F0] hover:border-[#5865F2] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
      data-testid="tool-card"
    >
      <h2 className="text-lg font-semibold text-[#1a1d2e] mb-2">{tool.name}</h2>
      <p className="text-sm text-[#5b6282] leading-relaxed">{tool.description}</p>
      <span className="mt-4 inline-flex items-center text-sm text-[#5865F2] font-medium">
        Use tool →
      </span>
    </Link>
  );
}
