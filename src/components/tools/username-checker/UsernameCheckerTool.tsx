'use client';

import { useState, useCallback } from 'react';

// Discord username rules (new format: username#0 era is over, new unique names)
const RESERVED_WORDS = new Set([
  'discord','everyone','here','admin','administrator','mod','moderator','system',
  'support','help','official','staff','discordapp','discordtag','nitro','safety',
  'trust','clyde','wumpus','bot','null','undefined','root','owner',
]);

const PROFANITY_PATTERNS = [/f.{0,2}ck/i, /sh.t/i, /[a@]ss/i, /b.tch/i, /n.{0,2}gg/i];

interface CheckResult {
  valid: boolean;
  score: number; // 0-100
  issues: string[];
  suggestions: string[];
  label: 'Available-style' | 'Taken-style' | 'Invalid';
  labelColor: string;
}

function analyzeUsername(raw: string): CheckResult {
  const issues: string[] = [];
  const suggestions: string[] = [];
  const username = raw.trim();

  if (!username) {
    return { valid: false, score: 0, issues: ['Enter a username to check.'], suggestions: [], label: 'Invalid', labelColor: 'text-gray-400' };
  }

  // Length check
  if (username.length < 2) issues.push('Username must be at least 2 characters.');
  if (username.length > 32) issues.push('Username must be 32 characters or fewer.');

  // Allowed characters: letters, numbers, underscores, periods
  if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
    issues.push('Only letters, numbers, underscores (_) and periods (.) are allowed.');
    suggestions.push(`Try: ${username.replace(/[^a-zA-Z0-9_.]/g, '_')}`);
  }

  // No double dots/underscores
  if (/\.\./.test(username)) issues.push('Cannot contain consecutive periods (..).');
  if (/__/.test(username)) issues.push('Cannot contain consecutive underscores (__).');

  // Must not start/end with period or underscore
  if (/^[._]/.test(username)) {
    issues.push('Cannot start with a period or underscore.');
    suggestions.push(`Try: ${username.replace(/^[._]+/, '')}`);
  }
  if (/[._]$/.test(username)) {
    issues.push('Cannot end with a period or underscore.');
    suggestions.push(`Try: ${username.replace(/[._]+$/, '')}`);
  }

  // Reserved words
  const lower = username.toLowerCase();
  if (RESERVED_WORDS.has(lower)) {
    issues.push(`"${username}" is a reserved word and cannot be used.`);
  }
  for (const pattern of PROFANITY_PATTERNS) {
    if (pattern.test(lower)) {
      issues.push('Username may violate Discord\'s community guidelines.');
      break;
    }
  }

  // Numeric-only
  if (/^\d+$/.test(username)) {
    issues.push('Usernames cannot be numbers only.');
    suggestions.push(`Try: user${username}`);
  }

  const isValid = issues.length === 0;

  // Availability heuristic score
  let score = 100;
  if (username.length <= 5) score -= 35; // Short = likely taken
  if (username.length <= 3) score -= 25;
  if (/^\d/.test(username)) score -= 5;
  if (/[._]/.test(username)) score += 10; // Special chars = more unique
  if (username.length >= 10) score += 15;
  if (username.length >= 15) score += 10;
  score = Math.min(95, Math.max(5, score));

  // Generate suggestions
  if (isValid && suggestions.length === 0) {
    suggestions.push(`${username}_${Math.floor(Math.random() * 99) + 1}`);
    suggestions.push(`${username}.${new Date().getFullYear()}`);
    suggestions.push(`the_real_${username}`);
  }

  const label = !isValid ? 'Invalid' : score > 55 ? 'Available-style' : 'Taken-style';
  const labelColor = !isValid ? 'text-red-500' : score > 55 ? 'text-green-500' : 'text-yellow-500';

  return { valid: isValid, score: isValid ? score : 0, issues, suggestions, label, labelColor };
}

export default function UsernameCheckerTool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<CheckResult | null>(null);

  const check = useCallback(() => {
    if (!input.trim()) return;
    setResult(analyzeUsername(input));
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') check();
  };

  const scoreColor = (s: number) => s > 70 ? 'bg-green-500' : s > 40 ? 'bg-yellow-400' : 'bg-red-500';

  return (
    <div className="bg-white rounded-2xl border border-[#E3E6F0] overflow-hidden">
      <div className="p-6 border-b border-[#E3E6F0] bg-[#F8F9FF]">
        <h2 className="text-lg font-bold text-[#1a1d2e] mb-1">Discord Username Checker</h2>
        <p className="text-sm text-[#5b6282]">Validate format, check Discord rules, and get an availability estimate.</p>
      </div>

      <div className="p-6">
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6282] text-sm font-mono select-none">@</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="yourusername"
              maxLength={32}
              className="w-full pl-8 pr-4 py-3 border border-[#E3E6F0] rounded-xl text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:border-transparent font-mono"
              aria-label="Discord username to check"
            />
          </div>
          <button
            onClick={check}
            disabled={!input.trim()}
            className="px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            Check
          </button>
        </div>

        {/* Character counter */}
        <p className="text-xs text-[#5b6282] mb-6 -mt-4 text-right">{input.length}/32 characters</p>

        {result && (
          <div className="space-y-5">
            {/* Status banner */}
            <div className={`flex items-center gap-4 p-4 rounded-xl border ${
              result.label === 'Available-style' ? 'bg-green-50 border-green-200' :
              result.label === 'Taken-style' ? 'bg-yellow-50 border-yellow-200' :
              'bg-red-50 border-red-200'
            }`}>
              <span className="text-3xl" role="img" aria-label={result.label}>
                {result.label === 'Available-style' ? '✅' : result.label === 'Taken-style' ? '⚠️' : '❌'}
              </span>
              <div>
                <p className={`font-bold text-lg ${result.labelColor}`}>{result.label}</p>
                <p className="text-sm text-[#5b6282]">
                  {result.label === 'Available-style' && 'Format is valid. This style of username is less commonly taken.'}
                  {result.label === 'Taken-style' && 'Format is valid but short/common usernames get taken quickly.'}
                  {result.label === 'Invalid' && 'This username violates Discord naming rules.'}
                </p>
              </div>
            </div>

            {/* Availability score bar */}
            {result.valid && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-[#1a1d2e]">Availability Score</span>
                  <span className="text-sm font-bold text-[#1a1d2e]">{result.score}/100</span>
                </div>
                <div className="w-full bg-[#E3E6F0] rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${scoreColor(result.score)}`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
                <p className="text-xs text-[#5b6282] mt-1">Based on length, uniqueness, and character patterns. Not a live lookup.</p>
              </div>
            )}

            {/* Issues */}
            {result.issues.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-[#1a1d2e] mb-2">Issues Found</h3>
                <ul className="space-y-1">
                  {result.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                      <span className="mt-0.5 shrink-0">✗</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggestions */}
            {result.suggestions.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-[#1a1d2e] mb-2">
                  {result.valid ? 'Alternative Suggestions' : 'Suggested Fixes'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setInput(s); setResult(analyzeUsername(s)); }}
                      className="px-3 py-1.5 bg-[#F0F2FF] text-[#5865F2] text-sm font-mono rounded-lg border border-[#5865F2]/20 hover:bg-[#5865F2] hover:text-white transition-all"
                    >
                      @{s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Rules recap */}
            <div className="bg-[#F8F9FF] rounded-xl p-4 border border-[#E3E6F0]">
              <h3 className="text-sm font-bold text-[#1a1d2e] mb-2">Discord Username Rules</h3>
              <ul className="space-y-1 text-sm text-[#5b6282]">
                {[
                  ['2–32 characters', result.valid || input.length >= 2 && input.length <= 32],
                  ['Letters, numbers, _ and . only', result.valid || /^[a-zA-Z0-9_.]*$/.test(input)],
                  ['No leading/trailing special chars', result.valid || /^[a-zA-Z0-9].*[a-zA-Z0-9]$/.test(input)],
                  ['No consecutive . or _', result.valid || (!/\.\./.test(input) && !/__/.test(input))],
                  ['Not a reserved word', result.valid || !RESERVED_WORDS.has(input.toLowerCase())],
                ].map(([rule, pass], i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={pass ? 'text-green-500' : 'text-red-400'}>
                      {pass ? '✓' : '✗'}
                    </span>
                    {rule as string}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
