import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import BionicReadingConverter from '@/components/tools/BionicReadingConverter';

describe('BionicReadingConverter component', () => {
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

  it('renders the component with input textarea', () => {
    render(<BionicReadingConverter />);
    expect(screen.queryByLabelText('Enter Your Text')).toBeTruthy();
  });

  it('loads demo text when Load Demo is clicked', async () => {
    render(<BionicReadingConverter />);
    const loadDemoBtn = screen.getByRole('button', { name: /Load Demo/i });
    await act(async () => {
      fireEvent.click(loadDemoBtn);
    });
    const textarea = screen.getByLabelText('Enter Your Text') as HTMLTextAreaElement;
    expect(textarea.value).toContain('Bionic Reading');
  });

  it('clears text when Clear is clicked', async () => {
    render(<BionicReadingConverter />);
    const textarea = screen.getByLabelText('Enter Your Text') as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'Some test reading text' } });
    });
    expect(textarea.value).toBe('Some test reading text');

    const clearBtn = screen.getByRole('button', { name: /Clear/i });
    await act(async () => {
      fireEvent.click(clearBtn);
    });
    expect(textarea.value).toBe('');
  });

  it('formats text correctly with strong tags for bionic representation', async () => {
    const { container } = render(<BionicReadingConverter />);
    const textarea = screen.getByLabelText('Enter Your Text') as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'Bionic' } });
    });
    // Check if the output element exists and contains a strong tag
    // Word length is 6, fixation default is 50%, so ceil(6*0.5) = 3 letters bolded ('Bio')
    const boldElement = container.querySelector('strong');
    expect(boldElement).toBeTruthy();
    expect(boldElement?.textContent).toBe('Bio');
  });

  it('handles skip short words setting correctly', async () => {
    const { container } = render(<BionicReadingConverter />);
    const textarea = screen.getByLabelText('Enter Your Text') as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'Bionic is fun' } });
    });
    
    // Default: 'is' (len 2) and 'fun' (len 3) should have strong tags
    // "is" -> ceil(2 * 0.5) = 1 char bolded ("i")
    // "fun" -> ceil(3 * 0.5) = 2 chars bolded ("fu")
    let strongs = container.querySelectorAll('strong');
    expect(strongs.length).toBe(3); // Bionic, is, fun

    // Check skip short words checkbox
    const skipCheckbox = screen.getByLabelText(/Skip short words/i);
    await act(async () => {
      fireEvent.click(skipCheckbox);
    });

    // Now 'is' and 'fun' are skipped (<= 3 chars). Only 'Bionic' should have a strong tag
    strongs = container.querySelectorAll('strong');
    expect(strongs.length).toBe(1);
    expect(strongs[0].textContent).toBe('Bio');
  });

  it('calls clipboard.writeText when Copy Markdown button clicked', async () => {
    render(<BionicReadingConverter />);
    const textarea = screen.getByLabelText('Enter Your Text') as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'Test word' } });
    });
    
    const copyBtn = screen.getByRole('button', { name: /Copy Markdown/i });
    await act(async () => {
      fireEvent.click(copyBtn);
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('**Te**st **wo**rd');
  });
});
