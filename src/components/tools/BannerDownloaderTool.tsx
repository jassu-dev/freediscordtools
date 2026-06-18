'use client';
import { useState } from 'react';
import { Download, Search } from 'lucide-react'; // Assuming lucide-react is available

export default function BannerDownloaderTool() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{banner: string, icon: string} | null>(null);

  const handleDownload = () => {
    setLoading(true);
    setResult(null);
    
    // Simulate API call to fetch assets
    setTimeout(() => {
      setResult({
        banner: 'https://via.placeholder.com/600x200?text=Banner',
        icon: 'https://via.placeholder.com/128x128?text=Icon'
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5b6282]" size={20} />
        <input
          type="text"
          className="w-full pl-12 pr-4 py-4 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all"
          placeholder="Paste Discord Server Invite Link or ID..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        onClick={handleDownload}
        disabled={loading || !input}
        className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold w-full transition-all disabled:opacity-50"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Analyzing Server...
          </>
        ) : (
          <>
            <Download size={20} />
            Fetch Server Assets
          </>
        )}
      </button>
      
      {result && (
        <div className="mt-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 animate-in fade-in duration-500">
          <h3 className="font-bold text-lg mb-4 text-[#1a1d2e]">Assets Found:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <img src={result.banner} alt="Server Banner" className="rounded-lg mb-2 shadow" />
              <button className="text-sm font-semibold text-[#5865F2]">Download Banner</button>
            </div>
            <div className="text-center">
              <img src={result.icon} alt="Server Icon" className="rounded-full w-20 h-20 mx-auto mb-2 shadow" />
              <button className="text-sm font-semibold text-[#5865F2]">Download Icon</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
