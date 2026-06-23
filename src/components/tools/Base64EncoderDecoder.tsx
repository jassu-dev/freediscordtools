'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, ArrowRightLeft } from 'lucide-react';

export default function Base64EncoderDecoder() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('Hello World!');
  const [output, setOutput] = useState('SGVsbG8gV29ybGQh');
  const [copied, setCopied] = useState(false);

  const processText = useCallback(() => {
    try {
      if (mode === 'encode') {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(input)));
        setOutput(decoded);
      }
    } catch {
      setOutput('Invalid Base64 input');
    }
  }, [mode, input]);

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

  const toggleMode = useCallback(() => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInput(output);
    setOutput(input);
  }, [mode, input, output]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#1a1d2e]">Base64 Encoder / Decoder</h3>
          <button
            onClick={toggleMode}
            className="px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-all flex items-center gap-2"
          >
            <ArrowRightLeft size={18} />
            Swap
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
            </label>
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                processText();
              }}
              placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[250px] resize-none"
            />
          </div>

          {/* Output */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
                {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
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
            <textarea
              value={output}
              readOnly
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none min-h-[250px] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
