import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-8 text-[#373b4d]">
      
      {/* 404 Indicator */}
      <div className="space-y-3">
        <span className="text-7xl block animate-bounce" aria-hidden="true">🌌</span>
        <h1 className="text-5xl font-black text-[#1a1d2e] tracking-tight leading-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-[#5b6282] max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
      </div>

      {/* Suggested navigation */}
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] space-y-6 shadow-sm max-w-lg mx-auto">
        <h2 className="text-base font-bold text-[#1a1d2e] uppercase tracking-wider">
          Popular Free Utilities
        </h2>
        <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
          <Link
            href="/tools/discord-timestamp-generator/"
            className="p-3 rounded-xl border border-gray-100 bg-[#F8F9FF] hover:bg-[#F0F2FF] text-[#5865F2] hover:border-[#5865F2]/20 transition-all text-center"
          >
            ⏰ Timestamp Gen
          </Link>
          <Link
            href="/tools/discord-webhook-sender/"
            className="p-3 rounded-xl border border-gray-100 bg-[#F8F9FF] hover:bg-[#F0F2FF] text-[#5865F2] hover:border-[#5865F2]/20 transition-all text-center"
          >
            ⚙️ Webhook Sender
          </Link>
          <Link
            href="/tools/discord-font-generator/"
            className="p-3 rounded-xl border border-gray-100 bg-[#F8F9FF] hover:bg-[#F0F2FF] text-[#5865F2] hover:border-[#5865F2]/20 transition-all text-center"
          >
            ✏️ Font Generator
          </Link>
          <Link
            href="/tools/ats-resume-checker/"
            className="p-3 rounded-xl border border-gray-100 bg-[#F8F9FF] hover:bg-[#F0F2FF] text-[#5865F2] hover:border-[#5865F2]/20 transition-all text-center"
          >
            💼 ATS CV Checker
          </Link>
        </div>
      </div>

      {/* Back home action */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-xl transition-all shadow-md shadow-[#5865F2]/20 cursor-pointer min-h-[44px]"
        >
          Return to Homepage
        </Link>
      </div>

    </div>
  );
}
