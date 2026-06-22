'use client';
import { useState, useMemo, useRef, useCallback } from 'react';
import { Clipboard, Check, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

type SplitMethod = 'paragraph' | 'sentence' | 'word' | 'strict';

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

export default function CharacterCounter() {
  const [text, setText] = useState('');
  const [limitMode, setLimitMode] = useState<2000 | 4000>(2000);
  const [splitMethod, setSplitMethod] = useState<SplitMethod>('paragraph');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const textRef = useRef('');

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

  const handleCopyChunk = useCallback((chunkText: string, index: number, total: number) => {
    // Append part suffix indicator (e.g. " (1/3)") so readers know there are more parts
    const suffix = total > 1 ? ` (${index + 1}/${total})` : '';
    navigator.clipboard.writeText(chunkText + suffix);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  const copyAll = useCallback(() => {
    const fullCopiedText = chunks
      .map((c, i) => `${c} (${i + 1}/${chunks.length})`)
      .join('\n\n');
    navigator.clipboard.writeText(fullCopiedText);
    setCopiedIndex(-1);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, [chunks]);

  // Debounced text setter
  const debouncedSetText = useMemo(
    () => debounce((value: string) => setText(value), 150),
    []
  );

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    textRef.current = e.target.value;
    debouncedSetText(e.target.value);
  };

  const isOverLimit = stats.chars > limitMode;

  return (
    <div className="space-y-8">
      {/* Editor & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Editor (7 columns) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E3E6F0] pb-4">
            <h3 className="text-lg font-bold text-[#0f111a] flex items-center gap-2">
              <Sparkles className="text-[#5865F2]" size={20} />
              Discord Text counter
            </h3>
            
            {/* Limit Mode Switcher */}
            <div className="flex bg-[#F0F2FF] p-1 rounded-xl gap-1">
              <button
                type="button"
                onClick={() => setLimitMode(2000)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[44px] min-w-[44px] ${
                  limitMode === 2000 ? 'bg-[#5865F2] text-white' : 'text-[#5865F2] hover:bg-[#E3E6F0]'
                }`}
              >
                Standard (2,000)
              </button>
              <button
                type="button"
                onClick={() => setLimitMode(4000)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[44px] min-w-[44px] ${
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
              className={`w-full p-4 border rounded-xl focus:ring-1 outline-none transition-all font-sans text-sm leading-relaxed min-h-[44px] ${
                isOverLimit
                  ? 'border-amber-400 focus:border-amber-500 focus:ring-amber-500 bg-amber-50/10'
                  : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]'
              }`}
              placeholder="Paste or write your long Discord announcement rules here..."
              value={text}
              onChange={handleTextChange}
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
                <div className="text-2xl font-black text-[#0f111a]">
                  {stat.val.toLocaleString()}
                  {stat.max && <span className="text-xs text-[#2d3149] font-normal"> / {stat.max}</span>}
                </div>
                <div className="text-[10px] font-bold text-[#2d3149] uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Configurations (4 columns) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <h4 className="text-sm font-bold text-[#0f111a] border-b border-[#E3E6F0] pb-2 uppercase tracking-wider text-[#5865F2]">
            Split Configurations
          </h4>
          
          <div className="space-y-3">
            {[
              { id: 'paragraph', label: 'Paragraphs', desc: 'Split by line breaks' },
              { id: 'sentence', label: 'Sentences', desc: 'Split by . ! ?' },
              { id: 'word', label: 'Words', desc: 'Split by spaces' },
              { id: 'strict', label: 'Strict', desc: 'Exact character chunks' },
            ].map((method) => (
              <button
                key={method.id}
                onClick={() => setSplitMethod(method.id as SplitMethod)}
                className={`w-full text-left p-3 rounded-xl border transition-all min-h-[44px] ${
                  splitMethod === method.id
                    ? 'border-[#5865F2] bg-[#F0F2FF] text-[#5865F2]'
                    : 'border-[#E3E6F0] hover:border-[#D4D8EF] text-[#2d3149]'
                }`}
              >
                <div className="font-bold text-sm">{method.label}</div>
                <div className="text-xs opacity-75">{method.desc}</div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E3E6F0]">
            <button
              onClick={copyAll}
              className="w-full py-3 rounded-xl bg-[#5865F2] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#4752c4] transition-colors min-h-[44px]"
            >
              {copiedIndex === -1 ? <Check size={18} /> : <Clipboard size={18} />}
              Copy All Parts
            </button>
          </div>
        </div>
      </div>

      {/* Chunks Output */}
      {chunks.length > 1 && (
        <div className="bg-white rounded-2xl border border-[#E3E6F0] shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-bold text-[#0f111a] flex items-center gap-2">
            <MessageSquare size={20} className="text-[#5865F2]" />
            Split into {chunks.length} Messages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chunks.map((chunk, i) => (
              <div key={i} className="border border-[#E3E6F0] rounded-xl p-4 bg-[#F8F9FF]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#5865F2] uppercase tracking-wide">Part {i + 1} ({chunk.length} chars)</span>
                  <button
                    onClick={() => handleCopyChunk(chunk, i, chunks.length)}
                    className="text-xs px-3 py-1 rounded-lg bg-white border border-[#E3E6F0] hover:bg-[#F0F2FF] text-[#2d3149] font-semibold flex items-center gap-1 min-h-[44px] min-w-[44px]"
                  >
                    {copiedIndex === i ? <Check size={12} /> : <Clipboard size={12} />}
                    Copy
                  </button>
                </div>
                <div className="text-xs text-[#2d3149] whitespace-pre-wrap font-mono leading-relaxed">
                  {chunk.length > 200 ? `${chunk.substring(0, 200)}...` : chunk}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
