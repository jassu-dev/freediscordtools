export interface Tool {
  slug: string;
  name: string;
  description: string;
  href: string;
  keywords: string[];
  category: string;
}

export type DiscordFormatCode = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';

export interface DiscordFormat {
  code: DiscordFormatCode;
  name: string;
  example: string;
  intlOptions: Intl.DateTimeFormatOptions | null;
}

export interface TimestampOutput {
  code: DiscordFormatCode;
  name: string;
  syntax: string;
  preview: string;
}
