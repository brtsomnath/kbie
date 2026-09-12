'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPath = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    // Start loading bar
    setProgress(0);
    setLoading(true);

    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 85) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 85;
        }
        return p + 15;
      });
    }, 80);

    // Complete after a short delay
    const done = setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    }, 400);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      clearTimeout(done);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-[#0e0973] transition-all duration-200 ease-out"
      style={{ width: `${progress}%`, opacity: progress === 100 ? 0 : 1 }}
    />
  );
}
