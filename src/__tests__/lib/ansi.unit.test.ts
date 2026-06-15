import { describe, it, expect } from 'vitest';
import { generateAnsiString, FG_COLORS, ESC } from '@/lib/ansi';

describe('ansi lib', () => {
  it('should generate basic ansi string', () => {
    const segments = [
      { text: 'Hello', bold: false, underline: false, fg: null, bg: null }
    ];
    const result = generateAnsiString(segments);
    expect(result).toBe('```ansi\nHello\n```');
  });

  it('should generate colored ansi string', () => {
    const segments = [
      { text: 'Red', bold: false, underline: false, fg: FG_COLORS.RED, bg: null }
    ];
    const result = generateAnsiString(segments);
    expect(result).toBe(`\`\`\`ansi\n${ESC}[31mRed${ESC}[0m\n\`\`\``);
  });

  it('should generate bold and colored ansi string', () => {
    const segments = [
      { text: 'Bold Red', bold: true, underline: false, fg: FG_COLORS.RED, bg: null }
    ];
    const result = generateAnsiString(segments);
    expect(result).toBe(`\`\`\`ansi\n${ESC}[1;31mBold Red${ESC}[0m\n\`\`\``);
  });

  it('should handle multiple segments', () => {
    const segments = [
      { text: 'Normal ', bold: false, underline: false, fg: null, bg: null },
      { text: 'Blue', bold: false, underline: false, fg: FG_COLORS.BLUE, bg: null }
    ];
    const result = generateAnsiString(segments);
    expect(result).toBe(`\`\`\`ansi\nNormal ${ESC}[34mBlue${ESC}[0m\n\`\`\``);
  });
});
