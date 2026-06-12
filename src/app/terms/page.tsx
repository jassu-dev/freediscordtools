import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Terms of Service – FreeDiscordTools',
  description: 'Terms of service for FreeDiscordTools.',
  alternates: { canonical: `${seoConfig.baseUrl}/terms/` },
  openGraph: {
    title: 'Terms of Service – FreeDiscordTools',
    description: 'Terms of service for FreeDiscordTools.',
    url: `${seoConfig.baseUrl}/terms/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service – FreeDiscordTools',
    description: 'Terms of service for FreeDiscordTools.',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#F2F3F5] mb-6">Terms of Service</h1>
      <div className="text-[#B9BBBE] space-y-4">
        <p><strong className="text-[#F2F3F5]">Last updated: June 12, 2026</strong></p>
        <p>
          By using FreeDiscordTools, you agree to these terms of service. If you do not agree, please do not use the site.
        </p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Use of Service</h2>
        <p>FreeDiscordTools provides free, browser-based utilities for Discord users. You may use these tools for personal and commercial purposes, provided you do not misuse them or attempt to harm the service or other users.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Disclaimer of Warranties</h2>
        <p>The tools are provided &quot;as is&quot; without warranty of any kind. We do not guarantee that the tools will be error-free or continuously available.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Limitation of Liability</h2>
        <p>FreeDiscordTools is not liable for any damages arising from your use of the site or its tools.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Changes to Terms</h2>
        <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Contact</h2>
        <p>Questions about these terms? Contact us via the <a href="/contact" className="text-[#5865F2] hover:underline">Contact page</a>.</p>
      </div>
    </div>
  );
}
