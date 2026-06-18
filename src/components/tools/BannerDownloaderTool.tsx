'use client';
import { useState } from 'react';

export default function BannerDownloaderTool() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleDownload = () => {
    setLoading(true);
    setResult(null);
    
    // Simulate API call to fetch assets
    setTimeout(() => {
      setResult('Assets found! (Simulated download link)');
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
      <input
        type="text"
        className="w-full p-4 border border-[#E3E6F0] rounded-xl mb-6 focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
        placeholder="Paste Discord Server Invite Link or ID..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleDownload}
        disabled={loading || !input}
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold w-full transition-all disabled:opacity-50"
      >
        {loading ? 'Fetching Assets...' : 'Download Assets'}
      </button>
      
      {result && (
        <div className="mt-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 text-center">
          <p className="font-bold text-[#1a1d2e]">{result}</p>
        </div>
      )}
    </div>
  );
}
