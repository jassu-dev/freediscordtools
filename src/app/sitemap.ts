import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';
import { seoConfig } from '@/config/seo';

export const dynamic = 'force-static';

// High-value tool slugs that deserve priority 1.0
const PRIORITY_TOOLS = new Set([
  'discord-timestamp-generator',
  'discord-font-generator',
  'discord-color-text-generator',
  'ats-resume-checker',
  'discord-id-to-date',
  'discord-webhook-sender',
  'discord-bio-generator',
  'discord-status-generator',
  'discord-username-checker',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.baseUrl.endsWith('/') ? seoConfig.baseUrl.slice(0, -1) : seoConfig.baseUrl;
  const now = new Date();

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/tools/`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/blog/`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/about/`,         lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact/`,       lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy/`,lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms/`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  // 2. Tool Pages priority 1.0 for key tools, 0.9 for the rest
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: PRIORITY_TOOLS.has(tool.slug) ? 1.0 : 0.9,
  }));

  // 3. Blog Pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...blogPages];
}
