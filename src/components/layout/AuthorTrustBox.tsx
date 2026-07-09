import React from 'react';

interface AuthorTrustBoxProps {
  updatedAt?: string;
  authorName?: string;
}

export default function AuthorTrustBox({ 
  updatedAt = "June 2026", 
  authorName = "FreeDiscordTools Editorial Team" 
}: AuthorTrustBoxProps) {
  return (
    <div className="mt-12 bg-white rounded-2xl border border-[#E3E6F0] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
      <div className="w-14 h-14 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0 shadow-md shadow-[#5865F2]/20">
        <span className="text-white text-lg font-black">FDT</span>
      </div>
      <div className="flex-1 text-center sm:text-left space-y-1">
        <p className="text-[#1a1d2e] font-extrabold text-base">Verified by the {authorName}</p>
        <p className="text-[#5b6282] text-xs leading-relaxed">
          Our online tools are built and tested client-side to ensure absolute data privacy. Learn about our verification standards, calculation reviews, and technical crew on our <a href="/about/" className="text-[#5865F2] font-bold hover:underline">About page</a>.
        </p>
      </div>
      <div className="shrink-0 flex flex-col items-center sm:items-end border-t sm:border-t-0 sm:border-l border-[#E3E6F0] pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
        <span className="text-[10px] font-bold text-[#8b8fa8] uppercase tracking-wider">Last Verified</span>
        <span className="text-[#1a1d2e] text-xs font-bold">{updatedAt}</span>
      </div>
    </div>
  );
}
