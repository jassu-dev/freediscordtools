import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import DiscordIndentedListGenerator from '@/components/tools/DiscordIndentedListGenerator';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'How to make indented lists on Discord?',
    answer: 'To make indented (nested) lists on Discord, add 2 spaces before each nested list item. Use "- " for bullet lists, "1. " for numbered lists, or "- [ ] " for checklists. Use our Discord Indented List Generator to create them automatically without worrying about spaces or syntax!',
  },
  {
    question: 'What types of lists does Discord support?',
    answer: 'Discord supports bullet lists (using "- "), numbered lists (using "1. " or any number followed by a dot), and checklists (using "- [ ] " for unchecked items or "- [x] " for checked items). All list types can be nested up to 3 levels deep with indentation.',
  },
  {
    question: 'How deep can you nest lists on Discord?',
    answer: 'Discord supports nested lists up to 3 levels deep. Each additional level requires 2 more spaces of indentation. Our generator prevents you from nesting deeper than 3 levels to ensure your list renders correctly in Discord.',
  },
  {
    question: 'How to make checklists on Discord?',
    answer: 'To make a checklist on Discord, start each item with "- [ ] " (for an unchecked item) or "- [x] " (for a checked item). Like other lists, checklists can also be nested with 2 spaces per level.',
  },
];

export const metadata: Metadata = {
  title: 'Discord Indented List Generator - Free Nested List Tool 2026',
  description: 'Free Discord indented list generator. Create nested bullet lists, numbered lists, and checklists for Discord with one-click copy. Perfect for server rules, guides, and announcements.',
  keywords: ['discord indented list', 'discord nested list', 'discord markdown list', 'discord bullet list', 'discord checklist', 'discord numbered list', 'how to make indented lists on discord'],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-indented-list-generator/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-indented-list-generator/`;

export default function DiscordIndentedListGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Discord Indented List Generator',
          description: 'Free Discord indented list generator and markdown list tool. Create nested bullet lists, numbered lists, and checklists for Discord with one-click copy.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Indented List Generator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Discord Indented List Generator
          </h1>
          <p className="text-xl text-[#5b6282] mt-4 max-w-3xl mx-auto">
            The easiest way to make perfect indented nested lists for Discord! Create bullet lists, numbered lists, and checklists with automatic indentation and one-click copy.
          </p>
          <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] mt-6 max-w-2xl mx-auto">
            Want to learn more about Discord markdown? Check out our <a href="/blog/the-ultimate-discord-markdown-guide/" className="text-[#5865F2] font-bold hover:underline">Ultimate Discord Markdown Guide</a>!
          </p>
        </header>

        <DiscordIndentedListGenerator />

        <article className="prose prose-lg max-w-none text-[#5b6282] mt-12">
          <h2>Why Use Our Discord Indented List Generator?</h2>
          <p>
            Making nested lists in Discord manually is tedious and easy to mess up. One missing space and your entire list breaks! That's why we built the best Discord indented list generator online. Our tool handles all the spacing for you, so you can focus on creating great content for your server.
          </p>
          <p>
            Whether you're writing server rules, a game guide, or a checklist for your community, our tool makes it easy to create professional-looking lists in seconds. No more counting spaces or guessing the right syntax!
          </p>

          <h3>Key Features of Our Discord List Generator</h3>
          <ul>
            <li><strong>Multiple List Types:</strong> Supports bullet lists, numbered lists, and checklists (with optional checked/unchecked states)</li>
            <li><strong>Up to 3 Levels of Nesting:</strong> Perfect for complex hierarchies like server rules with subcategories</li>
            <li><strong>Live Preview:</strong> See exactly how your list will look in Discord as you edit</li>
            <li><strong>One-Click Copy:</strong> Copy the perfect markdown code to your clipboard instantly</li>
            <li><strong>Drag & Drop Reordering:</strong> (Okay, no drag & drop but easy up/down buttons to reorder items!)</li>
          </ul>

          <h3>Discord Markdown List Syntax Explained</h3>
          <p>
            If you're curious about how Discord lists work under the hood, here's a quick breakdown of the syntax our generator uses:
          </p>
          <ul>
            <li><strong>Bullet Lists:</strong> Start a line with "- " (hyphen + space)</li>
            <li><strong>Numbered Lists:</strong> Start a line with any number followed by ". " like "1. " or "5. "</li>
            <li><strong>Checklists:</strong> Use "- [ ] " for unchecked items or "- [x] " for checked items</li>
            <li><strong>Indentation:</strong> Add 2 spaces before a list item to nest it one level deeper</li>
          </ul>
          <p>
            For example, this is what a nested bullet list looks like in raw markdown:
          </p>
          <pre><code>- Parent item
  - Nested item (2 spaces)
  - Another nested item
    - Double-nested item (4 spaces)
- Another parent item</code></pre>

          <h3>Common Use Cases for Discord Lists</h3>
          <p>
            Indented lists are super versatile on Discord! Here are some of the most popular ways people use them:
          </p>
          <ul>
            <li><strong>Server Rules:</strong> Organize rules into categories and subcategories for clarity</li>
            <li><strong>Game Guides:</strong> Walkthroughs with steps and sub-steps</li>
            <li><strong>To-Do Checklists:</strong> Task lists for server projects or moderation</li>
            <li><strong>FAQ Sections:</strong> Question-and-answer lists in your #info channel</li>
            <li><strong>Resource Lists:</strong> Curated links organized by topic</li>
          </ul>

          <p>
            Start using our Discord indented list generator today and make your server content look professional and organized!
          </p>
        </article>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl bg-white border border-[#E3E6F0] overflow-hidden group shadow-sm">
                <summary className="px-6 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center hover:bg-[#F8F9FF] transition">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 pt-2 text-[#5b6282] leading-relaxed border-t border-[#E3E6F0]/50 bg-[#F8F9FF]/30">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
