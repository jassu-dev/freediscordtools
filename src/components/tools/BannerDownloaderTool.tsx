'use client';
import { useState, useEffect } from 'react';
import { Download, Search, AlertCircle, Info, ExternalLink, Image as ImageIcon, Copy } from 'lucide-react';

export default function BannerDownloaderTool() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    id: string,
    hash: string,
    type: 'icons' | 'banners' | 'splashes' | 'avatars',
    name: string
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-parse hashes from URLs if pasted
  useEffect(() => {
    if (input.includes('cdn.discordapp.com')) {
      try {
        const url = new URL(input);
        const pathParts = url.pathname.split('/');
        // Format: /type/id/hash.extension
        if (pathParts.length >= 4) {
          const type = pathParts[1] as any;
          const id = pathParts[2];
          const hashWithExt = pathParts[3];
          const hash = hashWithExt.split('.')[0];
          
          if (['icons', 'banners', 'splashes', 'avatars'].includes(type) && id && hash) {
            setHash(hash);
            // Optional: update input to just the ID to keep it clean, or leave it
          }
        }
      } catch (e) {
        // Not a valid URL or unexpected format
      }
    }
  }, [input]);

  const handleProcess = () => {
    if (!input) return;
    setLoading(true);
    setResult(null);
    setError(null);

    let finalId = '';
    let finalHash = hash.trim();

    // 1. Try to extract from Input if it's a URL
    if (input.includes('cdn.discordapp.com')) {
      try {
        const url = new URL(input);
        const pathParts = url.pathname.split('/');
        if (pathParts.length >= 4) {
          const type = pathParts[1] as any;
          finalId = pathParts[2];
          finalHash = pathParts[3].split('.')[0];
          
          setResult({
            id: finalId,
            hash: finalHash,
            type: type,
            name: `Detected ${type.slice(0, -1)}`
          });
          setLoading(false);
          return;
        }
      } catch (e) {}
    }

    // 2. Handle as ID
    finalId = input.trim();
    if (/^\d{17,20}$/.test(finalId)) {
      if (!finalHash) {
        setError('An Asset Hash is required for ID lookups. Tip: Paste the URL of the image from Discord to auto-fill this!');
        setLoading(false);
        return;
      }

      setResult({
        id: finalId,
        hash: finalHash,
        type: 'icons', // Default to icons for manual ID
        name: `Manual ID Entry`
      });
    } else {
      setError('Please provide a valid Discord ID or paste a Discord Asset URL (from right-click -> Copy Link).');
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm max-w-2xl mx-auto text-left">
      <div className="mb-6 bg-[#F8F9FF] p-4 rounded-xl border border-[#5865F2]/10">
        <h3 className="text-sm font-bold text-[#1a1d2e] mb-2 flex items-center gap-2">
          <Info size={16} className="text-[#5865F2]" /> How to use?
        </h3>
        <p className="text-xs text-[#5b6282] leading-relaxed">
          1. In Discord, right-click any server icon or banner.<br />
          2. Select <strong>"Copy Link"</strong>.<br />
          3. Paste that link below to get high-resolution versions!
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5b6282]" size={20} />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all"
            placeholder="Paste Discord Asset URL or ID..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {input && !input.includes('cdn.discordapp.com') && /^\d+$/.test(input) && (
          <div className="relative animate-in slide-in-from-top-2 duration-300">
            <ImageIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5b6282]" size={20} />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all bg-[#F8F9FF]"
              placeholder="Enter Asset Hash (e.g. a_1d1882...)"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
          </div>
        )}
      </div>

      <button
        onClick={handleProcess}
        disabled={loading || !input}
        className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold w-full transition-all disabled:opacity-50"
      >
        <Download size={20} />
        Generate Asset Links
      </button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle size={20} className="shrink-0" />
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 animate-in fade-in zoom-in duration-500">
          <div className="mb-6 pb-4 border-b border-[#E3E6F0] flex justify-between items-end">
            <div>
              <h3 className="font-bold text-lg text-[#1a1d2e]">{result.name}</h3>
              <p className="text-xs text-[#5b6282] font-mono">ID: {result.id} | Hash: {result.hash}</p>
            </div>
            <span className="bg-[#5865F2] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
              {result.type.slice(0, -1)}
            </span>
          </div>

          <div className="space-y-8">
            <AssetGrid 
              id={result.id} 
              hash={result.hash} 
              type={result.type} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

function AssetGrid({ id, hash, type }: { id: string, hash: string, type: string }) {
  const sizes = [128, 256, 512, 1024];
  const formats = ['webp', 'png', 'jpg'];
  const [selectedFormat, setSelectedFormat] = useState('webp');

  const getUrl = (size: number) => `https://cdn.discordapp.com/${type}/${id}/${hash}.${selectedFormat}?size=${size}`;

  return (
    <div className="space-y-6">
      <div className="flex gap-2 p-1 bg-white border rounded-lg w-fit">
        {formats.map(f => (
          <button
            key={f}
            onClick={() => setSelectedFormat(f)}
            className={`px-3 py-1 rounded text-xs font-bold transition-all ${selectedFormat === f ? 'bg-[#5865F2] text-white' : 'text-[#5b6282] hover:bg-gray-100'}`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sizes.map(size => (
          <div key={size} className="bg-white p-4 rounded-lg border border-[#E3E6F0] space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#5b6282]">{size}x{size}</span>
              <a 
                href={getUrl(size)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5865F2] hover:underline text-[10px] flex items-center gap-1 font-bold"
              >
                VIEW <ExternalLink size={10} />
              </a>
            </div>
            <div className="aspect-square bg-[#F8F9FF] rounded flex items-center justify-center overflow-hidden border border-gray-50">
               <img 
                 src={getUrl(size)} 
                 alt={`${size}px`} 
                 className="max-w-full max-h-full object-contain"
                 loading="lazy"
               />
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                readOnly 
                value={getUrl(size)} 
                className="flex-1 p-2 bg-[#F8F9FF] border rounded text-[9px] font-mono outline-none"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(getUrl(size));
                }}
                className="p-2 text-[#5b6282] hover:text-[#5865F2] transition-colors"
                title="Copy URL"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
