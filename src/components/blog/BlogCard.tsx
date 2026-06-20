import Link from 'next/link';
import type { BlogPost } from '@/data/blog';

/** Estimate reading time (words / 200 wpm, strip HTML tags first) */
function readingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, ' ').trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 200));
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const mins = readingTime(post.content);
  const tags = post.keywords.slice(0, 2);

  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col bg-white border border-[#E3E6F0] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-[#5865F2]/40 transition-all duration-200"
    >
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#5865F2] to-[#EB459E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col p-6 flex-grow">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-2 py-0.5 bg-[#F0F2FF] text-[#5865F2] rounded-full uppercase tracking-wide capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-lg font-bold text-[#1a1d2e] mb-3 leading-snug group-hover:text-[#5865F2] transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-[#5b6282] leading-relaxed flex-grow line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F0F2FF] mt-auto">
          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-[#9099b8]">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#D4D8EF]" />
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{mins} min read</span>
          </div>

          {/* Read CTA */}
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#5865F2]">
            Read
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
