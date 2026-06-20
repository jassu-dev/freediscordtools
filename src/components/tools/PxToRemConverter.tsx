'use client';

import { useState, useCallback, useMemo } from 'react';
import { Copy, ArrowLeftRight, Check, Hash } from 'lucide-react';

const COMMON_PIXELS = [8, 10, 12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96];

export default function PxToRemConverter() {
  const [rootSize, setRootSize] = useState<number>(16);
  const [pxVal, setPxVal] = useState<string>('16');
  const [remVal, setRemVal] = useState<string>('1');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Synchronize values when PX changes
  const handlePxChange = useCallback((value: string) => {
    setPxVal(value);
    const num = parseFloat(value);
    if (!isNaN(num) && rootSize > 0) {
      // Rounded to 4 decimal places for clean CSS
      const calculated = (num / rootSize).toFixed(4);
      // Remove trailing zeros
      setRemVal(parseFloat(calculated).toString());
    } else {
      setRemVal('');
    }
  }, [rootSize]);

  // Synchronize values when REM changes
  const handleRemChange = useCallback((value: string) => {
    setRemVal(value);
    const num = parseFloat(value);
    if (!isNaN(num) && rootSize > 0) {
      const calculated = (num * rootSize).toFixed(2);
      setPxVal(parseFloat(calculated).toString());
    } else {
      setPxVal('');
    }
  }, [rootSize]);

  // Recalculate if root size changes
  const handleRootChange = useCallback((value: string) => {
    const num = parseFloat(value);
    const validRoot = isNaN(num) || num <= 0 ? 16 : num;
    setRootSize(validRoot);
    
    // Update rem based on current px
    const pxNum = parseFloat(pxVal);
    if (!isNaN(pxNum)) {
      const calculated = (pxNum / validRoot).toFixed(4);
      setRemVal(parseFloat(calculated).toString());
    }
  }, [pxVal]);

  const handleCopy = useCallback(async (text: string, identifier: string) => {
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
      setCopiedText(identifier);
      setTimeout(() => setCopiedText(null), 1500);
    } catch {
      // ignore
    }
  }, []);

  const conversionTable = useMemo(() => {
    return COMMON_PIXELS.map((px) => {
      const rem = (px / rootSize).toFixed(4);
      const remClean = parseFloat(rem).toString();
      return {
        px,
        rem: `${remClean}rem`,
        em: `${remClean}em`,
        cssRule: `font-size: ${remClean}rem;`,
      };
    });
  }, [rootSize]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      
      {/* Root Font Size & Conversion Card */}
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-8">
        
        {/* Top Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E3E6F0]">
          <div>
            <label htmlFor="root-size-input" className="block text-lg font-bold text-[#1a1d2e] mb-1 cursor-pointer">
              Root Font Size
            </label>
            <p className="text-sm text-[#5b6282]">
              Set your CSS document root (<code>html</code>) base size. Browser default is 16px.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              id="root-size-input"
              type="number"
              min="1"
              max="100"
              className="w-24 px-3 py-2 rounded-xl border border-[#E3E6F0] text-[#1a1d2e] font-bold focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 text-center min-h-[44px]"
              value={rootSize === 16 && rootSize !== 16 ? '' : rootSize}
              onChange={(e) => handleRootChange(e.target.value)}
              placeholder="16"
            />
            <span className="font-bold text-[#1a1d2e]">px</span>
          </div>
        </div>

        {/* Input/Output Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-6">
          
          {/* Pixels Input */}
          <div className="md:col-span-5 space-y-2">
            <label htmlFor="px-input" className="block text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              Pixels (PX)
            </label>
            <div className="relative">
              <input
                id="px-input"
                type="text"
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-xl font-bold text-[#1a1d2e] focus:bg-white focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[56px] shadow-inner"
                value={pxVal}
                onChange={(e) => handlePxChange(e.target.value)}
                placeholder="e.g. 16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                px
              </span>
            </div>
            <p className="text-xs text-[#5b6282]">Modify to compute REM</p>
          </div>

          {/* Transfer Icon */}
          <div className="md:col-span-1 flex justify-center py-2 md:py-0">
            <div className="p-3 bg-[#F0F2FF] rounded-full text-[#5865F2] shadow-sm">
              <ArrowLeftRight size={20} />
            </div>
          </div>

          {/* REM Input */}
          <div className="md:col-span-5 space-y-2">
            <label htmlFor="rem-input" className="block text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              Root EM (REM)
            </label>
            <div className="relative">
              <input
                id="rem-input"
                type="text"
                className="w-full pl-4 pr-16 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-xl font-bold text-[#1a1d2e] focus:bg-white focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[56px] shadow-inner"
                value={remVal}
                onChange={(e) => handleRemChange(e.target.value)}
                placeholder="e.g. 1.0"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                rem
              </span>
            </div>
            <p className="text-xs text-[#5b6282]">Modify to compute PX</p>
          </div>

        </div>

        {/* Dynamic Formula Display */}
        <div className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#373b4d]">
            <Hash size={16} className="text-[#5865F2]" />
            <span>Calculation Formula:</span>
            <code className="bg-white px-2 py-0.5 rounded border border-[#E3E6F0]">
              {pxVal || '0'}px / {rootSize}px = {remVal || '0'}rem
            </code>
          </div>
          <button
            onClick={() => handleCopy(`${remVal}rem`, 'formula')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              copiedText === 'formula'
                ? 'bg-green-500 text-white border-transparent'
                : 'bg-white hover:bg-gray-50 text-[#373b4d] border border-[#E3E6F0]'
            }`}
          >
            {copiedText === 'formula' ? 'Copied!' : 'Copy Value'}
          </button>
        </div>

      </div>

      {/* Dynamic Conversion Table */}
      <div className="bg-white rounded-2xl border border-[#E3E6F0] shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-[#E3E6F0]">
          <h3 className="text-lg font-bold text-[#1a1d2e] mb-1">Common Conversions</h3>
          <p className="text-sm text-[#5b6282]">
            Quick reference guide using the base root font size of <strong className="text-[#5865F2]">{rootSize}px</strong>.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50 text-xs font-bold text-[#5b6282] uppercase tracking-wider border-b border-[#E3E6F0]">
                <th className="px-6 py-4">Pixels (PX)</th>
                <th className="px-6 py-4">REM</th>
                <th className="px-6 py-4">EM</th>
                <th className="px-6 py-4 text-right">CSS Copy Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E3E6F0] text-sm text-[#1a1d2e]">
              {conversionTable.map((row) => (
                <tr key={row.px} className="hover:bg-[#F8F9FF] transition-colors">
                  <td className="px-6 py-3 font-semibold">{row.px}px</td>
                  <td className="px-6 py-3 font-mono text-[#5865F2] font-semibold">{row.rem}</td>
                  <td className="px-6 py-3 font-mono text-gray-500">{row.em}</td>
                  <td className="px-6 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => handleCopy(row.rem, `table-val-${row.px}`)}
                        className={`px-2.5 py-1 rounded text-xs font-semibold border transition-all cursor-pointer ${
                          copiedText === `table-val-${row.px}`
                            ? 'bg-green-500 text-white border-transparent'
                            : 'bg-white hover:bg-gray-50 text-[#373b4d] border-[#E3E6F0]'
                        }`}
                      >
                        {copiedText === `table-val-${row.px}` ? 'Copied' : 'Value'}
                      </button>
                      <button
                        onClick={() => handleCopy(row.cssRule, `table-rule-${row.px}`)}
                        className={`px-2.5 py-1 rounded text-xs font-semibold border transition-all cursor-pointer ${
                          copiedText === `table-rule-${row.px}`
                            ? 'bg-green-500 text-white border-transparent'
                            : 'bg-[#F0F2FF] text-[#5865F2] hover:bg-[#E3E6FF] border-transparent'
                        }`}
                      >
                        {copiedText === `table-rule-${row.px}` ? 'Copied CSS' : 'Copy CSS'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
