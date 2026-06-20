import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import { seoConfig } from '@/config/seo';
import { adsConfig } from '@/config/ads';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  applicationName: 'FreeDiscordTools',
  authors: [{ name: 'FreeDiscordTools Team', url: seoConfig.baseUrl }],
  category: 'Technology',
  title: {
    default: 'FreeDiscordTools – Free Discord & Developer Utilities',
    template: '%s | FreeDiscordTools',
  },
  description:
    'Free browser-based tools for Discord users, server owners, developers, and job seekers. Discord timestamp generator, font generator, ATS resume checker, PX to REM converter — no sign-up, no limits.',
  keywords: [
    'free discord tools',
    'discord timestamp generator',
    'discord font generator',
    'discord colored text',
    'ats resume checker',
    'px to rem converter',
    'bionic reading converter',
    'discord webhook sender',
    'discord permission calculator',
  ],
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
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.publisherId}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} ${inter.variable} min-h-screen flex flex-col bg-[#F8F9FF] text-[#1a1d2e]`}>
        <GoogleAnalytics />
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
