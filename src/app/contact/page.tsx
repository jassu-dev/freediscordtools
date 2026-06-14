import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Contact – FreeDiscordTools',
  description: 'Contact the FreeDiscordTools team with questions, feedback, or tool suggestions.',
  alternates: { canonical: `${seoConfig.baseUrl}/contact/` },
  openGraph: {
    title: 'Contact – FreeDiscordTools',
    description: 'Contact the FreeDiscordTools team.',
    url: `${seoConfig.baseUrl}/contact/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact – FreeDiscordTools',
    description: 'Contact the FreeDiscordTools team.',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-6">Contact</h1>
      <div className="text-[#5b6282] space-y-4">
        <p>
          Have a question, feedback, or a suggestion for a new tool? We would love to hear from you.
        </p>
        <p>
          You can reach us at: <a href="mailto:freediscordtools.com@gmail.com" className="text-[#5865F2] hover:underline">freediscordtools.com@gmail.com</a>
        </p>
        <p>
          We review every message and aim to respond within 48 hours on business days.
        </p>
      </div>
    </div>
  );
}
