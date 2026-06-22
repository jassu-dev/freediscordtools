interface FaqItem {
  question: string;
  answer: string;
}

interface VisibleFAQProps {
  items: FaqItem[];
}

export default function VisibleFAQ({ items }: VisibleFAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="mt-20 mb-20">
      <h2 id="faq-heading" className="text-3xl font-bold text-[#1a1d2e] mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-white p-6 rounded-2xl border border-[#E3E6F0] group transition-all hover:border-[#5865F2]/30 shadow-sm"
          >
            <summary className="font-bold text-[#1a1d2e] cursor-pointer list-none flex justify-between items-center text-lg">
              <span>{item.question}</span>
              <span className="text-[#5865F2] text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="mt-4 text-[#5b6282] leading-relaxed border-t border-[#E3E6F0]/50 pt-4">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
