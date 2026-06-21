import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import BannerDownloaderTool from '@/components/tools/BannerDownloaderTool';

export const metadata: Metadata = {
  title: 'Discord Server Banner & Icon Downloader – Free High-Res',
  description:
    'Download any Discord server banner, icon, and invite splash in full resolution. Free Discord asset downloader — paste an invite link and save images instantly.',
  keywords: [
    'discord server banner download',
    'discord icon grabber',
    'download discord server banner',
    'discord server icon downloader',
    'free discord asset downloader',
    'discord server image grabber',
    'discord banner downloader',
    'discord invite splash downloader',
    'save discord server icon',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-banner-downloader/`,
  },
  openGraph: {
    title: 'Discord Server Banner & Icon Downloader – Free High-Res',
    description:
      'Download Discord server banners, icons, and invite splashes in full resolution. Paste an invite link and save instantly — free.',
    url: `${seoConfig.baseUrl}/tools/discord-banner-downloader/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Banner Downloader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Server Banner & Icon Downloader – Free High-Res',
    description: 'Download Discord server banners and icons in full resolution. Free, instant, no account needed.',
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'How do I download a Discord server banner?',
    answer:
      'Paste the server invite link into the tool above. It fetches the server information from Discord\'s API and provides direct download links for all available assets in multiple resolutions.',
  },
  {
    question: 'Can I download a Discord server icon?',
    answer:
      'Yes. The tool downloads server icons, banners, and invite splash images. Icons are available from 16px up to 4096px. Animated icons (GIF) are also supported for boosted servers.',
  },
  {
    question: 'Do I need an account to use the Discord banner downloader?',
    answer:
      'No account, no sign-up, and no Discord login required. The tool uses Discord\'s public invite API endpoint, which is accessible without authentication for public servers.',
  },
  {
    question: 'What file formats are available?',
    answer:
      'Assets are available in WEBP (Discord\'s default format) and PNG. Animated icons are provided as GIF. WEBP offers the smallest file size; PNG offers universal compatibility.',
  },
  {
    question: 'Why is the banner or icon not showing?',
    answer:
      'The server may not have a banner or icon set, or the server may be private and the invite link may have expired. Banners require a server to have Level 2 boost status.',
  },
  {
    question: 'Can I download assets from any Discord server?',
    answer:
      'You can download assets from any server with a valid public invite link. Private servers or servers requiring verification before joining may not return assets.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-banner-downloader/`;

export default function DiscordBannerDownloaderPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Banner & Icon Downloader"
        description="Download Discord server banners, icons, and invite splash images in full resolution. Free, no account required."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Banner Downloader', href: PAGE_URL },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1d2e] mb-2">
            Discord Server Banner & Icon Downloader
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Download any Discord server&apos;s <strong className="text-[#1a1d2e]">banner</strong>, <strong className="text-[#1a1d2e]">icon</strong>, and <strong className="text-[#1a1d2e]">invite splash</strong> in full resolution. Paste the invite link and get direct download links instantly — no account needed.
          </p>
          <p className="bg-[#F8F9FF] border-l-4 border-[#5865F2] p-4 italic text-sm text-[#5b6282] mt-4">
            Want to understand what types of assets Discord servers can have? Read our <a href="/blog/download-discord-server-assets-guide/" className="text-[#5865F2] font-bold hover:underline">Complete Guide to Discord Server Assets</a>.
          </p>
        </header>

        <section aria-labelledby="tool-heading" className="mb-10">
          <h2 id="tool-heading" className="sr-only">Discord Banner & Icon Download Tool</h2>
          <BannerDownloaderTool />
        </section>

        <section aria-labelledby="how-to-heading" className="mb-10">
          <h2 id="how-to-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            How to Download a Discord Server Banner
          </h2>
          <ol className="space-y-3 text-[#5b6282] text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">1</span>
              <span>Open Discord and navigate to the server you want to download assets from.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">2</span>
              <span>Click the server name to open the Server Overview. Copy a permanent invite link from the Invites section.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">3</span>
              <span>Paste the invite link into the input above and click Download. All available assets appear with direct download links.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5865F2] text-white flex items-center justify-center text-sm font-bold">4</span>
              <span>Choose your preferred size and format (WEBP or PNG) and save the file.</span>
            </li>
          </ol>
        </section>

        <section aria-labelledby="assets-heading" className="mb-10 space-y-5 text-[#5b6282] text-base leading-relaxed">
          <h2 id="assets-heading" className="text-2xl font-bold text-[#1a1d2e]">
            What Discord Server Assets Can You Download?
          </h2>

          <p>
            Discord serves all media assets through its CDN at <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">cdn.discordapp.com</code>. The URL structure follows a predictable pattern based on the server ID and an asset hash. Our tool constructs and validates these URLs automatically.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8F9FF] border-b border-[#E3E6F0]">
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Asset</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Boost Requirement</th>
                  <th className="text-left px-4 py-2 text-[#1a1d2e] font-semibold">Max Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6F0]">
                <tr>
                  <td className="px-4 py-2 font-medium text-[#1a1d2e]">Server Icon</td>
                  <td className="px-4 py-2">None (all servers)</td>
                  <td className="px-4 py-2">4096px</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-[#1a1d2e]">Server Banner</td>
                  <td className="px-4 py-2">Level 2</td>
                  <td className="px-4 py-2">4096px</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-[#1a1d2e]">Invite Splash</td>
                  <td className="px-4 py-2">Level 1</td>
                  <td className="px-4 py-2">4096px</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-[#1a1d2e]">Discovery Splash</td>
                  <td className="px-4 py-2">Server Discovery eligible</td>
                  <td className="px-4 py-2">4096px</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Animated icons (for servers with the Animated Icon feature) are indicated by a hash starting with <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">a_</code>. When detected, our tool provides a GIF download link alongside the static formats.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1d2e]">Available Download Sizes</h3>
          <p>
            Discord CDN supports any power-of-2 image size from 16 to 4096 via the <code className="bg-[#F0F2FF] px-1 rounded text-[#5865F2]">?size=</code> query parameter. We provide the most useful sizes: 128, 256, 512, 1024, and 4096. Use 4096 for the highest quality when saving for design reference. Use 128 or 256 for web use where bandwidth matters.
          </p>
        </section>

        <section aria-labelledby="faq-heading" className="mb-10">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-4">
            Discord Banner Downloader FAQ
          </h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-lg bg-white border border-[#E3E6F0]">
                <summary className="px-4 py-3 font-medium text-[#1a1d2e] text-base cursor-pointer list-none flex justify-between items-center gap-2">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] shrink-0 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="px-4 pb-4 pt-1 text-[#5b6282] text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
