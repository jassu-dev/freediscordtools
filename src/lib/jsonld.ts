/**
 * Build FAQPage JSON-LD string for injection via generateMetadata.
 * This guarantees the structured data is in <head>, making it
 * reliably detected by Google Search Console and rich result crawlers.
 */
export function buildFaqJsonLd(items: { question: string; answer: string }[]): string {
  return JSON.stringify({
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
  });
}

export function buildBreadcrumbJsonLd(
  items: { name: string; href: string }[]
): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  });
}

export function buildSoftwareAppJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: opts.applicationCategory ?? 'UtilitiesApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    operatingSystem: 'Web',
  });
}
