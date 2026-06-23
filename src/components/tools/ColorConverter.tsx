'use client';

import { useState, useEffect, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

// Color conversion functions
const hexToRgb = (hex: string) => {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number) => {
  const toHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const hslToRgb = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return { r, g, b };
};

export default function ColorConverter() {
  const [hex, setHex] = useState('#5865F2');
  const [rgb, setRgb] = useState({ r: 88, g: 101, b: 242 });
  const [hsl, setHsl] = useState({ h: 235, s: 86, l: 65 });
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const newRgb = hexToRgb(hex);
    setRgb(newRgb);
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  }, [hex]);

  const handleHexChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value);
  }, []);

  const handleRgbChange = useCallback((channel: 'r' | 'g' | 'b', value: string) => {
    const num = parseInt(value) || 0;
    const newRgb = { ...rgb, [channel]: num };
    setRgb(newRgb);
    const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
    setHex(newHex);
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  }, [rgb]);

  const handleHslChange = useCallback((channel: 'h' | 's' | 'l', value: string) => {
    const num = parseInt(value) || 0;
    const newHsl = { ...hsl, [channel]: num };
    setHsl(newHsl);
    const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }, [hsl]);

  const handleCopy = useCallback(async (text: string, id: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-8">
        {/* Color Preview */}
        <div className="text-center space-y-4">
          <div
            className="w-full h-40 rounded-2xl shadow-lg transition-all"
            style={{ backgroundColor: hex }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HEX */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              HEX
            </label>
            <div className="relative">
              <input
                type="color"
                value={hex}
                onChange={handleHexChange}
                className="absolute left-0 top-0 w-12 h-full rounded-l-xl"
              />
              <input
                type="text"
                value={hex}
                onChange={handleHexChange}
                className="w-full pl-14 pr-12 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-xl font-mono text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
              <button
                onClick={() => handleCopy(hex, 'hex')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 text-[#5b6282] transition-colors"
              >
                {copied === 'hex' ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RGB */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1a1d2e]">RGB</h3>
            <div className="space-y-3">
              {(['r', 'g', 'b']).map((channel) => (
                <div key={channel} className="flex items-center gap-3">
                  <span className="w-12 font-semibold text-[#5b6282]">{channel.toUpperCase()}</span>
                  <input
                    type="number"
                    min="0"
                    max="255"
                    value={rgb[channel as keyof typeof rgb]}
                    onChange={(e) => handleRgbChange(channel as 'r' | 'g' | 'b', e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                  />
                </div>
              ))}
              <button
                onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
                className="w-full py-2 bg-gray-100 text-[#1a1d2e] font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                {copied === 'rgb' ? <Check size={18} /> : <Copy size={18} />}
                Copy RGB
              </button>
            </div>
          </div>

          {/* HSL */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1a1d2e]">HSL</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-12 font-semibold text-[#5b6282]">H</span>
                <input
                  type="number"
                  min="0"
                  max="360"
                  value={hsl.h}
                  onChange={(e) => handleHslChange('h', e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
                <span className="text-[#5b6282] text-sm">°</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-semibold text-[#5b6282]">S</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={hsl.s}
                  onChange={(e) => handleHslChange('s', e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
                <span className="text-[#5b6282] text-sm">%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-semibold text-[#5b6282]">L</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={hsl.l}
                  onChange={(e) => handleHslChange('l', e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
                />
                <span className="text-[#5b6282] text-sm">%</span>
              </div>
              <button
                onClick={() => handleCopy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'hsl')}
                className="w-full py-2 bg-gray-100 text-[#1a1d2e] font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                {copied === 'hsl' ? <Check size={18} /> : <Copy size={18} />}
                Copy HSL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
