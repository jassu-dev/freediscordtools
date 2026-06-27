import type { Metadata } from 'next';
import Script from 'next/script';
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

const websiteSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: seoConfig.siteName,
  url: seoConfig.baseUrl,
  description: 'Free browser-based tools for Discord users, developers, and job seekers.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${seoConfig.baseUrl}/tools/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  applicationName: 'FreeDiscordTools',
  authors: [{ name: 'FreeDiscordTools Team', url: seoConfig.baseUrl }],
  category: 'Technology',
  title: {
    default: 'FreeDiscordTools – Free Discord Utilities & Online Web Tools',
    template: '%s | FreeDiscordTools',
  },
  description:
    'The #1 collection of free browser-based tools for Discord users, developers, and creators. Discord timestamp generator, font generator, case converter, ATS resume checker, and more. 100% free, no sign-up, no limits.',
  keywords: [
    'free discord tools',
    'discord timestamp generator',
    'discord font generator',
    'discord colored text',
    'ats resume checker',
    'discord bio generator',
    'discord status generator',
    'discord status ideas',
    'discord webhook sender',
    'discord webhook message sender',
    'discord permission calculator',
    'discord username checker',
    'are discord usernames case sensitive',
    'discord username rules',
    'discord message splitter',
    'discord character limit',
    'case converter',
    'word counter',
    'px to rem converter',
    'bionic reading converter',
    'bionic reading',
    'password generator',
    'color converter',
    'qr code generator',
    'json formatter',
    'base64 encoder',
    'discord role color gradient generator',
    'discord server icon resizer',
    'discord rules generator',
    'discord server rules',
    'best discord rules',
    'discord rules template',
    'discord rules list',
    'gaming discord rules',
    'how to create discord rules',
    'how to make discord rules',
    'discord snowflake',
    'discord embed generator',
  ],
  verification: {
    yandex: '284657c1f56e4315',
  },
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
    'script:ld+json': websiteSchema,
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
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="r7H9HRT3d9uQqlnHmWsvKw" async></script>
      </head>
      <body className={`${inter.className} ${inter.variable} min-h-screen flex flex-col bg-[#F8F9FF] text-[#1a1d2e]`}>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.publisherId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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
