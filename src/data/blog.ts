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
    title: 'Free ATS Resume Checker: How to Optimize Your CV for Any Job',
    excerpt: 'Master the applicant tracking system. Use our free ATS resume checker to optimize your CV, boost your ATS score, and get more interviews.',
    date: 'June 17, 2026',
    keywords: ['ats resume checker', 'ats score checker', 'check resume for ats', 'resume scanner', 'how to pass ats', 'cv scanner', 'ats optimization'],
    content: `
      <h2>The Reality of Applicant Tracking Systems</h2>
      <p>If you've been applying to jobs and hearing nothing back, your resume might not even be seen by a recruiter. Over 90% of large companies use an <strong>Applicant Tracking System (ATS)</strong> to filter candidates automatically.</p>
      
      <p>This is why you absolutely need a <strong>free ATS resume checker</strong>. Our tool is designed to help you analyze your CV content, check for keyword density, and ensure your formatting is perfectly optimized for the <strong>cv scanner</strong> bots that screen your application.</p>
      
      <h3>Why Your Resume Might Be Failing</h3>
      <p>Most candidates think their resume is great, but they don't <strong>check resume for ATS</strong> compliance. If your resume lacks industry-standard keywords or uses complex graphics that confuse the <strong>ats scanner</strong>, it will likely be discarded.</p>
      
      <h3>How to Boost Your ATS Score</h3>
      <p>To pass, you must optimize your resume for the specific <strong>ATS</strong>. Our <a href="/tools/ats-resume-checker/" class="text-[#5865F2] font-bold">ATS Resume Checker</a> provides an immediate <strong>ATS score</strong> and actionable improvements.</p>
      
      <h3>Key Steps for ATS Optimization:</h3>
      <ul>
        <li><strong>Keyword Optimization:</strong> Incorporate terms directly from the job description to boost your <strong>ATS score</strong>.</li>
        <li><strong>Formatting Matters:</strong> Use simple, standard layouts. The <strong>cv scanner</strong> cannot read complex tables or graphics effectively.</li>
        <li><strong>Iterative Improvement:</strong> Use our <strong>free ATS resume checker</strong> repeatedly. <strong>Check resume score</strong>, adjust, and scan again until you reach a high <strong>ATS score</strong>.</li>
      </ul>
      
      <p>Stop guessing why your applications are rejected. Start using our <a href="/tools/ats-resume-checker/" class="text-[#5865F2] underline">ATS scanner</a> to take control of your job search today.</p>
      
      <p>Need more tools? Check out our other <a href="/tools/" class="text-[#5865F2] underline">Discord and Career Tools</a> to further optimize your digital presence.</p>
    `,
  },
];
