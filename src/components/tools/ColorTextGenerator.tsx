'use client';

import { useState, useCallback, useMemo } from 'react';
import {
  AnsiSegment,
  generateAnsiString,
  FG_COLORS,
  BG_COLORS,
  FG_COLOR_MAP,
  BG_COLOR_MAP,
} from '@/lib/ansi';

export default function ColorTextGenerator() {
  const [segments, setSegments] = useState<AnsiSegment[]>([
    { text: 'Hello ', bold: false, underline: false, fg: null, bg: null },
    { text: 'Discord', bold: true, underline: false, fg: FG_COLORS.RED, bg: null },
    { text: '!', bold: false, underline: false, fg: null, bg: null },
  ]);
  const [copyState, setCopyState] = useState(false);

  const finalAnsi = useMemo(() => generateAnsiString(segments), [segments]);

  const addSegment = useCallback(() => {
    setSegments(prev => [...prev, { text: '', bold: false, underline: false, fg: null, bg: null }]);
  }, []);

  const removeSegment = useCallback((index: number) => {
    setSegments(prev => {
      if (prev.length <= 1) return prev;
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }, []);

  const updateSegment = useCallback((index: number, updates: Partial<AnsiSegment>) => {
    setSegments(prev => {
      const next = [...prev];
      next[index] = { ...next[index], ...updates };
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSegments([{ text: '', bold: false, underline: false, fg: null, bg: null }]);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(finalAnsi);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = finalAnsi;
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
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }, [finalAnsi]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E3E6F0] shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={addSegment}
            className="px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg text-sm font-bold transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
            Add Segment
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-white border border-[#E3E6F0] text-[#5b6282] hover:text-red-500 hover:border-red-200 rounded-lg text-sm font-bold transition-all"
          >
            Clear All
          </button>
        </div>
        
        <button
          onClick={handleCopy}
          className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 shadow-md ${
            copyState
              ? 'bg-green-500 text-white shadow-green-200'
              : 'bg-[#5865F2] text-white hover:bg-[#4752C4] shadow-blue-100'
          }`}
        >
          {copyState ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy for Discord
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Editor Section */}
        <div className="xl:col-span-7 space-y-4">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white border border-[#E3E6F0] shadow-sm hover:border-[#5865F2]/30 transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <textarea
                  value={segment.text}
                  onChange={(e) => updateSegment(index, { text: e.target.value })}
                  placeholder="Enter message segment..."
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#5865F2] focus:ring-4 focus:ring-[#5865F2]/10 text-[#1a1d2e] min-h-[60px] text-sm shadow-inner transition-all resize-none"
                />
                {segments.length > 1 && (
                  <button
                    onClick={() => removeSegment(index)}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                    title="Remove"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {/* Style Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => updateSegment(index, { bold: !segment.bold })}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                        segment.bold ? 'bg-white text-[#5865F2] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      B
                    </button>
                    <button
                      onClick={() => updateSegment(index, { underline: !segment.underline })}
                      className={`px-3 py-1 rounded-md text-xs underline transition-all ${
                        segment.underline ? 'bg-white text-[#5865F2] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      U
                    </button>
                  </div>

                  {/* FG Colors */}
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Text Color</p>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => updateSegment(index, { fg: null })}
                        className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                          segment.fg === null ? 'border-[#5865F2] scale-110' : 'border-transparent hover:scale-110'
                        }`}
                        title="Default"
                      >
                        <div className="w-4 h-4 rounded-full bg-gray-200 relative overflow-hidden">
                          <div className="absolute inset-0 border-t-2 border-red-400 rotate-45 translate-y-1"></div>
                        </div>
                      </button>
                      {Object.entries(FG_COLOR_MAP).map(([code, data]) => (
                        <button
                          key={code}
                          onClick={() => updateSegment(index, { fg: Number(code) })}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            segment.fg === Number(code) ? 'border-[#5865F2] scale-110 shadow-sm' : 'border-transparent hover:scale-110'
                          }`}
                          style={{ backgroundColor: data.hex }}
                          title={data.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* BG Colors */}
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Background</p>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => updateSegment(index, { bg: null })}
                      className={`px-2 py-1 rounded text-[10px] font-bold border-2 transition-all ${
                        segment.bg === null ? 'border-[#5865F2] bg-white text-[#5865F2]' : 'border-transparent bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      NONE
                    </button>
                    {Object.entries(BG_COLOR_MAP).map(([code, data]) => (
                      <button
                        key={code}
                        onClick={() => updateSegment(index, { bg: Number(code) })}
                        className={`w-6 h-6 rounded-md border-2 transition-all ${
                          segment.bg === Number(code) ? 'border-[#5865F2] scale-110 shadow-sm' : 'border-transparent hover:scale-110'
                        }`}
                        style={{ backgroundColor: data.hex }}
                        title={data.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview & Info Section */}
        <div className="xl:col-span-5 space-y-6">
          <div className="sticky top-6 space-y-6">
            <div className="bg-[#2f3136] rounded-2xl overflow-hidden shadow-xl border border-[#202225]">
              <div className="bg-[#202225] px-4 py-2 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Discord Preview</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ed4245]/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f8a532]/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3ba55c]/50"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-[13px] leading-relaxed whitespace-pre-wrap break-all min-h-[160px]">
                {segments.map((segment, index) => (
                  <span
                    key={index}
                    style={{
                      color: segment.fg !== null ? FG_COLOR_MAP[segment.fg].hex : '#dcddde',
                      backgroundColor: segment.bg !== null ? BG_COLOR_MAP[segment.bg].hex : 'transparent',
                      fontWeight: segment.bold ? 'bold' : 'normal',
                      textDecoration: segment.underline ? 'underline' : 'none',
                    }}
                  >
                    {segment.text || ''}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-3">
              <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Pro Tip
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                ANSI colors currently only render correctly on <strong>Discord Desktop</strong> and <strong>Web</strong>. Mobile users will see the raw code block. Use colors sparingly for the best accessibility!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
