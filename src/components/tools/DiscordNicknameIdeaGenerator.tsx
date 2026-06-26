'use client';

import { useState } from 'react';

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

const styles = {
  'bold': (t: string) => t.split('').map((c, i) => '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇'.charAt(c.toLowerCase().charCodeAt(0) - 97) || c).join(''),
  'italic': (t: string) => t.split('').map((c, i) => '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'.charAt(c.toLowerCase().charCodeAt(0) - 97) || c).join(''),
  'bolditalic': (t: string) => t.split('').map((c, i) => '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯'.charAt(c.toLowerCase().charCodeAt(0) - 97) || c).join(''),
  'monospace': (t: string) => t.split('').map((c, i) => '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'.charAt(c.toLowerCase().charCodeAt(0) - 97) || c).join(''),
};

export default function DiscordNicknameIdeaGenerator() {
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('none');

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
    if (selectedStyle === 'none') return text;
    const styleFn = styles[selectedStyle as keyof typeof styles];
    return styleFn ? styleFn(text) : text;
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
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="px-4 py-2 border-2 border-[#E3E6F0] rounded-lg"
          >
            <option value="none">Plain Text</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
            <option value="monospace">Monospace</option>
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
