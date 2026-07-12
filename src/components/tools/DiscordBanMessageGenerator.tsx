'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, RefreshCw, Trash2 } from 'lucide-react';

const BAN_TEMPLATES = [
  {
    id: 'ban1',
    name: 'Standard Ban',
    template: `You have been banned from {server} for violating our rules.

Reason: {reason}
Appeal: {appeal}

This ban is permanent unless you appeal successfully.`
  },
  {
    id: 'ban2',
    name: 'Temporary Ban',
    template: `You have been temporarily banned from {server} for violating our rules.

Reason: {reason}
Duration: {duration}
Appeal: {appeal}

You will be unbanned automatically after {duration} if there are no further issues.`
  },
  {
    id: 'ban3',
    name: 'Harassment Ban',
    template: `You have been banned from {server} for harassment of other members.

Reason: {reason}

Harassment, hate speech, and targeted attacks are not tolerated in our community.`
  },
  {
    id: 'ban4',
    name: 'Spam Ban',
    template: `You have been banned from {server} for spamming.

Reason: {reason}

Excessive spamming, self-promotion, and mass messaging are not allowed.`
  }
];

export default function DiscordBanMessageGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(BAN_TEMPLATES[0]);
  const [serverName, setServerName] = useState('');
  const [reason, setReason] = useState('');
  const [appeal, setAppeal] = useState('');
  const [duration, setDuration] = useState('');
  const [copied, setCopied] = useState(false);

  const generateBanMessage = useCallback(() => {
    let message = selectedTemplate.template;
    message = message.replace(/{server}/g, serverName || 'our server');
    message = message.replace(/{reason}/g, reason || 'violating server rules');
    message = message.replace(/{appeal}/g, appeal || 'Please contact server staff to appeal');
    message = message.replace(/{duration}/g, duration || 'the specified duration');
    return message;
  }, [selectedTemplate, serverName, reason, appeal, duration]);

  const resetFields = useCallback(() => {
    setSelectedTemplate(BAN_TEMPLATES[0]);
    setServerName('');
    setReason('');
    setAppeal('');
    setDuration('');
  }, []);

  const handleCopy = useCallback(async () => {
    const text = generateBanMessage();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }, [generateBanMessage]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1a1d2e]">Ban Message Templates</h2>
            <button
              onClick={resetFields}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#5865F2] hover:text-[#4752C4] transition-colors"
            >
              <RefreshCw size={16} /> Reset
            </button>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">Select Template</h3>
            <div className="grid grid-cols-1 gap-2">
              {BAN_TEMPLATES.map(template => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    selectedTemplate.id === template.id
                      ? 'bg-[#F0F2FF] border-[#5865F2] text-[#5865F2]'
                      : 'bg-gray-50 border-[#E3E6F0] text-[#373b4d] hover:bg-gray-100'
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">Customize Message</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Server Name</label>
                <input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="e.g. Our Discord Server"
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Ban Reason</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. Repeatedly breaking rules, harassment, etc."
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Appeal Info</label>
                <input
                  type="text"
                  value={appeal}
                  onChange={(e) => setAppeal(e.target.value)}
                  placeholder="e.g. Please contact a moderator to appeal"
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Ban Duration (for temp bans)</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 1 week, 3 days, etc."
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1a1d2e]">Preview & Copy</h2>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-colors"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Message'}
            </button>
          </div>

          <div className="bg-[#1E1F22] p-6 rounded-2xl border border-[#2B2D31] shadow-lg h-[600px] overflow-auto">
            <pre className="text-[#DBDEE1] whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {generateBanMessage()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
