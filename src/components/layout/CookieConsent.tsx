'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp: number;
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: true,
    advertising: true,
    timestamp: 0,
  });

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('fdt_cookie_consent');
    if (!saved) {
      setIsOpen(true);
    } else {
      try {
        const parsed = JSON.parse(saved) as ConsentPreferences;
        setPreferences(parsed);
        // Apply consent signals on mount
        updateGoogleConsent(parsed);
      } catch {
        setIsOpen(true);
      }
    }
  }, []);

  const updateGoogleConsent = (prefs: ConsentPreferences) => {
    if (typeof window === 'undefined') return;

    // Define gtag if it exists, or push to dataLayer
    const dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      dataLayer.push(arguments);
    }

    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.advertising ? 'granted' : 'denied',
        ad_user_data: prefs.advertising ? 'granted' : 'denied',
        ad_personalization: prefs.advertising ? 'granted' : 'denied',
      });
    } else {
      // In case gtag isn't loaded yet, push to dataLayer for Google Analytics / AdSense
      gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.advertising ? 'granted' : 'denied',
        ad_user_data: prefs.advertising ? 'granted' : 'denied',
        ad_personalization: prefs.advertising ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      advertising: true,
      timestamp: Date.now(),
    };
    setPreferences(newPrefs);
    localStorage.setItem('fdt_cookie_consent', JSON.stringify(newPrefs));
    updateGoogleConsent(newPrefs);
    setIsOpen(false);
  };

  const handleDeclineAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: false,
      advertising: false,
      timestamp: Date.now(),
    };
    setPreferences(newPrefs);
    localStorage.setItem('fdt_cookie_consent', JSON.stringify(newPrefs));
    updateGoogleConsent(newPrefs);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const newPrefs = {
      ...preferences,
      timestamp: Date.now(),
    };
    localStorage.setItem('fdt_cookie_consent', JSON.stringify(newPrefs));
    updateGoogleConsent(newPrefs);
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white border-t border-[#E3E6F0] shadow-2xl transition-transform duration-300 transform translate-y-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Consent description */}
        <div className="flex-1 space-y-2">
          <h2 id="cookie-consent-title" className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
            🍪 Cookie Settings &amp; Privacy Consent
          </h2>
          <p className="text-sm text-[#5b6282] leading-relaxed max-w-4xl">
            We use cookies to personalize content and ads, analyze traffic, and ensure the basic security features of our client-side tools. 
            By clicking <strong className="text-[#1a1d2e]">&quot;Accept All&quot;</strong>, you consent to our use of analytics and advertising cookies. 
            You can customize your preferences or decline all non-essential cookies. Review our{' '}
            <Link href="/privacy-policy/" className="text-[#5865F2] font-semibold hover:underline">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/cookie-policy/" className="text-[#5865F2] font-semibold hover:underline">Cookie Policy</Link> for details.
          </p>

          {/* Expanded customization controls */}
          {showCustomize && (
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 mt-4 animate-in fade-in duration-200">
              
              {/* Necessary */}
              <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-necessary"
                  checked
                  disabled
                  className="mt-1 w-4 h-4 text-[#5865F2] rounded accent-[#5865F2] cursor-not-allowed"
                />
                <div>
                  <label htmlFor="consent-necessary" className="text-xs font-bold text-[#1a1d2e] block">
                    Strictly Necessary
                  </label>
                  <span className="text-[10px] text-[#8b8fa8] leading-tight block">
                    Required for site navigation and storing consent settings.
                  </span>
                </div>
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#5865F2] rounded border-gray-300 accent-[#5865F2] cursor-pointer"
                />
                <div>
                  <label htmlFor="consent-analytics" className="text-xs font-bold text-[#1a1d2e] block cursor-pointer select-none">
                    Analytics &amp; Statistics
                  </label>
                  <span className="text-[10px] text-[#5b6282] leading-tight block select-none">
                    Helps us understand tool usage and optimize visitor speed.
                  </span>
                </div>
              </div>

              {/* Advertising */}
              <div className="p-3.5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-advertising"
                  checked={preferences.advertising}
                  onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#5865F2] rounded border-gray-300 accent-[#5865F2] cursor-pointer"
                />
                <div>
                  <label htmlFor="consent-advertising" className="text-xs font-bold text-[#1a1d2e] block cursor-pointer select-none">
                    Personalized Advertising
                  </label>
                  <span className="text-[10px] text-[#5b6282] leading-tight block select-none">
                    Enables Google AdSense to serve relevant ads.
                  </span>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0 self-stretch md:self-center justify-end items-stretch sm:items-center">
          {showCustomize ? (
            <>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="px-5 py-2.5 text-xs font-bold text-[#5b6282] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowCustomize(true)}
                className="px-5 py-2.5 text-xs font-bold text-[#2d3149] border border-[#E3E6F0] hover:bg-gray-50 rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center"
              >
                Customize
              </button>
              <button
                onClick={handleDeclineAll}
                className="px-5 py-2.5 text-xs font-bold text-[#2d3149] border border-[#E3E6F0] hover:bg-gray-50 rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-all shadow-md shadow-[#5865F2]/20 cursor-pointer text-center min-h-[40px] flex items-center justify-center"
              >
                Accept All
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
