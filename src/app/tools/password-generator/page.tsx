import type { Metadata } from 'next';
import PageSchema from '@/components/seo/PageSchema';
import VisibleFAQ from '@/components/seo/VisibleFAQ';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import { seoConfig } from '@/config/seo';

const faqItems = [
  {
    question: 'What makes a strong password?',
    answer: 'A strong password is at least 12 characters long, includes a mix of uppercase letters, lowercase letters, numbers, and special symbols, and is not based on personal information.',
  },
  {
    question: 'Is this password generator safe?',
    answer: 'Yes! All password generation happens entirely in your browser. No passwords are sent to or stored on any servers.',
  },
  {
    question: 'How long should my password be?',
    answer: 'We recommend using passwords that are at least 16 characters long for maximum security.',
  },
];

export const metadata: Metadata = {
  title: 'Password Generator | Free Secure Random Password Creator',
  description: 'Free password generator to create strong, random, secure passwords instantly. Customize length, uppercase, lowercase, numbers, and symbols. The best password maker online.',
  keywords: ['password generator', 'random password generator', 'strong password generator', 'secure password generator', 'free password generator online', 'create strong password'],
  alternates: { canonical: `${seoConfig.baseUrl}/tools/password-generator/` },
};

const PAGE_URL = `${seoConfig.baseUrl}/tools/password-generator/`;

export default function PasswordGeneratorPage() {
  return (
    <>
      <PageSchema
        faqItems={faqItems}
        softwareApp={{
          name: 'Password Generator',
          description: 'Free password generator to create strong, random, secure passwords instantly.',
          url: PAGE_URL,
        }}
        breadcrumbs={[
          { name: 'Home', href: `${seoConfig.baseUrl}/` },
          { name: 'Tools', href: `${seoConfig.baseUrl}/tools/` },
          { name: 'Password Generator', href: PAGE_URL },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-[#1a1d2e] leading-tight">
            Free Password Generator
          </h1>
          <p className="text-xl text-[#5b6282] max-w-3xl mx-auto">
            Create strong, random, secure passwords instantly with our free password generator. Customize length, uppercase, lowercase, numbers, and symbols.
          </p>
        </header>

        <section className="mb-12">
          <PasswordGenerator />
        </section>

        <article className="prose prose-lg max-w-none text-[#5b6282] bg-white p-8 md:p-12 rounded-2xl border border-[#E3E6F0] shadow-sm">
          <h2>Why Use a Password Generator?</h2>
          <p>
            Using a password generator is one of the best ways to ensure your online accounts are secure. Our free password generator creates strong, random passwords that are impossible for hackers to guess.
          </p>

          <h3>Tips for Creating Secure Passwords</h3>
          <ul>
            <li>Use at least 16 characters</li>
            <li>Include uppercase and lowercase letters</li>
            <li>Add numbers and special symbols</li>
            <li>Never reuse passwords across accounts</li>
            <li>Use a password manager to store your passwords</li>
          </ul>
        </article>

        <VisibleFAQ items={faqItems} />
      </div>
    </>
  );
}
