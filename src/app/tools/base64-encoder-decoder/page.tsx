import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import Base64EncoderDecoder from '@/components/tools/Base64EncoderDecoder';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What is Base64?',
    answer: 'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation.',
  },
  {
    question: 'Why use Base64 encoding?',
    answer: 'Base64 is commonly used to encode binary data such as images or files so they can be easily transmitted over text-based protocols like HTTP or embedded in text files.',
  },
  {
    question: 'Is Base64 encryption?',
    answer: 'No, Base64 is not encryption. It is just an encoding scheme that can be easily reversed. It should not be used to secure sensitive data.',
  },
];

export const metadata: Metadata = {
  title: 'Base64 Encoder & Decoder | Free Online Tool',
  description: 'Free online Base64 encoder and decoder. Encode and decode text, images, and files instantly. The best Base64 tool for developers and designers.',
  keywords: ['base64 encoder', 'base64 decoder', 'base64 encode', 'base64 decode', 'online base64 encoder', 'free base64 decoder'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/base64-encoder-decoder/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/base64-encoder-decoder/`;

export default function Base64EncoderDecoderPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Base64 Encoder & Decoder',
          description: 'Free online Base64 encoder and decoder.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Base64 Encoder & Decoder', href: PAGE_URL },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Base64 Encoder & Decoder
          </h1>
          <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
            Encode and decode text, images, and files instantly with our free online Base64 encoder and decoder. The best Base64 tool for developers.
          </p>
        </header>

        <section className="mb-12">
          <Base64EncoderDecoder />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>Understanding Base64 Encoding</h2>
          <p>
            Base64 encoding is a way to represent binary data as text. It is commonly used in web development to embed images in HTML or CSS files.
          </p>

          <h3>Common Uses for Base64</h3>
          <ul>
            <li>Embedding images in HTML/CSS</li>
            <li>Transmitting binary data in APIs</li>
            <li>Storing binary data in text files</li>
            <li>Email attachments</li>
          </ul>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
