import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import FaqSchema from '@/components/seo/FaqSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import AtsScannerTool from '@/components/tools/ats/AtsScannerTool';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker & ATS Score Scanner (2026)',
  description:
    'Use our free ATS resume checker to get your ATS score instantly. The best free ATS scanner to check resume for ATS compatibility, keyword optimization, and CV scoring.',
  keywords: [
    'ats resume checker',
    'ats resume checker free',
    'check resume for ats',
    'resume ats checker',
    'ats score',
    'ats scanner',
    'cv scanner',
    'free ats resume checker',
    'resume score',
    'resume checker free',
    'resume score checker',
    'ats score checker free',
    'best ats resume checker free',
    'ats score checker',
    'check resume score',
    'ats score check',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/ats-resume-checker/`,
  },
  openGraph: {
    title: 'Free ATS Resume Checker & ATS Score Scanner (2026)',
    description:
      'Get your ATS score instantly. The best free ATS scanner to check resume for ATS compatibility, keyword optimization, and CV scoring.',
    url: `${seoConfig.baseUrl}/tools/ats-resume-checker/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Free ATS Resume Checker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ATS Resume Checker & ATS Score Scanner',
    description: 'Check your resume for ATS compatibility and get an instant score. Free, no sign-up required.',
    site: seoConfig.twitterHandle,
  },
};

const faqItems = [
  {
    question: 'What is an ATS resume checker?',
    answer: 'An ATS resume checker is an online tool that simulates how Applicant Tracking Systems (ATS) scan, analyze, and score your resume. It identifies missing keywords, formatting errors, and structural issues that could prevent your CV from reaching a human recruiter.',
  },
  {
    question: 'How does the free ATS score checker work?',
    answer: 'Our free ATS score checker analyzes your resume content against common ATS parsing rules. It checks for keyword density, proper heading usage, and structural clarity to calculate an ATS score that reflects your optimization level.',
  },
  {
    question: 'How do I check my resume score for free?',
    answer: 'You can check your resume score for free using our dedicated ATS scanner. Simply paste your text content to receive an instant ATS score analysis and actionable feedback to improve your CV.',
  },
  {
    question: 'What is a good ATS score?',
    answer: 'A good ATS score is generally above 80/100. This indicates that your resume is well-structured, contains relevant job keywords, and is easily readable by parsing software. Aiming for an ATS score in the 90s provides the best chance of bypassing automated filters.',
  },
  {
    question: 'Why is my resume failing the ATS scanner?',
    answer: 'If your resume is failing the ATS scanner, it is likely due to: 1. Use of complex graphics/tables, 2. Non-standard headings, 3. Lack of industry-specific keywords, or 4. Improper file formatting.',
  },
];

const PAGE_URL = `${seoConfig.baseUrl}/tools/ats-resume-checker/`;

export default function AtsResumeCheckerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <WebSiteSchema />
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'ATS Resume Checker', href: PAGE_URL },
        ]}
      />
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#1a1d2e] mb-4">Free ATS Resume Checker & ATS Score Scanner</h1>
        <p className="text-xl text-[#5b6282] mb-6">
          Need to <strong>check resume for ATS</strong>? Get your free <strong>ATS score</strong> instantly. Our <strong>ATS resume checker</strong> is the ultimate <strong>cv scanner</strong> to optimize your resume for applicant tracking systems.
        </p>
        <p className="bg-[#F8F9FF] border border-[#5865F2]/20 rounded-xl p-4 italic text-sm text-[#5b6282] max-w-2xl mx-auto">
          New to ATS? Read our <a href="/blog/ultimate-ats-resume-checker-guide/" className="text-[#5865F2] font-bold hover:underline">Complete Guide to Optimizing Your CV for ATS</a>.
        </p>
      </header>

      <section className="bg-white p-8 rounded-2xl border-2 border-[#5865F2] mb-10 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Get Your ATS Score Now</h2>
        <p className="text-[#5b6282] mb-6">Paste your resume content below for a detailed <strong>ATS score</strong> analysis.</p>
        <AtsScannerTool />
      </section>

      <article className="prose prose-lg max-w-none text-[#5b6282]">
        <h2>The Ultimate Guide to Beating Applicant Tracking Systems</h2>
        <p>
          In today’s competitive job market, your resume needs to do more than just impress a recruiter; it needs to impress the <strong>Applicant Tracking System (ATS)</strong> first. If you don't <strong>check resume for ATS</strong> compliance, your application may be automatically rejected before it ever reaches human eyes. Our <strong>free ATS resume checker</strong> provides the critical analysis you need to optimize your CV, boost your <strong>ATS score</strong>, and land more interviews.
        </p>

        <h3>Why You Need an ATS Score Checker</h3>
        <p>
          Think of the ATS as a gatekeeper. It scans thousands of resumes and ranks them based on specific criteria. An <strong>ATS resume checker</strong> simulates this gatekeeping process. By using an <strong>ATS scanner</strong>, you can identify if your resume structure, keyword usage, or formatting is holding you back. A low <strong>ATS score</strong> is a clear signal that your resume needs optimization.
        </p>

        <h3>Key Features of Our ATS Scanner:</h3>
        <ul>
          <li><strong>Real-time ATS Score Analysis:</strong> Get a numerical <strong>ATS score</strong> based on industry standards, not just a guess.</li>
          <li><strong>Keyword Optimization:</strong> Identify critical terms missing from your resume to beat the <strong>cv scanner</strong>.</li>
          <li><strong>Formatting Audit:</strong> Ensure your layout is readable by any <strong>ats scanner</strong>, avoiding the pitfalls of non-standard designs.</li>
        </ul>

        <h2>How to Improve Your ATS Score</h2>
        <p>
          Improving your <strong>ATS score checker</strong> results doesn't require a total rewrite. Focus on these actionable steps:
        </p>
        <ol>
          <li><strong>Master the Keywords:</strong> Tailor your resume to each job description. Use the <strong>best ats resume checker free</strong> tools to compare your skills against the job requirements.</li>
          <li><strong>Adopt Standard Formatting:</strong> Bots hate complexity. Stick to standard headings like "Work Experience," "Education," and "Skills." Avoid images, icons, or complex tables that confuse the <strong>ats scanner</strong>.</li>
          <li><strong>Iterate and Re-scan:</strong> Optimization is a process. Use our <strong>free ats resume checker</strong> as a continuous improvement tool. <strong>Check resume score</strong> again after every set of revisions to verify that your <strong>ATS score</strong> is trending upwards.</li>
        </ol>

        <h2>Final Thoughts on the ATS Checker</h2>
        <p>
          Don't let a poorly optimized resume be the reason you don't get the interview. An automated <strong>cv scanner</strong> should not be a roadblock to your dream career. Use our <strong>free ats resume checker</strong> as part of your application routine. Whether you call it an <strong>ats scanner</strong>, <strong>resume score checker</strong>, or <strong>ats score checker free</strong> tool, the goal is the same: beating the bots and getting your resume into the hands of a hiring manager.
        </p>
      </article>
    </div>
  );
}
