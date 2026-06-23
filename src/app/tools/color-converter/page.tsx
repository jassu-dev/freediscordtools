import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import ColorConverter from '@/components/tools/ColorConverter';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What is HEX color?',
    answer: 'HEX is a six-digit hexadecimal code that represents red, green, and blue (RGB) values. It starts with a # followed by six characters (0-9 and A-F).',
  },
  {
    question: 'What is RGB color?',
    answer: 'RGB stands for Red, Green, Blue. Each value ranges from 0 to 255 and represents the intensity of that color component.',
  },
  {
    question: 'What is HSL color?',
    answer: 'HSL stands for Hue, Saturation, Lightness. Hue is the color (0-360°), saturation is intensity (0-100%), and lightness is brightness (0-100%).',
  },
];

export const metadata: Metadata = {
  title: 'Color Converter | HEX to RGB, HSL, and More',
  description: 'Free color converter to convert between HEX, RGB, HSL, HSV, and CMYK instantly. The best color picker and converter tool for designers and developers.',
  keywords: ['color converter', 'hex to rgb', 'rgb to hex', 'hsl to hex', 'color picker', 'color code converter', 'free color converter online'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/color-converter/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/color-converter/`;

export default function ColorConverterPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Color Converter',
          description: 'Free color converter to convert between HEX, RGB, HSL, HSV, and CMYK instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Color Converter', href: PAGE_URL },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Color Converter & Picker
          </h1>
          <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
            Convert colors instantly between HEX, RGB, HSL, and more with our free color converter and picker tool. Perfect for designers and developers.
          </p>
        </header>

        <section className="mb-12">
          <ColorConverter />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>Understanding Color Formats</h2>
          <p>
            Different color formats are used for different purposes. HEX is commonly used in web design, RGB is used for digital displays, and HSL makes it easy to adjust colors intuitively.
          </p>

          <h3>Common Color Formats Explained</h3>
          <ul>
            <li><strong>HEX:</strong> #5865F2 - Six-digit code used in CSS and web design</li>
            <li><strong>RGB:</strong> rgb(88, 101, 242) - Red, Green, Blue values (0-255)</li>
            <li><strong>HSL:</strong> hsl(235, 86%, 65%) - Hue, Saturation, Lightness</li>
          </ul>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
