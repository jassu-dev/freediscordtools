import JsonLd from './JsonLd';

interface SoftwareAppSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}

export default function SoftwareAppSchema({
  name,
  description,
  url,
  applicationCategory = 'UtilitiesApplication',
}: SoftwareAppSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
  return <JsonLd data={data} />;
}
