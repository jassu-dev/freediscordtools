'use client';

import { useState, useMemo } from 'react';

interface StatusIdea {
  text: string;
  emoji: string;
  category: string;
}

const STATUS_IDEAS: StatusIdea[] = [
  // ── Gaming ──────────────────────────────────────────────
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
  { emoji: '🎲', text: 'one more game I promise', category: 'Gaming' },
  { emoji: '🗡️', text: 'solo queue suffering hours', category: 'Gaming' },
  { emoji: '👾', text: 'fighting the final boss of life', category: 'Gaming' },
  { emoji: '🏅', text: 'unranked to diamond speedrun', category: 'Gaming' },
  { emoji: '🎰', text: 'RNG not on my side today', category: 'Gaming' },
  { emoji: '💣', text: 'last to die wins', category: 'Gaming' },
  { emoji: '🧩', text: 'speedrunning my problems', category: 'Gaming' },
  { emoji: '⚡', text: 'server is my home, skill is my language', category: 'Gaming' },
  { emoji: '🕹️', text: 'no cap I just hit global', category: 'Gaming' },
  { emoji: '🎮', text: 'do not tilt, just reload', category: 'Gaming' },
  { emoji: '🛡️', text: 'building my own meta', category: 'Gaming' },
  { emoji: '🐉', text: 'dragon slayer mode activated', category: 'Gaming' },
  { emoji: '🔫', text: 'certified third-party enjoyer', category: 'Gaming' },
  { emoji: '🌀', text: 'rotating mid, trust the process', category: 'Gaming' },
  { emoji: '🥷', text: 'stealthy, patient, lethal', category: 'Gaming' },

  // ── Aesthetic / Vibe ─────────────────────────────────────
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
  { emoji: '🌿', text: 'quietly growing in the background', category: 'Aesthetic' },
  { emoji: '🦋', text: 'in my transformation era', category: 'Aesthetic' },
  { emoji: '🌫️', text: 'foggy brain, clear heart', category: 'Aesthetic' },
  { emoji: '🪐', text: 'orbiting somewhere far away', category: 'Aesthetic' },
  { emoji: '🌒', text: 'only alive at night', category: 'Aesthetic' },
  { emoji: '🎞️', text: 'living life like a film still', category: 'Aesthetic' },
  { emoji: '🍂', text: 'cozy season, do not disturb', category: 'Aesthetic' },
  { emoji: '🫀', text: 'heartbeats and headphones', category: 'Aesthetic' },
  { emoji: '🌺', text: 'soft like a sunday morning', category: 'Aesthetic' },
  { emoji: '🌌', text: 'stardust with anxiety', category: 'Aesthetic' },
  { emoji: '🎐', text: 'drifting with the wind', category: 'Aesthetic' },
  { emoji: '🌷', text: 'healing is not linear', category: 'Aesthetic' },
  { emoji: '🫐', text: 'blueberry weather and blankets', category: 'Aesthetic' },
  { emoji: '🕊️', text: 'at peace with the chaos', category: 'Aesthetic' },
  { emoji: '📻', text: 'lo-fi brain, hi-fi dreams', category: 'Aesthetic' },

  // ── Coding / Dev ─────────────────────────────────────────
  { emoji: '👨‍💻', text: 'debugging since 2 AM', category: 'Coding' },
  { emoji: '☕', text: 'coffee → code → repeat', category: 'Coding' },
  { emoji: '🐛', text: "it's a feature, not a bug", category: 'Coding' },
  { emoji: '🔧', text: 'in the zone, do not disturb', category: 'Coding' },
  { emoji: '📦', text: 'shipping at 3 AM', category: 'Coding' },
  { emoji: '💻', text: 'console.log("why won\'t this work")', category: 'Coding' },
  { emoji: '🤖', text: 'building something cool', category: 'Coding' },
  { emoji: '🧪', text: 'testing in production (again)', category: 'Coding' },
  { emoji: '🛠️', text: 'pushing hot fixes on a Friday', category: 'Coding' },
  { emoji: '⚙️', text: 'merge conflicts and suffering', category: 'Coding' },
  { emoji: '🧵', text: 'async/await my entire life', category: 'Coding' },
  { emoji: '🔀', text: 'git push --force (oops)', category: 'Coding' },
  { emoji: '📡', text: '99% uptime, 100% stressed', category: 'Coding' },
  { emoji: '🔒', text: 'securing the bag (and the API)', category: 'Coding' },
  { emoji: '🗂️', text: 'refactoring code I wrote yesterday', category: 'Coding' },
  { emoji: '📊', text: 'O(n²) and in denial about it', category: 'Coding' },
  { emoji: '🧬', text: 'leetcoding for my life', category: 'Coding' },
  { emoji: '🌐', text: 'the internet is my domain', category: 'Coding' },
  { emoji: '🛰️', text: 'in deployment orbit', category: 'Coding' },
  { emoji: '💾', text: 'saving progress, please wait', category: 'Coding' },
  { emoji: '🔍', text: 'Stack Overflow tab #47 open', category: 'Coding' },
  { emoji: '🏗️', text: 'architecting my masterpiece', category: 'Coding' },
  { emoji: '🎛️', text: 'turning knobs until it works', category: 'Coding' },
  { emoji: '💡', text: 'idea just hit, brb coding', category: 'Coding' },
  { emoji: '🚧', text: 'under construction, permanently', category: 'Coding' },

  // ── Studying ─────────────────────────────────────────────
  { emoji: '📚', text: "exam in 8 hours, haven't started", category: 'Studying' },
  { emoji: '✏️', text: 'studying but mostly procrastinating', category: 'Studying' },
  { emoji: '🎓', text: 'fake it till I make it', category: 'Studying' },
  { emoji: '📝', text: 'notes app is my entire personality', category: 'Studying' },
  { emoji: '⏰', text: 'hyperfocus mode activated', category: 'Studying' },
  { emoji: '🤔', text: 'reading the same page for an hour', category: 'Studying' },
  { emoji: '📖', text: 'deep in a rabbit hole again', category: 'Studying' },
  { emoji: '🧃', text: 'brain juice running low', category: 'Studying' },
  { emoji: '🖊️', text: 'color-coding my entire semester', category: 'Studying' },
  { emoji: '📐', text: 'math is just organized suffering', category: 'Studying' },
  { emoji: '🗒️', text: 'third draft of my third outline', category: 'Studying' },
  { emoji: '🔬', text: 'lab report mode: activated', category: 'Studying' },
  { emoji: '📉', text: 'GPA in freefall, vibes intact', category: 'Studying' },
  { emoji: '🏫', text: 'physically present, mentally absent', category: 'Studying' },
  { emoji: '💭', text: 'manifesting an A+ right now', category: 'Studying' },
  { emoji: '🛌', text: 'resting my eyes before the all-nighter', category: 'Studying' },
  { emoji: '📌', text: 'everything is due tomorrow', category: 'Studying' },
  { emoji: '🧮', text: 'calculating exactly how little I can do', category: 'Studying' },
  { emoji: '🫡', text: 'in academic soldier mode', category: 'Studying' },
  { emoji: '🔭', text: 'exploring knowledge, avoiding deadlines', category: 'Studying' },

  // ── Funny / Relatable ────────────────────────────────────
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
  { emoji: '🦆', text: 'unbothered, moisturized, thriving', category: 'Funny' },
  { emoji: '🥱', text: 'chronically online and tired about it', category: 'Funny' },
  { emoji: '🫃', text: 'carrying everyone else\'s problems', category: 'Funny' },
  { emoji: '🧸', text: 'having a soft launch of my breakdown', category: 'Funny' },
  { emoji: '🐌', text: 'moving at my own pace (very slow)', category: 'Funny' },
  { emoji: '🥸', text: 'incognito mode: on', category: 'Funny' },
  { emoji: '🎪', text: 'welcoming you to my circus', category: 'Funny' },
  { emoji: '🍜', text: 'eating noodles and reconsidering life', category: 'Funny' },
  { emoji: '📵', text: 'offline in spirit', category: 'Funny' },
  { emoji: '🫣', text: 'watching from a safe distance', category: 'Funny' },
  { emoji: '🧇', text: 'waffle mode: indecisive and warm', category: 'Funny' },
  { emoji: '🪤', text: 'walked right into that one', category: 'Funny' },
  { emoji: '🤹', text: 'juggling three things badly', category: 'Funny' },
  { emoji: '🪞', text: 'checked the mirror, still confused', category: 'Funny' },
  { emoji: '🧻', text: 'unravelling but make it cute', category: 'Funny' },

  // ── Motivational ─────────────────────────────────────────
  { emoji: '🚀', text: 'building the future one day at a time', category: 'Motivational' },
  { emoji: '💪', text: 'progress over perfection', category: 'Motivational' },
  { emoji: '🎯', text: 'focused on the goal', category: 'Motivational' },
  { emoji: '🌱', text: 'growing every single day', category: 'Motivational' },
  { emoji: '⚡', text: 'charging up for the next level', category: 'Motivational' },
  { emoji: '🔑', text: 'unlocking my potential', category: 'Motivational' },
  { emoji: '🏔️', text: 'the climb is worth it', category: 'Motivational' },
  { emoji: '🌅', text: 'new day, same hunger', category: 'Motivational' },
  { emoji: '🏋️', text: 'discipline over motivation', category: 'Motivational' },
  { emoji: '🌍', text: 'building something bigger than myself', category: 'Motivational' },
  { emoji: '💎', text: 'pressure makes diamonds', category: 'Motivational' },
  { emoji: '🛤️', text: 'one step ahead of yesterday', category: 'Motivational' },
  { emoji: '🌟', text: 'your ceiling is my starting point', category: 'Motivational' },
  { emoji: '🔓', text: 'breaking my own limits', category: 'Motivational' },
  { emoji: '🪄', text: 'the magic was in me all along', category: 'Motivational' },
  { emoji: '🧭', text: 'aligned with my purpose', category: 'Motivational' },
  { emoji: '🏄', text: 'riding the wave, not fighting it', category: 'Motivational' },
  { emoji: '🫶', text: 'betting on myself every time', category: 'Motivational' },
  { emoji: '🌠', text: 'shooting for the stars, landing on clouds', category: 'Motivational' },
  { emoji: '🦅', text: 'elevation requires separation', category: 'Motivational' },

  // ── Music / Creative ─────────────────────────────────────
  { emoji: '🎸', text: 'strumming through the feels', category: 'Music' },
  { emoji: '🎹', text: 'keys and chaos', category: 'Music' },
  { emoji: '🎧', text: 'headphones in, world out', category: 'Music' },
  { emoji: '🎤', text: 'main vocalist arc unlocked', category: 'Music' },
  { emoji: '🥁', text: 'beating to my own drum', category: 'Music' },
  { emoji: '🎼', text: 'composing my next era', category: 'Music' },
  { emoji: '🎷', text: 'smooth operator, bad decisions', category: 'Music' },
  { emoji: '🎻', text: 'playing the world\'s smallest violin', category: 'Music' },
  { emoji: '🔊', text: 'volume at 100, no thoughts', category: 'Music' },
  { emoji: '🎵', text: 'on shuffle, like my emotions', category: 'Music' },
  { emoji: '🎙️', text: 'voice memo about my existential dread', category: 'Music' },
  { emoji: '🎶', text: 'if this song doesn\'t fix me, nothing will', category: 'Music' },
  { emoji: '🪗', text: 'bringing the accordion energy', category: 'Music' },
  { emoji: '🪘', text: 'vibes only, no lyrics needed', category: 'Music' },
  { emoji: '📻', text: 'tuned into a different frequency', category: 'Music' },

  // ── Food & Comfort ───────────────────────────────────────
  { emoji: '☕', text: 'powered by caffeine and delusion', category: 'Food' },
  { emoji: '🍵', text: 'herbal tea and bad decisions', category: 'Food' },
  { emoji: '🍜', text: 'instant ramen is a love language', category: 'Food' },
  { emoji: '🧋', text: 'bubble tea fixed my problems temporarily', category: 'Food' },
  { emoji: '🍪', text: 'stress-baking season is upon us', category: 'Food' },
  { emoji: '🍫', text: 'chocolate and emotional damage', category: 'Food' },
  { emoji: '🥞', text: 'pancake stack, big dreams', category: 'Food' },
  { emoji: '🍦', text: 'ice cream solves most things', category: 'Food' },
  { emoji: '🍝', text: 'carb-loading for the long week ahead', category: 'Food' },
  { emoji: '🥐', text: 'croissant in hand, chaos in heart', category: 'Food' },
  { emoji: '🍣', text: 'sushi mood, ramen budget', category: 'Food' },
  { emoji: '🧃', text: 'juice box and quiet time', category: 'Food' },
  { emoji: '🥤', text: 'hydrated and still not okay', category: 'Food' },
  { emoji: '🍵', text: 'matcha latte and main character thoughts', category: 'Food' },
  { emoji: '🫖', text: 'steep, sip, repeat', category: 'Food' },

  // ── Anime / Weeb ─────────────────────────────────────────
  { emoji: '⛩️', text: 'on my training arc rn', category: 'Anime' },
  { emoji: '🌸', text: 'healing like a shonen protagonist', category: 'Anime' },
  { emoji: '👁️', text: 'sharingan mode: activated', category: 'Anime' },
  { emoji: '🌀', text: 'believe it.', category: 'Anime' },
  { emoji: '⚡', text: 'plus ultra energy only', category: 'Anime' },
  { emoji: '🗡️', text: 'breathing like a demon slayer', category: 'Anime' },
  { emoji: '🐉', text: 'dragon form unlocked', category: 'Anime' },
  { emoji: '📓', text: 'writing names in the notebook (kidding)', category: 'Anime' },
  { emoji: '🍥', text: 'ramen and regrets', category: 'Anime' },
  { emoji: '🌙', text: 'sailor moon transformation pending', category: 'Anime' },
  { emoji: '🎌', text: 'peak fiction arc ongoing', category: 'Anime' },
  { emoji: '🦊', text: 'fox spirit energy', category: 'Anime' },
  { emoji: '💢', text: 'one more episode then sleep (6 hours later)', category: 'Anime' },
  { emoji: '🫧', text: 'isekai me out of this situation', category: 'Anime' },
  { emoji: '🌊', text: 'going beyond with a smile', category: 'Anime' },

  // ── Relationships / Social ───────────────────────────────
  { emoji: '💌', text: 'waiting on read receipts', category: 'Social' },
  { emoji: '🤝', text: 'in my villain-to-bestie pipeline', category: 'Social' },
  { emoji: '💬', text: 'typing... then deleting everything', category: 'Social' },
  { emoji: '🫂', text: 'giving everyone grace today', category: 'Social' },
  { emoji: '🙃', text: 'certified gaslit, gatekept, girl-bossed', category: 'Social' },
  { emoji: '💔', text: 'blocking and unblocking is my cardio', category: 'Social' },
  { emoji: '👀', text: 'lurking but make it cute', category: 'Social' },
  { emoji: '🫶', text: 'spreading love and chaos equally', category: 'Social' },
  { emoji: '📱', text: 'left on read is a personality type', category: 'Social' },
  { emoji: '🥹', text: 'my friends carry me in life AND ranked', category: 'Social' },
  { emoji: '🫡', text: 'loyal to the server, chaotic in DMs', category: 'Social' },
  { emoji: '🎭', text: 'performing normalcy', category: 'Social' },
  { emoji: '🤫', text: 'i know things but i say nothing', category: 'Social' },
  { emoji: '🛤️', text: 'walking away from negativity slowly', category: 'Social' },
  { emoji: '🌻', text: 'always turning toward the good', category: 'Social' },

  // ── Late Night Vibes ─────────────────────────────────────
  { emoji: '🌃', text: 'city lights and 3am thoughts', category: 'Late Night' },
  { emoji: '🌙', text: 'nocturnal and thriving', category: 'Late Night' },
  { emoji: '🕛', text: 'why is midnight my most productive hour', category: 'Late Night' },
  { emoji: '🌌', text: '4am: the cursed hour, I live here', category: 'Late Night' },
  { emoji: '😶‍🌫️', text: 'somewhere between tired and delusional', category: 'Late Night' },
  { emoji: '🦉', text: 'owl hours, no regrets', category: 'Late Night' },
  { emoji: '🕯️', text: 'candle lit, world quiet', category: 'Late Night' },
  { emoji: '🌙', text: 'the night shift of my own brain', category: 'Late Night' },
  { emoji: '🪐', text: 'planetarium thoughts at 2am', category: 'Late Night' },
  { emoji: '☁️', text: 'floating in the space between days', category: 'Late Night' },
  { emoji: '🫧', text: 'bubble bath thoughts, late night clarity', category: 'Late Night' },
  { emoji: '🎧', text: 'playlist is carrying me to sunrise', category: 'Late Night' },
  { emoji: '💭', text: 'thinking about everything, doing nothing', category: 'Late Night' },
  { emoji: '🌠', text: 'counting stars because I should be asleep', category: 'Late Night' },
  { emoji: '🌒', text: 'crescent moon club member', category: 'Late Night' },

  // ── Mental Health / Healing ──────────────────────────────
  { emoji: '🌱', text: 'healing at my own pace', category: 'Healing' },
  { emoji: '🫁', text: 'breathing through it', category: 'Healing' },
  { emoji: '💆', text: 'recharging my social battery', category: 'Healing' },
  { emoji: '🧘', text: 'choosing peace today', category: 'Healing' },
  { emoji: '🌊', text: 'riding the wave, not drowning in it', category: 'Healing' },
  { emoji: '🕊️', text: 'releasing what I cannot control', category: 'Healing' },
  { emoji: '🌸', text: 'soft reset in progress', category: 'Healing' },
  { emoji: '🌤️', text: 'mostly cloudy with a chance of okay', category: 'Healing' },
  { emoji: '🫶', text: 'being gentle with myself today', category: 'Healing' },
  { emoji: '🧩', text: 'figuring out the pieces slowly', category: 'Healing' },
  { emoji: '🌿', text: 'touching grass and resetting', category: 'Healing' },
  { emoji: '🛁', text: 'bath time is self-care time', category: 'Healing' },
  { emoji: '📔', text: 'journaling my way out of it', category: 'Healing' },
  { emoji: '🫂', text: 'low battery, please approach with snacks', category: 'Healing' },
  { emoji: '🌺', text: 'not perfect, but still growing', category: 'Healing' },
];

const CATEGORIES = ['All', 'Gaming', 'Aesthetic', 'Coding', 'Studying', 'Funny', 'Motivational', 'Music', 'Food', 'Anime', 'Social', 'Late Night', 'Healing'];

const QUICK_EMOJIS = ['😊','🔥','💯','✨','🎮','🎵','💻','📚','🌙','☕','🎯','🏆','🌸','💜','⚡','🦋','🌊','🎭','🚀','🌟','😎','🤔','💤','🎲','🛸','🍵','🎧','🌿','🫶','🥹','🧃','🌌','🎸','⛩️','💌'];

export default function StatusGeneratorTool() {
  const [customText, setCustomText] = useState('');
  const [customEmoji, setCustomEmoji] = useState('✨');
  const [category, setCategory] = useState('All');
  const [copied, setCopied] = useState<string | null>(null);
  const [tab, setTab] = useState<'browse' | 'custom'>('browse');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = category === 'All' ? STATUS_IDEAS : STATUS_IDEAS.filter((s) => s.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((s) => s.text.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    }
    return list;
  }, [category, search]);

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
              tab === t ? 'bg-[#5865F2] text-white' : 'bg-[#F8F9FF] text-[#5b6282] hover:bg-[#E3E6F0]'
            }`}
          >
            {t === 'browse' ? `💡 Browse Ideas (${STATUS_IDEAS.length}+)` : '✏️ Custom Builder'}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === 'browse' && (
          <>
            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search statuses..."
              className="w-full px-4 py-2.5 border border-[#E3E6F0] rounded-xl text-sm text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2] mb-4"
              aria-label="Search statuses"
            />

            {/* Category filter scrollable row */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    category === c
                      ? 'bg-[#5865F2] text-white'
                      : 'bg-[#F0F2FF] text-[#5865F2] hover:bg-[#5865F2] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="text-xs text-[#5b6282] mb-4">{filtered.length} statuses</p>

            {/* Status grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
              {filtered.map((s, i) => {
                const full = `${s.emoji} ${s.text}`;
                const id = `browse-${i}-${s.text}`;
                return (
                  <button
                    key={id}
                    onClick={() => copy(full, id)}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[#E3E6F0] hover:border-[#5865F2] hover:bg-[#F0F2FF] transition-all text-left group"
                    aria-label={`Copy: ${full}`}
                  >
                    <span className="text-2xl shrink-0" role="img" aria-hidden="true">{s.emoji}</span>
                    <span className="flex-1 text-sm text-[#1a1d2e] leading-snug">{s.text}</span>
                    <span className={`text-xs font-bold shrink-0 transition-all min-w-[40px] text-right ${
                      copied === id ? 'text-green-500' : 'text-[#5865F2] opacity-0 group-hover:opacity-100'
                    }`}>
                      {copied === id ? '✓' : 'Copy'}
                    </span>
                  </button>
                );
              })}
              {filtered.length === 0 && (
                <p className="col-span-2 text-center text-[#5b6282] text-sm py-8">No statuses match your search.</p>
              )}
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
                className="mt-3 w-36 px-3 py-2 border border-[#E3E6F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5865F2] text-center"
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
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Live Preview</label>
              <div className="bg-[#36393f] rounded-xl p-4 flex items-center gap-3 min-h-[64px]">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold text-lg">
                    U
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#23A559] rounded-full border-2 border-[#36393f]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">YourUsername</p>
                  <p className="text-[#dcddde] text-xs mt-0.5 break-all">
                    {fullCustomStatus || <span className="opacity-40 italic">Your status appears here</span>}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => copy(fullCustomStatus, 'custom')}
              disabled={!customText.trim()}
              className="w-full py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied === 'custom' ? '✓ Copied!' : 'Copy Custom Status'}
            </button>

            <div className="bg-[#F8F9FF] rounded-xl p-4 border border-[#E3E6F0] text-sm text-[#5b6282] space-y-1">
              <p className="font-bold text-[#1a1d2e] mb-2">Tips</p>
              <p>• Max 128 characters for custom status text.</p>
              <p>• Set your status: User Settings → Custom Status.</p>
              <p>• Emoji at the start makes statuses more eye-catching.</p>
              <p>• Invisible mode hides your status from others.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
