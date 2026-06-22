'use client';
import { useState, useRef } from 'react';
import { Copy, Trash2, ArrowUpDown, Info, Check } from 'lucide-react';

export default function CaseConverterTool() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.trim() ? text.split('\n').length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transform = (type: 'upper' | 'lower' | 'title' | 'sentence' | 'inverse' | 'capitalized') => {
    let result = text;
    switch (type) {
      case 'upper':
        result = text.toUpperCase();
        break;
      case 'lower':
        result = text.toLowerCase();
        break;
      case 'title':
        result = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        break;
      case 'sentence':
        result = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        break;
      case 'inverse':
        result = text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
        break;
      case 'capitalized':
        result = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        break;
    }
    setText(result);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Words', value: stats.words },
          { label: 'Characters', value: stats.characters },
          { label: 'Sentences', value: stats.sentences },
          { label: 'Lines', value: stats.lines },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-4 rounded-xl border border-[#E3E6F0] text-center shadow-sm">
            <div className="text-2xl font-bold text-[#5865F2]">{stat.value}</div>
            <div className="text-xs text-[#5b6282] font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => transform('upper')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            UPPERCASE
          </button>
          <button
            onClick={() => transform('lower')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            lowercase
          </button>
          <button
            onClick={() => transform('title')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            Title Case
          </button>
          <button
            onClick={() => transform('sentence')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            Sentence case
          </button>
          <button
            onClick={() => transform('capitalized')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            Capitalized Case
          </button>
          <button
            onClick={() => transform('inverse')}
            className="px-4 py-2 bg-[#F8F9FF] text-[#1a1d2e] border border-[#E3E6F0] rounded-lg text-sm font-semibold hover:border-[#5865F2] transition-colors"
          >
            iNVERSE cASE
          </button>
        </div>

        <div className="relative">
          <textarea
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-64 p-4 bg-[#F8F9FF] border border-[#E3E6F0] rounded-xl focus:ring-2 focus:ring-[#5865F2]/20 focus:border-[#5865F2] outline-none transition-all resize-none text-[#1a1d2e]"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleCopy}
              className="p-2 bg-white text-[#5b6282] border border-[#E3E6F0] rounded-lg hover:text-[#5865F2] hover:border-[#5865F2] transition-all shadow-sm"
              title="Copy to clipboard"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
            <button
              onClick={() => setText('')}
              className="p-2 bg-white text-[#5b6282] border border-[#E3E6F0] rounded-lg hover:text-red-500 hover:border-red-500 transition-all shadow-sm"
              title="Clear text"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#5865F2]/5 border border-[#5865F2]/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-[#1a1d2e] mb-3 flex items-center gap-2">
          <Info size={20} className="text-[#5865F2]" /> About Case Converter
        </h3>
        <p className="text-[#5b6282] leading-relaxed text-sm">
          Our Case Converter is a simple yet powerful tool that helps you transform any text into your desired format. Whether you need to convert all-caps to lowercase, capitalize the first letter of every word for a title, or fix accidentally pressed Caps Lock, our tool handles it instantly. Plus, with the built-in word counter, you get real-time statistics on your text's length, word count, and structure.
        </p>
      </div>
    </div>
  );
}
