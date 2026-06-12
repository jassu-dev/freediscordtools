// Feature: free-discord-tools, Property 9: timestamp round-trip
// Feature: free-discord-tools, Property 10: Discord syntax format correctness
import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { computeUnixTimestamp, formatDiscordSyntax, computeTimestampOutputs } from '@/lib/timestamp';
import type { DiscordFormatCode } from '@/types';

const FORMAT_CODES: DiscordFormatCode[] = ['t', 'T', 'd', 'D', 'f', 'F', 'R'];

const COMMON_TIMEZONES = [
  'UTC', 'America/New_York', 'America/Los_Angeles', 'America/Chicago',
  'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo',
  'Asia/Shanghai', 'Asia/Kolkata', 'Australia/Sydney', 'Pacific/Auckland',
];

// P9: Timestamp round-trip
describe('[PBT] P9: computeUnixTimestamp round-trip', () => {
  it('re-interpreting Unix timestamp in same timezone yields original date/time', () => {
    fc.assert(
      fc.property(
        fc.date({ min: new Date('2000-01-01T00:00:00Z'), max: new Date('2030-12-31T23:59:00Z') }),
        fc.constantFrom(...COMMON_TIMEZONES),
        (date, tz) => {
          const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: tz,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });
          const parts = formatter.formatToParts(date);
          const partMap: Record<string, string> = {};
          for (const p of parts) partMap[p.type] = p.value;

          const dateStr = `${partMap['year']}-${partMap['month']}-${partMap['day']}`;
          const timeStr = `${partMap['hour'] === '24' ? '00' : partMap['hour']}:${partMap['minute']}`;

          const unix = computeUnixTimestamp(dateStr, timeStr, tz);
          if (unix === null) return true;

          const reconstructedDate = new Date(unix * 1000);
          const backParts = formatter.formatToParts(reconstructedDate);
          const backMap: Record<string, string> = {};
          for (const p of backParts) backMap[p.type] = p.value;

          const backDateStr = `${backMap['year']}-${backMap['month']}-${backMap['day']}`;
          const backTimeStr = `${backMap['hour'] === '24' ? '00' : backMap['hour']}:${backMap['minute']}`;

          return dateStr === backDateStr && timeStr === backTimeStr;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// P10: Discord syntax format correctness
describe('[PBT] P10: Discord syntax format correctness', () => {
  it('all 7 outputs have correct <t:UNIX:CODE> pattern and non-empty preview', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 2147483647 }),
        fc.constantFrom(...COMMON_TIMEZONES),
        (unix, tz) => {
          const outputs = computeTimestampOutputs(unix, tz);
          if (outputs.length !== 7) return false;
          for (const output of outputs) {
            if (!output.syntax.match(/^<t:\d+:[tTdDfFR]>$/)) return false;
            if (output.preview.length === 0) return false;
          }
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('formatDiscordSyntax produces correct pattern for all format codes', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 2147483647 }),
        fc.constantFrom(...FORMAT_CODES),
        (unix, code) => {
          const syntax = formatDiscordSyntax(unix, code);
          return syntax === `<t:${unix}:${code}>`;
        }
      ),
      { numRuns: 100 }
    );
  });
});
