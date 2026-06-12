// Feature: free-discord-tools, Property 8: tool grid card count equals tools array length
import { describe, it, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import ToolCard from '@/components/tools/ToolCard';
import type { Tool } from '@/types';

// Mock next/link since ToolCard uses it and we're in jsdom
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('[PBT] P8: tool grid card count equals tools array length', () => {
  /**
   * Validates: Requirements 5.4
   */
  it('renders one ToolCard per tool in the array', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            slug: fc.string({ minLength: 1, maxLength: 30 }),
            name: fc.string({ minLength: 1, maxLength: 50 }),
            description: fc.string({ minLength: 1, maxLength: 200 }),
            href: fc.string({ minLength: 1, maxLength: 50 }),
            keywords: fc.array(fc.string({ minLength: 1, maxLength: 20 })),
          }),
          { minLength: 0, maxLength: 10 }
        ),
        (toolsArr: Tool[]) => {
          const { queryAllByTestId } = render(
            <div>
              {toolsArr.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          );
          const cards = queryAllByTestId('tool-card');
          const result = cards.length === toolsArr.length;
          cleanup();
          return result;
        }
      ),
      { numRuns: 50 }
    );
  });
});
