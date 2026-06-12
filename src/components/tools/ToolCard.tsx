import Link from 'next/link';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="block p-6 rounded-lg bg-[#2C2F33] border border-[#40444B] hover:border-[#5865F2] hover:bg-[#32353B] transition-all focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
      data-testid="tool-card"
    >
      <h2 className="text-lg font-semibold text-[#F2F3F5] mb-2">{tool.name}</h2>
      <p className="text-sm text-[#B9BBBE] leading-relaxed">{tool.description}</p>
      <span className="mt-4 inline-flex items-center text-sm text-[#5865F2] font-medium">
        Use tool →
      </span>
    </Link>
  );
}
