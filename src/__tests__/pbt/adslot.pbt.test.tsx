// Feature: free-discord-tools, Property 1: AdSlot min-height matches height prop
import { describe, it, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import AdSlot from '@/components/ads/AdSlot';

vi.stubGlobal('IntersectionObserver', vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
})));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('[PBT] P1: AdSlot min-height matches height prop', () => {
  /**
   * Validates: Requirements 2.7, 5.8, 8.2
   */
  it('min-height style always equals the height prop value in pixels', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 1000 }),
        (height) => {
          const { getByTestId } = render(
            <AdSlot slotId="test" width={728} height={height} />
          );
          const wrapper = getByTestId('ad-slot');
          const result = wrapper.style.minHeight === `${height}px`;
          cleanup();
          return result;
        }
      ),
      { numRuns: 100 }
    );
  });
});
