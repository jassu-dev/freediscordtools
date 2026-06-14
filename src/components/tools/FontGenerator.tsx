'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  FONT_STYLES,
  FONT_CATEGORIES,
  getTrendingFonts,
  getTopFonts,
  searchFonts,
  type FontStyle,
  type FontCategory,
} from '@/lib/fonts';

// ─── Storage helpers ──────────────────────────────────────────────────────────
const LS_FAVORITES_KEY = 'dfg_favorites';
const LS_RECENT_KEY = 'dfg_recent';

function loadFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem(LS_FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}
function saveFavorites(ids: Set<string>) {
  try { localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify([...ids])); } catch {}
}
function loadRecent(): string[] {
  try {
    const raw = localStorage.getItem(LS_RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveRecent(ids: string[]) {
  try { localStorage.setItem(LS_RECENT_KEY, JSON.stringify(ids)); } catch {}
}

// ─── Types ────────────────────────────────────────────────────────────────────
type PreviewTab = 'message' | 'username' | 'bio' | 'profile';

// ─── Copy hook ────────────────────────────────────────────────────────────────
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback(async (text: string, id: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
      return true;
    } catch { return false; }
  }, []);
  return { copied, copy };
}

// ─── Font Card ────────────────────────────────────────────────────────────────
interface FontCardProps {
  font: FontStyle;
  transformed: string;
  isFavorite: boolean;
  isRecent: boolean;
  isSelected: boolean;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  onFavorite: (id: string) => void;
  onSelect: (id: string) => void;
}

function FontCard({ font, transformed, isFavorite, isRecent, isSelected, copiedId, onCopy, onFavorite, onSelect }: FontCardProps) {
  const isCopied = copiedId === font.id;
  const display = transformed || font.preview;

  return (
    <div
      className={`flex flex-col rounded-xl border bg-[#1e2030] transition-all duration-150 cursor-pointer ${
        isSelected
          ? 'border-[#5865F2] ring-2 ring-[#5865F2]/40 bg-[#23263a]'
          : 'border-[#2e3147] hover:border-[#5865F2] hover:bg-[#23263a]'
      }`}
      role="article"
      aria-label={`${font.name} font style`}
      onClick={() => onSelect(font.id)}
    >
      {/* Top row: favorite button pinned right, badges wrap freely below */}
      <div className="flex items-start justify-between px-4 pt-3 pb-1 gap-2">
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <span className="text-xs font-medium text-[#5b6282] uppercase tracking-wide">
            {font.category}
          </span>
          {font.trending && (
            <span className="text-[10px] font-bold bg-[#5865F2]/20 text-[#7289da] rounded-full px-2 py-0.5 whitespace-nowrap">
              TRENDING
            </span>
          )}
          {isRecent && (
            <span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 rounded-full px-2 py-0.5 whitespace-nowrap">
              RECENT
            </span>
          )}
          {isSelected && (
            <span className="text-[10px] font-bold bg-green-500/20 text-green-400 rounded-full px-2 py-0.5 whitespace-nowrap">
              PREVIEWING
            </span>
          )}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onFavorite(font.id); }}
          aria-label={isFavorite ? `Remove ${font.name} from favorites` : `Add ${font.name} to favorites`}
          aria-pressed={isFavorite}
          className="shrink-0 mt-0.5 text-lg leading-none transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[#5865F2] rounded"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Font name */}
      <p className="px-4 pb-1 text-sm font-semibold text-[#e3e5f5]">{font.name}</p>

      {/* Transformed preview — flex-1 so it grows but never pushes button off */}
      <div
        className="flex-1 px-4 py-3 text-base text-[#dcddde] break-all leading-loose max-h-[90px] overflow-hidden"
        aria-live="polite"
        aria-label={`Preview: ${display}`}
      >
        {display}
      </div>

      {/* Copy button — always anchored to bottom */}
      <div className="px-4 pb-4 pt-2" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => onCopy(display, font.id)}
          aria-label={isCopied ? 'Copied!' : `Copy ${font.name} text`}
          className={`w-full min-h-[40px] rounded-lg text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#1e2030] ${
            isCopied
              ? 'bg-green-500/20 text-green-400 border border-green-500/40'
              : 'bg-[#5865F2] hover:bg-[#4752C4] text-white'
          }`}
        >
          {isCopied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

// ─── Discord Live Preview ─────────────────────────────────────────────────────
interface DiscordPreviewProps {
  rawText: string;        // the plain input
  styledText: string;     // the font-transformed version (shown in preview)
  selectedFontName: string;
  activeTab: PreviewTab;
  onTabChange: (tab: PreviewTab) => void;
}

const PREVIEW_TABS: { id: PreviewTab; label: string }[] = [
  { id: 'message',  label: '💬 Message'  },
  { id: 'username', label: '👤 Username' },
  { id: 'bio',      label: '📝 Bio'      },
  { id: 'profile',  label: '🖼️ Profile'  },
];

function DiscordPreview({ rawText, styledText, selectedFontName, activeTab, onTabChange }: DiscordPreviewProps) {
  const display = styledText || rawText || 'Your text here...';

  return (
    <div className="rounded-xl border border-[#2e3147] bg-[#1e2030] overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-[#2e3147] bg-[#191b2a]" role="tablist">
        {PREVIEW_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
            className={`flex-1 py-2.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5865F2] ${
              activeTab === tab.id
                ? 'text-[#5865F2] border-b-2 border-[#5865F2] -mb-px bg-[#1e2030]'
                : 'text-[#72767d] hover:text-[#dcddde]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Font label */}
      <div className="px-4 pt-3 pb-1 flex items-center gap-2">
        <span className="text-xs text-[#5b6282]">
          {selectedFontName ? (
            <>Previewing: <span className="text-[#7289da] font-semibold">{selectedFontName}</span></>
          ) : (
            'Click any font card to preview it here'
          )}
        </span>
      </div>

      {/* Preview content */}
      <div className="p-4 pt-2">

        {activeTab === 'message' && (
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-[#5865F2] shrink-0 flex items-center justify-center text-white font-bold text-sm select-none">
              U
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-medium text-white">Username</span>
                <span className="text-xs text-[#72767d]">Today at 3:04 PM</span>
              </div>
              <p className="text-[#dcddde] text-sm break-words leading-relaxed" aria-live="polite">
                {display}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'username' && (
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#5865F2] shrink-0 flex items-center justify-center text-white font-bold text-2xl select-none">
              U
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-base break-words" aria-live="polite">
                {display}
              </p>
              <p className="text-[#72767d] text-sm">Online</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                <span className="text-xs text-[#72767d]">Playing a game</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bio' && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#5865F2] shrink-0 flex items-center justify-center text-white font-bold text-xl select-none">
                U
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Username</p>
                <p className="text-[#72767d] text-xs">username#0001</p>
              </div>
            </div>
            <div className="bg-[#2b2d3e] rounded-lg p-3">
              <p className="text-[#8b8fa8] text-xs font-semibold uppercase tracking-wide mb-2">ABOUT ME</p>
              <p className="text-[#dcddde] text-sm break-words leading-relaxed" aria-live="polite">
                {display}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <div className="h-16 rounded-t-lg bg-gradient-to-r from-[#5865F2] to-[#7289da]"></div>
            <div className="bg-[#2b2d3e] rounded-b-lg p-3 pb-4 relative pt-8">
              <div className="absolute -top-7 left-3 w-14 h-14 rounded-full bg-[#5865F2] border-4 border-[#2b2d3e] flex items-center justify-center text-white font-bold text-xl select-none">
                U
              </div>
              <p className="text-white font-bold text-lg break-words" aria-live="polite">
                {display}
              </p>
              <p className="text-[#72767d] text-xs mt-0.5">username#0001</p>
              <div className="mt-3 p-2 bg-[#1e2030] rounded-lg">
                <p className="text-[#8b8fa8] text-xs font-semibold uppercase tracking-wide mb-1">ABOUT ME</p>
                <p className="text-[#dcddde] text-xs break-words">
                  {display}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FontGenerator() {
  const [input, setInput] = useState('Discord');
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FontCategory | 'All' | 'Favorites' | 'Trending'>('All');
  const [selectedFontId, setSelectedFontId] = useState<string>(FONT_STYLES[0].id);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [recentlyCopied, setRecentlyCopied] = useState<string[]>([]);
  const [previewTab, setPreviewTab] = useState<PreviewTab>('message');
  const { copied: copiedId, copy } = useCopy();
  const inputRef = useRef<HTMLInputElement>(null);

  // Load persisted state
  useEffect(() => {
    setFavorites(loadFavorites());
    setRecentlyCopied(loadRecent());
  }, []);

  // Read URL param ?text=
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('text');
      if (p) setInput(p.slice(0, 120));
    } catch {}
  }, []);

  const displayInput = input || 'Discord';

  // Selected font object
  const selectedFont = useMemo(
    () => FONT_STYLES.find((f) => f.id === selectedFontId) ?? FONT_STYLES[0],
    [selectedFontId]
  );

  // Styled text for the live preview
  const styledPreviewText = useMemo(
    () => selectedFont.transform(displayInput),
    [selectedFont, displayInput]
  );

  // Visible fonts in grid
  const visibleFonts = useMemo<FontStyle[]>(() => {
    if (search.trim()) return searchFonts(search);
    if (activeCategory === 'All') return FONT_STYLES;
    if (activeCategory === 'Trending') return getTrendingFonts();
    if (activeCategory === 'Favorites') return FONT_STYLES.filter((f) => favorites.has(f.id));
    return FONT_STYLES.filter((f) => f.category === activeCategory);
  }, [search, activeCategory, favorites]);

  const topFonts = useMemo(() => getTopFonts(10), []);

  const handleCopy = useCallback(async (text: string, id: string) => {
    const ok = await copy(text, id);
    if (ok) {
      setRecentlyCopied((prev) => {
        const next = [id, ...prev.filter((x) => x !== id)].slice(0, 6);
        saveRecent(next);
        return next;
      });
    }
  }, [copy]);

  const handleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveFavorites(next);
      return next;
    });
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedFontId(id);
  }, []);

  const handleRandomFont = useCallback(() => {
    const r = FONT_STYLES[Math.floor(Math.random() * FONT_STYLES.length)];
    setSelectedFontId(r.id);
    handleCopy(r.transform(displayInput), r.id);
  }, [displayInput, handleCopy]);

  const handleCopyAll = useCallback(() => {
    const all = visibleFonts
      .slice(0, 20)
      .map((f) => `${f.name}: ${f.transform(displayInput)}`)
      .join('\n');
    copy(all, '__all__');
  }, [visibleFonts, displayInput, copy]);

  const handleShare = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}?text=${encodeURIComponent(input)}`;
    copy(url, '__share__');
  }, [input, copy]);

  const filterCategories: Array<FontCategory | 'All' | 'Favorites' | 'Trending'> = [
    'All', 'Trending', 'Favorites', ...FONT_CATEGORIES,
  ];

  return (
    <div className="space-y-6">

      {/* ── Input ── */}
      <div className="rounded-xl border border-[#2e3147] bg-[#1e2030] p-4 md:p-6">
        <label htmlFor="font-input" className="block text-sm font-semibold text-[#e3e5f5] mb-2">
          Type your text
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            id="font-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type anything..."
            maxLength={120}
            className="w-full min-h-[52px] bg-[#191b2a] border border-[#2e3147] rounded-lg px-4 py-3 text-[#dcddde] text-base placeholder:text-[#4a4d6a] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/30 transition-colors pr-10"
            aria-describedby="font-input-hint"
            autoComplete="off"
            spellCheck={false}
          />
          {input && (
            <button
              onClick={() => { setInput(''); inputRef.current?.focus(); }}
              aria-label="Clear input"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a4d6a] hover:text-[#dcddde] transition-colors text-xl leading-none focus:outline-none focus:ring-2 focus:ring-[#5865F2] rounded"
            >
              ×
            </button>
          )}
        </div>
        <p id="font-input-hint" className="mt-1.5 text-xs text-[#5b6282]">
          {input.length}/120 — fonts update instantly · click any card to preview it
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={handleRandomFont}
            className="min-h-[40px] px-4 rounded-lg text-sm font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#1e2030]"
          >
            🎲 Random Font
          </button>
          <button
            onClick={handleCopyAll}
            className="min-h-[40px] px-4 rounded-lg text-sm font-semibold bg-[#2e3147] hover:bg-[#363a56] text-[#e3e5f5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#1e2030]"
          >
            {copiedId === '__all__' ? '✓ Copied!' : '📋 Copy Top 20'}
          </button>
          <button
            onClick={handleShare}
            className="min-h-[40px] px-4 rounded-lg text-sm font-semibold bg-[#2e3147] hover:bg-[#363a56] text-[#e3e5f5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#1e2030]"
          >
            {copiedId === '__share__' ? '✓ Link Copied!' : '🔗 Share Link'}
          </button>
        </div>
      </div>

      {/* ── Live Discord Preview ── */}
      <section aria-labelledby="preview-heading">
        <h2 id="preview-heading" className="text-lg font-bold text-[#e3e5f5] mb-3">
          Live Discord Preview
        </h2>
        <DiscordPreview
          rawText={displayInput}
          styledText={styledPreviewText}
          selectedFontName={selectedFont.name}
          activeTab={previewTab}
          onTabChange={setPreviewTab}
        />
      </section>

      {/* ── Search + Filter ── */}
      <div className="space-y-3">
        <div className="relative">
          <label htmlFor="font-search" className="sr-only">Search fonts</label>
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5b6282] pointer-events-none" aria-hidden="true">🔍</span>
          <input
            id="font-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fonts by name or category..."
            className="w-full min-h-[44px] bg-[#1e2030] border border-[#2e3147] rounded-lg pl-10 pr-4 py-2.5 text-[#dcddde] text-sm placeholder:text-[#4a4d6a] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/30 transition-colors"
          />
        </div>

        <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Font categories">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat && !search}
              onClick={() => { setActiveCategory(cat as typeof activeCategory); setSearch(''); }}
              className={`min-h-[36px] px-3.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] whitespace-nowrap ${
                activeCategory === cat && !search
                  ? 'bg-[#5865F2] text-white'
                  : 'bg-[#1e2030] border border-[#2e3147] text-[#8b8fa8] hover:text-[#dcddde] hover:border-[#5865F2]/50'
              }`}
            >
              {cat === 'Favorites' ? '❤️ Favorites' : cat === 'Trending' ? '🔥 Trending' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Font Grid ── */}
      <section aria-labelledby="fonts-grid-heading">
        <div className="flex items-center justify-between mb-3">
          <h2 id="fonts-grid-heading" className="text-lg font-bold text-[#e3e5f5]">
            {search
              ? `Results for "${search}"`
              : activeCategory === 'All'
              ? `All ${FONT_STYLES.length} Font Styles`
              : activeCategory === 'Favorites'
              ? 'Your Favorites'
              : activeCategory === 'Trending'
              ? '🔥 Trending Fonts'
              : `${activeCategory} Fonts`}
          </h2>
          <span className="text-sm text-[#5b6282]" aria-live="polite" aria-atomic="true">
            {visibleFonts.length} fonts
          </span>
        </div>

        {visibleFonts.length === 0 ? (
          <div className="rounded-xl border border-[#2e3147] bg-[#1e2030] p-8 text-center">
            <p className="text-[#5b6282] text-base">
              {activeCategory === 'Favorites'
                ? 'No favorites yet — click 🤍 on any font card to save it.'
                : `No fonts found for "${search}". Try a different search term.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleFonts.map((font) => (
              <FontCard
                key={font.id}
                font={font}
                transformed={font.transform(displayInput)}
                isFavorite={favorites.has(font.id)}
                isRecent={recentlyCopied.includes(font.id)}
                isSelected={selectedFontId === font.id}
                copiedId={copiedId}
                onCopy={handleCopy}
                onFavorite={handleFavorite}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Recently Copied ── */}
      {recentlyCopied.length > 0 && (
        <section aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="text-lg font-bold text-[#e3e5f5] mb-3">
            Recently Copied
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentlyCopied
              .map((id) => FONT_STYLES.find((f) => f.id === id))
              .filter((f): f is FontStyle => !!f)
              .map((font) => (
                <FontCard
                  key={font.id}
                  font={font}
                  transformed={font.transform(displayInput)}
                  isFavorite={favorites.has(font.id)}
                  isRecent
                  isSelected={selectedFontId === font.id}
                  copiedId={copiedId}
                  onCopy={handleCopy}
                  onFavorite={handleFavorite}
                  onSelect={handleSelect}
                />
              ))}
          </div>
        </section>
      )}

      {/* ── Leaderboard ── */}
      <section aria-labelledby="leaderboard-heading">
        <h2 id="leaderboard-heading" className="text-lg font-bold text-[#e3e5f5] mb-3">
          🏆 Most Popular Font Styles
        </h2>
        <div className="rounded-xl border border-[#2e3147] bg-[#1e2030] overflow-hidden">
          <ol className="divide-y divide-[#2e3147]">
            {topFonts.map((font, idx) => {
              const transformed = font.transform(displayInput);
              return (
                <li
                  key={font.id}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer ${
                    selectedFontId === font.id ? 'bg-[#23263a]' : 'hover:bg-[#23263a]'
                  }`}
                  onClick={() => handleSelect(font.id)}
                >
                  <span
                    className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                      idx === 0 ? 'bg-yellow-500/20 text-yellow-400'
                      : idx === 1 ? 'bg-slate-400/20 text-slate-300'
                      : idx === 2 ? 'bg-amber-700/20 text-amber-600'
                      : 'bg-[#2e3147] text-[#5b6282]'
                    }`}
                    aria-label={`Rank ${idx + 1}`}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#e3e5f5]">{font.name}</p>
                    <p className="text-sm text-[#5b6282] truncate">{transformed}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCopy(transformed, font.id); }}
                    aria-label={copiedId === font.id ? 'Copied!' : `Copy ${font.name}`}
                    className="shrink-0 min-h-[36px] px-3 rounded-lg text-xs font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#1e2030]"
                  >
                    {copiedId === font.id ? '✓' : 'Copy'}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

    </div>
  );
}
