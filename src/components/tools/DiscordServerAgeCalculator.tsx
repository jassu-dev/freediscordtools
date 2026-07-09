'use client';

import { useState } from 'react';
import { Copy, Check, Calendar, Clock, Server } from 'lucide-react';

const DISCORD_EPOCH = 1420070400000n; // Jan 1, 2015

interface ServerAgeResult {
  snowflake: string;
  createdAt: Date;
  ageYears: number;
  ageMonths: number;
  ageDays: number;
  totalDays: number;
  unixTimestamp: number;
}

function decodeSnowflake(id: string): ServerAgeResult | null {
  try {
    const bigId = BigInt(id.trim());
    const ms = Number((bigId >> 22n) + DISCORD_EPOCH);
    const createdAt = new Date(ms);
    if (isNaN(createdAt.getTime()) || createdAt.getFullYear() < 2015) return null;

    const now = new Date();
    const diffMs = now.getTime() - createdAt.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const ageYears = Math.floor(totalDays / 365);
    const ageMonths = Math.floor((totalDays % 365) / 30);
    const ageDays = totalDays % 30;

    return {
      snowflake: id.trim(),
      createdAt,
      ageYears,
      ageMonths,
      ageDays,
      totalDays,
      unixTimestamp: Math.floor(ms / 1000),
    };
  } catch {
    return null;
  }
}

function getMilestoneBadge(totalDays: number): { emoji: string; label: string; color: string } {
  if (totalDays >= 365 * 5) return { emoji: '🏆', label: 'Legendary Server (5+ years)', color: 'text-amber-500 bg-amber-50 border-amber-200' };
  if (totalDays >= 365 * 3) return { emoji: '💎', label: 'Veteran Server (3+ years)', color: 'text-blue-600 bg-blue-50 border-blue-200' };
  if (totalDays >= 365 * 2) return { emoji: '⭐', label: 'Established Server (2+ years)', color: 'text-purple-600 bg-purple-50 border-purple-200' };
  if (totalDays >= 365) return { emoji: '🌟', label: 'One Year Old Server (1+ year)', color: 'text-green-600 bg-green-50 border-green-200' };
  if (totalDays >= 180) return { emoji: '🚀', label: 'Growing Server (6+ months)', color: 'text-[#5865F2] bg-[#F0F2FF] border-[#5865F2]/20' };
  if (totalDays >= 30) return { emoji: '🌱', label: 'New Server (1+ month)', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
  return { emoji: '✨', label: 'Brand New Server', color: 'text-[#5b6282] bg-gray-50 border-gray-200' };
}

export default function DiscordServerAgeCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ServerAgeResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');

  const handleCalculate = () => {
    setError('');
    const decoded = decodeSnowflake(input);
    if (!decoded) {
      setError('Invalid Discord ID. Please enter a valid 17-20 digit Discord Server or User ID.');
      setResult(null);
      return;
    }
    setResult(decoded);
  };

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(''), 1500);
    });
  };

  const badge = result ? getMilestoneBadge(result.totalDays) : null;

  const EXAMPLES = [
    { label: 'Discord Official Server', id: '81384788765712384' },
    { label: 'r/Discord Community', id: '222078108977594368' },
  ];

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="bg-white rounded-2xl border border-[#E3E6F0] p-6 space-y-4 shadow-sm">
        <div className="space-y-1.5">
          <label htmlFor="server-id-input" className="text-xs font-bold text-[#2d3149] uppercase tracking-wider block">
            Discord Server ID (Snowflake)
          </label>
          <div className="flex gap-2">
            <input
              id="server-id-input"
              type="text"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
              placeholder="e.g. 81384788765712384"
              className={`flex-1 px-4 py-2.5 rounded-xl border text-sm font-mono text-[#0f111a] placeholder-gray-400 focus:outline-none focus:ring-2 ${
                error ? 'border-red-300 focus:ring-red-200/20' : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]/20'
              }`}
            />
            <button
              onClick={handleCalculate}
              className="px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm rounded-xl transition-colors shadow-md shadow-[#5865F2]/20 cursor-pointer shrink-0 flex items-center gap-2"
            >
              <Calendar size={15} /> Calculate Age
            </button>
          </div>
          {error && <p className="text-xs font-semibold text-red-500">{error}</p>}
        </div>

        {/* Example links */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b8fa8] self-center">Try example:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => { setInput(ex.id); setError(''); }}
              className="text-[11px] font-semibold text-[#5865F2] bg-[#F0F2FF] hover:bg-[#E8EBFF] border border-[#5865F2]/20 px-3 py-1 rounded-full transition-colors cursor-pointer"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {result && badge && (
        <div className="space-y-4 animate-in fade-in duration-300">
          {/* Milestone Badge */}
          <div className={`flex items-center gap-3 p-4 rounded-2xl border font-semibold text-sm ${badge.color}`}>
            <span className="text-2xl">{badge.emoji}</span>
            <span>{badge.label}</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white border border-[#E3E6F0] rounded-2xl p-4 text-center shadow-sm">
              <span className="text-3xl font-black text-[#5865F2] block">{result.ageYears}</span>
              <span className="text-xs font-bold text-[#5b6282] uppercase tracking-wider">Years</span>
            </div>
            <div className="bg-white border border-[#E3E6F0] rounded-2xl p-4 text-center shadow-sm">
              <span className="text-3xl font-black text-[#5865F2] block">{result.ageMonths}</span>
              <span className="text-xs font-bold text-[#5b6282] uppercase tracking-wider">Months</span>
            </div>
            <div className="bg-white border border-[#E3E6F0] rounded-2xl p-4 text-center shadow-sm col-span-2 sm:col-span-1">
              <span className="text-3xl font-black text-[#5865F2] block">{result.ageDays}</span>
              <span className="text-xs font-bold text-[#5b6282] uppercase tracking-wider">Days</span>
            </div>
          </div>

          {/* Detail Rows */}
          <div className="bg-white rounded-2xl border border-[#E3E6F0] shadow-sm overflow-hidden">
            {[
              { icon: <Calendar size={14} />, label: 'Server Created', value: result.createdAt.toUTCString() },
              { icon: <Clock size={14} />, label: 'Total Days Old', value: `${result.totalDays.toLocaleString()} days` },
              { icon: <Server size={14} />, label: 'Unix Timestamp', value: result.unixTimestamp.toString() },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4 px-5 py-3.5 border-b last:border-b-0 border-[#F0F2FF]">
                <div className="flex items-center gap-2 text-[#5b6282] shrink-0">
                  {icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-semibold text-[#1a1d2e] font-mono truncate">{value}</span>
                  <button
                    onClick={() => copy(value, label)}
                    className="shrink-0 text-[#5865F2] hover:text-[#4752C4] cursor-pointer transition-colors"
                    title={`Copy ${label}`}
                  >
                    {copied === label ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* How to get Server ID */}
          <div className="bg-[#F8F9FF] border border-[#5865F2]/10 rounded-2xl p-4 text-xs text-[#5b6282] leading-relaxed space-y-1">
            <p className="font-bold text-[#1a1d2e] text-sm">📋 How to get a Discord Server ID</p>
            <p>Enable <strong>Developer Mode</strong> in Discord: User Settings → Advanced → Developer Mode. Then right-click your server name in the sidebar and select <strong>Copy Server ID</strong>.</p>
          </div>
        </div>
      )}
    </div>
  );
}
