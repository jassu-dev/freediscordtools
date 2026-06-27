'use client';

import { useState, useRef } from 'react';

const emoteSizes = [
  { label: '128x128', width: 128, height: 128, name: 'Standard Emote' },
  { label: '64x64', width: 64, height: 64, name: 'Small Emote' },
  { label: '32x32', width: 32, height: 32, name: 'Mini Emote' },
];

export default function DiscordEmoteResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSize, setSelectedSize] = useState<(typeof emoteSizes)[0]>(emoteSizes[0]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resizedImageUrl, setResizedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = () => {
    if (!previewUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = selectedSize.width;
      canvas.height = selectedSize.height;
      
      // Draw the image resized
      ctx.drawImage(img, 0, 0, selectedSize.width, selectedSize.height);
      
      const dataUrl = canvas.toDataURL('image/png');
      setResizedImageUrl(dataUrl);
    };
    img.src = previewUrl;
  };

  const handleDownload = () => {
    if (!resizedImageUrl) return;
    const link = document.createElement('a');
    link.href = resizedImageUrl;
    link.download = `discord-emote-${selectedSize.width}x${selectedSize.height}.png`;
    link.click();
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        {/* File Upload */}
        <div className="text-center">
          <div
            className="border-2 border-dashed border-[#E3E6F0] rounded-xl p-8 cursor-pointer hover:border-[#5865F2] transition"
            onClick={() => fileInputRef.current?.click()}
          >
            {selectedFile ? (
              <div className="text-[#1a1d2e]">
                <p className="font-bold">Selected: {selectedFile.name}</p>
                <p className="text-[#5b6282] text-sm mt-2">Click to change file</p>
              </div>
            ) : (
              <div>
                <p className="font-bold text-[#1a1d2e]">Click or drag to upload an image</p>
                <p className="text-[#5b6282] text-sm mt-2">PNG, JPG, GIF supported</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Size Selector */}
        <div className="flex flex-wrap gap-3 justify-center">
          {emoteSizes.map((size) => (
            <button
              key={size.label}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg font-bold transition ${
                selectedSize.label === size.label
                  ? 'bg-[#5865F2] text-white'
                  : 'bg-[#F8F9FF] text-[#1a1d2e] hover:bg-[#E3E6F0]'
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        {/* Resize Button */}
        {previewUrl && (
          <div className="text-center">
            <button
              onClick={handleResize}
              className="px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg"
            >
              Resize Image
            </button>
          </div>
        )}

        {/* Preview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {previewUrl && (
            <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-2">Original Image</h3>
              <img
                src={previewUrl}
                alt="Original"
                className="max-w-full max-h-48 object-contain mx-auto"
              />
            </div>
          )}
          {resizedImageUrl && (
            <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
              <h3 className="font-bold text-[#1a1d2e] mb-2">Resized Image ({selectedSize.label})</h3>
              <img
                src={resizedImageUrl}
                alt="Resized"
                className="max-w-full max-h-48 object-contain mx-auto"
              />
              <button
                onClick={handleDownload}
                className="mt-3 px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition w-full"
              >
                Download Image
              </button>
            </div>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
