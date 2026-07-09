import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import ContactForm from '@/components/layout/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – Suggest Tools & Support Feedback',
  description: 'Get in touch with the FreeDiscordTools team. Report bugs, request new browser-based utilities, or ask questions about our privacy policies.',
  alternates: { canonical: `${seoConfig.baseUrl}/contact/` },
  openGraph: {
    title: 'Contact Us – Suggest Tools & Support Feedback',
    description: 'Get in touch with the FreeDiscordTools team. Support, tool requests, and bug reports.',
    url: `${seoConfig.baseUrl}/contact/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Suggest Tools & Support Feedback',
    description: 'Contact the FreeDiscordTools team.',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12 text-[#373b4d]">
      
      {/* Intro Header */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1d2e] tracking-tight leading-tight">
          Get in Touch with the <span className="text-[#5865F2]">FDT Team</span>
        </h1>
        <p className="text-base md:text-lg text-[#5b6282] max-w-2xl mx-auto leading-relaxed">
          Have a tool idea, found a calculation discrepancy, or want to discuss advertising opportunities? Use the form below or drop us an email.
        </p>
      </header>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Info Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E3E6F0] space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1d2e] border-b border-gray-100 pb-2">
              Support Channels
            </h2>
            
            <div className="space-y-3 text-sm leading-relaxed text-[#5b6282]">
              <p>
                We review every submission we receive and attempt to reply to direct inquiries within <strong>24 to 48 hours</strong> on regular business days.
              </p>
              <div>
                <span className="font-bold text-[#1a1d2e] block">Email Support:</span>
                <a href="mailto:freediscordtools.com@gmail.com" className="text-[#5865F2] hover:underline font-semibold">
                  freediscordtools.com@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F9FF] border border-[#5865F2]/10 space-y-3">
            <h3 className="text-sm font-bold text-[#1a1d2e]">🛡️ Data Privacy Notice</h3>
            <p className="text-xs text-[#5b6282] leading-relaxed">
              Form submissions are processed securely. Your name and email address are only used to reply to your inquiry, and are never shared or sold to third-party list providers.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
}
