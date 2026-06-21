'use client';

import { useState, useMemo } from 'react';

interface StatusIdea {
  text: string;
  emoji: string;
  category: string;
}

const STATUS_IDEAS: StatusIdea[] = [
  // Gaming
  { emoji: '🎮', text: 'not dead, just respawning', category: 'Gaming' },
  { emoji: '🕹️', text: 'grinding for that rare drop', category: 'Gaming' },
  { emoji: '⚔️', text: 'git gud or go home', category: 'Gaming' },
  { emoji: '🏆', text: 'top 1 or nothing', category: 'Gaming' },
  { emoji: '🎯', text: 'headshots only, no exceptions', category: 'Gaming' },
  { emoji: '💀', text: 'skill issue honestly', category: 'Gaming' },
  { emoji: '🧠', text: 'big brain plays incoming', category: 'Gaming' },
  { emoji: '🃏', text: 'playing ranked until 4am', category: 'Gaming' },
  { emoji: '🔥', text: 'on a 20 game win streak', category: 'Gaming' },
  { emoji: '🥇', text: 'carrying the whole team again', category: 'Gaming' },
  // Aesthetic / Vibe
  { emoji: '🌙', text: 'midnight tea and sad music', category: 'Aesthetic' },
  { emoji: '🌧️', text: 'main character energy', category: 'Aesthetic' },
  { emoji: '🎵', text: 'music louder than thoughts', category: 'Aesthetic' },
  { emoji: '✨', text: 'soft hours only', category: 'Aesthetic' },
  { emoji: '🌸', text: 'blooming slowly but surely', category: 'Aesthetic' },
  { emoji: '🫧', text: 'floating through the void', category: 'Aesthetic' },
  { emoji: '🌊', text: 'lost in the sauce', category: 'Aesthetic' },
  { emoji: '🍵', text: 'tea and overthinking', category: 'Aesthetic' },
  { emoji: '📸', text: 'living in golden hour', category: 'Aesthetic' },
  { emoji: '🕯️', text: 'dark academia hours', category: 'Aesthetic' },
  // Coding / Dev
  { emoji: '👨‍💻', text: 'debugging since 2 AM', category: 'Coding' },
  { emoji: '☕', text: 'coffee → code → repeat', category: 'Coding' },
  { emoji: '🐛', text: 'it\'s a feature, not a bug', category: 'Coding' },
  { emoji: '🔧', text: 'in the zone, do not disturb', category: 'Coding' },
  { emoji: '📦', text: 'shipping at 3 AM', category: 'Coding' },
  { emoji: '💻', text: 'console.log("why won\'t this work")', category: 'Coding' },
  { emoji: '🤖', text: 'building something cool', category: 'Coding' },
  { emoji: '🧪', text: 'testing in production (again)', category: 'Coding' },
  { emoji: '🛠️', text: 'pushing hot fixes on a Friday', category: 'Coding' },
  { emoji: '⚙️', text: 'merge conflicts and suffering', category: 'Coding' },
  // Studying
  { emoji: '📚', text: 'exam in 8 hours, haven\'t started', category: 'Studying' },
  { emoji: '✏️', text: 'studying but mostly procrastinating', category: 'Studying' },
  { emoji: '🎓', text: 'fake it till I make it', category: 'Studying' },
  { emoji: '📝', text: 'notes app is my entire personality', category: 'Studying' },
  { emoji: '⏰', text: 'hyperfocus mode activated', category: 'Studying' },
  { emoji: '🤔', text: 'reading the same page for an hour', category: 'Studying' },
  { emoji: '📖', text: 'deep in a rabbit hole again', category: 'Studying' },
  { emoji: '🧃', text: 'brain juice running low', category: 'Studying' },
  // Funny / Relatable
  { emoji: '💤', text: 'not here, gone to nap island', category: 'Funny' },
  { emoji: '🦥', text: 'aggressively doing nothing', category: 'Funny' },
  { emoji: '🍕', text: 'consuming content and calories', category: 'Funny' },
  { emoji: '🤡', text: 'clowning as usual', category: 'Funny' },
  { emoji: '😴', text: 'technically awake', category: 'Funny' },
  { emoji: '🫠', text: 'melting gently into the couch', category: 'Funny' },
  { emoji: '🕳️', text: 'fell in a rabbit hole, send help', category: 'Funny' },
  { emoji: '🧃', text: 'running on spite and caffeine', category: 'Funny' },
  { emoji: '🛸', text: 'not here, left the planet', category: 'Funny' },
  { emoji: '🎭', text: 'pretending to have my life together', category: 'Funny' },
  // Motivational
  { emoji: '🚀', text: 'building the future one day at a time', category: 'Motivational' },
  { emoji: '💪', text: 'progress over perfection', category: 'Motivational' },
  { emoji: '🎯', text: 'focused on the goal', category: 'Motivational' },
  { emoji: '🌱', text: 'growing every single day', category: 'Motivational' },
  { emoji: '⚡', text: 'charging up for the next level', category: 'Motivational' },
  { emoji: '🔑', text: 'unlocking my potential', category: 'Motivational' },
  { emoji: '🏔️', text: 'the climb is worth it', category: 'Motivational' },
  { emoji: '🌅', text: 'new day, same hunger', category: 'Motivational' },
];

const CATEGORIES = ['All', ...Array.from(new Set(STATUS_IDEAS.map((s) => s.category)))];

// Emoji picker subset
const QUICK_EMOJIS = ['😊','🔥','💯','✨','🎮','🎵','💻','📚','🌙','☕','🎯','🏆','🌸','💜','⚡','🦋','🌊','🎭','🚀','🌟','😎','🤔','💤','🎲','🛸'];

export default function StatusGeneratorTool() {
  const [customText, setCustomText] = useState('');
  const [customEmoji, setCustomEmoji] = useState('✨');
  const [category, setCategory] = useState('All');
  const [copied, setCopied] = useState<string | null>(null);
  const [tab, setTab] = useState<'browse' | 'custom'>('browse');

  const filtered = useMemo(() =>
    category === 'All' ? STATUS_IDEAS : STATUS_IDEAS.filter((s) => s.category === category),
    [category]
  );

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const fullCustomStatus = `${customEmoji} ${customText}`.trim();
  const charCount = fullCustomStatus.length;
  const maxChars = 128;

  return (
    <div className="bg-white rounded-2xl border border-[#E3E6F0] overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#E3E6F0]">
        {(['browse', 'custom'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-4 text-sm font-bold capitalize transition-all ${
              tab === t
                ? 'bg-[#5865F2] text-white'
                : 'bg-[#F8F9FF] text-[#5b6282] hover:bg-[#E3E6F0]'
            }`}
          >
            {t === 'browse' ? '💡 Browse Ideas' : '✏️ Custom Builder'}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === 'browse' && (
          <>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    category === c
                      ? 'bg-[#5865F2] text-white'
                      : 'bg-[#F0F2FF] text-[#5865F2] hover:bg-[#5865F2] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Status grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filtered.map((s, i) => {
                const full = `${s.emoji} ${s.text}`;
                const id = `browse-${i}`;
                return (
                  <button
                    key={i}
                    onClick={() => copy(full, id)}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[#E3E6F0] hover:border-[#5865F2] hover:bg-[#F0F2FF] transition-all text-left group"
                    aria-label={`Copy status: ${full}`}
                  >
                    <span className="text-2xl shrink-0" role="img" aria-hidden="true">{s.emoji}</span>
                    <span className="flex-1 text-sm text-[#1a1d2e] leading-snug">{s.text}</span>
                    <span className={`text-xs font-bold shrink-0 transition-all ${
                      copied === id ? 'text-green-500' : 'text-[#5865F2] opacity-0 group-hover:opacity-100'
                    }`}>
                      {copied === id ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {tab === 'custom' && (
          <div className="space-y-6">
            {/* Emoji picker */}
            <div>
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Choose Emoji</label>
              <div className="flex flex-wrap gap-2">
                {QUICK_EMOJIS.map((e) => (
                  <button
                    key={e}
                    onClick={() => setCustomEmoji(e)}
                    className={`w-10 h-10 rounded-lg text-xl transition-all ${
                      customEmoji === e
                        ? 'bg-[#5865F2] ring-2 ring-[#5865F2] ring-offset-1'
                        : 'bg-[#F8F9FF] hover:bg-[#E3E6F0] border border-[#E3E6F0]'
                    }`}
                    aria-label={`Select emoji ${e}`}
                  >
                    {e}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={customEmoji}
                onChange={(e) => setCustomEmoji(e.target.value.slice(0, 2))}
                placeholder="or type any emoji"
                className="mt-3 w-32 px-3 py-2 border border-[#E3E6F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5865F2] text-center"
                aria-label="Custom emoji input"
              />
            </div>

            {/* Status text */}
            <div>
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Status Text</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value.slice(0, maxChars))}
                placeholder="What are you up to?"
                className="w-full px-4 py-3 border border-[#E3E6F0] rounded-xl text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
                aria-label="Custom status text"
              />
              <div className="flex justify-between mt-1">
                <span className={`text-xs ${charCount > maxChars * 0.9 ? 'text-orange-500' : 'text-[#5b6282]'}`}>
                  {charCount}/{maxChars} characters
                </span>
                {charCount > maxChars && (
                  <span className="text-xs text-red-500">Too long for Discord status</span>
                )}
              </div>
            </div>

            {/* Live Preview */}
            <div>
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Preview</label>
              <div className="bg-[#36393f] rounded-xl p-4 flex items-center gap-3 min-h-[60px]">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold text-lg">
                    U
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#23A559] rounded-full border-2 border-[#36393f]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">YourUsername</p>
                  <p className="text-[#dcddde] text-xs mt-0.5">
                    {fullCustomStatus || <span className="opacity-40 italic">Your status will appear here</span>}
                  </p>
                </div>
              </div>
            </div>

            {/* Copy button */}
            <button
              onClick={() => copy(fullCustomStatus, 'custom')}
              disabled={!customText.trim()}
              className="w-full py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied === 'custom' ? '✓ Copied to Clipboard!' : 'Copy Custom Status'}
            </button>

            {/* Tips */}
            <div className="bg-[#F8F9FF] rounded-xl p-4 border border-[#E3E6F0] text-sm text-[#5b6282] space-y-1">
              <p className="font-bold text-[#1a1d2e] mb-2">Discord Status Tips</p>
              <p>• Max 128 characters for custom status text.</p>
              <p>• Emoji at the start makes your status more eye-catching.</p>
              <p>• Set your status in User Settings → Custom Status.</p>
              <p>• Status clears automatically if you set an expiry time in Discord.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
