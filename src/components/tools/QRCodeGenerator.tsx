'use client';

import { useState, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Download, Check } from 'lucide-react';

export default function QRCodeGenerator() {
  const [text, setText] = useState('https://freediscordtools.in');
  const [size, setSize] = useState(256);
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [copied, setCopied] = useState(false);

  const handleDownload = useCallback(() => {
    const svg = document.getElementById('qr-code') as SVGElement;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const handleCopy = useCallback(async () => {
    const svg = document.getElementById('qr-code') as SVGElement;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          // ignore
        }
      });
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
  }, [size]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input & Settings */}
        <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-[#1a1d2e]">QR Code Settings</h3>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
              Text / URL
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text or URL to encode"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[120px] resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
                Size
              </label>
              <input
                type="number"
                min="128"
                max="512"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">
                Error Correction
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              >
                <option value="L">Low (7%)</option>
                <option value="M">Medium (15%)</option>
                <option value="Q">Quartile (25%)</option>
                <option value="H">High (30%)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              onClick={handleCopy}
              className="w-full py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy Image'}
            </button>
            <button
              onClick={handleDownload}
              className="w-full py-3 bg-gray-100 text-[#1a1d2e] font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download SVG
            </button>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl border border-[#E3E6F0]">
            {text && (
              <QRCodeSVG
                id="qr-code"
                value={text}
                size={size}
                level={level}
                includeMargin={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
