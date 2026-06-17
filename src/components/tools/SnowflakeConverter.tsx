'use client';

import { useState, useCallback } from 'react';
import { parseSnowflake, isValidSnowflake, type SnowflakeInfo } from '@/lib/snowflake';

export default function SnowflakeConverter() {
  const [inputValue, setInputValue] = useState('');
  const [info, setInfo] = useState<SnowflakeInfo | null>(null);
  const [error, setError] = useState(false);
  const [copyState, setCopyState] = useState(false);

  const handleConvert = useCallback(() => {
    if (!inputValue) {
      setInfo(null);
      setError(false);
      return;
    }

    const parsed = parseSnowflake(inputValue);
    if (parsed) {
      setInfo(parsed);
      setError(false);
    } else {
      setInfo(null);
      setError(true);
    }
  }, [inputValue]);

  const handleCopy = useCallback(async (text: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyState(true);
      setTimeout(() => setCopyState(false), 2000);
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Input */}
      <div className="mb-8">
        <label htmlFor="snowflake-input" className="block text-sm font-medium text-[#5b6282] mb-1">
          Discord ID (Snowflake)
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="snowflake-input"
            type="text"
            placeholder="e.g. 155149108183695360"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
            className="flex-1 px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm font-mono"
          />
          <button
            onClick={handleConvert}
            className="px-6 py-2 rounded-lg bg-[#5865F2] text-white font-medium hover:bg-[#4752C4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] min-h-[44px]"
          >
            Convert
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2">Invalid Discord ID. Please enter a valid 17-20 digit snowflake.</p>
        )}
      </div>

      {/* Results */}
      {info && (
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-white border border-[#E3E6F0] shadow-sm">
            <h3 className="text-lg font-bold text-[#1a1d2e] mb-4">Account Creation Date</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[#5b6282] uppercase tracking-wider font-semibold mb-1">Local Time</p>
                <p className="text-xl font-semibold text-[#1a1d2e]">{info.date.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-[#5b6282] uppercase tracking-wider font-semibold mb-1">UTC Time</p>
                <p className="text-xl font-semibold text-[#1a1d2e]">{info.date.toUTCString()}</p>
              </div>
              <div>
                <p className="text-xs text-[#5b6282] uppercase tracking-wider font-semibold mb-1">Unix Timestamp (ms)</p>
                <p className="text-xl font-mono text-[#5865F2] font-bold">{info.timestamp}</p>
              </div>
              <div>
                <p className="text-xs text-[#5b6282] uppercase tracking-wider font-semibold mb-1">Relative</p>
                <p className="text-lg text-[#5b6282]">
                   Created roughly {Math.floor((Date.now() - info.timestamp) / (1000 * 60 * 60 * 24 * 365))} years ago
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E3E6F0]">
               <button
                onClick={() => handleCopy(info.date.toLocaleString())}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] ${
                  copyState ? 'bg-green-500 text-white' : 'bg-[#F0F2FF] text-[#5865F2] hover:bg-[#E3E6FF]'
                }`}
              >
                {copyState ? 'Copied Date!' : 'Copy Local Date'}
              </button>
            </div>
          </div>

          <details className="p-4 rounded-lg bg-[#F8F9FF] border border-[#E3E6F0]">
            <summary className="text-sm font-medium text-[#1a1d2e] cursor-pointer list-none flex items-center gap-2">
              <span className="text-[#5865F2]">▶</span> Raw Snowflake Metadata
            </summary>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#5b6282]">
              <div>
                <p className="font-bold text-[#1a1d2e]">Worker ID</p>
                <p>{info.workerId}</p>
              </div>
              <div>
                <p className="font-bold text-[#1a1d2e]">Process ID</p>
                <p>{info.processId}</p>
              </div>
              <div>
                <p className="font-bold text-[#1a1d2e]">Increment</p>
                <p>{info.increment}</p>
              </div>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
