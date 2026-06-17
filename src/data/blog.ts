export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-use-discord-timestamps',
    title: 'How to Use Discord Timestamps for Event Scheduling',
    excerpt: 'Learn how to use Discord timestamps to schedule events across different timezones automatically.',
    date: 'June 17, 2026',
    keywords: ['discord timestamps', 'discord event scheduling', 'discord unix timestamp guide'],
    content: `
      <p>Coordinating events in a global Discord community is one of the biggest challenges for server owners. When you announce a raid, a meeting, or a community game night, you usually have to list multiple timezones or hope your members can do the math themselves.</p>
      
      <h3>The Solution: Discord Dynamic Timestamps</h3>
      <p>Discord has a built-in feature that allows you to send timestamps that automatically convert to the local time of every person viewing the message. No more "EST", "PST", or "GMT" confusion!</p>
      
      <p>Using our <a href="/tools/discord-timestamp-generator/" class="text-[#5865F2] font-bold">Discord Timestamp Generator</a>, you can easily pick a date and time and get a small piece of code like <code>&lt;t:123456789:F&gt;</code>. When you paste this into a Discord channel, everyone will see the time in their own timezone.</p>
      
      <h3>Why This Boosts Community Engagement</h3>
      <p>When users don't have to struggle to figure out when an event is happening, they are much more likely to show up. Relative timestamps (like "in 2 hours") are particularly powerful for creating a sense of urgency and excitement.</p>
      
      <p>Start using <a href="/tools/discord-timestamp-generator/" class="text-[#5865F2] underline">discord timestamps</a> today to make your server announcements more professional and accessible to everyone!</p>
    `,
  },
  {
    slug: 'aesthetic-discord-profile-guide',
    title: 'The Ultimate Guide to an Aesthetic Discord Profile',
    excerpt: 'Make your Discord profile stand out with custom fonts, colors, and a unique bio.',
    date: 'June 17, 2026',
    keywords: ['aesthetic discord profile', 'discord bio fonts', 'discord colored text', 'cool discord bio ideas'],
    content: `
      <p>Your Discord profile is your digital identity. In a large server, a well-designed profile can make you stand out and help you find like-minded friends. But how do you go beyond the standard settings?</p>
      
      <h3>1. Custom Discord Fonts</h3>
      <p>The first step to an aesthetic profile is using a unique font for your username and bio. Discord doesn't support this natively, but you can use Unicode symbols that look like different fonts. Our <a href="/tools/discord-font-generator/" class="text-[#5865F2] font-bold">Discord Font Generator</a> offers over 160 styles, including Vaporwave, Gothic, and Script.</p>
      
      <h3>2. Colored Text in Messages</h3>
      <p>Did you know you can type in color on Discord? By using ANSI escape codes in code blocks, you can highlight important parts of your messages or just add some flair. Use the <a href="/tools/discord-color-text-generator/" class="text-[#5865F2] font-bold">Discord Colored Text Generator</a> to pick your colors and get the code instantly.</p>
      
      <h3>3. Creative Bios</h3>
      <p>Use your bio to express yourself, but keep it readable. Combining <a href="/tools/discord-font-generator/" class="text-[#5865F2] underline">aesthetic fonts</a> with emojis can create a clean, modern look that represents your personality.</p>
      
      <p>Check out our full suite of <a href="/tools/" class="text-[#5865F2] underline">Discord tools</a> to start customizing your profile today!</p>
    `,
  },
  {
    slug: 'what-is-a-discord-snowflake-id',
    title: 'What is a Discord Snowflake ID? Understanding Discord IDs',
    excerpt: 'Every ID on Discord has a hidden timestamp. Learn how to decode them and find account ages.',
    date: 'June 17, 2026',
    keywords: ['discord snowflake id', 'discord id to date', 'how discord ids work', 'discord account age'],
    content: `
      <p>If you've ever enabled Developer Mode on Discord, you've seen the "Copy ID" option. These long numbers, like <code>155149108183695360</code>, are called "Snowflakes".</p>
      
      <h3>The Anatomy of a Snowflake</h3>
      <p>A Discord Snowflake isn't just a random number. It's a 64-bit integer that stores four pieces of information: the timestamp of creation, the internal worker ID, the internal process ID, and an incrementing counter.</p>
      
      <h3>How to Find the Creation Date</h3>
      <p>The most useful part of a Snowflake is the timestamp. It tells you exactly when a user account, server, or message was created. You can use our <a href="/tools/discord-id-to-date/" class="text-[#5865F2] font-bold">Discord ID to Date</a> converter to reveal the hidden age of any ID.</p>
      
      <h3>Why This Matters</h3>
      <p>For moderators, checking a <a href="/tools/discord-id-to-date/" class="text-[#5865F2] underline">discord id creation date</a> is a vital tool for identifying alt accounts or potential raiders who have just joined. It adds a layer of security to your server management.</p>
    `,
  },
];
