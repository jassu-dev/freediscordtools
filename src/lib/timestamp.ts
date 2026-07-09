import type { DiscordFormatCode, DiscordFormat, TimestampOutput } from '@/types';

export const DISCORD_FORMATS: DiscordFormat[] = [
  {
    code: 't',
    name: 'Short Time',
    example: '3:04 PM',
    intlOptions: { hour: 'numeric', minute: '2-digit', hour12: true },
  },
  {
    code: 'T',
    name: 'Long Time',
    example: '3:04:05 PM',
    intlOptions: { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true },
  },
  {
    code: 'd',
    name: 'Short Date',
    example: '01/01/2025',
    intlOptions: { month: '2-digit', day: '2-digit', year: 'numeric' },
  },
  {
    code: 'D',
    name: 'Long Date',
    example: 'January 1, 2025',
    intlOptions: { month: 'long', day: 'numeric', year: 'numeric' },
  },
  {
    code: 'f',
    name: 'Short Date/Time',
    example: 'January 1, 2025 3:04 PM',
    intlOptions: { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true },
  },
  {
    code: 'F',
    name: 'Long Date/Time',
    example: 'Wednesday, January 1, 2025 3:04 PM',
    intlOptions: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true },
  },
  {
    code: 'R',
    name: 'Relative Time',
    example: 'in 2 hours',
    intlOptions: null,
  },
];

/**
 * Converts a local date and time in the given IANA timezone to a Unix timestamp (seconds since epoch).
 * Returns null if the resulting Date is invalid.
 */
export function computeUnixTimestamp(
  date: string,      // 'YYYY-MM-DD'
  time: string,      // 'HH:MM'
  timezone: string,  // IANA timezone identifier
): number | null {
  if (!date || !time) return null;

  // Construct an ISO-like string and parse it in the target timezone
  const dateTimeStr = `${date}T${time}:00`;

  // Use Intl to find the UTC offset for this timezone at this moment
  try {
    // Create a Date assuming UTC, then adjust for the timezone offset
    const naiveDate = new Date(`${dateTimeStr}Z`);
    if (isNaN(naiveDate.getTime())) return null;

    // Get what the local time would be in the target timezone for this UTC moment
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    // Binary-search / iterative approach: start with naive UTC, compute offset
    // Format the naive UTC time in the target timezone to get the displayed local time
    const parts = formatter.formatToParts(naiveDate);
    const partMap: Record<string, string> = {};
    for (const p of parts) {
      partMap[p.type] = p.value;
    }

    // Build the local time that timezone would display for naiveDate
    const displayedStr = `${partMap['year']}-${partMap['month']}-${partMap['day']}T${partMap['hour'] === '24' ? '00' : partMap['hour']}:${partMap['minute']}:${partMap['second']}Z`;
    const displayedDate = new Date(displayedStr);
    if (isNaN(displayedDate.getTime())) return null;

    // The offset is: displayedDate - naiveDate (in ms)
    const offsetMs = displayedDate.getTime() - naiveDate.getTime();

    // The actual UTC time = naiveDate - offsetMs
    let utcMs = naiveDate.getTime() - offsetMs;

    // Iterative adjustment to correct for DST changes within the transition window
    for (let i = 0; i < 2; i++) {
      const checkDate = new Date(utcMs);
      const checkParts = formatter.formatToParts(checkDate);
      const checkMap: Record<string, string> = {};
      for (const p of checkParts) {
        checkMap[p.type] = p.value;
      }
      const checkStr = `${checkMap['year']}-${checkMap['month']}-${checkMap['day']}T${checkMap['hour'] === '24' ? '00' : checkMap['hour']}:${checkMap['minute']}:${checkMap['second']}Z`;
      const checkDisplayedDate = new Date(checkStr);
      if (isNaN(checkDisplayedDate.getTime())) break;
      const diff = checkDisplayedDate.getTime() - naiveDate.getTime();
      if (diff === 0) break;
      utcMs -= diff;
    }

    const result = Math.floor(utcMs / 1000);

    if (isNaN(result)) return null;
    return result;
  } catch {
    return null;
  }
}

/**
 * Returns the Discord syntax string for a given Unix timestamp and format code.
 * e.g. '<t:1234567890:t>'
 */
export function formatDiscordSyntax(
  unixTimestamp: number,
  code: DiscordFormatCode,
): string {
  return `<t:${unixTimestamp}:${code}>`;
}

/**
 * Returns a human-readable preview for a Discord format code applied to the given Unix timestamp.
 */
export function getPreview(
  unixTimestamp: number,
  code: DiscordFormatCode,
  timezone: string,
): string {
  const date = new Date(unixTimestamp * 1000);

  if (code === 'R') {
    // Relative time
    const nowMs = Date.now();
    const diffMs = date.getTime() - nowMs;
    const diffSec = Math.round(diffMs / 1000);
    const absSec = Math.abs(diffSec);

    if (absSec < 60) return diffSec >= 0 ? 'in a few seconds' : 'a few seconds ago';
    const diffMin = Math.round(diffSec / 60);
    const absMin = Math.abs(diffMin);
    if (absMin < 60) return diffMin > 0 ? `in ${absMin} minute${absMin !== 1 ? 's' : ''}` : `${absMin} minute${absMin !== 1 ? 's' : ''} ago`;
    const diffHr = Math.round(diffSec / 3600);
    const absHr = Math.abs(diffHr);
    if (absHr < 24) return diffHr > 0 ? `in ${absHr} hour${absHr !== 1 ? 's' : ''}` : `${absHr} hour${absHr !== 1 ? 's' : ''} ago`;
    const diffDay = Math.round(diffSec / 86400);
    const absDay = Math.abs(diffDay);
    if (absDay < 30) return diffDay > 0 ? `in ${absDay} day${absDay !== 1 ? 's' : ''}` : `${absDay} day${absDay !== 1 ? 's' : ''} ago`;
    const diffMonth = Math.round(diffSec / (86400 * 30));
    const absMonth = Math.abs(diffMonth);
    if (absMonth < 12) return diffMonth > 0 ? `in ${absMonth} month${absMonth !== 1 ? 's' : ''}` : `${absMonth} month${absMonth !== 1 ? 's' : ''} ago`;
    const diffYear = Math.round(diffSec / (86400 * 365));
    const absYear = Math.abs(diffYear);
    return diffYear > 0 ? `in ${absYear} year${absYear !== 1 ? 's' : ''}` : `${absYear} year${absYear !== 1 ? 's' : ''} ago`;
  }

  const fmt = DISCORD_FORMATS.find((f) => f.code === code);
  if (!fmt || !fmt.intlOptions) return '';

  try {
    return new Intl.DateTimeFormat('en-US', {
      ...fmt.intlOptions,
      timeZone: timezone,
    }).format(date);
  } catch {
    return new Intl.DateTimeFormat('en-US', fmt.intlOptions).format(date);
  }
}

/**
 * Computes all 7 TimestampOutput objects for a given Unix timestamp.
 */
export function computeTimestampOutputs(
  unixTimestamp: number,
  timezone: string,
): TimestampOutput[] {
  return DISCORD_FORMATS.map((fmt) => ({
    code: fmt.code,
    name: fmt.name,
    syntax: formatDiscordSyntax(unixTimestamp, fmt.code),
    preview: getPreview(unixTimestamp, fmt.code, timezone),
  }));
}
