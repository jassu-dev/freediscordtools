'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, FileJson, Minimize2, Maximize2, AlertCircle } from 'lucide-react';

export default function JsonFormatter() {
  const [input, setInput] = useState('{"name":"Free Discord Tools","tools":["timestamp","font","color"]}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formatMode, setFormatMode] = useState<'pretty' | 'minify'>('pretty');

  const formatJson = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      const formatted = formatMode === 'pretty' ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed);
      setOutput(formatted);
      setError(null);
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message);
      setOutput('');
    }
  }, [input, formatMode]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(output);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = output;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }, [output]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#1a1d2e] flex items-center gap-2">
            <FileJson size={24} />
            JSON Formatter
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setFormatMode('pretty')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                formatMode === 'pretty'
                  ? 'bg-[#5865F2] text-white'
                  : 'bg-gray-100 text-[#5b6282] hover:bg-gray-200'
              }`}
            >
              <Maximize2 size={18} className="inline mr-2" />
              Pretty
            </button>
            <button
              onClick={() => setFormatMode('minify')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                formatMode === 'minify'
                  ? 'bg-[#5865F2] text-white'
                  : 'bg-gray-100 text-[#5b6282] hover:bg-gray-200'
              }`}
            >
              <Minimize2 size={18} className="inline mr-2" />
              Minify
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              Input JSON
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onBlur={formatJson}
              placeholder="Paste your JSON here..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[300px] resize-none"
            />
          </div>

          {/* Output */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
                Output
              </label>
              <button
                onClick={handleCopy}
                disabled={!output}
                className="px-3 py-1.5 bg-gray-100 text-[#5b6282] font-semibold rounded-lg hover:bg-gray-200 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="relative">
              <textarea
                value={output}
                readOnly
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none min-h-[300px] resize-none"
              />
              {error && (
                <div className="absolute top-4 left-4 right-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={formatJson}
            className="flex-1 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all"
          >
            Format / Minify
          </button>
        </div>
      </div>
    </div>
  );
}
