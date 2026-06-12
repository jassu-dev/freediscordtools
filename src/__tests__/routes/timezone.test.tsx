// Feature: free-discord-tools
// P11: Timezone selector contains all Intl timezones
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, act, waitFor } from '@testing-library/react';
import TimestampGenerator from '@/components/tools/TimestampGenerator';

describe('P11: Timezone selector contains all Intl timezones', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('populates timezone selector with timezones from Intl.supportedValuesOf', async () => {
    const mockTimezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];
    vi.spyOn(
      Intl as unknown as { supportedValuesOf: (key: string) => string[] },
      'supportedValuesOf'
    ).mockReturnValue(mockTimezones);

    const { getByTestId } = render(<TimestampGenerator />);

    await act(async () => {
      // allow useEffect to run
    });

    await waitFor(
      () => {
        const select = getByTestId('timezone-select') as HTMLSelectElement;
        const options = Array.from(select.options).map((o) => o.value);
        for (const tz of mockTimezones) {
          expect(options).toContain(tz);
        }
      },
      { timeout: 2000 }
    );
  });
});
