'use client';
import { useState } from 'react';
import { Link, Clipboard, CheckCircle2 } from 'lucide-react';

export default function MessageLinkExtractorTool() {
  const [url, setUrl] = useState('');
  const [extracted, setExtracted] = useState<{server: string, channel: string, message: string} | null>(null);
  const [copied, setCopied] = useState(false);

  const handleExtract = () => {
    // Basic regex to extract IDs: discord.com/channels/{server}/{channel}/{message}
    const regex = /channels\/(\d+)\/(\d+)\/(\d+)/;
    const match = url.match(regex);
    
    if (match) {
      setExtracted({
        server: match[1],
        channel: match[2],
        message: match[3]
      });
    } else {
      setExtracted(null);
      alert('Invalid Discord message link format.');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
      <div className="relative mb-6">
        <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5b6282]" size={20} />
        <input
          type="text"
          className="w-full pl-12 pr-4 py-4 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all"
          placeholder="Paste Discord Message Link..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button
        onClick={handleExtract}
        disabled={!url}
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold w-full transition-all disabled:opacity-50"
      >
        Extract IDs
      </button>
      
      {extracted && (
        <div className="mt-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 animate-in fade-in duration-500">
          <h3 className="font-bold text-lg mb-4 text-[#1a1d2e]">Extracted Data:</h3>
          <div className="space-y-4">
            {[
              { label: 'Server ID', value: extracted.server },
              { label: 'Channel ID', value: extracted.channel },
              { label: 'Message ID', value: extracted.message },
            ].map((item) => (
              <div key={item.label}>
                <label className="block text-xs font-semibold uppercase text-[#5b6282] mb-1">{item.label}</label>
                <div className="flex items-center gap-2">
                  <input type="text" readOnly value={item.value} className="w-full p-2 border rounded text-xs font-mono" />
                  <button onClick={() => copyToClipboard(item.value)} className="text-[#5865F2] hover:text-[#4752C4]">
                    {copied ? <CheckCircle2 size={16} /> : <Clipboard size={16} />}
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
