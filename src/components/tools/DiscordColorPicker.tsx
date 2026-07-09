'use client';

import { useState } from 'react';
import { Copy, Check, Eye } from 'lucide-react';

interface ColorSwatch {
  name: string;
  hex: string;
  category: string;
}

const DISCORD_COLORS: ColorSwatch[] = [
  // Discord Brand Colors
  { name: 'Discord Blurple', hex: '#5865F2', category: 'Discord Brand' },
  { name: 'Discord Green', hex: '#57F287', category: 'Discord Brand' },
  { name: 'Discord Yellow', hex: '#FEE75C', category: 'Discord Brand' },
  { name: 'Discord Fuchsia', hex: '#EB459E', category: 'Discord Brand' },
  { name: 'Discord Red', hex: '#ED4245', category: 'Discord Brand' },
  { name: 'Discord White', hex: '#FFFFFF', category: 'Discord Brand' },

  // Blues
  { name: 'Royal Blue', hex: '#4169E1', category: 'Blues' },
  { name: 'Cornflower', hex: '#6495ED', category: 'Blues' },
  { name: 'Sky Blue', hex: '#87CEEB', category: 'Blues' },
  { name: 'Dodger Blue', hex: '#1E90FF', category: 'Blues' },
  { name: 'Steel Blue', hex: '#4682B4', category: 'Blues' },
  { name: 'Navy', hex: '#000080', category: 'Blues' },

  // Reds & Pinks
  { name: 'Crimson', hex: '#DC143C', category: 'Reds & Pinks' },
  { name: 'Hot Pink', hex: '#FF69B4', category: 'Reds & Pinks' },
  { name: 'Deep Pink', hex: '#FF1493', category: 'Reds & Pinks' },
  { name: 'Tomato', hex: '#FF6347', category: 'Reds & Pinks' },
  { name: 'Salmon', hex: '#FA8072', category: 'Reds & Pinks' },
  { name: 'Dark Red', hex: '#8B0000', category: 'Reds & Pinks' },

  // Greens
  { name: 'Lime Green', hex: '#32CD32', category: 'Greens' },
  { name: 'Spring Green', hex: '#00FF7F', category: 'Greens' },
  { name: 'Sea Green', hex: '#2E8B57', category: 'Greens' },
  { name: 'Forest Green', hex: '#228B22', category: 'Greens' },
  { name: 'Olive', hex: '#808000', category: 'Greens' },
  { name: 'Dark Olive', hex: '#556B2F', category: 'Greens' },

  // Yellows & Oranges
  { name: 'Gold', hex: '#FFD700', category: 'Yellows & Oranges' },
  { name: 'Orange', hex: '#FFA500', category: 'Yellows & Oranges' },
  { name: 'Dark Orange', hex: '#FF8C00', category: 'Yellows & Oranges' },
  { name: 'Khaki', hex: '#F0E68C', category: 'Yellows & Oranges' },
  { name: 'Sandy Brown', hex: '#F4A460', category: 'Yellows & Oranges' },
  { name: 'Dark Goldenrod', hex: '#B8860B', category: 'Yellows & Oranges' },

  // Purples
  { name: 'Purple', hex: '#800080', category: 'Purples' },
  { name: 'Medium Purple', hex: '#9370DB', category: 'Purples' },
  { name: 'Dark Violet', hex: '#9400D3', category: 'Purples' },
  { name: 'Indigo', hex: '#4B0082', category: 'Purples' },
  { name: 'Orchid', hex: '#DA70D6', category: 'Purples' },
  { name: 'Plum', hex: '#DDA0DD', category: 'Purples' },

  // Neutrals
  { name: 'Light Grey', hex: '#D3D3D3', category: 'Neutrals' },
  { name: 'Silver', hex: '#C0C0C0', category: 'Neutrals' },
  { name: 'Dark Grey', hex: '#A9A9A9', category: 'Neutrals' },
  { name: 'Charcoal', hex: '#36454F', category: 'Neutrals' },
  { name: 'Cyan', hex: '#00FFFF', category: 'Aqua & Teals' },
  { name: 'Teal', hex: '#008080', category: 'Aqua & Teals' },
  { name: 'Aquamarine', hex: '#7FFFD4', category: 'Aqua & Teals' },
  { name: 'Turquoise', hex: '#40E0D0', category: 'Aqua & Teals' },
];

function hexToDecimal(hex: string): number {
  return parseInt(hex.replace('#', ''), 16);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return null;
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
}

function isLight(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.6;
}

function isValidHex(hex: string): boolean {
  return /^#?[0-9A-Fa-f]{6}$/.test(hex);
}

function normalizeHex(hex: string): string {
  const cleaned = hex.startsWith('#') ? hex : `#${hex}`;
  return cleaned.toUpperCase();
}

export default function DiscordColorPicker() {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch | null>(null);
  const [customHex, setCustomHex] = useState('');
  const [customError, setCustomError] = useState('');
  const [copied, setCopied] = useState('');

  const activeColor = selectedColor?.hex ?? (isValidHex(customHex) ? normalizeHex(customHex) : null);
  const activeName = selectedColor?.name ?? (activeColor ? 'Custom Color' : null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(''), 1500);
    });
  };

  const handleCustomHex = (val: string) => {
    setCustomHex(val);
    setSelectedColor(null);
    if (val.length > 0 && !isValidHex(val)) {
      setCustomError('Enter a valid 6-digit hex code (e.g. #FF5733)');
    } else {
      setCustomError('');
    }
  };

  const categories = Array.from(new Set(DISCORD_COLORS.map(c => c.category)));

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <div
        className="w-full rounded-2xl p-6 flex items-center justify-between gap-4 transition-colors duration-300 border"
        style={{
          backgroundColor: activeColor ?? '#F8F9FF',
          borderColor: activeColor ? `${activeColor}40` : '#E3E6F0',
        }}
      >
        <div>
          <p
            className="text-xs font-bold uppercase tracking-wider mb-1 transition-colors"
            style={{ color: activeColor ? (isLight(activeColor) ? '#1a1d2e' : '#ffffff88') : '#8b8fa8' }}
          >
            Role Preview
          </p>
          <p
            className="text-xl font-black transition-colors"
            style={{ color: activeColor ? (isLight(activeColor) ? '#1a1d2e' : '#ffffff') : '#1a1d2e' }}
          >
            {activeName ?? 'Select a color below'}
          </p>
          {activeColor && (
            <p
              className="font-mono text-sm mt-1"
              style={{ color: activeColor ? (isLight(activeColor) ? '#373b4d' : '#ffffff99') : '#5b6282' }}
            >
              {activeColor}
            </p>
          )}
        </div>
        <div
          className="w-14 h-14 rounded-xl border-2 border-white/20 shadow-lg shrink-0 flex items-center justify-center"
          style={{ backgroundColor: activeColor ?? '#E3E6F0' }}
        >
          <Eye size={20} className={activeColor && !isLight(activeColor) ? 'text-white/70' : 'text-gray-400'} />
        </div>
      </div>

      {/* Custom Hex Input */}
      <div className="bg-white rounded-2xl border border-[#E3E6F0] p-5 shadow-sm space-y-3">
        <h3 className="text-xs font-bold text-[#2d3149] uppercase tracking-wider">Custom Hex Color</h3>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="#5865F2"
              value={customHex}
              maxLength={7}
              onChange={(e) => handleCustomHex(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm font-mono text-[#0f111a] placeholder-gray-400 focus:outline-none focus:ring-2 ${
                customError ? 'border-red-300 focus:ring-red-200/20' : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]/20'
              }`}
            />
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-gray-200 shadow-sm"
              style={{ backgroundColor: isValidHex(customHex) ? normalizeHex(customHex) : '#E3E6F0' }}
            />
          </div>
          <input
            type="color"
            value={isValidHex(customHex) ? normalizeHex(customHex) : '#5865F2'}
            onChange={(e) => handleCustomHex(e.target.value)}
            className="w-11 h-11 p-0.5 rounded-xl border border-[#E3E6F0] cursor-pointer bg-white"
            title="Open color picker"
          />
        </div>
        {customError && <p className="text-xs text-red-500 font-semibold">{customError}</p>}
      </div>

      {/* Color Grid */}
      <div className="bg-white rounded-2xl border border-[#E3E6F0] p-5 shadow-sm space-y-5">
        <h3 className="text-xs font-bold text-[#2d3149] uppercase tracking-wider">Discord Role Color Presets</h3>
        {categories.map((cat) => (
          <div key={cat}>
            <p className="text-[10px] font-bold text-[#8b8fa8] uppercase tracking-widest mb-2">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {DISCORD_COLORS.filter(c => c.category === cat).map((color) => (
                <button
                  key={color.hex}
                  onClick={() => { setSelectedColor(color); setCustomHex(''); setCustomError(''); }}
                  title={`${color.name} (${color.hex})`}
                  className={`w-8 h-8 rounded-lg border-2 transition-all cursor-pointer shadow-sm hover:scale-110 ${
                    selectedColor?.hex === color.hex
                      ? 'border-[#5865F2] ring-2 ring-[#5865F2]/30 scale-110'
                      : 'border-white hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Copy Values */}
      {activeColor && (
        <div className="bg-white rounded-2xl border border-[#E3E6F0] shadow-sm overflow-hidden animate-in fade-in duration-200">
          <div className="px-5 py-3 border-b border-[#F0F2FF]">
            <p className="text-xs font-bold text-[#2d3149] uppercase tracking-wider">Color Values — Click to Copy</p>
          </div>
          {[
            { label: 'Hex Code', value: activeColor, hint: 'Use in role color settings' },
            { label: 'Decimal (Integer)', value: hexToDecimal(activeColor).toString(), hint: 'For Discord API & bots' },
            { label: 'RGB', value: (() => { const rgb = hexToRgb(activeColor); return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : ''; })(), hint: 'For CSS styling' },
          ].map(({ label, value, hint }) => (
            <button
              key={label}
              onClick={() => copy(value, label)}
              className="w-full flex items-center justify-between gap-4 px-5 py-3.5 border-b last:border-b-0 border-[#F0F2FF] hover:bg-[#F8F9FF] transition-colors cursor-pointer group text-left"
            >
              <div>
                <p className="text-xs font-bold text-[#2d3149]">{label}</p>
                <p className="text-[10px] text-[#8b8fa8]">{hint}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono font-semibold text-[#1a1d2e]">{value}</span>
                <span className="text-[#5865F2] group-hover:text-[#4752C4] transition-colors">
                  {copied === label ? <Check size={14} /> : <Copy size={14} />}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
