'use client';

import { useState, useMemo } from 'react';

interface BioTemplate {
  id: string;
  text: string;
  category: string;
  tags: string[];
}

const BIO_TEMPLATES: BioTemplate[] = [
  // ── Aesthetic ───────────────────────────────────────────
  { id: 'a1',  category: 'Aesthetic', tags: ['soft','vibe','poetic'], text: '🌙 chasing moonlit thoughts\n✨ soft heart, loud music\n🌿 blooming slowly' },
  { id: 'a2',  category: 'Aesthetic', tags: ['minimal','clean'], text: '🫧 floating somewhere quiet\n🌊 depth over surface\n📻 lo-fi soul' },
  { id: 'a3',  category: 'Aesthetic', tags: ['dark','moody'], text: '🕯️ dark academia hours\n📖 coffee & old books\n🌒 creature of the night' },
  { id: 'a4',  category: 'Aesthetic', tags: ['nature','calm'], text: '🌸 petal-soft days\n🍃 rooted but always reaching\n🌤️ grateful for small things' },
  { id: 'a5',  category: 'Aesthetic', tags: ['vaporwave','retro'], text: 'ａｅｓｔｈｅｔｉｃ by heart\n🌆 neon-lit nights\n📼 vintage everything' },
  { id: 'a6',  category: 'Aesthetic', tags: ['dreamy','poetic'], text: '🌌 stardust in human form\n💭 thoughts louder than words\n🎞️ living like a film still' },
  { id: 'a7',  category: 'Aesthetic', tags: ['soft','healing'], text: '🌷 healing at my own pace\n🫶 gentle with myself\n🌿 choosing peace daily' },
  { id: 'a8',  category: 'Aesthetic', tags: ['night','moody'], text: '🌃 city lights at 3am\n🎧 music is my therapy\n☕ coffee keeps me alive' },
  { id: 'a9',  category: 'Aesthetic', tags: ['minimal','art'], text: '🖋️ words over everything\n🎨 art is how I breathe\n📷 capturing quiet moments' },
  { id: 'a10', category: 'Aesthetic', tags: ['cozy','soft'], text: '🍵 matcha mornings\n📚 reader of many worlds\n🌙 night owl forever' },

  // ── Gaming ──────────────────────────────────────────────
  { id: 'g1',  category: 'Gaming', tags: ['competitive','edgy'], text: '🎮 top frag or nothing\n⚔️ ranked grinder, no off days\n💀 skill issue is not in my vocabulary' },
  { id: 'g2',  category: 'Gaming', tags: ['casual','fun'], text: '🕹️ here for the vibes & the loot\n🎲 casual chaos enjoyer\n🏆 bronze with gold tier dreams' },
  { id: 'g3',  category: 'Gaming', tags: ['streamer','content'], text: '🎙️ content creator | live daily\n🔴 streaming my suffering\n💬 chat is family' },
  { id: 'g4',  category: 'Gaming', tags: ['rpg','story'], text: '🐉 RPG main character energy\n📜 side quests over main quests\n⚗️ always grinding crafting skills' },
  { id: 'g5',  category: 'Gaming', tags: ['fps','competitive'], text: '🎯 aim trainer subscriber\n🔫 headshots are a lifestyle\n🏅 certified third-party enjoyer' },
  { id: 'g6',  category: 'Gaming', tags: ['chill','multiplayer'], text: '👾 gaming to forget reality\n🌙 midnight raids and good vibes\n🤝 squad before rank' },
  { id: 'g7',  category: 'Gaming', tags: ['esports','tryhard'], text: '🏆 esports or bust\n⚡ reaction time: 0.1ms\n📊 stats don\'t lie, enemies do' },
  { id: 'g8',  category: 'Gaming', tags: ['retro','nostalgic'], text: '🕹️ raised on retro games\n📦 100% completion or nothing\n🎮 pixel art is peak art' },

  // ── Funny ───────────────────────────────────────────────
  { id: 'f1',  category: 'Funny', tags: ['relatable','chaos'], text: '🤡 professionally confused\n🦥 expert in doing nothing\n🫠 melting through life gracefully' },
  { id: 'f2',  category: 'Funny', tags: ['sarcastic','humor'], text: '😅 functional disaster\n🧃 powered by spite and snacks\n🎭 performing sanity daily' },
  { id: 'f3',  category: 'Funny', tags: ['chaotic','energy'], text: '🎪 welcome to my circus\n🤹 juggling 3 things badly\n🔥 on fire (literally, help)' },
  { id: 'f4',  category: 'Funny', tags: ['nap','lazy'], text: '💤 nap enthusiast\n🛸 mentally elsewhere\n🦆 unbothered and loving it' },
  { id: 'f5',  category: 'Funny', tags: ['food','relatable'], text: '🍕 pizza is my love language\n☕ coffee before human contact\n😴 technically awake' },
  { id: 'f6',  category: 'Funny', tags: ['internet','meme'], text: '🐸 chronically online\n🧻 unraveling but make it cute\n📵 offline in spirit' },
  { id: 'f7',  category: 'Funny', tags: ['overthink','relatable'], text: '🤔 professional overthinkker\n💭 3am thoughts in a 9am world\n🥱 tired but make it fashion' },
  { id: 'f8',  category: 'Funny', tags: ['chaos','friendly'], text: '🥸 disguised as a normal person\n🎯 randomly clicking buttons\n🫃 emotionally carrying everyone' },

  // ── Coding / Dev ────────────────────────────────────────
  { id: 'c1',  category: 'Coding', tags: ['developer','backend'], text: '💻 backend dev | bug whisperer\n☕ coffee-driven development\n🛠️ shipping in prod (no regrets)' },
  { id: 'c2',  category: 'Coding', tags: ['fullstack','building'], text: '🔧 fullstack builder\n🚀 turning caffeine into features\n📦 always shipping something' },
  { id: 'c3',  category: 'Coding', tags: ['student','learning'], text: '👨‍💻 cs student | open source fan\n🧪 breaking things to learn things\n💡 one day I\'ll write clean code' },
  { id: 'c4',  category: 'Coding', tags: ['ai','ml'], text: '🤖 building with AI daily\n📊 data scientist by day\n🧬 training models, losing sleep' },
  { id: 'c5',  category: 'Coding', tags: ['frontend','design'], text: '🎨 UI/UX obsessed dev\n📐 pixel perfect or bust\n✨ making the web prettier' },
  { id: 'c6',  category: 'Coding', tags: ['security','hacking'], text: '🔒 security researcher\n🕵️ ethical hacker\n🧩 CTF enthusiast' },
  { id: 'c7',  category: 'Coding', tags: ['open source','community'], text: '🌐 open source everything\n🤝 building in public\n⭐ star my repos please' },

  // ── Motivational ────────────────────────────────────────
  { id: 'm1',  category: 'Motivational', tags: ['grind','hustle'], text: '🚀 building my dream daily\n💪 progress over perfection\n🔑 unlocking the next level' },
  { id: 'm2',  category: 'Motivational', tags: ['mindset','growth'], text: '🌱 growth mindset, always\n🏔️ the summit is worth the climb\n⚡ charging toward my goals' },
  { id: 'm3',  category: 'Motivational', tags: ['discipline','focus'], text: '🎯 focused, disciplined, relentless\n🌅 new day, new chance\n💎 pressure creates diamonds' },
  { id: 'm4',  category: 'Motivational', tags: ['entrepreneur','creator'], text: '🛠️ building what I wish existed\n🌍 impact > income\n🔥 fueled by purpose' },
  { id: 'm5',  category: 'Motivational', tags: ['student','ambition'], text: '📚 student of life, always\n🧭 aligned with my purpose\n🦅 elevation requires separation' },

  // ── Anime ───────────────────────────────────────────────
  { id: 'an1', category: 'Anime', tags: ['weeb','shonen'], text: '⛩️ on my training arc\n🌀 believe it always\n⚡ plus ultra, no half measures' },
  { id: 'an2', category: 'Anime', tags: ['aesthetic','moody'], text: '🌸 shojo protagonist energy\n🎌 peak fiction enthusiast\n🍥 ramen heals the soul' },
  { id: 'an3', category: 'Anime', tags: ['dark','edgy'], text: '👁️ sharingan observer\n📓 keeping notes on everything\n🐉 dragon form unlocked' },
  { id: 'an4', category: 'Anime', tags: ['cute','fun'], text: '🦊 fox spirit in the chat\n💢 one more episode (3am)\n🌙 sailor moon did it first' },

  // ── Music ────────────────────────────────────────────────
  { id: 'mu1', category: 'Music', tags: ['musician','creative'], text: '🎸 strings and soul\n🎧 headphones always in\n🎼 composing my next era' },
  { id: 'mu2', category: 'Music', tags: ['listener','vibes'], text: '🎵 music is my first language\n🔊 volume at max, thoughts at zero\n🎤 shower concert headliner' },
  { id: 'mu3', category: 'Music', tags: ['producer','studio'], text: '🎹 keys and creativity\n🥁 rhythm is everything\n📻 always cooking a new beat' },

  // ── Matching / Couples ──────────────────────────────────
  { id: 'mc1', category: 'Matching', tags: ['couple','cute'], text: '💕 taken by my favorite person\n🎮 p1 to their p2\n🌙 together in every timezone' },
  { id: 'mc2', category: 'Matching', tags: ['couple','bestfriend'], text: '🫀 heart belongs to one\n✨ matching bios, matching vibes\n🌸 together and thriving' },
  { id: 'mc3', category: 'Matching', tags: ['bestfriend','duo'], text: '👥 dynamic duo, always\n🎭 chaos with my person\n💌 best friend bio check' },
  { id: 'mc4', category: 'Matching', tags: ['couple','aesthetic'], text: '🌙 moon to my stars\n🫶 soft love, loud laughs\n🌿 growing together' },

  // ── Short & Clean ────────────────────────────────────────
  { id: 's1',  category: 'Short', tags: ['minimal','clean'], text: '🌙 just vibing\n✨ no thoughts, only feelings' },
  { id: 's2',  category: 'Short', tags: ['minimal','gaming'], text: '🎮 gamer. 💀 no life confirmed.' },
  { id: 's3',  category: 'Short', tags: ['funny','oneliner'], text: '🤡 professionally lost\n🛸 brb leaving planet' },
  { id: 's4',  category: 'Short', tags: ['dev','minimal'], text: '💻 code. ☕ coffee. 🔁 repeat.' },
  { id: 's5',  category: 'Short', tags: ['aesthetic','minimal'], text: '🌿 quiet & growing\n🕊️ at peace with the chaos' },
  { id: 's6',  category: 'Short', tags: ['motivational','punchy'], text: '🚀 building. 💪 grinding. 🔥 winning.' },
  { id: 's7',  category: 'Short', tags: ['social','friendly'], text: '😊 friendly chaos\n💬 slide in my DMs' },
  { id: 's8',  category: 'Short', tags: ['anime','minimal'], text: '⚡ anime changed me\n🌸 no regrets' },
];

const CATEGORIES = ['All', 'Aesthetic', 'Gaming', 'Funny', 'Coding', 'Motivational', 'Anime', 'Music', 'Matching', 'Short'];

const MAX_BIO_CHARS = 190;

export default function DiscordBioGeneratorTool() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [customBio, setCustomBio] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [tab, setTab] = useState<'browse' | 'custom'>('browse');

  const filtered = useMemo(() => {
    let list = category === 'All' ? BIO_TEMPLATES : BIO_TEMPLATES.filter((b) => b.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) => b.text.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.tags.some((t) => t.includes(q))
      );
    }
    return list;
  }, [category, search]);

  const [visibleCount, setVisibleCount] = useState(10);

  // Reset visible count when filters change
  useMemo(() => {
    setVisibleCount(10);
  }, [category, search]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      if (visibleCount < filtered.length) {
        setVisibleCount((prev) => Math.min(prev + 10, filtered.length));
      }
    }
  };

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const charCount = customBio.length;

  return (
    <div className="bg-white rounded-2xl border border-[#E3E6F0] overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#E3E6F0]">
        {(['browse', 'custom'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-4 text-sm font-bold transition-all ${
              tab === t ? 'bg-[#5865F2] text-white' : 'bg-[#F8F9FF] text-[#5b6282] hover:bg-[#E3E6F0]'
            }`}
          >
            {t === 'browse' ? `💡 Browse Templates (${BIO_TEMPLATES.length})` : '✏️ Custom Bio Builder'}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === 'browse' && (
          <>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search bios by keyword or vibe..."
              className="w-full px-4 py-2.5 border border-[#E3E6F0] rounded-xl text-sm text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2] mb-4"
              aria-label="Search bio templates"
            />

            {/* Category pills */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                    category === c ? 'bg-[#5865F2] text-white' : 'bg-[#F0F2FF] text-[#5865F2] hover:bg-[#5865F2] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <p className="text-xs text-[#5b6282] mb-4">{filtered.length} templates</p>

            {/* Bio grid */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1"
              onScroll={handleScroll}
            >
              {filtered.slice(0, visibleCount).map((bio) => (
                <div
                  key={bio.id}
                  className="rounded-xl border border-[#E3E6F0] overflow-hidden hover:border-[#5865F2] transition-all group"
                >
                  {/* Discord profile preview */}
                  <div className="bg-[#2f3136] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#5865F2] shrink-0 flex items-center justify-center text-white font-bold text-lg">U</div>
                      <div>
                        <p className="text-white font-bold text-sm">YourUsername</p>
                        <p className="text-[#b9bbbe] text-xs mt-1 whitespace-pre-line leading-relaxed">{bio.text}</p>
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#F8F9FF]">
                    <div className="flex gap-1.5 flex-wrap">
                      <span className="text-xs px-2 py-0.5 bg-[#E3E6F0] text-[#5b6282] rounded-full">{bio.category}</span>
                    </div>
                    <button
                      onClick={() => copy(bio.text, bio.id)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                        copied === bio.id
                          ? 'bg-green-500 text-white'
                          : 'bg-[#5865F2] text-white hover:bg-[#4752C4]'
                      }`}
                    >
                      {copied === bio.id ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-2 text-center text-[#5b6282] text-sm py-8">No templates match. Try a different search.</p>
              )}
            </div>
          </>
        )}

        {tab === 'custom' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Write Your Discord Bio</label>
              <textarea
                value={customBio}
                onChange={(e) => setCustomBio(e.target.value.slice(0, MAX_BIO_CHARS))}
                placeholder={'🌙 add your first line here\n✨ something about yourself\n🎮 a hobby or vibe'}
                rows={5}
                className="w-full px-4 py-3 border border-[#E3E6F0] rounded-xl text-[#1a1d2e] text-sm focus:outline-none focus:ring-2 focus:ring-[#5865F2] resize-none font-mono"
                aria-label="Custom Discord bio text"
              />
              <div className="flex justify-between mt-1">
                <span className={`text-xs ${charCount > MAX_BIO_CHARS * 0.9 ? 'text-orange-500' : 'text-[#5b6282]'}`}>
                  {charCount}/{MAX_BIO_CHARS} characters
                </span>
                {charCount >= MAX_BIO_CHARS && <span className="text-xs text-red-500">Bio limit reached</span>}
              </div>
            </div>

            {/* Live preview */}
            <div>
              <label className="block text-sm font-bold text-[#1a1d2e] mb-2">Discord Profile Preview</label>
              <div className="bg-[#2f3136] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold text-xl">U</div>
                    <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-[#23A559] rounded-full border-2 border-[#2f3136]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">YourUsername</p>
                    <p className="text-[#b9bbbe] text-xs font-medium mt-0.5">YourDisplayName</p>
                    {customBio ? (
                      <p className="text-[#dcddde] text-xs mt-3 whitespace-pre-line leading-relaxed border-t border-[#4f545c] pt-3">{customBio}</p>
                    ) : (
                      <p className="text-[#72767d] text-xs mt-3 italic border-t border-[#4f545c] pt-3">Your bio will appear here...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => copy(customBio, 'custom')}
              disabled={!customBio.trim()}
              className="w-full py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied === 'custom' ? '✓ Copied to Clipboard!' : 'Copy Bio'}
            </button>

            <div className="bg-[#F8F9FF] rounded-xl p-4 border border-[#E3E6F0] text-sm text-[#5b6282] space-y-1.5">
              <p className="font-bold text-[#1a1d2e] mb-2">Discord Bio Tips</p>
              <p>• Max 190 characters in About Me.</p>
              <p>• Each line break counts as 1 character.</p>
              <p>• Set via User Settings → Profiles → About Me.</p>
              <p>• Use our <a href="/tools/discord-font-generator/" className="text-[#5865F2] font-bold hover:underline">Font Generator</a> to stylize any line.</p>
              <p>• Emoji at the line start makes bios pop visually.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
