'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  computeUnixTimestamp,
  computeTimestampOutputs,
  DISCORD_FORMATS,
} from '@/lib/timestamp';
import type { TimestampOutput } from '@/types';

// Hardcoded fallback timezone list (common IANA timezones)
const FALLBACK_TIMEZONES = [
  'Africa/Cairo', 'Africa/Johannesburg', 'Africa/Lagos', 'Africa/Nairobi',
  'America/Anchorage', 'America/Argentina/Buenos_Aires', 'America/Bogota',
  'America/Chicago', 'America/Denver', 'America/Halifax', 'America/Lima',
  'America/Los_Angeles', 'America/Mexico_City', 'America/New_York',
  'America/Phoenix', 'America/Santiago', 'America/Sao_Paulo',
  'America/St_Johns', 'America/Toronto', 'America/Vancouver',
  'Asia/Bangkok', 'Asia/Colombo', 'Asia/Dubai', 'Asia/Hong_Kong',
  'Asia/Jakarta', 'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Kolkata',
  'Asia/Kuala_Lumpur', 'Asia/Manila', 'Asia/Seoul', 'Asia/Shanghai',
  'Asia/Singapore', 'Asia/Taipei', 'Asia/Tehran', 'Asia/Tokyo',
  'Atlantic/Azores', 'Atlantic/Cape_Verde',
  'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Darwin',
  'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney',
  'Europe/Amsterdam', 'Europe/Athens', 'Europe/Berlin', 'Europe/Brussels',
  'Europe/Bucharest', 'Europe/Budapest', 'Europe/Copenhagen',
  'Europe/Dublin', 'Europe/Helsinki', 'Europe/Istanbul', 'Europe/Kiev',
  'Europe/Lisbon', 'Europe/London', 'Europe/Madrid', 'Europe/Moscow',
  'Europe/Oslo', 'Europe/Paris', 'Europe/Prague', 'Europe/Rome',
  'Europe/Stockholm', 'Europe/Vienna', 'Europe/Warsaw', 'Europe/Zurich',
  'Pacific/Auckland', 'Pacific/Fiji', 'Pacific/Guam', 'Pacific/Honolulu',
  'Pacific/Midway', 'Pacific/Noumea', 'Pacific/Port_Moresby',
  'Pacific/Tongatapu', 'UTC',
];

function getTimezones(): string[] {
  try {
    if (typeof Intl !== 'undefined' && 'supportedValuesOf' in Intl) {
      return (Intl as { supportedValuesOf: (key: string) => string[] }).supportedValuesOf('timeZone');
    }
  } catch {
    // fall through
  }
  return FALLBACK_TIMEZONES;
}

function getLocalDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getLocalTimeString(): string {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${h}:${min}`;
}

function getLocalTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

export default function TimestampGenerator() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('UTC');
  const [timezones, setTimezones] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<TimestampOutput[]>([]);
  const [unixTimestamp, setUnixTimestamp] = useState<number | null>(null);
  const [copyStates, setCopyStates] = useState<Record<string, boolean>>({});
  const [copyErrors, setCopyErrors] = useState<Record<string, boolean>>({});

  // Initialize on client with local values
  useEffect(() => {
    setDate(getLocalDateString());
    setTime(getLocalTimeString());
    setTimezone(getLocalTimezone());
    setTimezones(getTimezones());
  }, []);

  // Recompute outputs whenever inputs change
  useEffect(() => {
    if (!date || !time || !timezone) return;
    const ts = computeUnixTimestamp(date, time, timezone);
    setUnixTimestamp(ts);
    if (ts !== null) {
      setOutputs(computeTimestampOutputs(ts, timezone));
    } else {
      setOutputs([]);
    }
  }, [date, time, timezone]);

  const handleCopy = useCallback(async (syntax: string, code: string) => {
    const copyToClipboard = async (text: string): Promise<boolean> => {
      // Try modern Clipboard API first
      if (navigator?.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch {
          // fall through to execCommand
        }
      }
      // execCommand fallback
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
      } catch {
        return false;
      }
    };

    const success = await copyToClipboard(syntax);
    if (success) {
      setCopyStates((prev) => ({ ...prev, [code]: true }));
      setTimeout(() => {
        setCopyStates((prev) => ({ ...prev, [code]: false }));
      }, 1500);
    } else {
      setCopyErrors((prev) => ({ ...prev, [code]: true }));
      setTimeout(() => {
        setCopyErrors((prev) => ({ ...prev, [code]: false }));
      }, 1500);
    }
  }, []);

  const formatLabel = (code: string) => {
    const fmt = DISCORD_FORMATS.find((f) => f.code === code);
    return fmt ? fmt.name.toLowerCase() : code;
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label htmlFor="ts-date" className="block text-sm font-medium text-[#5b6282] mb-1">
            Date
          </label>
          <input
            id="ts-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="ts-time" className="block text-sm font-medium text-[#5b6282] mb-1">
            Time
          </label>
          <input
            id="ts-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="ts-timezone" className="block text-sm font-medium text-[#5b6282] mb-1">
            Timezone
          </label>
          <select
            id="ts-timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm"
            data-testid="timezone-select"
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Unix Timestamp Display */}
      {unixTimestamp !== null ? (
        <div className="mb-6 p-4 rounded-xl bg-[#F0F2FF] border border-[#5865F2]/20">
          <p className="text-sm text-[#5b6282] mb-1">Unix Timestamp</p>
          <p className="text-2xl font-mono font-bold text-[#5865F2]">{unixTimestamp}</p>
        </div>
      ) : (
        date && time && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-sm text-red-600">Invalid date or time. Please check your inputs.</p>
          </div>
        )
      )}

      {/* Output Rows */}
      {outputs.length > 0 && (
        <div className="space-y-3">
          {outputs.map((output) => (
            <div
              key={output.code}
              className="p-4 rounded-xl bg-white border border-[#E3E6F0] flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm hover:border-[#5865F2]/40 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#8b93b8] mb-1 font-medium uppercase tracking-wide">{output.name}</p>
                <p className="font-mono text-sm text-[#1a1d2e] break-all">{output.syntax}</p>
                <p className="text-sm text-[#5b6282] mt-1">{output.preview}</p>
              </div>
              <button
                onClick={() => handleCopy(output.syntax, output.code)}
                aria-label={
                  copyStates[output.code]
                    ? `Copied ${formatLabel(output.code)} format`
                    : copyErrors[output.code]
                    ? `Copy failed for ${formatLabel(output.code)} format`
                    : `Copy ${formatLabel(output.code)} format`
                }
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium min-w-[80px] min-h-[44px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] ${
                  copyStates[output.code]
                    ? 'bg-green-500 text-white'
                    : copyErrors[output.code]
                    ? 'bg-red-500 text-white'
                    : 'bg-[#5865F2] text-white hover:bg-[#4752C4]'
                }`}
                data-testid={`copy-btn-${output.code}`}
              >
                {copyStates[output.code] ? 'Copied!' : copyErrors[output.code] ? 'Failed' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
