'use client';

import { useState } from 'react';
import { FONT_STYLES } from '@/lib/fonts';

const themeData: {
  [key: string]: { adjectives: string[]; nouns: string[]; emojis: string[] };
} = {
  'All': {
    adjectives: [
      'Cool', 'Epic', 'Dark', 'Light', 'Shadow', 'Fire', 'Ice', 'Storm', 'Thunder', 'Lightning',
      'Mystic', 'Magic', 'Cosmic', 'Galaxy', 'Star', 'Moon', 'Sun', 'Sky', 'Cloud', 'Rain',
      'Happy', 'Sad', 'Angry', 'Calm', 'Brave', 'Bold', 'Shy', 'Crazy', 'Lazy', 'Hyper',
      'Silly', 'Funny', 'Serious', 'Smart', 'Clever', 'Dumb', 'Strong', 'Weak', 'Fast', 'Slow',
      'Big', 'Small', 'Tiny', 'Huge', 'Giant', 'Mini', 'Super', 'Ultra', 'Mega', 'Hyper',
      'Pro', 'Noob', 'Newbie', 'Master', 'Legend', 'King', 'Queen', 'Prince', 'Princess', 'Lord',
      'Lady', 'Sir', 'Madam', 'Captain', 'Commander', 'General', 'Admiral', 'President', 'CEO', 'Boss',
      'Ninja', 'Pirate', 'Viking', 'Knight', 'Samurai', 'Wizard', 'Sorcerer', 'Witch', 'Warlock', 'Mage',
      'Warrior', 'Archer', 'Assassin', 'Hunter', 'Ranger', 'Druid', 'Paladin', 'Cleric', 'Monk', 'Bard',
      'Fierce', 'Gentle', 'Swift', 'Mighty', 'Wise', 'Foolish', 'Lucky', 'Cursed', 'Blessed', 'Chaotic',
      'Neon', 'Vapor', 'Lofi', 'Aesthetic', 'Cute', 'Pretty', 'Handsome', 'Ugly', 'Chill', 'Lit',
      'Dank', 'Savage', 'Salty', 'Sweet', 'Sour', 'Spicy', 'Salty', 'Bitter', 'Fresh', 'Stale',
    ],
    nouns: [
      'Gamer', 'Player', 'Pro', 'Noob', 'Master', 'Legend', 'Hero', 'Villain', 'Boss', 'Enemy',
      'Dragon', 'Wolf', 'Fox', 'Cat', 'Dog', 'Bird', 'Fish', 'Lion', 'Tiger', 'Bear',
      'Panda', 'Koala', 'Penguin', 'Owl', 'Eagle', 'Hawk', 'Falcon', 'Raven', 'Crow', 'Bat',
      'Snake', 'Dragon', 'Unicorn', 'Phoenix', 'Griffin', 'Hydra', 'Cerberus', 'Medusa', 'Pegasus', 'Unicorn',
      'Blade', 'Sword', 'Axe', 'Bow', 'Arrow', 'Shield', 'Helmet', 'Armor', 'Crown', 'Scepter',
      'Star', 'Moon', 'Sun', 'Planet', 'Galaxy', 'Universe', 'Cosmos', 'Nebula', 'Comet', 'Meteor',
      'Pixel', 'Byte', 'Bit', 'Code', 'Hacker', 'Coder', 'Developer', 'Programmer', 'Engineer', 'Designer',
      'Music', 'Song', 'Beat', 'Rhythm', 'Melody', 'Harmony', 'Note', 'Chord', 'Sound', 'Noise',
      'Coffee', 'Tea', 'Pizza', 'Burger', 'Fries', 'IceCream', 'Cake', 'Cookie', 'Donut', 'Candy',
      'Flower', 'Rose', 'Lily', 'Sunflower', 'Tulip', 'Daisy', 'Fern', 'Tree', 'Forest', 'Mountain',
      'Ocean', 'Sea', 'Lake', 'River', 'Stream', 'Waterfall', 'Beach', 'Sand', 'Wave', 'Coral',
      'Gem', 'Ruby', 'Emerald', 'Sapphire', 'Diamond', 'Amethyst', 'Topaz', 'Garnet', 'Opal', 'Jade',
      'Book', 'Novel', 'Story', 'Poem', 'Lyric', 'Writer', 'Author', 'Reader', 'Bookworm', 'Page',
    ],
    emojis: [
      '🔥', '⚡', '💎', '🎮', '👑', '🐺', '🦊', '🐱', '🐶', '🦅',
      '🐉', '🦋', '🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '🍀', '🍁',
      '🍂', '🍃', '🌿', '🌴', '🌲', '🌳', '🌵', '🌾', '🌱', '🌻',
      '🎵', '🎶', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤', '🎧', '📻',
      '☕', '🍵', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃',
      '🍕', '🍔', '🍟', '🍿', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰',
    ]
  },
  'Gaming': {
    adjectives: [
      'Pro', 'Noob', 'Newbie', 'Master', 'Legend', 'Elite', 'Savage', 'Tryhard', 'Casual', 'Sweaty',
      'Fragger', 'Support', 'Tank', 'DPS', 'Healer', 'Carry', 'Main', 'Off-role', 'Flex', 'One-trick',
      'Chad', 'Virgin', 'Giga', 'Sigma', 'Alpha', 'Beta', 'Omega', 'Gamma', 'Delta', 'Theta',
      'Deadly', 'Fatal', 'Lethal', 'Fierce', 'Brutal', 'Vicious', 'Savage', 'Ruthless', 'Merciless', 'Cruel',
      'Swift', 'Quick', 'Rapid', 'Speedy', 'Hasty', 'Fleet', 'Nimble', 'Agile', 'Dexterous', 'Lithe',
    ],
    nouns: [
      'Gamer', 'Player', 'Pro', 'Noob', 'Master', 'Legend', 'Hero', 'Villain', 'Boss', 'Enemy',
      'Dragon', 'Wolf', 'Fox', 'Tiger', 'Lion', 'Bear', 'Shark', 'Eagle', 'Hawk', 'Falcon',
      'Blade', 'Sword', 'Axe', 'Bow', 'Arrow', 'Shield', 'Gun', 'Pistol', 'Rifle', 'Sniper',
      'Shotgun', 'Machinegun', 'Rocket', 'Grenade', 'Bomb', 'Mine', 'Turret', 'Drone', 'Bot', 'NPC',
      'Quest', 'Mission', 'Objective', 'Goal', 'Target', 'Achievement', 'Trophy', 'Medal', 'Reward', 'Prize',
      'Level', 'Rank', 'Tier', 'Grade', 'Score', 'Point', 'Coin', 'Gold', 'Silver', 'Bronze',
    ],
    emojis: ['🎮', '🎯', '🏆', '⚔️', '🛡️', '💣', '🔫', '🗡️', '🔪', '💀']
  },
  'Aesthetic': {
    adjectives: [
      'Aesthetic', 'Vaporwave', 'Lofi', 'Neon', 'Pastel', 'Soft', 'Dreamy', 'Cloudy', 'Starry', 'Moonlit',
      'Sunny', 'Rainy', 'Snowy', 'Foggy', 'Misty', 'Hazy', 'Clear', 'Bright', 'Dark', 'Light',
      'Sweet', 'Cute', 'Pretty', 'Beautiful', 'Lovely', 'Gorgeous', 'Stunning', 'Elegant', 'Graceful', 'Charming',
      'Delicate', 'Tender', 'Gentle', 'Soft', 'Mellow', 'Calm', 'Peaceful', 'Tranquil', 'Serene', 'Quiet',
    ],
    nouns: [
      'Moon', 'Star', 'Sun', 'Sky', 'Cloud', 'Rain', 'Snow', 'Flower', 'Rose', 'Lily',
      'Sunflower', 'Tulip', 'Daisy', 'Fern', 'Tree', 'Forest', 'Mountain', 'Ocean', 'Sea', 'Lake',
      'River', 'Stream', 'Waterfall', 'Beach', 'Sand', 'Wave', 'Coral', 'Gem', 'Ruby', 'Emerald',
      'Sapphire', 'Diamond', 'Amethyst', 'Topaz', 'Garnet', 'Opal', 'Jade', 'Pearl', 'Crystal', 'Quartz',
      'Melody', 'Rhythm', 'Beat', 'Note', 'Chord', 'Song', 'Music', 'Sound', 'Tone', 'Tune',
    ],
    emojis: ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '💜', '💙', '💚', '💛']
  },
  'Funny': {
    adjectives: [
      'Funny', 'Hilarious', 'Comical', 'Laughable', 'Humorous', 'Witty', 'Droll', 'Jolly', 'Merry', 'Jovial',
      'Silly', 'Goofy', 'Crazy', 'Weird', 'Odd', 'Strange', 'Quirky', 'Eccentric', 'Bizarre', 'Absurd',
      'Fat', 'Chonky', 'Thicc', 'Skinny', 'Tall', 'Short', 'Long', 'Small', 'Tiny', 'Huge',
      'Stupid', 'Idiotic', 'Moronic', 'Foolish', 'Dumb', 'Idiot', 'Moron', 'Imbecile', 'Cretin', 'Retard',
    ],
    nouns: [
      'Potato', 'Cheese', 'Burger', 'Pizza', 'Fries', 'Hotdog', 'Sandwich', 'Taco', 'Burrito', 'Nacho',
      'Chicken', 'Duck', 'Goose', 'Turkey', 'Cow', 'Pig', 'Sheep', 'Goat', 'Horse', 'Donkey',
      'Monkey', 'Ape', 'Gorilla', 'Chimp', 'Orangutan', 'Lemur', 'Sloth', 'Koala', 'Panda', 'Bear',
      'Toilet', 'Poop', 'Butt', 'Booty', 'Bum', 'Rear', 'Behind', 'Backside', 'Derriere', 'Hindquarters',
      'Pickle', 'Cucumber', 'Zucchini', 'Carrot', 'Potato', 'Tomato', 'Onion', 'Garlic', 'Lettuce', 'Cabbage',
    ],
    emojis: ['😂', '🤣', '😹', '💩', '🍆', '🍑', '🥒', '🥕', '🍅', '🌽']
  }
};

// Use the first 4 font styles for quick selection
const quickFonts = FONT_STYLES.filter(f => ['bold', 'italic', 'monospace', 'small-caps'].includes(f.id)).slice(0, 4);

export default function DiscordNicknameIdeaGenerator() {
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedStyleId, setSelectedStyleId] = useState<string>('none');

  const generateNicknames = () => {
    const { adjectives, nouns, emojis } = themeData[selectedTheme];
    const newNicknames: string[] = [];
    for (let i = 0; i < 10; i++) {
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      const useNumber = Math.random() > 0.5;
      const number = useNumber ? Math.floor(Math.random() * 1000) : '';
      const useEmoji = Math.random() > 0.5;
      const emoji = useEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : '';
      
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center flex-wrap">
          <button
            onClick={generateNicknames}
            className="px-8 py-4 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg text-lg"
          >
            🎲 Generate 10 Nicknames
          </button>
          <select
            value={selectedTheme}
            onChange={(e) => {
              setSelectedTheme(e.target.value);
              setNicknames([]);
            }}
            className="px-4 py-2 border-2 border-[#E3E6F0] rounded-lg"
          >
            {Object.keys(themeData).map(theme => (
              <option key={theme} value={theme}>{theme}</option>
            ))}
          </select>
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
