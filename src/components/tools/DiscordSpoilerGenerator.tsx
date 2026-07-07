'use client';

import { useState } from 'react';

export default function DiscordSpoilerGenerator() {
  const [text, setText] = useState('');
  const [spoilerText, setSpoilerText] = useState('');
  const [copied, setCopied] = useState(false);

  const generateSpoiler = () => {
    const result = `||${text}||`;
    setSpoilerText(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(spoilerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="Enter text to make a spoiler..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none resize-none min-h-[120px]"
          />
          <button
            onClick={generateSpoiler}
            className="px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg"
          >
            Generate Spoiler
          </button>
        </div>

        {spoilerText && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#1a1d2e]">Your Spoiler</h3>
            <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] flex justify-between items-center gap-3">
              <code className="text-[#5b6282] break-all">{spoilerText}</code>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition flex-shrink-0"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
