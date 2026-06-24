'use client';

import { useState, useCallback } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

export default function DiscordRoleColorGradientGenerator() {
  const [startColor, setStartColor] = useState('#5865F2');
  const [endColor, setEndColor] = useState('#EB459E');
  const [gradientDirection, setGradientDirection] = useState('to right');
  const [copied, setCopied] = useState(false);

  const generateRandomColors = useCallback(() => {
    const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setStartColor(randomColor());
    setEndColor(randomColor());
  }, []);

  const handleCopy = useCallback(async () => {
    const gradientCss = `linear-gradient(${gradientDirection}, ${startColor}, ${endColor})`;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(gradientCss);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = gradientCss;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }, [startColor, endColor, gradientDirection]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-8">
        {/* Gradient Preview */}
        <div className="space-y-4">
          <label className="text-lg font-bold text-[#1a1d2e]">Gradient Preview</label>
          <div
            className="w-full h-40 rounded-2xl shadow-lg"
            style={{ background: `linear-gradient(${gradientDirection}, ${startColor}, ${endColor})` }}
          />
        </div>

        {/* Color Pickers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">Start Color</label>
            <div className="flex gap-3">
              <input
                type="color"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="w-12 h-12 rounded-xl border border-[#E3E6F0]"
              />
              <input
                type="text"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">End Color</label>
            <div className="flex gap-3">
              <input
                type="color"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="w-12 h-12 rounded-xl border border-[#E3E6F0]"
              />
              <input
                type="text"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] font-mono focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
            </div>
          </div>
        </div>

        {/* Gradient Direction */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">Gradient Direction</label>
          <select
            value={gradientDirection}
            onChange={(e) => setGradientDirection(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
          >
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to bottom">To Bottom</option>
            <option value="to top">To Top</option>
            <option value="to bottom right">To Bottom Right</option>
            <option value="to bottom left">To Bottom Left</option>
            <option value="to top right">To Top Right</option>
            <option value="to top left">To Top Left</option>
            <option value="90deg">90 Degrees</option>
            <option value="180deg">180 Degrees</option>
            <option value="270deg">270 Degrees</option>
            <option value="45deg">45 Degrees</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={generateRandomColors}
            className="flex-1 py-3 bg-gray-100 text-[#1a1d2e] font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Randomize Colors
          </button>
          <button
            onClick={handleCopy}
            className="flex-1 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {copied ? 'Copied!' : 'Copy Gradient CSS'}
          </button>
        </div>
      </div>
    </div>
  );
}
