export const ESC = '\u001b';

export const ANSI_STYLES = {
  NORMAL: 0,
  BOLD: 1,
  UNDERLINE: 4,
};

export const FG_COLORS = {
  GRAY: 30,
  RED: 31,
  GREEN: 32,
  YELLOW: 33,
  BLUE: 34,
  PINK: 35,
  CYAN: 36,
  WHITE: 37,
};

export const BG_COLORS = {
  FIREFLY_DARK_BLUE: 40,
  ORANGE: 41,
  MARBLE_BLUE: 42,
  GREYISH_TURQUOISE: 43,
  GRAY: 44,
  INDIGO: 45,
  LIGHT_GRAY: 46,
  WHITE: 47,
};

export interface AnsiSegment {
  text: string;
  bold: boolean;
  underline: boolean;
  fg: number | null;
  bg: number | null;
}

export function generateAnsiString(segments: AnsiSegment[]): string {
  let result = '```ansi\n';
  
  for (const segment of segments) {
    if (!segment.text) continue;
    
    const codes: number[] = [];
    
    // Add formatting
    if (segment.bold) codes.push(ANSI_STYLES.BOLD);
    if (segment.underline) codes.push(ANSI_STYLES.UNDERLINE);
    
    // Add colors
    if (segment.bg !== null) codes.push(segment.bg);
    if (segment.fg !== null) codes.push(segment.fg);
    
    // If no codes, it's just normal text, but we should probably reset just in case
    // though the start of a block is clean.
    // Actually, each segment should probably start with a reset if it has no styles 
    // but the previous one did.
    // A better approach: always start with a reset [0m if it's not the first segment?
    // Or just [0;...m
    
    const prefix = codes.length > 0 ? `${ESC}[${codes.join(';')}m` : '';
    const suffix = codes.length > 0 ? `${ESC}[0m` : '';
    
    result += `${prefix}${segment.text}${suffix}`;
  }
  
  result += '\n```';
  return result;
}

export const FG_COLOR_MAP: Record<number, { hex: string; name: string }> = {
  30: { hex: '#4f545c', name: 'Gray' },
  31: { hex: '#ff6666', name: 'Red' },
  32: { hex: '#45ff45', name: 'Green' },
  33: { hex: '#ffff66', name: 'Yellow' },
  34: { hex: '#6666ff', name: 'Blue' },
  35: { hex: '#ff66ff', name: 'Pink' },
  36: { hex: '#66ffff', name: 'Cyan' },
  37: { hex: '#ffffff', name: 'White' },
};

export const BG_COLOR_MAP: Record<number, { hex: string; name: string }> = {
  40: { hex: '#1a1d23', name: 'Firefly Dark Blue' },
  41: { hex: '#ff9933', name: 'Orange' },
  42: { hex: '#5c6fb1', name: 'Marble Blue' },
  43: { hex: '#40444b', name: 'Greyish Turquoise' },
  44: { hex: '#4f545c', name: 'Gray' },
  45: { hex: '#2d3136', name: 'Indigo' },
  46: { hex: '#b9bbbe', name: 'Light Gray' },
  47: { hex: '#ffffff', name: 'White' },
};
