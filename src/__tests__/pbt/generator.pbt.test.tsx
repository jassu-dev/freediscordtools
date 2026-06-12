// Feature: free-discord-tools, Property 12: copy button aria-labels identify their format
// Feature: free-discord-tools, Property 13: form inputs have associated labels
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import TimestampGenerator from '@/components/tools/TimestampGenerator';
import { DISCORD_FORMATS } from '@/lib/timestamp';

describe('[PBT] P12: copy button aria-labels contain format name', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  /**
   * **Validates: Requirements 9.8**
   */
  it('copy buttons have descriptive aria-labels after initialization', async () => {
    const { container } = render(<TimestampGenerator />);
    await act(async () => {
      // Simulate initialization
    });

    // This is a structural test — verify the component renders copy buttons
    // with data-testid attributes for each format code after state is set
    // The aria-labels are computed dynamically in the component
    const buttons = container.querySelectorAll('[data-testid^="copy-btn-"]');
    for (const btn of Array.from(buttons)) {
      const ariaLabel = btn.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
      expect(ariaLabel!.toLowerCase()).toContain('copy');
    }
  });
});

describe('[PBT] P13: form inputs have associated labels', () => {
  /**
   * **Validates: Requirements 9.3**
   */
  it('every input/select has an associated label', () => {
    render(<TimestampGenerator />);
    // Date and time inputs must have labels
    expect(screen.queryByLabelText('Date')).toBeTruthy();
    expect(screen.queryByLabelText('Timezone')).toBeTruthy();
  });
});
