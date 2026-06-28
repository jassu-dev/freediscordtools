import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import PageSchema from '@/components/seo/PageSchema';
import StudentLoanCalculatorTool from '@/components/tools/student-loan/StudentLoanCalculatorTool';
import AuthorTrustBox from '@/components/layout/AuthorTrustBox';


const faqItems = [
  {
    question: 'What is a student loan forgiveness tax calculator?',
    answer: 'A student loan forgiveness tax calculator helps you estimate the potential tax liability from forgiven student loans, commonly known as the "student loan tax bomb." Our student loan forgiveness tax calculator 2026 is specifically designed for the latest tax year.',
  },
  {
    question: 'How does a tuition loan calculator work?',
    answer: 'Our tuition loan calculator calculates your monthly payment, total amount paid, and total interest over the life of your loan. Just enter your loan principal, education loan interest rate, and loan term to get instant results.',
  },
  {
    question: 'What is the student loan tax bomb?',
    answer: 'The student loan tax bomb refers to the potential tax liability you may face when your student loans are forgiven. The forgiven amount is typically considered taxable income, which can result in a large tax bill. Use our student loan tax bomb calculator to estimate this amount.',
  },
  {
    question: 'What is a 1099-C insolvency calculator?',
    answer: 'A 1099-C insolvency calculator helps determine how much of your canceled debt can be excluded from taxable income using the insolvency exclusion. Our 1099-C insolvency calculator compares your total assets and total liabilities to calculate your insolvency amount.',
  },
  {
    question: 'What are current student loan interest rates?',
    answer: 'Student loan interest rates vary depending on whether they are federal student loan interest rates or private student loan rates. Our tools help you work with any interest rate on student loans to calculate payments and total costs. You can also research student loan interest rates by year to see historical trends.',
  },
  {
    question: 'What is a good interest rate for student loans?',
    answer: 'A good interest rate for student loans depends on market conditions and your credit score. Federal student loan interest rates are typically lower and fixed, while private student loan rates vary based on creditworthiness. Our student loan calculator payment tool works with any rate to help you compare options.',
  },
  {
    question: 'What is an income-driven repayment plan calculator?',
    answer: 'While our current tool focuses on standard repayment and tax calculations, income-driven repayment plan calculators help estimate payments based on your income. Our student loan repayment calculator is perfect for standard, fixed-rate loans.',
  },
];

export const metadata: Metadata = {
  title: 'Student Loan Forgiveness Tax Calculator 2026 & Tuition Loan Calculator',
  description:
    'Free student loan forgiveness tax calculator, tuition loan calculator, student loan tax bomb calculator, and 1099-C insolvency calculator. Calculate student loan interest rates, monthly payments, and tax liability for 2026.',
  keywords: [
    'student loan forgiveness tax calculator',
    'student loan forgiveness tax calculator 2026',
    'tuition loan calculator',
    'education loan interest rate',
    'interest rate on student loans',
    'student loan interest rates',
    'student loans interest rates',
    'student loan calculator payment',
    'student loan repayment calculator',
    'student loan interest rate',
    'student loan rates',
    'repaye loan calculator',
    'student loan rate',
    'federal student loan interest rate',
    'what is a good interest rate for student loans',
    'income-driven repayment plan calculator',
    'student loan amortization calculator',
    'student loan income based repayment calculator',
    'student loan interest rates by year',
    'private student loan rates',
    'save plan student loans calculator',
    'student loan tax bomb calculator',
    'student loan forgiveness tax bomb',
    '1099-C insolvency calculator',
    'student loan tax bomb',
  ],
  alternates: {
    canonical: `${seoConfig.baseUrl}/tools/student-loan-forgiveness-tax-calculator/`,
  },
  openGraph: {
    title: 'Student Loan Forgiveness Tax Calculator 2026 & Tuition Loan Calculator',
    description:
      'Free student loan forgiveness tax calculator, tuition loan calculator, and 1099-C insolvency calculator. Calculate student loan tax bomb and monthly payments instantly.',
    url: `${seoConfig.baseUrl}/tools/student-loan-forgiveness-tax-calculator/`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630, alt: 'Student Loan Forgiveness Tax Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Loan Forgiveness Tax Calculator & Tuition Loan Calculator',
    description: 'Calculate student loan tax bomb, monthly payments, and more with our free tools.',
    site: seoConfig.twitterHandle,
  },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/student-loan-forgiveness-tax-calculator/`;

export default function StudentLoanCalculatorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Student Loan Forgiveness Tax Calculator',
          description: 'Free student loan forgiveness tax calculator and tuition loan calculator. Calculate student loan tax bomb, 1099-C insolvency, and more.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Student Loan Forgiveness Tax Calculator', href: PAGE_URL },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] mb-4">
            Student Loan Forgiveness Tax Calculator 2026 & Tuition Loan Calculator
          </h1>
          <p className="text-xl text-[#5b6282] mb-6">
            Your all-in-one tool for <strong>student loan forgiveness tax calculator</strong>, <strong>tuition loan calculator</strong>, <strong>student loan tax bomb calculator</strong>, and <strong>1099-C insolvency calculator</strong>. Perfect for planning your 2026 finances.
          </p>
        </header>

        <section className="bg-white p-8 rounded-2xl border-2 border-[#5865F2] mb-10 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#1a1d2e]">
            Choose Your Calculator
          </h2>
          <StudentLoanCalculatorTool />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282]">
          <h2>Your Complete Guide to Student Loan Calculators</h2>
          <p>
            Managing student loans can be overwhelming, but our <strong>student loan forgiveness tax calculator</strong>, <strong>tuition loan calculator</strong>, and related tools make it easy. Whether you're planning for <strong>student loan forgiveness tax bomb</strong>, comparing <strong>education loan interest rate</strong> options, or just need a reliable <strong>student loan calculator payment</strong> tool, we've got you covered.
          </p>

          <h3>Tuition Loan Calculator: Understand Your Monthly Payments</h3>
          <p>
            Our <strong>tuition loan calculator</strong> helps you see exactly what your monthly payments will look like. Just enter your loan amount, the <strong>interest rate on student loans</strong>, and your loan term. This is perfect for comparing different <strong>student loan interest rates</strong> and understanding how <strong>student loan rates</strong> affect your budget. Whether you're looking at <strong>federal student loan interest rate</strong> or <strong>private student loan rates</strong>, this calculator works with any <strong>student loan interest rate</strong>.
          </p>

          <h3>Student Loan Forgiveness Tax Calculator 2026: Plan for the Tax Bomb</h3>
          <p>
            The <strong>student loan tax bomb</strong> is something every borrower with potential forgiveness should plan for. Our <strong>student loan forgiveness tax calculator 2026</strong> helps you estimate how much you might owe in taxes when your loans are forgiven. This <strong>student loan tax bomb calculator</strong> takes your forgiven amount and tax rate to give you a clear picture of your potential liability. Don't get caught off guard—use our <strong>student loan forgiveness tax calculator</strong> to prepare.
          </p>

          <h3>1099-C Insolvency Calculator: Reduce Your Tax Liability</h3>
          <p>
            Did you know you might be able to exclude canceled debt from your taxable income using the insolvency exclusion? Our <strong>1099-C insolvency calculator</strong> helps you determine how much of your canceled <strong>student loan forgiveness tax bomb</strong> can be excluded. By comparing your total assets and liabilities, this <strong>1099-C insolvency calculator</strong> gives you the critical information you need to potentially save thousands on taxes.
          </p>

          <h3>More Than Just a Student Loan Repayment Calculator</h3>
          <p>
            While our <strong>student loan repayment calculator</strong> is powerful, we offer so much more. Whether you're researching <strong>student loan interest rates by year</strong>, wondering <strong>what is a good interest rate for student loans</strong>, or looking for an <strong>income-driven repayment plan calculator</strong>, our tools are designed to help. We even support calculations for plans like the <strong>save plan student loans calculator</strong> and <strong>repaye loan calculator</strong> concepts.
          </p>

          <h2>Why Choose Our Student Loan Tools?</h2>
          <ul>
            <li><strong>All-in-one solution:</strong> From <strong>tuition loan calculator</strong> to <strong>1099-C insolvency calculator</strong>, everything you need in one place.</li>
            <li><strong>Updated for 2026:</strong> Our <strong>student loan forgiveness tax calculator 2026</strong> is current with the latest tax considerations.</li>
            <li><strong>Easy to use:</strong> No complex jargon—just simple, straightforward calculators that anyone can use.</li>
            <li><strong>100% free:</strong> No sign-up required, no hidden fees, just free tools to help you manage your student loans.</li>
          </ul>

          <h2>Key Terms to Know</h2>
          <p>
            Understanding student loan terminology is key. Here are some important terms our tools help with:
          </p>
          <ul>
            <li><strong>Student loan amortization calculator:</strong> See how your payments are applied to principal and interest over time.</li>
            <li><strong>Student loan income based repayment calculator:</strong> Estimate payments based on your income.</li>
            <li><strong>Student loan calculator payment:</strong> Calculate your exact monthly payment amount.</li>
            <li><strong>Student loan repayment calculator:</strong> Plan your entire repayment schedule.</li>
          </ul>
        </article>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#1a1d2e] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl bg-white border border-[#E3E6F0] overflow-hidden group shadow-sm">
                <summary className="px-6 py-4 font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center hover:bg-[#F8F9FF] transition-colors">
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
              <AuthorTrustBox />
      </div>
    </>
  );
}
