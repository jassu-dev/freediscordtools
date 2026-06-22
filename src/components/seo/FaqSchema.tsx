import JsonLd from './JsonLd';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  items: FaqItem[];
}

/**
 * Renders FAQPage JSON-LD as a <script type="application/ld+json"> tag.
 * Must be used inside a Server Component page return (not 'use client').
 */
export default function FaqSchema({ items }: FaqSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={schema as any} />;
}
