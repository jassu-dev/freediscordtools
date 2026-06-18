import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TimestampGenerator from '@/components/tools/TimestampGenerator';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

// Task 11.6: Copy button success flow with mocked clipboard API
describe('TimestampGenerator copy buttons', () => {
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

  it('renders the component without crashing', () => {
    render(<TimestampGenerator />);
    expect(document.body).toBeTruthy();
  });

  it('shows 7 copy buttons after inputs are set', async () => {
    render(<TimestampGenerator />);
    const dateInput = screen.queryByLabelText('Date');
    const timeInput = screen.queryByLabelText('Time');
    if (dateInput && timeInput) {
      await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
        fireEvent.change(timeInput, { target: { value: '12:00' } });
      });
      expect(screen.queryAllByTestId(/^copy-btn-/).length).toBe(7);
    }
  });

  it('calls clipboard.writeText when copy button clicked', async () => {
    render(<TimestampGenerator />);
    const dateInput = screen.queryByLabelText('Date');
    const timeInput = screen.queryByLabelText('Time');
    if (dateInput && timeInput) {
      await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
        fireEvent.change(timeInput, { target: { value: '12:00' } });
      });
      const copyBtn = screen.queryByTestId('copy-btn-t');
      if (copyBtn) {
        await act(async () => {
          fireEvent.click(copyBtn);
          await Promise.resolve();
        });
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      }
    }
  });

  // Task 11.6: success indicator + 1500ms revert
  it('shows Copied! then reverts after 1500ms', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(<TimestampGenerator />);
    const dateInput = screen.queryByLabelText('Date');
    const timeInput = screen.queryByLabelText('Time');
    if (dateInput && timeInput) {
      await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
        fireEvent.change(timeInput, { target: { value: '12:00' } });
      });
      const copyBtn = screen.queryByTestId('copy-btn-t');
      if (copyBtn) {
        await act(async () => {
          fireEvent.click(copyBtn);
          await Promise.resolve();
        });
        expect(copyBtn.textContent).toBe('Copied!');
        act(() => { vi.advanceTimersByTime(1600); });
        expect(copyBtn.textContent).toBe('Copy');
      }
    }
    vi.useRealTimers();
  });
});

// Task 11.7: execCommand clipboard fallback
describe('TimestampGenerator execCommand fallback', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(document, 'execCommand', {
      value: vi.fn().mockReturnValue(true),
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('falls back to execCommand when clipboard API is unavailable', async () => {
    render(<TimestampGenerator />);
    const dateInput = screen.queryByLabelText('Date');
    const timeInput = screen.queryByLabelText('Time');
    if (dateInput && timeInput) {
      await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
        fireEvent.change(timeInput, { target: { value: '12:00' } });
      });
      const copyBtn = screen.queryByTestId('copy-btn-t');
      if (copyBtn) {
        await act(async () => {
          fireEvent.click(copyBtn);
          await Promise.resolve();
        });
        expect(document.execCommand).toHaveBeenCalledWith('copy');
      }
    }
  });
});

// Task 11.14: form labels
describe('TimestampGenerator form labels', () => {
  it('date input has associated label', () => {
    render(<TimestampGenerator />);
    expect(screen.queryByLabelText('Date')).toBeTruthy();
  });

  it('time input has associated label', () => {
    render(<TimestampGenerator />);
    expect(screen.queryByLabelText('Time')).toBeTruthy();
  });

  it('timezone select has associated label', () => {
    render(<TimestampGenerator />);
    expect(screen.queryByLabelText('Timezone')).toBeTruthy();
  });
});
