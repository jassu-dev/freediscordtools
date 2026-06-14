import type { Metadata } from 'next';
import './globals.css';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: {
    default: 'FreeDiscordTools – Free Discord Utilities',
    template: '%s | FreeDiscordTools',
  },
  description: 'Free Discord utilities for Discord users, server owners, moderators, and developers.',
  openGraph: {
    siteName: seoConfig.siteName,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'FreeDiscordTools' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  other: {
    'theme-color': '#5865F2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F8F9FF] text-[#1a1d2e]">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
