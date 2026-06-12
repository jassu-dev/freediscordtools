import { describe, it, expect } from 'vitest';
import { computeUnixTimestamp, formatDiscordSyntax, getPreview, computeTimestampOutputs } from '@/lib/timestamp';

describe('computeUnixTimestamp', () => {
  it('returns correct Unix timestamp for 2025-01-01 00:00 UTC', () => {
    const result = computeUnixTimestamp('2025-01-01', '00:00', 'UTC');
    expect(result).toBe(1735689600);
  });

  it('returns correct Unix timestamp for 2025-01-01 12:00 America/New_York (UTC-5)', () => {
    // 2025-01-01 12:00 EST (UTC-5) = 2025-01-01 17:00 UTC
    // 1735689600 (2025-01-01 00:00 UTC) + 17*3600 = 1735689600 + 61200 = 1735750800
    const result = computeUnixTimestamp('2025-01-01', '12:00', 'America/New_York');
    expect(result).toBe(1735750800);
  });

  it('returns correct Unix timestamp for 2025-06-15 09:30 Asia/Tokyo (UTC+9)', () => {
    // 2025-06-15 09:30 JST = 2025-06-15 00:30 UTC
    // 2025-01-01 00:00 UTC = 1735689600
    // Days from Jan 1 to June 15: 31+28+31+30+31+14 = 165 days = 14256000 seconds
    // +30 minutes = +1800 seconds
    // 1735689600 + 14256000 + 1800 = 1749947400
    const result = computeUnixTimestamp('2025-06-15', '09:30', 'Asia/Tokyo');
    expect(result).not.toBeNull();
    expect(result).toBe(1749947400);
  });

  it('returns null for empty date', () => {
    expect(computeUnixTimestamp('', '12:00', 'UTC')).toBeNull();
  });

  it('returns null for empty time', () => {
    expect(computeUnixTimestamp('2025-01-01', '', 'UTC')).toBeNull();
  });
});

describe('formatDiscordSyntax', () => {
  const ts = 1735689600;
  it('formats short time (t)', () => expect(formatDiscordSyntax(ts, 't')).toBe(`<t:${ts}:t>`));
  it('formats long time (T)', () => expect(formatDiscordSyntax(ts, 'T')).toBe(`<t:${ts}:T>`));
  it('formats short date (d)', () => expect(formatDiscordSyntax(ts, 'd')).toBe(`<t:${ts}:d>`));
  it('formats long date (D)', () => expect(formatDiscordSyntax(ts, 'D')).toBe(`<t:${ts}:D>`));
  it('formats short date/time (f)', () => expect(formatDiscordSyntax(ts, 'f')).toBe(`<t:${ts}:f>`));
  it('formats long date/time (F)', () => expect(formatDiscordSyntax(ts, 'F')).toBe(`<t:${ts}:F>`));
  it('formats relative (R)', () => expect(formatDiscordSyntax(ts, 'R')).toBe(`<t:${ts}:R>`));
});

describe('getPreview', () => {
  const ts = 1735689600; // 2025-01-01 00:00 UTC
  const tz = 'UTC';

  it('returns non-empty string for short time (t)', () => {
    expect(getPreview(ts, 't', tz)).toBeTruthy();
  });
  it('returns non-empty string for long time (T)', () => {
    expect(getPreview(ts, 'T', tz)).toBeTruthy();
  });
  it('returns non-empty string for short date (d)', () => {
    expect(getPreview(ts, 'd', tz)).toBeTruthy();
  });
  it('returns non-empty string for long date (D)', () => {
    expect(getPreview(ts, 'D', tz)).toBeTruthy();
  });
  it('returns non-empty string for short date/time (f)', () => {
    expect(getPreview(ts, 'f', tz)).toBeTruthy();
  });
  it('returns non-empty string for long date/time (F)', () => {
    expect(getPreview(ts, 'F', tz)).toBeTruthy();
  });
  it('returns relative string for R', () => {
    const preview = getPreview(ts, 'R', tz);
    expect(typeof preview).toBe('string');
    expect(preview.length).toBeGreaterThan(0);
  });
});

describe('computeTimestampOutputs', () => {
  it('returns exactly 7 outputs', () => {
    const outputs = computeTimestampOutputs(1735689600, 'UTC');
    expect(outputs).toHaveLength(7);
  });

  it('each output has correct syntax format', () => {
    const outputs = computeTimestampOutputs(1735689600, 'UTC');
    for (const output of outputs) {
      expect(output.syntax).toMatch(/^<t:\d+:[tTdDfFR]>$/);
    }
  });
});

// Task 11.9: invalid date input
describe('computeUnixTimestamp — invalid inputs', () => {
  it('returns null for invalid date string', () => {
    expect(computeUnixTimestamp('not-a-date', '12:00', 'UTC')).toBeNull();
  });

  it('returns null for both empty date and time', () => {
    expect(computeUnixTimestamp('', '', 'UTC')).toBeNull();
  });
});
