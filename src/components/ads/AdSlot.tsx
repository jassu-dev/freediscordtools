'use client';

import { useEffect, useRef } from 'react';
import { adsConfig } from '@/config/ads';

interface AdSlotProps {
  slotId: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdSlot({ slotId, width, height, className }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function loadAd() {
      if (loadedRef.current || !container) return;
      loadedRef.current = true;

      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', adsConfig.publisherId);
      ins.setAttribute('data-ad-slot', slotId);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      container.appendChild(ins);

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch {
        // AdSense not loaded yet ad will fill when script loads
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      loadAd();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadAd();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [slotId]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-gray-50/50 flex flex-col items-center justify-center ${className || ''}`}
      style={{ 
        minHeight: `${height}px`, 
        minWidth: `${width}px`,
        maxWidth: '100%' 
      }}
      data-testid="ad-slot"
      data-slot-id={slotId}
      aria-hidden="true"
    >
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-300 uppercase tracking-widest pointer-events-none">
        Advertisement
      </span>
    </div>
  );
}
