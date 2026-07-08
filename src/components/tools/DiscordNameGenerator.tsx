'use client';

import { useMemo, useState } from 'react';
import { Copy, RefreshCw, Sparkles } from 'lucide-react';

type NameMode = 'username' | 'display' | 'server' | 'clan' | 'channel';
type NameVibe = 'aesthetic' | 'gaming' | 'funny' | 'dark' | 'cute' | 'professional';

const modeLabels: Record<NameMode, string> = {
  username: 'Username',
  display: 'Display name',
  server: 'Server name',
  clan: 'Clan name',
  channel: 'Channel name',
};

const vibeLabels: Record<NameVibe, string> = {
  aesthetic: 'Aesthetic',
  gaming: 'Gaming',
  funny: 'Funny',
  dark: 'Dark',
  cute: 'Cute',
  professional: 'Professional',
};

const wordBanks: Record<NameVibe, { first: string[]; second: string[]; suffix: string[] }> = {
  aesthetic: {
    first: ['lunar', 'velvet', 'soft', 'misty', 'glow', 'aurora', 'dream', 'violet', 'crystal', 'serene'],
    second: ['echo', 'garden', 'hour', 'signal', 'bloom', 'verse', 'cloud', 'mood', 'diary', 'halo'],
    suffix: ['club', 'room', 'zone', 'corner', 'collective', 'haven'],
  },
  gaming: {
    first: ['ranked', 'pixel', 'combo', 'crit', 'respawn', 'quest', 'clutch', 'turbo', 'arcade', 'boss'],
    second: ['strike', 'lobby', 'forge', 'squad', 'raid', 'arena', 'drop', 'queue', 'guild', 'loadout'],
    suffix: ['hq', 'squad', 'legends', 'party', 'hub', 'crew'],
  },
  funny: {
    first: ['panic', 'sleepy', 'chaos', 'snack', 'loading', 'oops', 'almost', 'mildly', 'nope', 'tiny'],
    second: ['wizard', 'toast', 'error', 'pickle', 'button', 'problem', 'caption', 'boss', 'meme', 'buffer'],
    suffix: ['department', 'society', 'club', 'support group', 'zone', 'committee'],
  },
  dark: {
    first: ['shadow', 'void', 'obsidian', 'midnight', 'ember', 'raven', 'phantom', 'nocturne', 'grave', 'eclipse'],
    second: ['signal', 'crown', 'blade', 'veil', 'pulse', 'ritual', 'archive', 'sector', 'vault', 'order'],
    suffix: ['circle', 'sanctum', 'network', 'guild', 'den', 'watch'],
  },
  cute: {
    first: ['boba', 'peachy', 'tiny', 'cozy', 'honey', 'bubble', 'mochi', 'sunny', 'plush', 'sprinkle'],
    second: ['bean', 'corner', 'cloud', 'cup', 'note', 'nest', 'spark', 'pocket', 'studio', 'party'],
    suffix: ['cafe', 'club', 'garden', 'hangout', 'home', 'lounge'],
  },
  professional: {
    first: ['creator', 'founder', 'signal', 'studio', 'launch', 'growth', 'focus', 'maker', 'strategy', 'network'],
    second: ['hub', 'desk', 'room', 'circle', 'labs', 'brief', 'stack', 'camp', 'guild', 'base'],
    suffix: ['hq', 'collective', 'lab', 'network', 'community', 'workspace'],
  },
};

const separators = ['', '.', '_', '-'];

function titleCase(value: string) {
  return value
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function channelCase(value: string) {
  return value.toLowerCase().replace(/[\s._]+/g, '-').replace(/-+/g, '-');
}

function pick<T>(items: T[], index: number) {
  return items[index % items.length];
}

function makeName(mode: NameMode, vibe: NameVibe, seed: string, index: number) {
  const bank = wordBanks[vibe];
  const seedValue = seed.trim().toLowerCase().replace(/[^a-z0-9]+/g, '') || pick(bank.first, index + 3);
  const first = pick(bank.first, index + seedValue.length);
  const second = pick(bank.second, index * 2 + seedValue.length);
  const suffix = pick(bank.suffix, index + 5);
  const number = 10 + ((index * 37 + seedValue.length * 11) % 890);
  const separator = pick(separators, index);

  if (mode === 'username') {
    const base = index % 3 === 0 ? `${seedValue}${separator}${second}` : `${first}${separator}${seedValue}`;
    return `${base}${index % 4 === 0 ? number : ''}`.toLowerCase().slice(0, 32);
  }

  if (mode === 'display') {
    return titleCase(index % 2 === 0 ? `${first} ${seedValue}` : `${seedValue} ${second}`);
  }

  if (mode === 'server') {
    return titleCase(index % 2 === 0 ? `${seedValue} ${suffix}` : `${first} ${second} ${suffix}`);
  }

  if (mode === 'clan') {
    const tag = `${first.charAt(0)}${second.charAt(0)}${seedValue.charAt(0) || 'x'}`.toUpperCase();
    return `[${tag}] ${titleCase(`${first} ${second}`)}`;
  }

  return channelCase(index % 2 === 0 ? `${first}-${second}` : `${seedValue}-${second}`);
}

export default function DiscordNameGenerator() {
  const [mode, setMode] = useState<NameMode>('username');
  const [vibe, setVibe] = useState<NameVibe>('aesthetic');
  const [seed, setSeed] = useState('nova');
  const [refresh, setRefresh] = useState(0);
  const [copied, setCopied] = useState('');

  const names = useMemo(
    () => Array.from({ length: 18 }, (_, index) => makeName(mode, vibe, seed, index + refresh)),
    [mode, vibe, seed, refresh]
  );

  const copyName = async (name: string) => {
    await navigator.clipboard.writeText(name);
    setCopied(name);
    window.setTimeout(() => setCopied(''), 1400);
  };

  return (
    <div className="bg-white border border-[#DDE2F2] rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-[#1a1d2e] text-white px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#B9C0FF]">Free Discord name generator</p>
          <h2 className="text-xl font-extrabold">Create names people remember</h2>
        </div>
        <Sparkles className="w-8 h-8 text-[#FFD166]" aria-hidden="true" />
      </div>

      <div className="p-5 space-y-5">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <label className="space-y-2">
            <span className="block text-sm font-bold text-[#1a1d2e]">Name type</span>
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as NameMode)}
              className="w-full rounded-lg border border-[#C9D1EA] bg-white px-3 py-2 text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2]/35"
            >
              {Object.entries(modeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-bold text-[#1a1d2e]">Vibe</span>
            <select
              value={vibe}
              onChange={(event) => setVibe(event.target.value as NameVibe)}
              className="w-full rounded-lg border border-[#C9D1EA] bg-white px-3 py-2 text-[#1a1d2e] focus:outline-none focus:ring-2 focus:ring-[#5865F2]/35"
            >
              {Object.entries(vibeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => setRefresh((value) => value + 11)}
            className="md:self-end inline-flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-5 py-2.5 font-bold text-white hover:bg-[#4752C4] focus:outline-none focus:ring-2 focus:ring-[#5865F2]/35"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Generate
          </button>
        </div>

        <label className="space-y-2 block">
          <span className="block text-sm font-bold text-[#1a1d2e]">Optional keyword, name, niche, or game</span>
          <input
            value={seed}
            onChange={(event) => setSeed(event.target.value)}
            maxLength={20}
            placeholder="Example: valorant, anime, study, nova"
            className="w-full rounded-lg border border-[#C9D1EA] bg-white px-3 py-2 text-[#1a1d2e] placeholder:text-[#8C94AF] focus:outline-none focus:ring-2 focus:ring-[#5865F2]/35"
          />
        </label>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => copyName(name)}
              className="group flex min-h-16 items-center justify-between gap-3 rounded-lg border border-[#E3E6F0] bg-[#F8F9FF] px-4 py-3 text-left hover:border-[#5865F2] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#5865F2]/30"
            >
              <span className="font-bold text-[#1a1d2e] break-all">{name}</span>
              <span className="shrink-0 rounded-md bg-white p-2 text-[#5865F2] shadow-sm group-hover:bg-[#5865F2] group-hover:text-white">
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Copy {name}</span>
              </span>
            </button>
          ))}
        </div>

        <p className="min-h-5 text-center text-sm font-semibold text-[#3BA55D]" aria-live="polite">
          {copied ? `Copied "${copied}"` : ''}
        </p>
      </div>
    </div>
  );
}
