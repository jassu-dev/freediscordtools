import type { Metadata } from 'next';
import MarkdownPreviewer from '@/components/tools/MarkdownPreviewer';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import SoftwareAppSchema from '@/components/seo/SoftwareAppSchema';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Discord Markdown Previewer & Spoiler Text Generator',
  description:
    'Write, format, and preview Discord messages in real-time. Test spoiler tags, bold, italics, code blocks, blockquotes, and lists with our interactive simulator.',
  keywords: [
    'discord markdown previewer',
    'discord spoiler tag generator',
    'discord text formatting tester',
    'discord format preview',
    'how to format discord text',
    'discord chat text simulator',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/discord-markdown-previewer/`,
    languages: {
      'en-US': `${seoConfig.baseUrl}/tools/discord-markdown-previewer/`,
      'en': `${seoConfig.baseUrl}/tools/discord-markdown-previewer/`,
    },
  },
  openGraph: {
    title: 'Discord Markdown Previewer & Spoiler Text Generator',
    description:
      'Instantly see how your text formatting looks on Discord. Free online editor supporting spoilers, code blocks, blockquotes, and headers.',
    url: `${seoConfig.baseUrl}/tools/discord-markdown-previewer/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Discord Markdown Previewer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Markdown Previewer & Spoiler Text Generator',
    description:
      'Interactive visual preview of Discord chat formatting. Test code blocks and spoilers online.',
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'How do you format bold, italics, and underlines in Discord?',
    answer:
      'Use these markdown rules: **bold** (double asterisks), *italics* or _italics_ (single asterisk or underscore), __underlines__ (double underscores), and ~~strikethrough~~ (double tildes).',
  },
  {
    question: 'How do you create spoiler text in Discord?',
    answer:
      'To hide text behind a black spoiler block in Discord, wrap your text in double vertical bars like this: ||spoiler text||. Users must click the black block to reveal the content.',
  },
  {
    question: 'How do you write multiline code blocks on Discord?',
    answer:
      'To create a code block, wrap your code in triple backticks like this: ```\\ncode goes here\\n```. You can optionally append the language name immediately after the first set of triple backticks for syntax highlighting.',
  },
  {
    question: 'How do headers work in Discord messages?',
    answer:
      'Discord supports header sizes. Start a line with "# " for H1 (large), "## " for H2 (medium), or "### " for H3 (small). Note that there must be a space after the hash symbols.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/discord-markdown-previewer/`;

export default function MarkdownPreviewerPage() {
  return (
    <>
      <WebSiteSchema />
      <SoftwareAppSchema
        name="Discord Markdown & Spoiler Previewer"
        description="Free browser-based visual editor to test and preview Discord text formatting rules and spoilers before sending."
        url={PAGE_URL}
        applicationCategory="UtilitiesApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Discord Markdown Previewer', href: PAGE_URL },
        ]}
      />
      <FaqSchema items={faqItems} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* H1 */}
        <header className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1d2e] mb-3">
            Discord Markdown & Spoiler Previewer
          </h1>
          <p className="text-lg text-[#5b6282] leading-relaxed">
            Format announcements, rules, and chat messages without guessing. Type or paste your text, use quick-click styling tags, and inspect your text in a <strong className="text-[#1a1d2e]">live Discord client simulator</strong>.
          </p>
        </header>

        {/* Main interactive tool */}
        <main className="mb-16">
          <MarkdownPreviewer />
        </main>

        <hr className="border-[#E3E6F0] mb-12" />

        {/* Informative Article */}
        <article className="prose prose-lg max-w-3xl mx-auto text-[#5b6282] space-y-6">
          <h2 className="text-2xl font-bold text-[#1a1d2e]">
            The Complete Guide to Discord Text Formatting
          </h2>
          <p>
            Discord uses a customized subset of <strong>Markdown</strong> to style messages in chat. While the basics are simple, mastering every formatting rule from spoiler tags to headers and code blocks turns ordinary messages into polished, professional server communications. This guide covers everything a server owner, moderator, or regular user needs to know.
          </p>
          <p>
            The easiest way to test formatting before posting publicly is to use a <strong>Discord markdown previewer</strong>. Our tool provides an interactive editor paired with a real-time dark-mode Discord chat simulation, so you can see exactly how your message will appear to other members before hitting Enter.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-2">All Supported Formatting Syntax:</h3>
          <div className="overflow-x-auto rounded-lg border border-[#E3E6F0]">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="bg-[#F8F9FF] text-[#1a1d2e] border-b border-[#E3E6F0]">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">Style</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Syntax</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6F0] bg-white text-gray-700">
                <tr>
                  <td className="px-6 py-4 font-medium">Bold</td>
                  <td className="px-6 py-4 font-mono">**text**</td>
                  <td className="px-6 py-4 font-bold">text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Italics</td>
                  <td className="px-6 py-4 font-mono">*text* or _text_</td>
                  <td className="px-6 py-4 italic">text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Underline</td>
                  <td className="px-6 py-4 font-mono">__text__</td>
                  <td className="px-6 py-4 underline">text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Strikethrough</td>
                  <td className="px-6 py-4 font-mono">~~text~~</td>
                  <td className="px-6 py-4 line-through">text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Spoiler (Hidden)</td>
                  <td className="px-6 py-4 font-mono">||text||</td>
                  <td className="px-6 py-4 bg-[#1e1f22] text-[#1e1f22] rounded px-1">text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Inline Code</td>
                  <td className="px-6 py-4 font-mono">`code`</td>
                  <td className="px-6 py-4"><code className="bg-[#1e1f22] px-1 py-0.5 rounded text-[#e06c75] font-mono text-xs">code</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">
            Using Spoiler Tags Effectively
          </h3>
          <p>
            Spoilers are one of Discord&apos;s most popular formatting features. They are essential for gaming communities sharing plot twists, puzzle solutions, or game tips without ruining the experience for others. By wrapping your content in <code>||double pipe characters||</code>, the text is hidden under a clickable dark block. Users must intentionally click to reveal it.
          </p>
          <p>
            Spoilers work on both text and images. For images, you can right-click a message containing an image and mark it as a spoiler it will then be blurred until clicked. Use our <strong>Discord spoiler tag generator</strong> to preview exactly how your hidden content will look in context.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">
            Discord Headers: Organizing Long Messages
          </h3>
          <p>
            Discord added native header support, which is a game-changer for server rules, FAQ channels, and structured announcements. You can use up to three levels of hierarchy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><code># Heading 1</code> Creates a large H1-style header. Use sparingly for the top-level topic of a message.</li>
            <li><code>## Heading 2</code> Creates a medium H2 section header. Perfect for subsections in a rules channel.</li>
            <li><code>### Heading 3</code> Creates a smaller H3 sub-header. Use for individual items within a section.</li>
          </ul>
          <p>
            Always remember the required space after the hash symbols <code>##text</code> without a space will not render as a header.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">
            Code Blocks and Syntax Highlighting
          </h3>
          <p>
            Discord supports syntax-highlighted multi-line code blocks. Wrap your code in triple backticks and optionally specify a language name immediately after the opening backticks:
          </p>
          <div className="bg-[#1e1f22] rounded-lg p-4 font-mono text-sm text-[#a9b7d0] overflow-x-auto">
            ```python<br />
            def greet(name):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(f&quot;Hello, {'{name}'}&quot;)<br />
            ```
          </div>
          <p>
            Discord supports syntax highlighting for languages including <code>python</code>, <code>javascript</code>, <code>css</code>, <code>json</code>, <code>bash</code>, <code>diff</code>, and many others. This is incredibly useful in developer-focused servers or coding communities.
          </p>

          <h3 className="text-xl font-bold text-[#1a1d2e] pt-4">
            Blockquotes and Lists
          </h3>
          <p>
            Start a line with <code>&gt; </code> to create a blockquote. Use <code>&gt;&gt;&gt; </code> (triple-greater-than) for a multi-line blockquote that applies to all following content. Blockquotes are perfect for quoting previous messages or citing external sources.
          </p>
          <p>
            For bullet lists, start lines with <code>-</code>, <code>*</code>, or <code>1.</code> for ordered lists. Combine these with bold headers and code blocks to create clean, structured posts for FAQs and tutorials.
          </p>
          <p>
            Want to add color to your code blocks? Combine formatting with our <a href="/tools/discord-color-text-generator/" className="text-[#5865F2] font-bold hover:underline">Discord ANSI Color Text Generator</a> for vivid, eye-catching server messages.
          </p>
        </article>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto mt-16">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#1a1d2e] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-lg bg-white border border-[#E3E6F0]">
                <summary className="px-4 py-3 font-medium text-[#1a1d2e] text-base cursor-pointer list-none flex justify-between items-center gap-2">
                  <span>{faq.question}</span>
                  <span className="text-[#5865F2] shrink-0 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="px-4 pb-4 pt-1 text-[#5b6282] text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
