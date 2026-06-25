'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, RefreshCw, Trash2 } from 'lucide-react';

const TEMPLATE_CATEGORIES = [
  {
    name: 'General Community',
    rules: [
      { id: 'g1', text: 'Be respectful and civil to all members. No harassment, hate speech, or discrimination of any kind.', checked: true },
      { id: 'g2', text: 'No spamming, flooding, or excessive self-promotion. Keep conversations relevant to the channel.', checked: true },
      { id: 'g3', text: 'No NSFW or inappropriate content, including but not limited to explicit images, links, or discussions.', checked: true },
      { id: 'g4', text: 'No sharing of personal information (doxing) without explicit consent from the individual involved.', checked: true },
      { id: 'g5', text: 'Follow Discord\'s Terms of Service and Community Guidelines at all times.', checked: true },
      { id: 'g6', text: 'Use appropriate channels for discussions. Off-topic conversations belong in off-topic channels.', checked: false },
      { id: 'g7', text: 'No excessive tagging or pinging of members, especially @everyone/@here without permission.', checked: false },
      { id: 'g8', text: 'English only in public channels unless otherwise specified.', checked: false },
    ]
  },
  {
    name: 'Gaming Servers',
    rules: [
      { id: 'game1', text: 'No cheating, hacking, or exploiting in any games. This will result in an immediate ban.', checked: true },
      { id: 'game2', text: 'No toxicity, flaming, or griefing other players. Keep the gaming experience fun for everyone.', checked: true },
      { id: 'game3', text: 'Respect team members and follow team leaders\' instructions during organized matches.', checked: false },
      { id: 'game4', text: 'No spoiling game endings or major plot points without spoiler tags.', checked: true },
      { id: 'game5', text: 'Only use verified game links and downloads. No pirated software or cracks.', checked: false },
      { id: 'game6', text: 'Follow game-specific rules in dedicated channels.', checked: true },
    ]
  },
  {
    name: 'Art & Design',
    rules: [
      { id: 'art1', text: 'Always credit the original artist when sharing artwork that isn\'t yours.', checked: true },
      { id: 'art2', text: 'No art theft or tracing without explicit permission from the creator.', checked: true },
      { id: 'art3', text: 'Mark NSFW artwork appropriately and keep it in designated channels only.', checked: true },
      { id: 'art4', text: 'Constructive criticism is welcome, but avoid mean-spirited or unhelpful comments.', checked: false },
    ]
  },
  {
    name: 'Technology & Coding',
    rules: [
      { id: 'tech1', text: 'No sharing of pirated software, cracks, or serial keys.', checked: true },
      { id: 'tech2', text: 'Ask clear, specific questions when seeking help with code.', checked: false },
      { id: 'tech3', text: 'Use code blocks when sharing code snippets to keep conversations readable.', checked: false },
      { id: 'tech4', text: 'No malicious links, malware, or phishing attempts of any kind.', checked: true },
    ]
  },
  {
    name: 'Moderation',
    rules: [
      { id: 'mod1', text: 'Follow the instructions of moderators and staff members without argument.', checked: true },
      { id: 'mod2', text: 'If you have a dispute with a moderator, contact the server owner or admin privately.', checked: false },
      { id: 'mod3', text: 'Do not DM staff members without permission unless it\'s an emergency.', checked: false },
      { id: 'mod4', text: 'Moderators reserve the right to remove content or warn/ban members at their discretion.', checked: false },
    ]
  }
];

export default function DiscordRulesGenerator() {
  const [selectedRules, setSelectedRules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    TEMPLATE_CATEGORIES.forEach(cat => {
      cat.rules.forEach(rule => {
        initial[rule.id] = rule.checked;
      });
    });
    return initial;
  });
  
  const [customRules, setCustomRules] = useState<string[]>([]);
  const [newCustomRule, setNewCustomRule] = useState('');
  const [copied, setCopied] = useState(false);
  
  const toggleRule = useCallback((ruleId: string) => {
    setSelectedRules(prev => ({
      ...prev,
      [ruleId]: !prev[ruleId]
    }));
  }, []);
  
  const addCustomRule = useCallback(() => {
    if (newCustomRule.trim()) {
      setCustomRules(prev => [...prev, newCustomRule.trim()]);
      setNewCustomRule('');
    }
  }, [newCustomRule]);
  
  const removeCustomRule = useCallback((index: number) => {
    setCustomRules(prev => prev.filter((_, i) => i !== index));
  }, []);
  
  const resetRules = useCallback(() => {
    const initial: Record<string, boolean> = {};
    TEMPLATE_CATEGORIES.forEach(cat => {
      cat.rules.forEach(rule => {
        initial[rule.id] = rule.checked;
      });
    });
    setSelectedRules(initial);
    setCustomRules([]);
  }, []);
  
  const generateRulesText = useCallback(() => {
    const activeRules = TEMPLATE_CATEGORIES.flatMap(cat => 
      cat.rules.filter(rule => selectedRules[rule.id]).map(rule => rule.text)
    ).concat(customRules);
    
    if (activeRules.length === 0) {
      return 'Please select at least one rule or add a custom rule.';
    }
    
    return activeRules.map((rule, i) => `${i + 1}. ${rule}`).join('\n\n');
  }, [selectedRules, customRules]);
  
  const handleCopy = useCallback(async () => {
    const text = generateRulesText();
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
  }, [generateRulesText]);
  
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1a1d2e]">Rule Templates</h2>
            <button
              onClick={resetRules}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#5865F2] hover:text-[#4752C4] transition-colors"
            >
              <RefreshCw size={16} /> Reset
            </button>
          </div>
          
          {TEMPLATE_CATEGORIES.map(category => (
            <div key={category.name} className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
              <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">{category.name}</h3>
              <div className="space-y-2">
                {category.rules.map(rule => (
                  <label key={rule.id} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedRules[rule.id]}
                      onChange={() => toggleRule(rule.id)}
                      className="mt-1 w-4 h-4 text-[#5865F2] rounded border-[#E3E6F0] focus:ring-[#5865F2]/20"
                    />
                    <span className="text-sm text-[#373b4d] group-hover:text-[#1a1d2e] transition-colors">{rule.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-white p-5 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a1d2e] text-sm uppercase tracking-wider">Custom Rules</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCustomRule}
                onChange={(e) => setNewCustomRule(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCustomRule()}
                placeholder="Add your own custom rule..."
                className="flex-1 px-4 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
              <button
                onClick={addCustomRule}
                className="px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-colors"
              >
                Add
              </button>
            </div>
            
            {customRules.length > 0 && (
              <div className="space-y-2 pt-3 border-t border-[#E3E6F0]">
                {customRules.map((rule, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-[#373b4d] bg-gray-50 px-3 py-2 rounded-lg">
                    <span className="flex-1">{rule}</span>
                    <button
                      onClick={() => removeCustomRule(index)}
                      className="text-[#ED4245] hover:text-[#D83C3E] transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
              {copied ? 'Copied!' : 'Copy Rules'}
            </button>
          </div>
          
          <div className="bg-[#1E1F22] p-6 rounded-2xl border border-[#2B2D31] shadow-lg h-[600px] overflow-auto">
            <pre className="text-[#DBDEE1] whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {generateRulesText()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
