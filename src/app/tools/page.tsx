import type { Metadata } from 'next';
import { tools } from '@/data/tools';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import ToolsPageClient from '@/components/tools/ToolsPageClient';

export const metadata: Metadata = {
  title: 'Free Online Tools – Discord Utilities, Resume Checkers & Web Utilities',
  description:
    'Browse 20+ free online tools including Discord timestamp generator, font generator, ATS resume checker, case converter, and more. No sign-up required, everything runs in your browser.',
  keywords: [
    'free online tools',
    'discord tools',
    'free discord tools',
    'discord timestamp generator',
    'discord font generator',
    'ats resume checker',
    'px to rem converter',
    'discord webhook sender',
    'case converter',
    'word counter',
    'bionic reading converter',
    'password generator',
    'color converter',
    'qr code generator',
    'json formatter',
    'base64 encoder',
    'discord role color gradient generator',
    'discord server icon resizer',
    'web utilities',
  ],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/` },
  openGraph: {
    title: 'Free Online Tools – Discord Utilities, Resume Checkers & Web Utilities',
    description:
      'Browse 20+ free browser-based tools for Discord users, job seekers, and developers. No sign-up, no limits.',
    url: `${seoConfig.baseUrl}/tools/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Free Online Tools' }],
  },
};

const faqItems = [
  {
    question: 'Are these online tools really free?',
    answer: 'Yes, all our online tools are 100% free to use. There are no hidden fees, no subscriptions, and no sign-up required. We provide free discord tools, career tools, and developer utilities for everyone.',
  },
  {
    question: 'Do I need to create an account to use the tools?',
    answer: 'No account or registration is ever required. You can use our Discord timestamp generator, ATS resume checker, or any other tool instantly without giving away your email or personal info.',
  },
  {
    question: 'Is my data safe when using your web tools?',
    answer: 'Absolutely. All our tools run client-side in your browser. This means your data never leaves your device and is never sent to our servers. Your privacy is our priority.',
  },
  {
    question: 'What kinds of Discord tools do you offer?',
    answer: 'We offer a wide range of free discord tools including a timestamp generator, font generator, colored text creator, webhook sender, permission calculator, and snowflake ID converter.',
  },
];

export default function ToolsPage() {
  const groupedTools = tools.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    },
    {} as Record<string, typeof tools>
  );

  const categories = Object.keys(groupedTools);

  return (
    <>
      <PageSchema
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-20">
        {/* Page header */}
        <header className="text-center mb-12">
          <p className="text-sm font-bold text-[#5865F2] uppercase tracking-widest mb-3">
            Free &amp; No Sign-Up Web Utilities
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1d2e] mb-6 tracking-tight">
            Free Online Tools & Discord Utilities
          </h1>
          <p className="text-lg text-[#5b6282] max-w-2xl mx-auto leading-relaxed">
            Access {tools.length}+ <strong>free online tools</strong> designed for Discord users, developers, and job seekers. 
            From our popular <strong>Discord timestamp generator</strong> to our <strong>ATS resume checker</strong>, every utility runs locally in your browser.
          </p>
        </header>

        {/* Client-rendered filter + grid */}
        <ToolsPageClient
          groupedTools={groupedTools}
          categories={categories}
          totalCount={tools.length}
        />

        {/* Extra SEO Content Section */}
        <section className="mt-20 prose prose-slate max-w-none">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">The Best Collection of Free Discord Tools</h2>
              <p className="text-[#5b6282] leading-relaxed">
                Our platform offers the most comprehensive set of <strong>free discord tools</strong> available online. Whether you need to generate a <strong>discord timestamp</strong> for your server announcements, create fancy text with our <strong>discord font generator</strong>, test webhooks with our <strong>discord webhook sender</strong>, create beautiful gradients with our <strong>discord role color gradient generator</strong>, or resize your server icon with our <strong>discord server icon resizer</strong>, we have you covered. All our <strong>discord utilities</strong> are built with the community in mind, ensuring they are easy to use and always free.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">Professional Career & Developer Utilities</h2>
              <p className="text-[#5b6282] leading-relaxed">
                Beyond Discord, we provide essential <strong>web utilities</strong> for professionals. Our <strong>ATS resume checker</strong> helps job seekers optimize their CVs for automated screening systems, while our <strong>PX to REM converter</strong> and <strong>case converter</strong> tools assist developers in their daily workflow. We also offer a <strong>password generator</strong> for secure passwords, a <strong>color converter</strong> for designers, a <strong>QR code generator</strong> for marketing, a <strong>JSON formatter</strong> for developers, and a <strong>Base64 encoder/decoder</strong> for encoding data. Every <strong>online tool</strong> on our site is optimized for speed and privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Visible FAQ Section for Search Console */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-8 text-center">Tools Page FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqItems.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E3E6F0] shadow-sm">
                <h3 className="font-bold text-[#1a1d2e] mb-3 text-lg">{faq.question}</h3>
                <p className="text-[#5b6282] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
