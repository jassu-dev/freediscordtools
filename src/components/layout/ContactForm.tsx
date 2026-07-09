'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    category: 'feedback',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.category) {
      newErrors.category = 'Please select an inquiry type.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Your message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network latency (800ms)
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log('Contact form submission received:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E3E6F0] p-8 rounded-2xl text-center space-y-6 shadow-sm animate-in fade-in duration-300">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-md shadow-green-500/10">
          <CheckCircle size={32} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-[#1a1d2e]">Message Sent!</h2>
          <p className="text-sm text-[#5b6282] max-w-md mx-auto">
            Thank you, <strong className="text-[#1a1d2e]">{formData.name}</strong>. Your message regarding <strong className="text-[#1a1d2e]">{formData.category}</strong> has been received. Our team will review your feedback and get back to you within 24 to 48 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setFormData({ name: '', email: '', category: 'feedback', message: '' });
            setIsSubmitted(false);
          }}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#2d3149] font-bold rounded-xl text-xs transition-colors cursor-pointer min-h-[40px]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E3E6F0] p-6 sm:p-8 rounded-2xl space-y-5 shadow-sm">
      <h2 className="text-xl font-bold text-[#1a1d2e] mb-2 border-b border-gray-100 pb-3">
        Send us a Message
      </h2>

      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="form-name" className="text-xs font-bold text-[#2d3149] uppercase tracking-wider block">
          Your Name
        </label>
        <input
          type="text"
          id="form-name"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#0f111a] placeholder-gray-400 focus:outline-none focus:ring-2 ${
            errors.name 
              ? 'border-red-300 focus:border-red-400 focus:ring-red-200/20' 
              : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]/20'
          }`}
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
        />
        {errors.name && (
          <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.name}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="form-email" className="text-xs font-bold text-[#2d3149] uppercase tracking-wider block">
          Email Address
        </label>
        <input
          type="email"
          id="form-email"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#0f111a] placeholder-gray-400 focus:outline-none focus:ring-2 ${
            errors.email 
              ? 'border-red-300 focus:border-red-400 focus:ring-red-200/20' 
              : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]/20'
          }`}
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
        />
        {errors.email && (
          <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.email}
          </p>
        )}
      </div>

      {/* Category Selection */}
      <div className="space-y-1.5">
        <label htmlFor="form-category" className="text-xs font-bold text-[#2d3149] uppercase tracking-wider block">
          Inquiry Type
        </label>
        <select
          id="form-category"
          className="w-full px-4 py-2.5 rounded-xl border border-[#E3E6F0] text-sm text-[#0f111a] bg-white focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 cursor-pointer"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="feedback">General Feedback &amp; Review</option>
          <option value="bug">Report a Bug / Issue</option>
          <option value="tool-suggestion">Suggest a New Web Tool</option>
          <option value="business">Partnership / Advertising Inquiry</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="form-message" className="text-xs font-bold text-[#2d3149] uppercase tracking-wider block">
          Your Message
        </label>
        <textarea
          id="form-message"
          rows={5}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#0f111a] placeholder-gray-400 focus:outline-none focus:ring-2 resize-none ${
            errors.message 
              ? 'border-red-300 focus:border-red-400 focus:ring-red-200/20' 
              : 'border-[#E3E6F0] focus:border-[#5865F2] focus:ring-[#5865F2]/20'
          }`}
          placeholder="Please describe your suggestion, question, or issue in detail..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
        />
        {errors.message && (
          <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-[#5865F2]/20 cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending Message...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
