import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'About FreeDiscordTools',
  description: 'Learn about FreeDiscordTools free, fast Discord utilities built for users, server owners, and developers.',
  alternates: { canonical: `${seoConfig.baseUrl}/about/` },
  openGraph: {
    title: 'About FreeDiscordTools',
    description: 'Free, fast Discord utilities built for users, server owners, and developers.',
    url: `${seoConfig.baseUrl}/about/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FreeDiscordTools',
    description: 'Free, fast Discord utilities built for users, server owners, and developers.',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-6">About FreeDiscordTools</h1>
      <div className="prose prose-invert max-w-none text-[#373b4d] space-y-4">
        <p>
          FreeDiscordTools is a collection of free, browser-based utilities designed to make Discord easier to use for everyone from casual users to professional server administrators and bot developers.
        </p>
        <p>
          Every tool on this site runs entirely in your browser. No data is ever sent to a server, no account or login is required, and there are no usage limits. Our tools are designed to be fast, accurate, and accessible on any device.
        </p>
        <p>
          We started with the Discord Timestamp Generator because it solves a real pain point for international communities: coordinating event times across time zones. We plan to expand the toolset based on community feedback.
        </p>
        <p>
          Have a suggestion? Use the <a href="/contact" className="text-[#5865F2] hover:underline">Contact page</a> to reach us.
        </p>
      </div>
    </div>
  );
}
