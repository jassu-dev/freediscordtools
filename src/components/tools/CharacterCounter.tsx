'use client';
import { useState, useMemo } from 'react';
import { Clipboard, Check, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

type SplitMethod = 'paragraph' | 'sentence' | 'word' | 'strict';

export default function CharacterCounter() {
  const [text, setText] = useState('');
  const [limitMode, setLimitMode] = useState<2000 | 4000>(2000);
  const [splitMethod, setSplitMethod] = useState<SplitMethod>('paragraph');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Dynamic statistics
  const stats = useMemo(() => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim()).length : 0;
    
    return { chars, words, sentences, paragraphs };
  }, [text]);

  // Splitting logic
  const chunks = useMemo(() => {
    if (!text || text.length <= limitMode) return [text];

    const maxLen = limitMode - 15; // Save space for " (1/3)" part indicator
    const result: string[] = [];

    if (splitMethod === 'strict') {
      // Split strictly by character lengths
      for (let i = 0; i < text.length; i += maxLen) {
        result.push(text.substring(i, i + maxLen));
      }
      return result;
    }

    if (splitMethod === 'word') {
      const words = text.split(/(\s+)/);
      let currentChunk = '';
      for (const segment of words) {
        if ((currentChunk + segment).length > maxLen) {
          if (currentChunk.trim()) result.push(currentChunk.trim());
          currentChunk = segment;
        } else {
          currentChunk += segment;
        }
      }
      if (currentChunk.trim()) result.push(currentChunk.trim());
      return result;
    }

    if (splitMethod === 'sentence') {
      // Regexp that splits text into sentences while retaining the punctuation marks
      const sentences = text.split(/(?<=[.!?])\s+/);
      let currentChunk = '';
      for (const sentence of sentences) {
        if ((currentChunk + ' ' + sentence).length > maxLen) {
          if (currentChunk.trim()) result.push(currentChunk.trim());
          currentChunk = sentence;
        } else {
          currentChunk = currentChunk ? currentChunk + ' ' + sentence : sentence;
        }
      }
      if (currentChunk.trim()) result.push(currentChunk.trim());
      return result;
    }

    // Default: Split by paragraph
    const paragraphs = text.split(/\n+/);
    let currentChunk = '';
    for (const para of paragraphs) {
      // If a single paragraph is too large on its own, fall back to sentence splitting inside it
      if (para.length > maxLen) {
        if (currentChunk.trim()) {
          result.push(currentChunk.trim());
          currentChunk = '';
        }
        const sentences = para.split(/(?<=[.!?])\s+/);
        for (const sentence of sentences) {
          if ((currentChunk + ' ' + sentence).length > maxLen) {
            if (currentChunk.trim()) result.push(currentChunk.trim());
            currentChunk = sentence;
          } else {
            currentChunk = currentChunk ? currentChunk + ' ' + sentence : sentence;
          }
        }
      } else if ((currentChunk + '\n\n' + para).length > maxLen) {
        if (currentChunk.trim()) result.push(currentChunk.trim());
        currentChunk = para;
      } else {
        currentChunk = currentChunk ? currentChunk + '\n\n' + para : para;
      }
    }
    if (currentChunk.trim()) result.push(currentChunk.trim());

    return result;
  }, [text, limitMode, splitMethod]);

  const handleCopyChunk = (chunkText: string, index: number, total: number) => {
    // Append part suffix indicator (e.g. " (1/3)") so readers know there are more parts
    const suffix = total > 1 ? ` (${index + 1}/${total})` : '';
    navigator.clipboard.writeText(chunkText + suffix);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = () => {
    const fullCopiedText = chunks
      .map((c, i) => `${c} (${i + 1}/${chunks.length})`)
      .join('\n\n');
    navigator.clipboard.writeText(fullCopiedText);
    setCopiedIndex(-1);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const isOverLimit = stats.chars > limitMode;

  return (
    <div className="space-y-8">
      {/* Editor & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Editor (7 columns) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E3E6F0] pb-4">
            <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
              <Sparkles className="text-[#5865F2]" size={20} />
              Discord Text counter
            </h3>
            
            {/* Limit Mode Switcher */}
            <div className="flex bg-[#F0F2FF] p-1 rounded-xl gap-1">
              <button
                type="button"
                onClick={() => setLimitMode(2000)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  limitMode === 2000 ? 'bg-[#5865F2] text-white' : 'text-[#5865F2] hover:bg-[#E3E6F0]'
                }`}
              >
                Standard (2,000)
              </button>
              <button
                type="button"
                onClick={() => setLimitMode(4000)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  limitMode === 4000 ? 'bg-[#5865F2] text-white' : 'text-[#5865F2] hover:bg-[#E3E6F0]'
                }`}
              >
                Nitro Limit (4,000)
              </button>
            </div>
          </div>

          {/* Textarea Input */}
          <div className="relative">
            <textarea
              rows={10}
              className={`w-full p-4 border rounded-xl focus:ring-1 outline-none transition-all font-sans text-sm leading-relaxed ${
                isOverLimit
                  ? 'border-amber-400 focus:border-amber-500 focus:ring-amber-500 bg-amber-50/10'
                  : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]'
              }`}
              placeholder="Paste or write your long Discord announcement rules here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {isOverLimit && (
              <div className="mt-2 flex items-center gap-2 text-amber-600 bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-lg text-xs">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>
                  Your text has exceeded the {limitMode.toLocaleString()} character limit by <strong>{(stats.chars - limitMode).toLocaleString()}</strong> characters. It has been divided below.
                </span>
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { label: 'Characters', val: stats.chars, max: limitMode },
              { label: 'Words', val: stats.words },
              { label: 'Sentences', val: stats.sentences },
              { label: 'Paragraphs', val: stats.paragraphs }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] text-center">
                <div className="text-2xl font-black text-[#1a1d2e]">
                  {stat.val.toLocaleString()}
                  {stat.max && <span className="text-xs text-[#5b6282] font-normal"> / {stat.max}</span>}
                </div>
                <div className="text-[10px] font-bold text-[#5b6282] uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Configurations (4 columns) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <h4 className="text-sm font-bold text-[#1a1d2e] border-b border-[#E3E6F0] pb-2 uppercase tracking-wider text-[#5865F2]">
            Split Configurations
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#5b6282] mb-1.5">Division boundary:</label>
              <div className="space-y-2">
                {[
                  { id: 'paragraph', name: 'Smart Paragraph Split', desc: 'Slices at paragraph breaks (recommended)' },
                  { id: 'sentence', name: 'Smart Sentence Split', desc: 'Slices at punctuation marks (.!?)' },
                  { id: 'word', name: 'Smart Word Split', desc: 'Slices at space boundaries' },
                  { id: 'strict', name: 'Strict Character Split', desc: 'Slices exactly at limit boundary' }
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      splitMethod === method.id
                        ? 'border-[#5865F2] bg-[#F0F2FF]'
                        : 'border-[#E3E6F0] hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="split-method"
                      className="mt-1 text-[#5865F2] focus:ring-[#5865F2]"
                      checked={splitMethod === method.id}
                      onChange={() => setSplitMethod(method.id as SplitMethod)}
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1a1d2e]">{method.name}</div>
                      <div className="text-[10px] text-[#5b6282] mt-0.5">{method.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Split Output Panel */}
      {text.trim() && (
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#E3E6F0] pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="text-[#5865F2]" size={20} />
              <h3 className="text-lg font-bold text-[#1a1d2e]">
                Split Output ({chunks.length} {chunks.length === 1 ? 'Message' : 'Messages'})
              </h3>
            </div>
            {chunks.length > 1 && (
              <button
                onClick={copyAll}
                className="text-xs bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-xl font-bold transition-all"
              >
                {copiedIndex === -1 ? 'Copied All Parts!' : 'Copy All Parts'}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chunks.map((chunk, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] overflow-hidden"
              >
                {/* Header info */}
                <div className="flex justify-between items-center bg-[#F0F2FF] px-4 py-3 border-b border-[#E3E6F0]">
                  <span className="text-xs font-bold text-[#1a1d2e]">
                    Part {idx + 1} of {chunks.length}
                  </span>
                  <span className="text-[10px] font-semibold text-[#5b6282]">
                    {chunk.length.toLocaleString()} Chars
                  </span>
                </div>

                {/* Preformatted text preview */}
                <div className="p-4 flex-1 text-sm font-sans whitespace-pre-wrap text-[#373b4d] select-all max-h-[220px] overflow-y-auto leading-relaxed">
                  {chunk}
                  <span className="text-gray-400 select-none bg-white border px-1.5 py-0.5 rounded text-[10px] ml-1 font-bold">
                    ({idx + 1}/{chunks.length})
                  </span>
                </div>

                {/* Action footer */}
                <div className="p-3 bg-gray-50 border-t border-[#E3E6F0] flex justify-end">
                  <button
                    onClick={() => handleCopyChunk(chunk, idx, chunks.length)}
                    className="flex items-center gap-1 text-xs text-[#5865F2] hover:text-[#4752C4] font-bold bg-white hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-[#E3E6F0] transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check size={14} /> Copied!
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} /> Copy Part
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
