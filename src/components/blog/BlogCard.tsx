import Link from 'next/link';
import type { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group block p-6 bg-white border border-[#E3E6F0] rounded-2xl shadow-sm hover:shadow-md hover:border-[#5865F2]/50 transition-all active:scale-[0.99]"
    >
      <div className="flex flex-col h-full">
        <p className="text-xs font-semibold text-[#5865F2] uppercase tracking-wider mb-2">
          {post.date}
        </p>
        <h2 className="text-xl font-bold text-[#1a1d2e] mb-2 group-hover:text-[#5865F2] transition-colors">
          {post.title}
        </h2>
        <p className="text-[#5b6282] text-sm leading-relaxed mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center text-[#5865F2] text-sm font-bold">
          Read Article
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
