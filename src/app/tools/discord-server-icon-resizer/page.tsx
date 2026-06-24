import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import DiscordServerIconResizer from '@/components/tools/DiscordServerIconResizer';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What size should a Discord server icon be?',
    answer: 'The recommended Discord server icon size is 512x512 pixels. Our Discord server icon resizer supports all standard Discord icon sizes: 512x512, 256x256, 128x128, and 64x64.',
  },
  {
    question: 'How do I use the Discord server icon resizer?',
    answer: 'Using our Discord icon resizer is easy! First, click on the upload area or drag and drop your image into the box. Then, select the size you want from the dropdown menu (we recommend 512x512). Finally, click the "Download" button to save your perfectly sized Discord server icon!',
  },
  {
    question: 'What image formats work for Discord server icons?',
    answer: 'Discord supports PNG, JPG, and GIF formats for server icons. For best results, we recommend using PNG format, especially if your icon has transparency. Our Discord server icon resizer accepts all these formats and outputs high-quality PNG files.',
  },
  {
    question: 'Is this Discord server icon resizer free?',
    answer: 'Yes! Our Discord server icon resizer is completely free to use. There are no hidden fees, no sign-up required, and no limits on how many images you can resize. Enjoy resizing your Discord icons for free!',
  },
];

export const metadata: Metadata = {
  title: 'Discord Server Icon Resizer | Free Online Tool',
  description: 'Free Discord server icon resizer. Resize your image to perfect Discord icon dimensions (512x512, 256x256, 128x128, 64x64) instantly. The best Discord icon resizer online.',
  keywords: ['discord server icon resizer', 'discord icon resizer', 'resize discord icon', 'discord server icon size', 'discord icon size', 'free discord icon resizer'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/discord-server-icon-resizer/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-server-icon-resizer/`;

export default function DiscordServerIconResizerPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Server Icon Resizer',
          description: 'Free Discord server icon resizer. Resize your image to perfect Discord icon dimensions instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Server Icon Resizer', href: PAGE_URL },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Discord Server Icon Resizer
          </h1>
          <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
            Resize your image to perfect Discord server icon dimensions instantly with our free Discord icon resizer. Supports all standard sizes: 512x512, 256x256, 128x128, and 64x64!
          </p>
        </header>

        <section className="mb-12">
          <DiscordServerIconResizer />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>The Ultimate Guide to Discord Server Icons</h2>
          <p className="mb-6 leading-relaxed">
            Welcome to the complete guide to Discord server icons! If you're a Discord server owner, admin, or just someone who wants a perfect Discord icon, our Discord server icon resizer is the perfect tool for you. With this powerful Discord icon resizer, you can resize any image to the perfect Discord server icon size in seconds—no design skills required!
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Why Use Our Discord Server Icon Resizer?</h3>
          <p className="mb-6 leading-relaxed">
            Our Discord server icon resizer stands out from the crowd for several reasons. First, it's completely free—no hidden fees, no sign-ups, no catch. Second, it's incredibly easy to use: just upload your image, choose a size, and download! Third, it supports all standard Discord icon sizes, from 512x512 (the recommended size) all the way down to 64x64. Fourth, it preserves image quality, so your Discord server icon will look sharp and professional. And fifth, it works entirely in your browser, so you don't need to download any software!
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Discord Server Icon Size: Everything You Need to Know</h3>
          <p className="mb-6 leading-relaxed">
            The first question most people have is: what's the right Discord server icon size? The answer is simple: the recommended Discord server icon size is 512x512 pixels. This is the largest size Discord supports, and it ensures your icon will look great on all devices, from large desktop monitors to small mobile screens. Our Discord server icon resizer makes it easy to resize your image to 512x512, as well as other common sizes like 256x256, 128x128, and 64x64.
          </p>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">How to Resize a Discord Server Icon in 3 Easy Steps</h3>
          <p className="mb-6 leading-relaxed">
            Resizing an image for Discord has never been easier! Here's a step-by-step guide to using our Discord icon resizer:
          </p>
          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li>Upload your image: Click on the upload area or drag and drop your image file into the box. We support PNG, JPG, and GIF formats.</li>
            <li>Choose your size: Select the size you want from the dropdown menu. We recommend 512x512 for the best quality, but we also support 256x256, 128x128, and 64x64.</li>
            <li>Download your icon: Click the "Download" button to save your perfectly sized Discord server icon to your computer!</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Tips for Creating Great Discord Server Icons</h3>
          <p className="mb-6 leading-relaxed">
            A great Discord server icon can make a huge difference in how your server is perceived. Here are some tips to help you create the perfect icon using our Discord server icon resizer:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Use a simple, recognizable design: Remember that your icon will be displayed at small sizes, so keep it simple and easy to recognize.</li>
            <li>Choose high-contrast colors: Make sure your icon stands out against Discord's dark and light themes.</li>
            <li>Use PNG format: PNG supports transparency, which is great for logos and icons. Our Discord server icon resizer outputs PNG files by default.</li>
            <li>Keep it on-brand: Use your server's colors and branding to create a cohesive look.</li>
            <li>Test at small sizes: Make sure your icon looks good even when it's scaled down to 64x64 pixels.</li>
            <li>Avoid too much text: Text can be hard to read at small sizes, so keep it minimal or skip it entirely.</li>
            <li>Use our Discord server icon resizer: Always resize your icon to the correct size (512x512 recommended) before uploading it to Discord.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Discord Icon Size: A Complete Breakdown</h3>
          <p className="mb-6 leading-relaxed">
            As we mentioned earlier, the recommended Discord server icon size is 512x512 pixels. But Discord actually supports several different sizes, and our Discord icon resizer can handle them all! Here's a breakdown of the different Discord icon sizes and when you might want to use them:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>512x512 pixels:</strong> This is the recommended size for Discord server icons. It's the largest size Discord supports, so your icon will look crisp and clear on all devices.</li>
            <li><strong>256x256 pixels:</strong> This is a good alternative if you want a smaller file size without sacrificing too much quality.</li>
            <li><strong>128x128 pixels:</strong> This size is great for smaller displays or if you want to save bandwidth.</li>
            <li><strong>64x64 pixels:</strong> This is the smallest size Discord supports. It's mostly used for legacy purposes, but our Discord server icon resizer can handle it too!</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Why Our Discord Icon Resizer is the Best</h3>
          <p className="mb-6 leading-relaxed">
            There are lots of image resizers out there, but ours is specifically designed for Discord users. Here's what makes our Discord server icon resizer the best choice for your server:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>It's free: No hidden costs, no subscriptions, no sign-ups required</li>
            <li>It's fast: Resize your Discord icon in seconds, no waiting</li>
            <li>It's easy: Intuitive interface that anyone can use</li>
            <li>Supports all Discord icon sizes: 512x512, 256x256, 128x128, and 64x64</li>
            <li>Preserves image quality: High-quality resizing that keeps your icon sharp</li>
            <li>Works in your browser: No software to download or install</li>
            <li>Live preview: See exactly what your resized icon will look like before downloading</li>
            <li>Multiple sizes at once: Preview all sizes at once to choose the perfect one</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#1a1d2e] mb-4 mt-10">Get Started with Your Discord Server Icon Today!</h3>
          <p className="mb-6 leading-relaxed">
            Ready to give your Discord server a perfect icon? Start using our Discord server icon resizer today! With its easy-to-use interface, live preview, and support for all standard Discord icon sizes, you'll have a perfectly sized icon in no time. And best of all, it's completely free—so what are you waiting for? Upload your image and start resizing your Discord server icon now!
          </p>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
