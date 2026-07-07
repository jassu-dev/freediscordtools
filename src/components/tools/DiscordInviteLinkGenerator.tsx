'use client';

import { useState } from 'react';

export default function DiscordInviteLinkGenerator() {
  const [inviteCode, setInviteCode] = useState('');
  const [expiration, setExpiration] = useState('0'); // 0 = never
  const [maxUses, setMaxUses] = useState('0'); // 0 = unlimited
  const [temporary, setTemporary] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateInviteLink = () => {
    // This is a frontend-only generator to show how invite links work
    // Real invite links require Discord API
    const baseUrl = 'https://discord.gg/';
    const fakeCode = inviteCode || Math.random().toString(36).substring(2, 8);
    return `${baseUrl}${fakeCode}`;
  };

  const copyToClipboard = () => {
    const link = generateInviteLink();
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1a1d2e]">Custom Invite Code (Optional)</label>
            <input
              type="text"
              placeholder="e.g., myserver"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1a1d2e]">Expiration</label>
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none bg-white"
            >
              <option value="0">Never</option>
              <option value="1800">30 Minutes</option>
              <option value="3600">1 Hour</option>
              <option value="21600">6 Hours</option>
              <option value="86400">1 Day</option>
              <option value="604800">7 Days</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1a1d2e]">Max Uses</label>
            <input
              type="number"
              min="0"
              placeholder="0 = Unlimited"
              value={maxUses}
              onChange={(e) => setMaxUses(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1a1d2e]">Options</label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={temporary}
                onChange={(e) => setTemporary(e.target.checked)}
                className="w-5 h-5 text-[#5865F2]"
              />
              <span className="text-[#5b6282]">Temporary Membership</span>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#1a1d2e]">Your Invite Link</h3>
          <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] flex justify-between items-center gap-3">
            <code className="text-[#5b6282] break-all">{generateInviteLink()}</code>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition flex-shrink-0"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="p-4 bg-[#FFF0F5] border-l-4 border-[#EB459E] rounded-r-xl text-sm text-[#373b4d]">
          <strong>Note:</strong> This is a preview tool. To create real Discord invite links, go to your server settings → Invites in the Discord app.
        </div>
      </div>
    </div>
  );
}
