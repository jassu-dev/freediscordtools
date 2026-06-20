import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import PxToRemConverter from '@/components/tools/PxToRemConverter';

describe('PxToRemConverter component', () => {
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

  it('renders inputs for pixels, rem, and root font size', () => {
    render(<PxToRemConverter />);
    expect(screen.queryByLabelText('Pixels (PX)')).toBeTruthy();
    expect(screen.queryByLabelText('Root EM (REM)')).toBeTruthy();
    expect(screen.queryByLabelText('Root Font Size')).toBeTruthy();
  });

  it('converts PX to REM correctly based on default 16px root font size', async () => {
    render(<PxToRemConverter />);
    const pxInput = screen.getByLabelText('Pixels (PX)') as HTMLInputElement;
    const remInput = screen.getByLabelText('Root EM (REM)') as HTMLInputElement;
    
    await act(async () => {
      fireEvent.change(pxInput, { target: { value: '32' } });
    });
    
    expect(remInput.value).toBe('2');
  });

  it('converts REM to PX correctly based on default 16px root font size', async () => {
    render(<PxToRemConverter />);
    const pxInput = screen.getByLabelText('Pixels (PX)') as HTMLInputElement;
    const remInput = screen.getByLabelText('Root EM (REM)') as HTMLInputElement;
    
    await act(async () => {
      fireEvent.change(remInput, { target: { value: '1.5' } });
    });
    
    expect(pxInput.value).toBe('24');
  });

  it('updates REM value when root font size is modified', async () => {
    render(<PxToRemConverter />);
    const rootInput = screen.getByLabelText('Root Font Size') as HTMLInputElement;
    const pxInput = screen.getByLabelText('Pixels (PX)') as HTMLInputElement;
    const remInput = screen.getByLabelText('Root EM (REM)') as HTMLInputElement;

    await act(async () => {
      fireEvent.change(pxInput, { target: { value: '20' } });
    });
    // 20px / 16px = 1.25rem
    expect(remInput.value).toBe('1.25');

    await act(async () => {
      fireEvent.change(rootInput, { target: { value: '10' } });
    });
    // 20px / 10px = 2rem
    expect(remInput.value).toBe('2');
  });

  it('copies table values to clipboard when action button clicked', async () => {
    render(<PxToRemConverter />);
    
    // Find all 'Value' copy buttons in the table
    const copyBtns = screen.getAllByRole('button', { name: 'Value' });
    expect(copyBtns.length).toBeGreaterThan(0);

    await act(async () => {
      fireEvent.click(copyBtns[0]);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });
});
