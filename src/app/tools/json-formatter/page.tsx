import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import JsonFormatter from '@/components/tools/JsonFormatter';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What is JSON?',
    answer: 'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.',
  },
  {
    question: 'What does "pretty-printing" JSON mean?',
    answer: 'Pretty-printing JSON means formatting JSON data with indentation and line breaks to make it easier for humans to read.',
  },
  {
    question: 'What is minifying JSON?',
    answer: 'Minifying JSON means removing all unnecessary whitespace to reduce file size, making it more efficient for data transfer.',
  },
];

export const metadata: Metadata = {
  title: 'JSON Formatter | Free Online JSON Beautifier & Validator',
  description: 'Free online JSON formatter, validator, and beautifier. Format, minify, and validate JSON instantly. The best JSON tool for developers with syntax highlighting.',
  keywords: ['json formatter', 'json validator', 'json beautifier', 'json minifier', 'online json formatter', 'json editor'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/json-formatter/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/json-formatter/`;

export default function JsonFormatterPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'JSON Formatter',
          description: 'Free online JSON formatter and validator.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'JSON Formatter', href: PAGE_URL },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Free JSON Formatter & Validator
          </h1>
          <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
            Format, minify, and validate JSON instantly with our free online JSON formatter. The best JSON tool for developers.
          </p>
        </header>

        <section className="mb-12">
          <JsonFormatter />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>Why Use a JSON Formatter?</h2>
          <p>
            JSON data is often minified for data transfer, but this makes it difficult to read. Our JSON formatter beautifier makes it easy to understand and debug JSON data.
          </p>

          <h3>Common Uses for JSON</h3>
          <ul>
            <li>API responses</li>
            <li>Configuration files</li>
            <li>Data storage</li>
            <li>Configuration files</li>
            <li>Web development</li>
          </ul>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
