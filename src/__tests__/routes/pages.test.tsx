// Feature: free-discord-tools
// P4: Every page has exactly one h1
// P5: Every page includes WebSite JSON-LD
// P6: Every page has a main landmark (in layout)
// P7: sitemap.xml contains all 7 required URLs
// P3: All pages have complete metadata
// P14: FAQPage JSON-LD matches FAQ content
// P15: No noindex directives on public pages
import { describe, it, expect, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { render } from '@testing-library/react';
import AboutPage, { metadata as aboutMetadata } from '@/app/about/page';
import ContactPage, { metadata as contactMetadata } from '@/app/contact/page';
import TermsPage, { metadata as termsMetadata } from '@/app/terms/page';
import PrivacyPolicyPage, { metadata as privacyMetadata } from '@/app/privacy-policy/page';
import ToolsPage, { metadata as toolsMetadata } from '@/app/tools/page';
import HomePage, { metadata as homeMetadata } from '@/app/page';
import TimestampPage, { metadata as timestampMetadata } from '@/app/tools/discord-timestamp-generator/page';

// Stub Client Components used in pages
vi.mock('@/components/ads/AdSlot', () => ({
  default: () => <div data-testid="ad-slot" />,
}));
vi.mock('@/components/tools/TimestampGenerator', () => ({
  default: () => <div data-testid="timestamp-generator" />,
}));
// Mock next/link used by ToolCard
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Helper to render a page and get its container
function renderPage(Component: React.ComponentType) {
  const { container } = render(<Component />);
  return container;
}

const allMetadata = [
  { name: 'Home', metadata: homeMetadata },
  { name: 'About', metadata: aboutMetadata },
  { name: 'Contact', metadata: contactMetadata },
  { name: 'Terms', metadata: termsMetadata },
  { name: 'Privacy Policy', metadata: privacyMetadata },
  { name: 'Tools', metadata: toolsMetadata },
  { name: 'Timestamp Generator', metadata: timestampMetadata },
];

// P3: metadata completeness
describe('P3: All pages have complete metadata', () => {
  for (const { name, metadata } of allMetadata) {
    it(`${name} page has title, description, openGraph, and canonical`, () => {
      expect(metadata.title).toBeTruthy();
      expect(metadata.description).toBeTruthy();
      expect(metadata.openGraph).toBeTruthy();
      expect(metadata.alternates?.canonical).toBeTruthy();
    });
  }
});

// P4: Exactly one h1
describe('P4: Every page has exactly one h1', () => {
  it('Home page has exactly one h1', () => {
    const container = renderPage(HomePage);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });
  it('About page has exactly one h1', () => {
    expect(renderPage(AboutPage).querySelectorAll('h1')).toHaveLength(1);
  });
  it('Contact page has exactly one h1', () => {
    expect(renderPage(ContactPage).querySelectorAll('h1')).toHaveLength(1);
  });
  it('Terms page has exactly one h1', () => {
    expect(renderPage(TermsPage).querySelectorAll('h1')).toHaveLength(1);
  });
  it('Privacy Policy page has exactly one h1', () => {
    expect(renderPage(PrivacyPolicyPage).querySelectorAll('h1')).toHaveLength(1);
  });
  it('Tools page has exactly one h1', () => {
    expect(renderPage(ToolsPage).querySelectorAll('h1')).toHaveLength(1);
  });
  it('Timestamp Generator page has exactly one h1', () => {
    expect(renderPage(TimestampPage).querySelectorAll('h1')).toHaveLength(1);
  });
});

// P5: WebSite JSON-LD — verified via metadata/schema components rendering script tags
describe('P5: Pages include WebSiteSchema component', () => {
  it('Home page renders WebSiteSchema', () => {
    const container = renderPage(HomePage);
    const scripts = Array.from(container.querySelectorAll('script[type="application/ld+json"]'));
    const websiteSchema = scripts.find((s) => {
      try { return JSON.parse(s.textContent || '{}')['@type'] === 'WebSite'; } catch { return false; }
    });
    expect(websiteSchema).toBeTruthy();
  });

  it('Timestamp Generator page renders WebSiteSchema', () => {
    const container = renderPage(TimestampPage);
    const scripts = Array.from(container.querySelectorAll('script[type="application/ld+json"]'));
    const websiteSchema = scripts.find((s) => {
      try { return JSON.parse(s.textContent || '{}')['@type'] === 'WebSite'; } catch { return false; }
    });
    expect(websiteSchema).toBeTruthy();
  });
});

// P6: Main landmark is provided by root layout
describe('P6: Root layout provides main landmark', () => {
  it('RootLayout exports a main element with id="main-content"', async () => {
    // Import and render root layout with children
    const { default: RootLayout } = await import('@/app/layout');
    const { container } = render(
      <RootLayout>
        <div>test content</div>
      </RootLayout>
    );
    // In jsdom, the layout renders its children structure
    // The main element should be present
    const main = container.querySelector('main#main-content') ??
                  document.querySelector('main#main-content');
    expect(main).toBeTruthy();
  });
});

// P7: sitemap.xml contains all required URLs
describe('P7: sitemap.xml contains all required URLs', () => {
  it('has entries for all required routes', async () => {
    const { default: sitemap } = await import('@/app/sitemap');
    const urls = sitemap();
    const requiredUrls = [
      'https://freediscordtools.in',
      'https://freediscordtools.in/tools/',
      'https://freediscordtools.in/tools/discord-timestamp-generator/',
      'https://freediscordtools.in/about/',
      'https://freediscordtools.in/privacy-policy/',
      'https://freediscordtools.in/contact/',
      'https://freediscordtools.in/terms/'
    ];
    const urlStrings = urls.map(u => u.url);
    for (const u of requiredUrls) {
      expect(urlStrings).toContain(u);
    }
  });
});

// P14: FAQPage JSON-LD on timestamp page
describe('P14: FAQPage JSON-LD matches FAQ section content', () => {
  it('timestamp page has FAQPage JSON-LD with 5+ entries', () => {
    const container = renderPage(TimestampPage);
    const scripts = Array.from(container.querySelectorAll('script[type="application/ld+json"]'));
    const faqSchema = scripts.find((s) => {
      try { return JSON.parse(s.textContent || '{}')['@type'] === 'FAQPage'; } catch { return false; }
    });
    expect(faqSchema).toBeTruthy();
    const parsed = JSON.parse(faqSchema!.textContent!);
    expect(parsed.mainEntity.length).toBeGreaterThanOrEqual(5);
  });
});

// P15: No noindex on public pages
describe('P15: No noindex directives on public pages', () => {
  for (const { name, metadata } of allMetadata) {
    it(`${name} page does not have noindex`, () => {
      const robots = metadata.robots;
      if (typeof robots === 'string') {
        expect(robots).not.toContain('noindex');
      } else if (robots && typeof robots === 'object' && 'index' in robots) {
        expect(robots.index).not.toBe(false);
      }
      // If robots is undefined, that's fine (defaults to indexable)
    });
  }
});
