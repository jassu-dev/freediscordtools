import { useState, useEffect, useRef, RefObject } from 'react';

export function useInfiniteScroll(initialCount: number, increment: number, totalItems: number) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [totalItems, initialCount]);

  useEffect(() => {
    if (visibleCount >= totalItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + increment, totalItems));
        }
      },
      { rootMargin: '100px' }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleCount, totalItems, increment]);

  return { visibleCount, observerRef, setVisibleCount };
}
