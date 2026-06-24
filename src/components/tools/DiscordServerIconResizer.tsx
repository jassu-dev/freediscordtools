'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Upload, Download } from 'lucide-react';

export default function DiscordServerIconResizer() {
  const [image, setImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState('512x512');
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizes = [
    { label: '512x512 (Recommended)', value: '512x512', width: 512, height: 512 },
    { label: '256x256', value: '256x256', width: 256, height: 256 },
    { label: '128x128', value: '128x128', width: 128, height: 128 },
    { label: '64x64', value: '64x64', width: 64, height: 64 },
  ];

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImageElement(img);
          setImage(event.target?.result as string);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const getCurrentSize = useCallback(() => {
    return sizes.find(s => s.value === selectedSize) || sizes[0];
  }, [selectedSize]);

  // Update canvas when image or size changes
  useEffect(() => {
    if (!canvasRef.current || !imageElement) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = getCurrentSize();
    canvas.width = size.width;
    canvas.height = size.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw image
    ctx.drawImage(imageElement, 0, 0, size.width, size.height);
  }, [imageElement, getCurrentSize]);

  const handleDownload = useCallback(() => {
    if (!canvasRef.current || !image) return;

    const canvas = canvasRef.current;
    const link = document.createElement('a');
    const size = getCurrentSize();
    link.download = `discord-icon-${size.value}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [image, getCurrentSize]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-8">
        {/* Upload Area */}
        <div className="space-y-4">
          <label className="text-lg font-bold text-[#1a1d2e]">Upload Your Image</label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#E3E6F0] rounded-2xl p-12 text-center cursor-pointer hover:border-[#5865F2] hover:bg-[#F0F2FF] transition-all"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Upload size={48} className="mx-auto text-[#5865F2] mb-4" />
            <p className="text-[#1a1d2e] font-semibold">Click to upload or drag and drop</p>
            <p className="text-[#5b6282] text-sm mt-2">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        {/* Preview */}
        {image && (
          <>
            <div className="space-y-4">
              <label className="text-lg font-bold text-[#1a1d2e]">Preview</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sizes.map((size) => (
                  <div key={size.value} className="space-y-2 text-center">
                    <div className="border border-[#E3E6F0] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={image}
                        alt={`${size.value} preview`}
                        className="object-cover"
                        style={{ width: size.width / 2, height: size.height / 2 }}
                      />
                    </div>
                    <p className="text-sm text-[#5b6282]">{size.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wider">Select Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
              >
                {sizes.map((size) => (
                  <option key={size.value} value={size.value}>{size.label}</option>
                ))}
              </select>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download {getCurrentSize().label}
            </button>
          </>
        )}

        {/* Hidden Canvas for Resizing */}
        <canvas
          ref={canvasRef}
          width={getCurrentSize().width}
          height={getCurrentSize().height}
          className="hidden"
        />
      </div>
    </div>
  );
}
