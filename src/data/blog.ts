export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  // ... existing posts ...
  {
    slug: 'how-to-use-discord-timestamps',
    title: 'How to Use Discord Timestamps: Ultimate Guide',
    excerpt: 'Learn how to use Discord timestamps to schedule events across different timezones automatically.',
    date: 'June 17, 2026',
    keywords: ['discord timestamps', 'discord event scheduling', 'discord unix timestamp guide'],
    content: `...`,
  },
  {
    slug: 'aesthetic-discord-profile-guide',
    title: 'Aesthetic Discord Profile Guide: Custom Fonts & Bios',
    excerpt: 'Make your Discord profile stand out with custom fonts, colors, and a unique bio.',
    date: 'June 17, 2026',
    keywords: ['aesthetic discord profile', 'discord bio fonts', 'discord colored text', 'cool discord bio ideas'],
    content: `...`,
  },
  {
    slug: 'what-is-a-discord-snowflake-id',
    title: 'What is a Discord Snowflake ID? ID Anatomy Explained',
    excerpt: 'Every ID on Discord has a hidden timestamp. Learn how to decode them and find account ages.',
    date: 'June 17, 2026',
    keywords: ['discord snowflake id', 'discord id to date', 'how discord ids work', 'discord account age'],
    content: `...`,
  },
  {
    slug: 'ultimate-ats-resume-checker-guide',
    title: 'Ultimate ATS Resume Checker Guide: Rank #1 in Applicant Tracking Systems',
    excerpt: 'Master the applicant tracking system. Learn how to optimize your resume with our ATS score scanner to get hired faster.',
    date: 'June 17, 2026',
    keywords: ['ats resume checker', 'ats score', 'cv scanner', 'how to pass ats', 'resume optimization'],
    content: `
      <h2>The Reality of Applicant Tracking Systems</h2>
      <p>If you've been applying to jobs and hearing nothing back, your resume might not even be seen by a recruiter. Over 90% of companies use an <strong>Applicant Tracking System (ATS)</strong> to filter candidates automatically.</p>
      
      <h3>How to Beat the CV Scanner</h3>
      <p>To pass, you must optimize your resume for the specific <strong>ATS</strong>. Our <a href="/tools/ats-resume-checker/" class="text-[#5865F2] font-bold">ATS Resume Checker</a> is designed to help you do exactly that by providing an immediate <strong>ATS score</strong> and actionable improvements.</p>
      
      <h3>Key Steps for ATS Optimization:</h3>
      <ul>
        <li><strong>Keyword Optimization:</strong> Incorporate terms directly from the job description to boost your <strong>ATS score</strong>.</li>
        <li><strong>Formatting Matters:</strong> Use simple, standard layouts. The <strong>cv scanner</strong> cannot read complex tables or graphics effectively.</li>
        <li><strong>Iterative Improvement:</strong> Use our <strong>free ATS resume checker</strong> repeatedly. <strong>Check resume score</strong>, adjust, and scan again.</li>
      </ul>
      
      <p>Stop guessing why your applications are rejected. Start using our <a href="/tools/ats-resume-checker/" class="text-[#5865F2] underline">ATS scanner</a> to take control of your job search today.</p>
    `,
  },
];
