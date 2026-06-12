import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy – FreeDiscordTools',
  description: 'Privacy policy for FreeDiscordTools. We do not collect, store, or transmit any user data.',
  alternates: { canonical: `${seoConfig.baseUrl}/privacy-policy/` },
  openGraph: {
    title: 'Privacy Policy – FreeDiscordTools',
    description: 'Privacy policy for FreeDiscordTools.',
    url: `${seoConfig.baseUrl}/privacy-policy/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – FreeDiscordTools',
    description: 'Privacy policy for FreeDiscordTools.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#F2F3F5] mb-6">Privacy Policy</h1>
      <div className="text-[#B9BBBE] space-y-4">
        <p><strong className="text-[#F2F3F5]">Last updated: June 12, 2026</strong></p>
        <p>
          FreeDiscordTools does not collect, store, or transmit any personally identifiable information. All tools on this site operate entirely within your browser.
        </p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Data Collection</h2>
        <p>We do not use cookies, analytics, tracking pixels, or any other data collection mechanisms beyond what your browser provides to serve the page.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Advertising</h2>
        <p>This site uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-[#5865F2] hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
        <h2 className="text-xl font-semibold text-[#F2F3F5] mt-6 mb-2">Contact</h2>
        <p>If you have questions about this privacy policy, please use the <a href="/contact" className="text-[#5865F2] hover:underline">Contact page</a>.</p>
      </div>
    </div>
  );
}
