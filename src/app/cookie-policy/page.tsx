import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Cookie Policy – FreeDiscordTools',
  description: 'Cookie policy for FreeDiscordTools. Learn about the cookies we use and how to manage your preferences.',
  alternates: { canonical: `${seoConfig.baseUrl}/cookie-policy/` },
  openGraph: {
    title: 'Cookie Policy – FreeDiscordTools',
    description: 'Learn about the cookies we use on FreeDiscordTools and how to manage them.',
    url: `${seoConfig.baseUrl}/cookie-policy/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy – FreeDiscordTools',
    description: 'Cookie policy for FreeDiscordTools.',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-6">Cookie Policy</h1>
      <div className="text-[#373b4d] space-y-6 leading-relaxed">
        <p><strong className="text-[#1a1d2e]">Last updated: June 28, 2026</strong></p>

        <p>
          This Cookie Policy explains how FreeDiscordTools (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website located at <a href="https://freediscordtools.in" className="text-[#5865F2] hover:underline font-semibold">freediscordtools.in</a>. It explains what these technologies are, why we use them, and your rights to control our use of them.
        </p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, FreeDiscordTools) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
        </p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Why Do We Use Cookies?</h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our online tools. Third parties serve cookies through our website for advertising, analytics, and other purposes.
        </p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Types of Cookies We Use</h2>
        
        {/* Strictly Necessary */}
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] space-y-3">
          <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
            🛡️ 1. Strictly Necessary First-Party Cookies
          </h3>
          <p className="text-sm text-[#5b6282]">
            These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as security preferences and cookie consent status. Because these cookies are strictly necessary to deliver the website to you, you cannot refuse them without impacting how our site functions.
          </p>
          <ul className="list-disc pl-5 text-sm text-[#5b6282] space-y-1">
            <li><strong>fdt_cookie_consent:</strong> Stores your cookie consent preferences so you don&apos;t have to re-enter them on every visit (expires in 1 year).</li>
            <li><strong>theme_pref:</strong> Stores your local site display preferences if applicable.</li>
          </ul>
        </div>

        {/* Analytics */}
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] space-y-3">
          <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
            📈 2. Analytics &amp; Performance Cookies (Third-Party)
          </h3>
          <p className="text-sm text-[#5b6282]">
            These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website and applications for you.
          </p>
          <ul className="list-disc pl-5 text-sm text-[#5b6282] space-y-1">
            <li><strong>_ga, _gid:</strong> Google Analytics cookies used to distinguish unique users and throttle request rates. These collect anonymous usage data (e.g., pages viewed, time spent on tool).</li>
          </ul>
        </div>

        {/* Advertising */}
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] space-y-3">
          <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
            💰 3. Advertising &amp; Targeting Cookies (Third-Party)
          </h3>
          <p className="text-sm text-[#5b6282]">
            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
          <ul className="list-disc pl-5 text-sm text-[#5b6282] space-y-1">
            <li><strong>__gads, __gpi:</strong> Google AdSense cookies used to serve personalized or non-personalized advertisements, track ad impressions, and limit frequency.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">How Can I Control Cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by using the **Customize** button on our cookie consent banner when you first visit the site, or by clearing your browser cache to trigger the banner again.
        </p>
        <p>
          In addition, most web browsers allow you to control cookies through their settings. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
        </p>
        <p>
          To find out how to manage cookies on popular browsers, visit the browser developer sites (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
        </p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:freediscordtools.com@gmail.com" className="text-[#5865F2] hover:underline font-semibold">freediscordtools.com@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
