import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BannerDownloaderTool from '@/components/tools/BannerDownloaderTool';

export const metadata: Metadata = {
  title: 'Free Discord Banner & Icon Downloader - High Quality',
  description:
    'Download high-quality Discord server banners and icons instantly. The best free Discord server asset downloader tool for server owners.',
  keywords: [
    'discord server banner download',
    'discord icon grabber',
    'download discord server banner',
    'discord server icon downloader',
    'free discord asset downloader',
    'discord server image grabber',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-banner-downloader/`,
  },
};

const faqItems = [
  {
    question: 'How do I download a Discord server banner?',
    answer: 'To download a Discord server banner, simply paste the server invite link or server ID into our tool. If you use an invite link, we will automatically fetch the high-resolution banner and icon for you.',
  },
  {
    question: 'Do I need a server ID or an invite link?',
    answer: 'Using an invite link is the easiest way as it automatically finds all assets. If you only have a server ID, you will also need to provide the specific asset hash to generate the download link.',
  },
  {
    question: 'Can I download a server icon?',
    answer: 'Yes, our tool allows you to download server icons, banners, and even invite splash screens in high quality.',
  },
  {
    question: 'Is this Discord asset downloader free?',
    answer: 'Yes, our Discord server banner and icon downloader is completely free to use with no account or bot required.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-banner-downloader/`;

export default function DiscordBannerDownloaderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <WebSiteSchema />
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Banner Downloader', href: PAGE_URL },
        ]}
      />
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#1a1d2e] mb-4">Discord Banner & Icon Downloader</h1>
        <p className="text-xl text-[#5b6282]">
          Need to <strong>download discord server banner</strong> or icon? Use our free <strong>discord icon grabber</strong> to get high-quality assets.
        </p>
      </header>

      <section className="bg-white p-8 rounded-2xl border-2 border-[#5865F2] mb-10 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Download Discord Assets</h2>
        <BannerDownloaderTool />
      </section>

      <article className="prose prose-lg max-w-none text-[#5b6282]">
        <h2>Easily Download Discord Server Banners & Icons</h2>
        <p>
          Finding high-quality <strong>discord server banner</strong> images or <strong>discord icons</strong> can be tricky. Whether you want to save a server's aesthetic assets or need a clean copy of an icon for your own design work, our tool makes the process simple.
        </p>
        <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] mt-4 mb-8">
          Confused about how to get the right link from Discord? See our <a href="/blog/download-discord-server-assets-guide/" className="text-[#5865F2] font-bold hover:underline">Full Guide to Downloading Discord Assets</a>.
        </p>

        <h3>Why use our Discord Asset Downloader?</h3>
        <ul>
          <li><strong>High Quality:</strong> Get assets in their original resolution.</li>
          <li><strong>Fast:</strong> Simply paste the link and download.</li>
          <li><strong>Free:</strong> No account, no hidden fees.</li>
        </ul>
      </article>
    </div>
  );
}
