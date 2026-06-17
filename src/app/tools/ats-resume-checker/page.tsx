import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker | Optimize Your CV for ATS',
  description:
    'Free ATS resume checker. Optimize your CV for applicant tracking systems (ATS) instantly. Analyze your resume keywords, format, and score to get hired faster.',
  keywords: [
    'ats resume checker',
    'free ats resume checker',
    'ats score checker',
    'cv scanner',
    'resume scanner',
    'check resume for ats',
    'ats optimization tool',
    'resume score',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/ats-resume-checker/`,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/ats-resume-checker/`;

export default function AtsResumeCheckerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[#1a1d2e] mb-4">Free ATS Resume Checker</h1>
        <p className="text-xl text-[#5b6282]">
          Upload your resume to check if it passes applicant tracking systems. Get actionable insights to boost your score and land more interviews.
        </p>
      </header>

      {/* Placeholder for the tool component */}
      <section className="bg-white p-8 rounded-2xl border border-[#E3E6F0] mb-10 shadow-sm">
        <p className="text-center text-[#5b6282]">Tool coming soon: ATS Resume Analysis Engine</p>
      </section>

      {/* Detailed Article Section */}
      <article className="prose prose-lg max-w-none text-[#5b6282]">
        <h2>What is an ATS Resume Checker?</h2>
        <p>
          Applicant Tracking Systems (ATS) are software used by recruiters to automate the hiring process. 
          They scan, rank, and filter resumes based on keywords, formatting, and experience. 
          An <strong>ATS resume checker</strong> simulates this process, helping you optimize your CV 
          before you hit the "apply" button.
        </p>

        <h2>Why Use Our Free ATS Scanner?</h2>
        <p>
          Many qualified candidates are rejected by ATS bots simply because their resume isn't 
          formatted correctly or lacks the right keywords. Our <strong>free ATS resume checker</strong> 
          highlights areas for improvement so you can maximize your chances of getting past the initial 
          screening.
        </p>

        <h2>How to Optimize Your Resume for ATS</h2>
        <ul>
          <li><strong>Use Standard Headings:</strong> Stick to "Work Experience," "Education," and "Skills."</li>
          <li><strong>Keyword Optimization:</strong> Incorporate keywords found in the job description.</li>
          <li><strong>Simple Formatting:</strong> Avoid complex graphics, tables, or columns that bots struggle to read.</li>
        </ul>
      </article>
    </div>
  );
}
