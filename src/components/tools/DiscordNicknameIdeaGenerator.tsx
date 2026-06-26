'use client';

import { useState } from 'react';
import { FONT_STYLES } from '@/lib/fonts';

const adjectiveList = [
  'Cool', 'Epic', 'Dark', 'Light', 'Shadow', 'Fire', 'Ice', 'Storm', 'Thunder', 'Lightning',
  'Mystic', 'Magic', 'Cosmic', 'Galaxy', 'Star', 'Moon', 'Sun', 'Sky', 'Cloud', 'Rain',
  'Happy', 'Sad', 'Angry', 'Calm', 'Brave', 'Bold', 'Shy', 'Crazy', 'Lazy', 'Hyper',
  'Silly', 'Funny', 'Serious', 'Smart', 'Clever', 'Dumb', 'Strong', 'Weak', 'Fast', 'Slow',
  'Big', 'Small', 'Tiny', 'Huge', 'Giant', 'Mini', 'Super', 'Ultra', 'Mega', 'Hyper',
  'Pro', 'Noob', 'Newbie', 'Master', 'Legend', 'King', 'Queen', 'Prince', 'Princess', 'Lord',
  'Lady', 'Sir', 'Madam', 'Captain', 'Commander', 'General', 'Admiral', 'President', 'CEO', 'Boss',
  'Ninja', 'Pirate', 'Viking', 'Knight', 'Samurai', 'Wizard', 'Sorcerer', 'Witch', 'Warlock', 'Mage',
  'Warrior', 'Archer', 'Assassin', 'Hunter', 'Ranger', 'Druid', 'Paladin', 'Cleric', 'Monk', 'Bard',
];

const nounList = [
  'Gamer', 'Player', 'Pro', 'Noob', 'Master', 'Legend', 'Hero', 'Villain', 'Boss', 'Enemy',
  'Dragon', 'Wolf', 'Fox', 'Cat', 'Dog', 'Bird', 'Fish', 'Lion', 'Tiger', 'Bear',
  'Panda', 'Koala', 'Penguin', 'Owl', 'Eagle', 'Hawk', 'Falcon', 'Raven', 'Crow', 'Bat',
  'Snake', 'Dragon', 'Unicorn', 'Phoenix', 'Griffin', 'Hydra', 'Cerberus', 'Medusa', 'Pegasus', 'Unicorn',
  'Blade', 'Sword', 'Axe', 'Bow', 'Arrow', 'Shield', 'Helmet', 'Armor', 'Crown', 'Scepter',
  'Star', 'Moon', 'Sun', 'Planet', 'Galaxy', 'Universe', 'Cosmos', 'Nebula', 'Comet', 'Meteor',
  'Pixel', 'Byte', 'Bit', 'Code', 'Hacker', 'Coder', 'Developer', 'Programmer', 'Engineer', 'Designer',
  'Music', 'Song', 'Beat', 'Rhythm', 'Melody', 'Harmony', 'Note', 'Chord', 'Sound', 'Noise',
  'Coffee', 'Tea', 'Pizza', 'Burger', 'Fries', 'IceCream', 'Cake', 'Cookie', 'Donut', 'Candy',
];

const emojiList = ['🔥', '⚡', '💎', '🎮', '👑', '🐺', '🦊', '🐱', '🐶', '🦅'];

// Use the first 4 font styles for quick selection
const quickFonts = FONT_STYLES.filter(f => ['bold', 'italic', 'monospace', 'small-caps'].includes(f.id)).slice(0, 4);

export default function DiscordNicknameIdeaGenerator() {
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [selectedStyleId, setSelectedStyleId] = useState<string>('none');

  const generateNicknames = () => {
    const newNicknames: string[] = [];
    for (let i = 0; i < 10; i++) {
      const adj = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
      const noun = nounList[Math.floor(Math.random() * nounList.length)];
      const useNumber = Math.random() > 0.5;
      const number = useNumber ? Math.floor(Math.random() * 1000) : '';
      const useEmoji = Math.random() > 0.5;
      const emoji = useEmoji ? emojiList[Math.floor(Math.random() * emojiList.length)] : '';
      
      newNicknames.push(`${adj}${noun}${number}${emoji}`);
    }
    setNicknames(newNicknames);
  };

  const applyStyle = (text: string) => {
    if (selectedStyleId === 'none') return text;
    const style = FONT_STYLES.find(f => f.id === selectedStyleId);
    return style ? style.transform(text) : text;
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <button
            onClick={generateNicknames}
            className="px-8 py-4 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg text-lg"
          >
            🎲 Generate 10 Nicknames
          </button>
          <select
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
            className="px-4 py-2 border-2 border-[#E3E6F0] rounded-lg"
          >
            <option value="none">Plain Text</option>
            {quickFonts.map(font => (
              <option key={font.id} value={font.id}>{font.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nicknames.length === 0 && (
            <div className="col-span-2 text-center py-10 text-[#5b6282]">
              Click "Generate 10 Nicknames" to get started!
            </div>
          )}
          {nicknames.map((nickname, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
              <span className="text-lg font-bold text-[#1a1d2e]">{applyStyle(nickname)}</span>
              <button
                onClick={() => navigator.clipboard.writeText(applyStyle(nickname))}
                className="px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition text-sm font-bold"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
