import React from 'react';

interface AuthorTrustBoxProps {
  updatedAt?: string;
  authorName?: string;
}

export default function AuthorTrustBox({ 
  updatedAt = "June 2026", 
  authorName = "FreeDiscordTools Team" 
}: AuthorTrustBoxProps) {
  return (
    <div className="mt-12 bg-white rounded-xl border border-[#E3E6F0] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
      <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
        <span className="text-white text-2xl font-bold">FDT</span>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="text-[#1a1d2e] font-bold text-lg mb-1">Written by the {authorName}</p>
        <p className="text-[#5b6282] text-sm leading-relaxed">
          We build free, high-quality utilities for Discord users, server owners, and developers. Our tools run locally in your browser for maximum privacy.
        </p>
      </div>
      <div className="shrink-0 flex flex-col items-center sm:items-end border-t sm:border-t-0 sm:border-l border-[#E3E6F0] pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
        <span className="text-xs font-bold text-[#8b8fa8] uppercase tracking-wide">Last Updated</span>
        <span className="text-[#1a1d2e] font-medium">{updatedAt}</span>
      </div>
    </div>
  );
}
