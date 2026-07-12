'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, RefreshCw, Trash2, Plus } from 'lucide-react';

type AutomodRuleType = 'keyword' | 'mention_spam' | 'spam' | 'link_filter' | 'invite_filter';

type AutomodRule = {
  id: string;
  type: AutomodRuleType;
  name: string;
  enabled: boolean;
  config: Record<string, any>;
};

const DEFAULT_RULES: AutomodRule[] = [
  {
    id: 'rule1',
    type: 'keyword',
    name: 'Block Slurs & Offensive Language',
    enabled: true,
    config: {
      keywords: ['slur1', 'slur2', 'offensive1'],
      action: 'delete',
      warn: true
    }
  },
  {
    id: 'rule2',
    type: 'mention_spam',
    name: 'Limit Mass Mentions',
    enabled: true,
    config: {
      maxMentions: 5,
      action: 'timeout',
      duration: '10m'
    }
  },
  {
    id: 'rule3',
    type: 'invite_filter',
    name: 'Block Invite Links',
    enabled: false,
    config: {
      allowedServers: [],
      action: 'delete'
    }
  },
  {
    id: 'rule4',
    type: 'link_filter',
    name: 'Filter Malicious Links',
    enabled: false,
    config: {
      action: 'delete'
    }
  },
  {
    id: 'rule5',
    type: 'spam',
    name: 'Prevent Spam',
    enabled: true,
    config: {
      action: 'warn'
    }
  }
];

export default function DiscordAutomodRuleBuilder() {
  const [rules, setRules] = useState<AutomodRule[]>(DEFAULT_RULES);
  const [copied, setCopied] = useState(false);
  const [newRuleType, setNewRuleType] = useState<AutomodRuleType>('keyword');
  const [newRuleName, setNewRuleName] = useState('');

  const toggleRule = useCallback((id: string) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  }, []);

  const removeRule = useCallback((id: string) => {
    setRules(prev => prev.filter(r => r.id !== id));
  }, []);

  const addCustomRule = useCallback(() => {
    if (!newRuleName.trim()) return;
    const newRule: AutomodRule = {
      id: `custom-${Date.now()}`,
      type: newRuleType,
      name: newRuleName.trim(),
      enabled: true,
      config: {}
    };
    setRules(prev => [...prev, newRule]);
    setNewRuleName('');
  }, [newRuleName, newRuleType]);

  const resetRules = useCallback(() => {
    setRules(DEFAULT_RULES);
  }, []);

  const generateConfigText = useCallback(() => {
    let output = 'Discord Automod Configuration\n';
    output += '===========================\n\n';
    
    rules.filter(r => r.enabled).forEach((rule, i) => {
      output += `${i + 1}. ${rule.name} (${rule.type})\n`;
      output += '   Enabled: Yes\n';
      output += '   -------------------------\n';
    });

    if (rules.filter(r => r.enabled).length === 0) {
      output += 'No rules enabled. Enable some rules above!';
    }

    return output;
  }, [rules]);

  const handleCopy = useCallback(async () => {
    const text = generateConfigText();
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
  }, [generateConfigText]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1a1d2e]">Automod Rule Templates</h2>
            <button
              onClick={resetRules}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#5865F2] hover:text-[#4752C4] transition-colors"
            >
              <RefreshCw size={16} /> Reset
            </button>
          </div>

          {rules.map(rule => (
            <div key={rule.id} className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rule.enabled}
                    onChange={() => toggleRule(rule.id)}
                    className="mt-0.5 w-4 h-4 text-[#5865F2] rounded border-[#E3E6F0] focus:ring-[#5865F2]/20"
                  />
                  <div>
                    <h3 className="font-bold text-[#1a1d2e]">{rule.name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{rule.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeRule(rule.id)}
                  className="text-[#ED4245] hover:text-[#D83C3E] transition-colors p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">Add Custom Rule</h3>
            <div className="space-y-2">
              <select
                value={newRuleType}
                onChange={(e) => setNewRuleType(e.target.value as AutomodRuleType)}
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              >
                <option value="keyword">Keyword Filter</option>
                <option value="mention_spam">Mention Spam</option>
                <option value="spam">Spam Detection</option>
                <option value="link_filter">Link Filter</option>
                <option value="invite_filter">Invite Filter</option>
              </select>
              <input
                type="text"
                value={newRuleName}
                onChange={(e) => setNewRuleName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCustomRule()}
                placeholder="Rule name..."
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
              <button
                onClick={addCustomRule}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-colors"
              >
                <Plus size={16} /> Add Rule
              </button>
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
              {copied ? 'Copied!' : 'Copy Config'}
            </button>
          </div>

          <div className="bg-[#1E1F22] p-6 rounded-2xl border border-[#2B2D31] shadow-lg h-[600px] overflow-auto">
            <pre className="text-[#DBDEE1] whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {generateConfigText()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
