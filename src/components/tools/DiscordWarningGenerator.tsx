'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, RefreshCw, Trash2 } from 'lucide-react';

const WARNING_TEMPLATES = [
  {
    id: 'warn1',
    name: 'Friendly Reminder',
    template: `Hey {username}! Just a quick reminder to review our server rules and keep the community friendly!

If you have any questions, feel free to reach out to a staff member!`
  },
  {
    id: 'warn2',
    name: 'First Warning',
    template: `Hi {username},

This is your first warning for violating server rules.

Reason: {reason}

Please make sure to read and follow our server guidelines to avoid further action.`
  },
  {
    id: 'warn3',
    name: 'Second Warning',
    template: `Hi {username},

This is your second warning for violating server rules.

Reason: {reason}

Please note that repeated violations will result in a temporary or permanent ban.`
  },
  {
    id: 'warn4',
    name: 'Formal Warning',
    template: `Warning for {username}

Reason: {reason}

This is an official warning. Further violations will lead to disciplinary action, including timeouts or bans.`
  }
];

export default function DiscordWarningGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(WARNING_TEMPLATES[0]);
  const [username, setUsername] = useState('');
  const [reason, setReason] = useState('');
  const [copied, setCopied] = useState(false);

  const generateWarning = useCallback(() => {
    let message = selectedTemplate.template;
    message = message.replace(/{username}/g, username || 'user');
    message = message.replace(/{reason}/g, reason || 'violating server rules');
    return message;
  }, [selectedTemplate, username, reason]);

  const resetFields = useCallback(() => {
    setSelectedTemplate(WARNING_TEMPLATES[0]);
    setUsername('');
    setReason('');
  }, []);

  const handleCopy = useCallback(async () => {
    const text = generateWarning();
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
  }, [generateWarning]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1a1d2e]">Warning Templates</h2>
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
              {WARNING_TEMPLATES.map(template => (
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
            <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">Customize Warning</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. @User"
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#373b4d] block mb-1">Warning Reason</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. Spamming, off-topic messages, etc."
                  rows={3}
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
              {copied ? 'Copied!' : 'Copy Warning'}
            </button>
          </div>

          <div className="bg-[#1E1F22] p-6 rounded-2xl border border-[#2B2D31] shadow-lg h-[600px] overflow-auto">
            <pre className="text-[#DBDEE1] whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {generateWarning()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
