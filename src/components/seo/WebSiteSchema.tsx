import JsonLd from './JsonLd';
import { seoConfig } from '@/config/seo';

export default function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.baseUrl,
    description: 'Free Discord utilities for Discord users, server owners, moderators, and developers.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoConfig.baseUrl}/tools/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return <JsonLd data={data} />;
}
