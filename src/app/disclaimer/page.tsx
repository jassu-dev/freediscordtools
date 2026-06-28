import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Disclaimer – FreeDiscordTools',
  description: 'Disclaimer for FreeDiscordTools.',
  alternates: { canonical: `${seoConfig.baseUrl}/disclaimer/` },
  openGraph: {
    title: 'Disclaimer – FreeDiscordTools',
    description: 'Disclaimer for FreeDiscordTools.',
    url: `${seoConfig.baseUrl}/disclaimer/`,
    type: 'website',
    images: [{ url: seoConfig.defaultOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer – FreeDiscordTools',
    description: 'Disclaimer for FreeDiscordTools.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1a1d2e] mb-6">Disclaimer</h1>
      <div className="text-[#373b4d] space-y-4">
        <p><strong className="text-[#1a1d2e]">Last updated: June 28, 2026</strong></p>
        
        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Website Disclaimer</h2>
        <p>The information provided by FreeDiscordTools (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on freediscordtools.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
        
        <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">External Links Disclaimer</h2>
        <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
        
        <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Affiliates Disclaimer</h2>
        <p>The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.</p>

        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Not Affiliated with Discord</h2>
        <p>FreeDiscordTools is an independent platform offering utilities and tools for users of the Discord application. We are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with Discord Inc., or any of its subsidiaries or its affiliates. The official Discord website can be found at <a href="https://discord.com" className="text-[#5865F2] hover:underline" target="_blank" rel="noopener noreferrer">https://discord.com</a>.</p>
        <p>The name &quot;Discord&quot; as well as related names, marks, emblems and images are registered trademarks of their respective owners.</p>
        
        <h2 className="text-2xl font-bold text-[#1a1d2e] mt-8 mb-4">Errors and Omissions Disclaimer</h2>
        <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, FreeDiscordTools is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
        <p>In no event will FreeDiscordTools, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>

      </div>
    </div>
  );
}
