import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import CaseConverterTool from '@/components/tools/CaseConverterTool';

const PAGE_TITLE = 'Online Case Converter & Word Counter – Free Text Transformer';
const PAGE_DESCRIPTION = 'Free online case converter. Transform text to uppercase, lowercase, title case, and sentence case instantly. Includes real-time word counter and character counter.';
const PAGE_URL = `${seoConfig.baseUrl}/tools/case-converter/`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'case converter',
    'word counter',
    'character counter',
    'uppercase to lowercase',
    'title case converter',
    'sentence case converter',
    'text transformer online',
    'change text case',
    'word count tool',
    'free case converter',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Case Converter & Word Counter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'How do I convert uppercase to lowercase?',
    answer: 'Paste your text into the converter and click the "lowercase" button. All capital letters will be converted to lowercase instantly.',
  },
  {
    question: 'What is Title Case?',
    answer: 'Title Case capitalizes the first letter of every word. It is commonly used for headings, book titles, and professional documents.',
  },
  {
    question: 'Does this tool count words and characters?',
    answer: 'Yes! Our tool provides real-time statistics for word count, character count, sentence count, and line count as you type or paste text.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. All text transformations happen locally in your browser. Your text is never sent to our servers or stored anywhere.',
  },
];

export default function CaseConverterPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: "Online Case Converter & Word Counter",
          description: PAGE_DESCRIPTION,
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Case Converter', href: PAGE_URL },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d2e] mb-4">
            Case Converter & Word Counter
          </h1>
          <p className="text-lg text-[#5b6282] max-w-2xl mx-auto">
            Easily transform your text between different cases and get instant word count statistics. Simple, fast, and secure.
          </p>
        </header>

        <CaseConverterTool />

        <section className="mt-16 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-6">Why Use Our Free Online Case Converter?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#5b6282]">
            <div>
              <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Save Time on Formatting with a Case Converter</h3>
              <p>Manually changing the case of a long document is tedious and error-prone. Our <strong>free online case converter</strong> allows you to fix formatting issues in seconds, whether you need to capitalize a list or convert an all-caps shout into a readable sentence using our <strong>uppercase to lowercase converter</strong>.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Accurate Word Counting and Character Tracking</h3>
              <p>Perfect for writers, students, and professionals who need to meet specific word or character limits. Get instant feedback on your text length as you write or edit with our built-in <strong>word counter tool</strong> and <strong>character counter</strong>. This is the <strong>best word counter tool</strong> for social media posts and academic writing.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Professional Title & Sentence Case Transformation</h3>
              <p>Ensure your headings and sentences are properly formatted with our <strong>title case converter</strong> and <strong>sentence case converter</strong>. Sentence case automatically capitalizes the start of sentences, while Title Case makes your headers look professional for SEO and formal documents.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Privacy First Text Transformer</h3>
              <p>We value your privacy. Unlike other <strong>online case converters</strong>, we process all text locally in your browser. Your sensitive information never leaves your computer, making this a <strong>secure text transformer</strong> for sensitive work.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-6 text-center">Frequently Asked Questions about Case Converter</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl bg-white border border-[#E3E6F0] overflow-hidden group">
                <summary className="px-6 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center hover:bg-[#F8F9FF] transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 pt-2 text-[#5b6282] leading-relaxed border-t border-[#E3E6F0]/50 bg-[#F8F9FF]/30">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
