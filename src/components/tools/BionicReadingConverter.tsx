'use client';

import { useState, useCallback, useMemo, useRef } from 'react';
import { Copy, RotateCcw, Download, Sparkles, FileText, Check } from 'lucide-react';

const DEMO_TEXT = `Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. The eye is guided through the text by bolding the first letters of each word.

This allows the reader to focus on only the bolded letters and let the brain complete the rest of the words. It is especially helpful for people with ADHD, dyslexia, or anyone looking to read and study much faster. Try adjusting the sliders to see what feels most natural for your brain.`;

// Debounce utility function
const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function BionicReadingConverter() {
  const [text, setText] = useState('');
  const [fixation, setFixation] = useState(50);
  const [skipShort, setSkipShort] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [copiedType, setCopiedType] = useState<'html' | 'md' | 'text' | null>(null);
  
  // Use a ref for real-time text, debounce state for computation
  const textRef = useRef('');

  const escapeHtml = useCallback((str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }, []);

  const bionicHtml = useMemo(() => {
    if (!text) return '';
    const tokens = text.match(/([a-zA-Z0-9]+)|([^a-zA-Z0-9]+)/g) || [];
    return tokens
      .map((token) => {
        if (/^[a-zA-Z0-9]+$/.test(token)) {
          const len = token.length;
          if (skipShort && len <= 3) {
            return escapeHtml(token);
          }
          const boldLen = Math.ceil(len * (fixation / 100));
          const boldPart = token.slice(0, boldLen);
          const restPart = token.slice(boldLen);
          return `<strong>${escapeHtml(boldPart)}</strong>${escapeHtml(restPart)}`;
        }
        return escapeHtml(token);
      })
      .join('');
  }, [text, fixation, skipShort, escapeHtml]);

  const bionicMarkdown = useMemo(() => {
    if (!text) return '';
    const tokens = text.match(/([a-zA-Z0-9]+)|([^a-zA-Z0-9]+)/g) || [];
    return tokens
      .map((token) => {
        if (/^[a-zA-Z0-9]+$/.test(token)) {
          const len = token.length;
          if (skipShort && len <= 3) {
            return token;
          }
          const boldLen = Math.ceil(len * (fixation / 100));
          return `**${token.slice(0, boldLen)}**${token.slice(boldLen)}`;
        }
        return token;
      })
      .join('');
  }, [text, fixation, skipShort]);

  const handleCopy = useCallback(async (type: 'html' | 'md' | 'text', content: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // ignore
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (!text) return;
    const blob = new Blob([bionicHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bionic-reading-output.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [text, bionicHtml]);

  // Debounced text setter
  const debouncedSetText = useMemo(
    () => debounce((value: string) => setText(value), 150),
    []
  );

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    textRef.current = e.target.value;
    debouncedSetText(e.target.value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Interactive Controls & Input Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Input Box & Configs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="input-text" className="text-sm font-bold text-[#0f111a] uppercase tracking-wider">
                Enter Your Text
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    textRef.current = DEMO_TEXT;
                    setText(DEMO_TEXT);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#F0F2FF] hover:bg-[#E3E6FF] text-[#5865F2] font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer min-h-[44px] min-w-[44px]"
                >
                  <Sparkles size={12} /> Load Demo
                </button>
                <button
                  onClick={() => {
                    textRef.current = '';
                    setText('');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer min-h-[44px] min-w-[44px]"
                >
                  <RotateCcw size={12} /> Clear
                </button>
              </div>
            </div>

            <textarea
              id="input-text"
              className="w-full h-80 px-4 py-3 rounded-xl border border-[#E3E6F0] text-[#0f111a] placeholder-gray-400 focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 font-sans resize-none text-base"
              placeholder="Paste or type your text here to convert it..."
              value={text}
              onChange={handleTextChange}
            />
          </div>

          {/* Config Sliders */}
          <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-[#0f111a] uppercase tracking-wider mb-2">Bionic Settings</h3>
            
            {/* Fixation Slider */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-[#2d3149]">Fixation (Bolding Strength)</span>
                <span className="text-[#5865F2] font-bold">{fixation}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="90"
                step="10"
                value={fixation}
                onChange={(e) => setFixation(Number(e.target.value))}
                className="w-full h-2 bg-[#F0F2FF] rounded-lg appearance-none cursor-pointer accent-[#5865F2]"
              />
              <span className="text-xs text-[#2d3149]">Controls what percentage of each word is bolded.</span>
            </div>

            {/* Skip Short Words Checkbox */}
            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="skip-short-checkbox"
                checked={skipShort}
                onChange={(e) => setSkipShort(e.target.checked)}
                className="w-5 h-5 rounded border-[#E3E6F0] text-[#5865F2] focus:ring-[#5865F2] accent-[#5865F2] cursor-pointer min-h-[44px] min-w-[44px]"
              />
              <label htmlFor="skip-short-checkbox" className="text-sm font-semibold text-[#2d3149] cursor-pointer select-none min-h-[44px] flex items-center">
                Skip short words (3 letters or fewer)
              </label>
            </div>

            <div className="h-px bg-[#E3E6F0]" />

            {/* Reader Adjustments */}
            <h3 className="text-sm font-bold text-[#0f111a] uppercase tracking-wider">Reader Layout</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Font Size */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-[#2d3149]">Font Size</span>
                  <span className="font-bold text-[#5865F2]">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="28"
                  step="2"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#F0F2FF] rounded-lg appearance-none cursor-pointer accent-[#5865F2]"
                />
              </div>

              {/* Line Height */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-[#2d3149]">Line Spacing</span>
                  <span className="font-bold text-[#5865F2]">{lineHeight}</span>
                </div>
                <input
                  type="range"
                  min="1.2"
                  max="2.2"
                  step="0.2"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#F0F2FF] rounded-lg appearance-none cursor-pointer accent-[#5865F2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Reader Panel */}
        <div className="lg:col-span-6 flex flex-col h-full">
          <div className="bg-white rounded-2xl border border-[#E3E6F0] shadow-sm flex flex-col flex-1 min-h-[460px]">
            
            {/* Output Header */}
            <div className="px-6 py-4 border-b border-[#E3E6F0] flex flex-wrap justify-between items-center gap-3">
              <span className="text-sm font-bold text-[#0f111a] uppercase tracking-wider">
                Bionic Reader View
              </span>
              
              <div className="flex gap-2 flex-wrap">
                <button
                  disabled={!text}
                  onClick={() => handleCopy('text', text)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all min-h-[44px] min-w-[44px] ${
                    !text 
                      ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400 bg-gray-50'
                      : copiedType === 'text'
                        ? 'bg-green-50 border-green-200 text-green-600'
                        : 'border-[#E3E6F0] bg-white hover:bg-gray-50 text-[#2d3149] cursor-pointer'
                  }`}
                >
                  {copiedType === 'text' ? <Check size={12} /> : <Copy size={12} />} Copy Text
                </button>
                <button
                  disabled={!text}
                  onClick={() => handleCopy('md', bionicMarkdown)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all min-h-[44px] min-w-[44px] ${
                    !text 
                      ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400 bg-gray-50'
                      : copiedType === 'md'
                        ? 'bg-green-50 border-green-200 text-green-600'
                        : 'border-[#E3E6F0] bg-white hover:bg-gray-50 text-[#2d3149] cursor-pointer'
                  }`}
                >
                  {copiedType === 'md' ? <Check size={12} /> : <FileText size={12} />} Copy Markdown
                </button>
                <button
                  disabled={!text}
                  onClick={handleDownload}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all min-h-[44px] min-w-[44px] ${
                    !text 
                      ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400 bg-gray-50'
                      : 'border-[#E3E6F0] bg-white hover:bg-gray-50 text-[#2d3149] cursor-pointer'
                  }`}
                >
                  <Download size={12} /> Download HTML
                </button>
              </div>
            </div>

            {/* Reading Box */}
            <div className="p-6 flex-1 overflow-y-auto max-h-[440px]">
              {text ? (
                <div
                  className="font-sans text-[#0f111a] leading-relaxed break-words outline-none"
                  style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: lineHeight,
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  dangerouslySetInnerHTML={{ __html: bionicHtml }}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400 space-y-2">
                  <Sparkles size={36} className="text-[#5865F2]/40" />
                  <p className="font-semibold text-gray-500">Your bionic text will appear here</p>
                  <p className="text-xs max-w-xs text-gray-400">
                    Paste text on the left or click "Load Demo" to see Bionic Reading in action.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
