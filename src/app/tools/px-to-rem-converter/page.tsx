import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import { buildFaqJsonLd } from '@/lib/jsonld';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PxToRemConverter from '@/components/tools/PxToRemConverter';

const faqItems = [
  {
    question: 'How do I use this PX to REM calculator?',
    answer: 'To use our pixels to REM calculator, simply type your pixel value in the PX input field. The tool instantly calculates the REM equivalent based on your root font size. You can also edit the REM field to use it as a REM to PX converter.',
  },
  {
    question: 'How is the PX to REM conversion calculated?',
    answer: 'The PX to REM conversion is calculated using the formula: REM = PX / Root Font Size. If your root font size is 16px, then 32px is equal to 2rem (32 / 16 = 2). Our pixel to rem calculator handles this math automatically.',
  },
  {
    question: 'Can this tool act as a REM to PX converter?',
    answer: 'Yes! This utility is a fully bi-directional tool. You can input REM values in the root EM field to instantly calculate the corresponding absolute pixels (PX) based on your custom base size.',
  },
  {
    question: 'Why should developers convert pixels to REM?',
    answer: 'Converting pixels to REM is critical for responsive web design and accessibility (a11y). Relative REM units scale based on browser preferences, while absolute pixels remain fixed, which can prevent visually impaired users from scaling text sizes.',
  },
];
export const metadata: Metadata = {
  title: 'PX to REM Converter | Pixels to REM Calculator & REM to PX Converter',
  description:
    'Free online PX to REM converter and pixels to REM calculator. Easily perform PX to REM conversion or REM to PX calculations with custom root font sizes.',
  keywords: [
    'px to rem',
    'pixels to rem',
    'px to rem calculator',
    'rem to px converter',
    'pixel to rem calculator',
    'px to rem conversion',
    'px to rem converter',
    'pixels to rem converter',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/px-to-rem-converter/`,
  },
};


const PAGE_URL = `${seoConfig.baseUrl}/tools/px-to-rem-converter/`;

export default function PxToRemConverterPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'PX to REM Converter', href: PAGE_URL },
        ]}
      />

      <header className="mb-10 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
          Free PX to REM Converter & Pixels to REM Calculator
        </h1>
        <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
          Need to perform a <strong>px to rem conversion</strong>? Our free <strong>px to rem calculator</strong> and <strong>rem to px converter</strong> makes it easy to translate your values based on a custom root font size.
        </p>
        <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] max-w-2xl mx-auto">
          Ready to master relative CSS layouts? Read our detailed guide: <a href="/blog/px-to-rem-conversion-guide/" className="text-[#5865F2] font-bold hover:underline">Pixel to REM Conversion: Why and How to Use Relative Units in CSS</a>.
        </p>
      </header>

      {/* Main Tool Component */}
      <section className="mb-12">
        <PxToRemConverter />
      </section>

      {/* SEO Optimized Content Article */}
      <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
        <h2>How to Use a Pixels to REM Calculator for Web Styling</h2>
        <p>
          Designing modern websites requires layouts that look great on any display size. While absolute units like pixels (PX) are familiar, they create static layouts that fail web accessibility rules. Our online <strong>px to rem converter</strong> helps front-end engineers perform quick <strong>px to rem conversion</strong> actions, ensuring layout grids and text sizes scale proportionally.
        </p>

        <h3>Why You Should Use a PX to REM Calculator</h3>
        <p>
          The primary reason to use a <strong>px to rem calculator</strong> is accessibility (a11y). Major desktop and mobile browsers allow users to set a preferred base font size (default is 16px).
        </p>
        <p>
          If your CSS utilizes absolute pixel sizes, the browser is forced to ignore the user\'s preferences. By using our <strong>pixel to rem calculator</strong> to replace absolute styles with relative <code>rem</code> units, your layout will automatically adapt to the user\'s preferences, making your site fully accessible and scalable.
        </p>

        <h3>Dual Conversion: How to use the REM to PX Converter</h3>
        <p>
          Our web tool is also a fully functional <strong>rem to px converter</strong>. When you need to inspect existing stylesheets written in rem and translate them back to mockups, simply input your relative REM value in the second box. The tool uses your root font size to convert REM back into absolute pixels instantly.
        </p>

        <h3>Simplifying PX to REM Conversion Math</h3>
        <p>
          The manual calculation formula for <strong>px to rem conversion</strong> is:
        </p>
        <pre><code>REM = target pixels (PX) / root font size (base PX)</code></pre>
        <p>
          With a standard base size of 16px, a 24px heading is equal to <code>1.5rem</code> (24 / 16). With a custom base size of 10px (often used in the 62.5% root size hack), 24px converts to <code>2.4rem</code>.
        </p>
        <p>
          Instead of running calculations in your head or copy-pasting numbers manually, this <strong>px to rem calculator</strong> updates dynamically as you type, rendering calculations and presenting a cheat sheet table for common CSS sizes instantly.
        </p>
      </article>
    </div>
    </>
  );
}