'use client';

import { useState } from 'react';

const upsideDownMap: Record<string, string> = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ə', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  A: '∀', B: '𐐒', C: 'Ɔ', D: '◁', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ', K: '⋊', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Q', R: 'ᴚ', S: 'S', T: '⊥', U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z',
  '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '.': '˙', ',': '\'', '?': '¿', '!': '¡', '"': ',,', "'": ',', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾',
};

export default function DiscordTextRotator() {
  const [text, setText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const reverseText = (str: string) => str.split('').reverse().join('');
  const upsideDownText = (str: string) => {
    return str.split('').map(char => upsideDownMap[char] || char).reverse().join('');
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const results = [
    { name: 'Reversed Text', value: reverseText(text) },
    { name: 'Upside Down Text', value: upsideDownText(text) },
  ];

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="Enter text to transform..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none resize-none min-h-[120px]"
          />
        </div>

        {text && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#1a1d2e]">Text Transformations</h3>
            <div className="grid gap-3">
              {results.map((result, index) => (
                <div key={index} className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
                  <div className="font-bold text-[#1a1d2e] mb-2">{result.name}</div>
                  <div className="flex justify-between items-center gap-3">
                    <code className="text-[#5b6282] break-all">{result.value || ' '}</code>
                    <button
                      onClick={() => copyToClipboard(result.value, index)}
                      className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition flex-shrink-0"
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
