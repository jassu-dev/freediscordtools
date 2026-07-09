import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'About Us – FreeDiscordTools Team & E-E-A-T Standards',
  description: 'Meet the FreeDiscordTools team. Learn about our developer utilities, financial tools, privacy-first standards, and quality verification processes.',
  alternates: { canonical: `${seoConfig.baseUrl}/about/` },
  openGraph: {
    title: 'About Us – FreeDiscordTools Team & E-E-A-T Standards',
    description: 'Learn who is behind FreeDiscordTools, our rigorous testing standards, and our privacy-first browser tools.',
    url: `${seoConfig.baseUrl}/about/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – FreeDiscordTools Team & E-E-A-T Standards',
    description: 'Meet the FreeDiscordTools team and read about our privacy standards.',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 text-[#373b4d]">
      
      {/* Intro Header */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1d2e] tracking-tight leading-tight">
          About <span className="text-[#5865F2]">FreeDiscordTools</span>
        </h1>
        <p className="text-lg md:text-xl text-[#5b6282] max-w-3xl leading-relaxed">
          Founded in 2026, FreeDiscordTools is a premium collection of 100% browser-based utilities built to simplify career development, responsive design, and Discord server management.
        </p>
      </header>

      {/* Core Principles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-[#E3E6F0] space-y-3 shadow-sm">
          <span className="text-2xl" aria-hidden="true">🔒</span>
          <h2 className="text-xl font-bold text-[#1a1d2e]">100% Client-Side Privacy</h2>
          <p className="text-sm text-[#5b6282] leading-relaxed">
            Your data is your own. Unlike other converters or scanners, all our calculators, formatting tools, and builders execute entirely inside your local browser. No data, files, or parameters are sent to a remote server. This is the safest way to test sensitive keys, resumes, and parameters online.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E3E6F0] space-y-3 shadow-sm">
          <span className="text-2xl" aria-hidden="true">🧪</span>
          <h2 className="text-xl font-bold text-[#1a1d2e]">Rigorous Testing Standards</h2>
          <p className="text-sm text-[#5b6282] leading-relaxed">
            Accuracy is paramount. We build our tools using programmatic verification models, such as property-based testing and unit testing. Our formulas (including tax bombs and pixel conversions) are cross-checked against hundreds of random inputs before they are deployed to production.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="space-y-6">
        <div className="space-y-2 border-b border-[#E3E6F0] pb-4">
          <h2 className="text-3xl font-extrabold text-[#1a1d2e]">Meet Our Editorial &amp; Dev Team</h2>
          <p className="text-base text-[#5b6282]">
            Our developers and consultants ensure the tools are mathematically accurate, performant, and up-to-date.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alex Profile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-2xl bg-white border border-[#E3E6F0] shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0 text-white font-extrabold text-xl shadow-lg shadow-[#5865F2]/20">
              AR
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#1a1d2e]">Alex Rivera</h3>
              <p className="text-xs font-bold text-[#5865F2] uppercase tracking-wider">Lead Developer &amp; Tool Architect</p>
              <p className="text-xs text-[#5b6282] leading-relaxed">
                Alex is a veteran front-end engineer and developer tool advocate. He designs our interface systems and oversees property-based unit testing pipelines to maintain lightweight, sub-millisecond execution speeds.
              </p>
            </div>
          </div>

          {/* Sarah Profile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-2xl bg-white border border-[#E3E6F0] shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#EB459E] flex items-center justify-center shrink-0 text-white font-extrabold text-xl shadow-lg shadow-[#EB459E]/20">
              SC
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#1a1d2e]">Sarah Chen, CPA</h3>
              <p className="text-xs font-bold text-[#EB459E] uppercase tracking-wider">QA Specialist &amp; Financial Advisor</p>
              <p className="text-xs text-[#5b6282] leading-relaxed">
                Sarah brings years of experience in auditing and finance. She acts as our calculation reviewer, ensuring that tools like the Student Loan Tax Calculator remain compliant with standard IRS rules and 1099-C guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification standards */}
      <section className="p-8 rounded-2xl bg-[#F8F9FF] border border-[#5865F2]/10 space-y-4">
        <h2 className="text-2xl font-bold text-[#1a1d2e]">Our Quality Verification Methods</h2>
        <p className="text-sm text-[#5b6282] leading-relaxed">
          Before launching any conversion or calculation tool on FreeDiscordTools:
        </p>
        <ol className="list-decimal pl-5 text-sm text-[#5b6282] space-y-2">
          <li><strong>Source Verification:</strong> Calculations (e.g. IRS insolvency formulas or W3C CSS specifications) are documented and referenced from official institutional portals.</li>
          <li><strong>Mathematical Verification:</strong> We code independent reference calculators and verify that both implementations output equivalent numbers across large datasets.</li>
          <li><strong>UX Accessibility Audit:</strong> We verify focus outlines, screen-reader headings, and mobile layouts to guarantee a premium experience for every user.</li>
        </ol>
      </section>

      {/* Suggestion CTA */}
      <footer className="text-center pt-4">
        <p className="text-sm text-[#5b6282]">
          Have a suggestion, spot a bug, or need custom utility options? Let us know on the{' '}
          <a href="/contact/" className="text-[#5865F2] font-bold hover:underline">Contact page</a>.
        </p>
      </footer>

    </div>
  );
}
