import JsonLd from './JsonLd';
import { seoConfig } from '@/config/seo';

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageSchemaProps {
  faqItems?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
  softwareApp?: {
    name: string;
    description: string;
    url: string;
    category?: string;
  };
}

export default function PageSchema({ faqItems, breadcrumbs, softwareApp }: PageSchemaProps) {
  const graph: any[] = [];

  // 1. WebSite Schema (usually for homepage, but good for context)
  graph.push({
    '@type': 'WebSite',
    '@id': `${seoConfig.baseUrl}/#website`,
    name: seoConfig.siteName,
    url: seoConfig.baseUrl,
  });

  // 2. Breadcrumbs
  if (breadcrumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${softwareApp?.url || seoConfig.baseUrl}/#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.href,
      })),
    });
  }

  // 3. Software Application
  if (softwareApp) {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${softwareApp.url}/#softwareapp`,
      name: softwareApp.name,
      description: softwareApp.description,
      url: softwareApp.url,
      applicationCategory: softwareApp.category || 'Utilities',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    });
  }

  // 4. FAQ Page
  if (faqItems && faqItems.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${softwareApp?.url || seoConfig.baseUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return <JsonLd data={data as any} />;
}
