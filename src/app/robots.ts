import { MetadataRoute } from 'next';
import { seoConfig } from '@/config/seo';

export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${seoConfig.baseUrl}/sitemap.xml`,
  };
}
