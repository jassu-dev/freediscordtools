import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import AdSlot from '@/components/ads/AdSlot';

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
let intersectionCallback: ((entries: IntersectionObserverEntry[]) => void) | null = null;

beforeEach(() => {
  intersectionCallback = null;
  vi.stubGlobal('IntersectionObserver', vi.fn().mockImplementation((cb: (entries: IntersectionObserverEntry[]) => void) => {
    intersectionCallback = cb;
    return { observe: mockObserve, disconnect: mockDisconnect };
  }));
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

describe('AdSlot', () => {
  it('renders wrapper div with correct min-height', () => {
    const { getByTestId } = render(
      <AdSlot slotId="test-slot" width={728} height={90} />
    );
    const wrapper = getByTestId('ad-slot');
    expect(wrapper.style.minHeight).toBe('90px');
  });

  it('sets up IntersectionObserver on mount', () => {
    render(<AdSlot slotId="test-slot" width={728} height={90} />);
    expect(mockObserve).toHaveBeenCalled();
  });

  it('does not inject ins element before intersection', () => {
    const { container } = render(
      <AdSlot slotId="test-slot" width={728} height={90} />
    );
    expect(container.querySelector('ins')).toBeNull();
  });

  it('injects ins element after intersection', async () => {
    const { container } = render(
      <AdSlot slotId="test-slot" width={728} height={90} />
    );
    await act(async () => {
      if (intersectionCallback) {
        intersectionCallback([{ isIntersecting: true } as IntersectionObserverEntry]);
      }
    });
    expect(container.querySelector('ins')).not.toBeNull();
  });
});
