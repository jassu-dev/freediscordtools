'use client';
import { useState, useMemo } from 'react';
import { Clipboard, Check, Sparkles, Trash2 } from 'lucide-react';

const EMOJI_MAP: Record<string, string> = {
  a: ':regional_indicator_a:', b: ':regional_indicator_b:', c: ':regional_indicator_c:',
  d: ':regional_indicator_d:', e: ':regional_indicator_e:', f: ':regional_indicator_f:',
  g: ':regional_indicator_g:', h: ':regional_indicator_h:', i: ':regional_indicator_i:',
  j: ':regional_indicator_j:', k: ':regional_indicator_k:', l: ':regional_indicator_l:',
  m: ':regional_indicator_m:', n: ':regional_indicator_n:', o: ':regional_indicator_o:',
  p: ':regional_indicator_p:', q: ':regional_indicator_q:', r: ':regional_indicator_r:',
  s: ':regional_indicator_s:', t: ':regional_indicator_t:', u: ':regional_indicator_u:',
  v: ':regional_indicator_v:', w: ':regional_indicator_w:', x: ':regional_indicator_x:',
  y: ':regional_indicator_y:', z: ':regional_indicator_z:',
  '0': ':zero:', '1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:',
  '5': ':five:', '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:',
  '?': ':question:', '!': ':exclamation:', '+': ':heavy_plus_sign:',
  '-': ':heavy_minus_sign:', '*': ':asterisk:', '#': ':hash:'
};

export default function EmojiTextGenerator() {
  const [inputText, setInputText] = useState('GIVEAWAY');
  const [copied, setCopied] = useState(false);
  const [wordSpacing, setWordSpacing] = useState(4);
  const [outputFormat, setOutputFormat] = useState<'raw' | 'code'>('raw');

  // Convert input text to emoji representations
  const translated = useMemo(() => {
    if (!inputText) return '';

    const cleanInput = inputText.toLowerCase();
    const chars = Array.from(cleanInput);
    const result: string[] = [];

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (char === ' ') {
        // Space between words
        result.push(' '.repeat(wordSpacing));
      } else if (EMOJI_MAP[char]) {
        result.push(EMOJI_MAP[char]);
      } else {
        // Print unsupported chars raw
        result.push(char);
      }
    }

    // Connect with spacing
    const joined = result.join(' ');
    
    if (outputFormat === 'code') {
      return `\`\`\`\n${joined}\n\`\`\``;
    }
    return joined;
  }, [inputText, wordSpacing, outputFormat]);

  const handleCopy = () => {
    if (!translated) return;
    navigator.clipboard.writeText(translated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isExceeded = translated.length > 2000;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Editor Controls */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-[#E3E6F0] pb-3">
            <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
              <Sparkles className="text-[#5865F2]" size={20} />
              Emoji Translator
            </h3>
            <span className={`text-xs font-semibold ${isExceeded ? 'text-amber-500' : 'text-[#5b6282]'}`}>
              {translated.length.toLocaleString()} / 2,000 Chars
            </span>
          </div>

          {/* Text Input */}
          <div>
            <label className="block text-xs font-bold text-[#1a1d2e] mb-1.5 uppercase tracking-wide">
              Your Header Text
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all font-semibold uppercase"
              placeholder="ENTER HEADING..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {/* Formatting Configs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[#5b6282] mb-1.5">Word Space Separation:</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2"
                  max="8"
                  className="w-full accent-[#5865F2]"
                  value={wordSpacing}
                  onChange={(e) => setWordSpacing(Number(e.target.value))}
                />
                <span className="text-sm font-bold text-[#1a1d2e] w-8 text-center">{wordSpacing}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5b6282] mb-1.5">Output Format:</label>
              <div className="flex bg-[#F0F2FF] p-1 rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setOutputFormat('raw')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    outputFormat === 'raw' ? 'bg-[#5865F2] text-white' : 'text-[#5865F2] hover:bg-[#E3E6F0]'
                  }`}
                >
                  Raw Emoji Text
                </button>
                <button
                  type="button"
                  onClick={() => setOutputFormat('code')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    outputFormat === 'code' ? 'bg-[#5865F2] text-white' : 'text-[#5865F2] hover:bg-[#E3E6F0]'
                  }`}
                >
                  Code Block Box
                </button>
              </div>
            </div>
          </div>

          {isExceeded && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl text-xs flex gap-2">
              <span>⚠️</span>
              <p>
                <strong>Warning:</strong> The generated code string exceeds Discord&apos;s standard message limit of 2,000 characters. Consider reducing your header length.
              </p>
            </div>
          )}

          {/* Copy Trigger */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={handleCopy}
              disabled={!translated}
              className="flex-1 flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-[#5865F2]/20 disabled:opacity-50"
            >
              {copied ? <Check size={18} /> : <Clipboard size={18} />}
              {copied ? 'Copied Big Emojis!' : 'Copy Emoji Text'}
            </button>
            <button
              onClick={() => setInputText('')}
              className="px-4 py-3.5 border border-[#E3E6F0] text-gray-500 hover:text-red-500 hover:border-red-500 rounded-xl transition-all"
              title="Clear input"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Code / Visual Display Panel */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-[#313338] text-[#dbdee1] p-6 rounded-2xl border border-gray-800 shadow-xl min-h-[340px] flex flex-col font-sans">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border-b border-gray-700/50 pb-2">
            Discord Client Rendering Preview
          </div>

          <div className="flex gap-4 items-start flex-1">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">
              USER
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-semibold text-white hover:underline cursor-pointer text-sm">
                  Community Member
                </span>
                <span className="text-[10px] text-gray-400">
                  Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* Emoji Display (renders letter tags as inline block items) */}
              {inputText.trim() ? (
                outputFormat === 'code' ? (
                  <pre className="bg-[#1e1f22] p-3 rounded font-mono text-xs text-gray-200 max-w-full overflow-x-auto whitespace-pre leading-relaxed my-2">
                    {translated}
                  </pre>
                ) : (
                  <div className="text-sm break-words whitespace-pre-wrap select-all leading-relaxed py-1">
                    {translated}
                  </div>
                )
              ) : (
                <div className="text-sm text-gray-500 italic">Type something in the text box...</div>
              )}
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-800 text-[10px] text-gray-500">
            Note: Discord renders regional indicators as clean blue block letters.
          </div>
        </div>
      </div>
    </div>
  );
}
